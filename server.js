
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const API_DIR = path.join(ROOT, 'api');

function loadEnv() {
  const file = path.join(ROOT, '.env');
  if (!fs.existsSync(file)) return;

  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const index = trimmed.indexOf('=');
    if (index < 1) continue;

    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnv();

const HOST = '0.0.0.0';
const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 3000);
const SERVICE = process.env.SERVICE_NAME || 'suic1.de API';
const VERSION = process.env.npm_package_version || '1.0.0';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
const RATE_LIMIT = Math.max(0, Number(process.env.RATE_LIMIT || 120));
const RATE_WINDOW = Math.max(1000, Number(process.env.RATE_WINDOW_MS || 60000));

const routes = [];
const rateLimits = new Map();

class ApiError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

function log(level, event, data = {}) {
  console.log(JSON.stringify({
    at: new Date().toISOString(),
    level,
    event,
    ...data
  }));
}

function sendJson(res, status, data) {
  if (res.writableEnded) return;

  const body = JSON.stringify(data, null, 2);

  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': CORS_ORIGIN,
    'X-Content-Type-Options': 'nosniff'
  });

  res.end(body);
}

function normalizePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/')) {
    throw new Error('Route path must start with /');
  }

  return value.length > 1 ? value.replace(/\/+$/, '') : value;
}

function registerRoute(route, moduleName) {
  if (!route || typeof route !== 'object') return;
  if (typeof route.handler !== 'function') return;

  routes.push({
    method: String(route.method || 'GET').toUpperCase(),
    path: normalizePath(route.path || '/'),
    description: route.description || '',
    params: route.params || [],
    handler: route.handler,
    module: moduleName
  });
}

function loadApiModules() {
  routes.length = 0;

  if (!fs.existsSync(API_DIR)) {
    fs.mkdirSync(API_DIR, { recursive: true });
  }

  const files = [];

  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }

  walk(API_DIR);

  let modulesLoaded = 0;

  for (const file of files) {
    try {
      const resolved = require.resolve(file);
      delete require.cache[resolved];

      const loaded = require(file);
      const plugin = loaded && loaded.default ? loaded.default : loaded;

      if (!plugin || !Array.isArray(plugin.routes)) {
        log('warn', 'api_module_skipped', {
          file: path.relative(ROOT, file),
          reason: 'Expected a routes array'
        });
        continue;
      }

      let registered = 0;

      for (const route of plugin.routes) {
        const before = routes.length;
        registerRoute(route, plugin.name || path.basename(file, '.js'));
        if (routes.length > before) registered++;
      }

      modulesLoaded++;

      log('info', 'api_module_loaded', {
        name: plugin.name || path.basename(file, '.js'),
        routes: registered
      });
    } catch (error) {
      log('error', 'api_module_load_failed', {
        file: path.relative(ROOT, file),
        error: error.message
      });
    }
  }

  log('info', 'routes_loaded', {
    total_endpoints: routes.length,
    api_modules: modulesLoaded
  });
}

function matchRoute(routePath, requestPath) {
  const expected = routePath.split('/');
  const actual = requestPath.split('/');

  if (expected.length !== actual.length) return null;

  const params = {};

  for (let i = 0; i < expected.length; i++) {
    if (expected[i].startsWith(':')) {
      try {
        params[expected[i].slice(1)] = decodeURIComponent(actual[i]);
      } catch {
        return null;
      }
    } else if (expected[i] !== actual[i]) {
      return null;
    }
  }

  return params;
}

function checkRateLimit(req, res) {
  if (RATE_LIMIT <= 0) return true;

  const key = req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  let record = rateLimits.get(key);

  if (!record || now - record.startedAt >= RATE_WINDOW) {
    record = { startedAt: now, count: 0 };
  }

  record.count++;
  rateLimits.set(key, record);

  res.setHeader('X-RateLimit-Limit', String(RATE_LIMIT));
  res.setHeader(
    'X-RateLimit-Remaining',
    String(Math.max(0, RATE_LIMIT - record.count))
  );

  if (record.count > RATE_LIMIT) {
    sendJson(res, 429, {
      success: false,
      error: 'rate_limit_exceeded'
    });
    return false;
  }

  return true;
}

function inventory() {
  return routes.map(route => ({
    method: route.method,
    path: route.path,
    description: route.description,
    params: route.params,
    module: route.module
  }));
}

async function handleRequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let url;

  try {
    url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  } catch {
    sendJson(res, 400, { success: false, error: 'invalid_url' });
    return;
  }

  const requestPath = url.pathname.replace(/\/+$/, '') || '/';

  if (!checkRateLimit(req, res)) return;

  if (requestPath === '/api' && ['GET', 'HEAD'].includes(req.method)) {
    sendJson(res, 200, {
      success: true,
      service: SERVICE,
      version: VERSION,
      count: routes.length,
      endpoints: inventory()
    });
    return;
  }

  for (const route of routes) {
    if (
      route.method !== req.method &&
      !(req.method === 'HEAD' && route.method === 'GET')
    ) {
      continue;
    }

    const params = matchRoute(route.path, requestPath);
    if (!params) continue;

    try {
      const result = await route.handler({
        req,
        res,
        params,
        query: Object.fromEntries(url.searchParams.entries()),
        searchParams: url.searchParams,
        env: process.env,
        url,
        ApiError
      });

      if (!res.writableEnded && result !== undefined) {
        sendJson(res, 200, result);
      }
    } catch (error) {
      log('error', 'route_handler_failed', {
        method: req.method,
        path: requestPath,
        module: route.module,
        error: error.message
      });

      if (!res.writableEnded) {
        const status = error.name === 'ApiError' ? error.status : 500;

        sendJson(res, status >= 400 && status <= 599 ? status : 500, {
          success: false,
          error: error.name === 'ApiError'
            ? error.message
            : 'internal_server_error',
          ...(error.name === 'ApiError' && error.details !== undefined
            ? { details: error.details }
            : {})
        });
      }
    }

    return;
  }

  sendJson(res, 404, {
    success: false,
    error: 'not_found',
    path: requestPath
  });
}

loadApiModules();

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(error => {
    log('error', 'request_failed', { error: error.message });

    if (!res.writableEnded) {
      sendJson(res, 500, {
        success: false,
        error: 'internal_server_error'
      });
    }
  });
});

server.on('error', error => {
  log('error', 'server_error', {
    code: error.code,
    message: error.message
  });
  process.exitCode = 1;
});

server.listen(PORT, HOST, () => {
  log('info', 'api_listening', {
    host: HOST,
    port: PORT,
    service: SERVICE,
    version: VERSION,
    endpoints: routes.length
  });
});

process.on('unhandledRejection', error => {
  log('error', 'unhandled_rejection', {
    error: error instanceof Error ? error.message : String(error)
  });
});
