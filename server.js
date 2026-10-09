/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠛⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠛⢠⡀⠸⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⡁⢰⣋⡇⠀⡿⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⣏⠉⠛⠳⢤⣟⠀⢧⠀⠀⣀⣤⣠⣤⣄⣀⠀⠀⢷⠀⠀⠈⠙⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡔⠃⣀⠘⢆⣀⠀⠀⠉⠀⠘⠚⠉⠀⠀⢀⡀⠀⢸⠇⣀⢸⡀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠙⡾⠟⣷⠂⠉⠀⠀⠀⠀⠀⠀⠀⢶⢚⣹⠃⢠⡏⠀⡏⠹⠃⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣼⠇⣰⠀⠀⠀⠠⠶⠳⣦⠀⠀⠀⠘⠲⠃⢠⠟⠁⠀⡏⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⡟⠷⠟⠁⠀⠀⣴⡆⠀⢸⡇⠀⠀⢠⣄⡴⠏⠀⡀⢰⠇⠀⠀⠀⠀⠀⠀⢠⡾⠚⠋⠉⠉⢳⡀⠀⠀⠀⠀⠀
⠀⢹⡌⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⢧⡐⠶⠄⠀⠀⠻⣃⡀⠸⡷⠀⠀⠀⠹⣆⠀⢀⡿⡏⠀⠀⠀⠀⠀⠀⣠⡾⠀⠀⠀⢀⡴⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⢷⠀⠀⠻⣷⣄⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠙⠦⣤⣀⡀⠀⠘⠿⠇⠀⣤⠴⣶⣞⣁⣠⣾⡀⠀⠀⣤⣠⣴⠶⢾⣁⣧⠀⠀⠀⠈⢧⡤⠖⠚⠦⣄⡀⠀
⠀⠀⠘⡇⠀⠀⠈⠻⣷⡀⠀⠀⣠⢾⡉⢉⡍⠙⠳⣶⢟⣯⣭⠿⠷⣤⡀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠚⠻⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠙⣦
⠀⠀⠀⢹⡀⠀⠀⠀⢿⣧⠀⠀⢧⣸⡀⠘⣇⣴⠀⠀⢘⠛⠛⠀⣰⠊⠻⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣤⣄⣄⡓⣶⠏
⠀⠀⠀⠀⣧⠀⠀⠀⠈⣿⣆⣠⣤⣭⡭⠿⣹⣿⡋⠉⠛⠓⠒⠴⠃⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣇⠈⠙⠛⠁⠀
⠀⠀⠀⠀⠈⠳⣄⠀⠀⠸⣿⠉⠀⠈⢻⠞⠙⡾⠁⡀⠀⠀⠀⠀⠀⠀⢀⣿⣀⣀⣀⣀⣀⣀⣀⣬⠷⠶⠤⢤⣤⣄⣀⣀⣤⣄⡀⣰⠤⢽⠆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⢿⣧⠀⠀⠘⠷⠾⠷⣼⣅⣀⣀⠀⠀⠀⠸⡅⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⡈⡿⣄⣀⣀⣀⣀⣀⣈⣳⣍⠉⠛⢿⡛⢦⡼⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠻⠶⠿⠿⠷⠷⠿⠿⠾⠶ⶶ⠶⠶⠶⠶⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                             this code is owned by suic1.de
                                  https://dont.suic1.de
*/

const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\\r?\\n/)) {
    const match = line.match(/^\\s*([A-Za-z_][A-Za-z0-9_]*)\\s*=\\s*(.*?)\\s*$/);
    if (!match || line.trimStart().startsWith('#') || Object.prototype.hasOwnProperty.call(process.env, match[1])) continue;
    process.env[match[1]] = match[2].replace(/^(['"])(.*)\\1$/, '$2');
  }
}
loadEnvFile(path.join(__dirname, '.env'));

const SERVICE_NAME = process.env.SERVICE_NAME || 'suic1.de API';
const VERSION = '1.0.0';
const API_DIR = path.join(__dirname, 'api');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = Math.max(0, Number.parseInt(process.env.PORT || '3000', 10) || 3000);
const RATE_LIMIT_MAX = Math.max(1, Number.parseInt(process.env.RATE_LIMIT_MAX || '60', 10) || 60);
const RATE_LIMIT_WINDOW_MS = Math.max(1000, Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10) || 60000);
const TRUST_PROXY = ['true', '1', 'yes', 'on'].includes(String(process.env.TRUST_PROXY || 'false').toLowerCase());
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
const rateBuckets = new Map();
let routeTable = [];
let stopping = false;
let reloadTimer = null;

class ApiError extends Error {
  constructor(statusCode, code, message, details = undefined) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

function log(level, event, extra = {}) {
  process.stdout.write(`${JSON.stringify({ at: new Date().toISOString(), level, event, ...extra })}\n`);
}

function compileRoute(route) {
  const names = [];
  const pieces = route.path.split('/').map((piece, index) => {
    if (index === 0) return '';
    if (piece.startsWith(':') && piece.length > 1) {
      names.push(piece.slice(1));
      return '([^/]+)';
    }
    return piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });
  const pattern = new RegExp(`^${pieces.join('/').replace(/\/$/, '') || '/'}$`);
  return { ...route, pattern, paramNames: names };
}

function loadRoutes() {
  const routes = [
    {
      method: 'GET',
      path: '/',
      description: 'the full route list, nya',
      params: {},
      module: 'system',
      handler: async () => routeInventory()
    },
    {
      method: 'GET',
      path: '/api',
      description: 'all paths you can poke',
      params: {},
      module: 'system',
      handler: async () => routeInventory()
    },
    {
      method: 'GET',
      path: '/health',
      description: 'check if the little API is awake',
      params: {},
      module: 'system',
      handler: async () => ({
        type: 'health',
        status: 'ok',
        version: VERSION,
        uptime_seconds: Math.floor(process.uptime()),
        loaded_routes: routeTable.length,
        timestamp: new Date().toISOString()
      })
    }
  ];

  if (!fs.existsSync(API_DIR)) fs.mkdirSync(API_DIR, { recursive: true });
  const modules = fs.readdirSync(API_DIR).filter(file => file.endsWith('.js')).sort();
  for (const file of modules) {
    const fullPath = path.join(API_DIR, file);
    delete require.cache[require.resolve(fullPath)];
    const plugin = require(fullPath);
    if (!plugin || !Array.isArray(plugin.routes)) throw new Error(`${file} needs to export a routes array`);
    const moduleName = plugin.name || path.basename(file, '.js');
    for (const route of plugin.routes) {
      if (!route || typeof route.handler !== 'function') throw new Error(`${file} has a route without a handler`);
      if (typeof route.path !== 'string' || !route.path.startsWith('/')) throw new Error(`${file} has an invalid route path`);
      const method = String(route.method || 'GET').toUpperCase();
      if (!/^[A-Z]+$/.test(method)) throw new Error(`${file} has an invalid method`);
      routes.push(compileRoute({
        method,
        path: route.path,
        description: route.description || 'a little API route',
        params: route.params || {},
        module: moduleName,
        handler: route.handler
      }));
    }
  }

  const seen = new Set();
  for (const route of routes) {
    if (!route.pattern) Object.assign(route, compileRoute(route));
    const signature = `${route.method} ${route.path}`;
    if (seen.has(signature)) throw new Error(`duplicate route: ${signature}`);
    seen.add(signature);
  }
  return routes;
}

function routeInventory() {
  const endpoints = routeTable.map(route => ({
    method: route.method,
    path: route.path,
    description: route.description,
    params: route.params,
    module: route.module
  }));
  return {
    type: 'api_index',
    message: 'nya~ welcome to the little API den, cutie',
    version: VERSION,
    total_endpoints: endpoints.length,
    endpoints
  };
}

function reloadRoutes() {
  try {
    const nextRoutes = loadRoutes();
    routeTable = nextRoutes;
    log('info', 'routes_loaded', { total_endpoints: routeTable.length, api_modules: fs.readdirSync(API_DIR).filter(file => file.endsWith('.js')).length });
    return true;
  } catch (error) {
    log('error', 'route_reload_failed', { message: error.message });
    return false;
  }
}

function clientIp(req) {
  if (TRUST_PROXY) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.trim()) return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function rateLimit(req, res) {
  const now = Date.now();
  const ip = clientIp(req);
  let bucket = rateBuckets.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateBuckets.set(ip, bucket);
  }
  bucket.count += 1;
  const remaining = Math.max(0, RATE_LIMIT_MAX - bucket.count);
  res.setHeader('X-RateLimit-Limit', String(RATE_LIMIT_MAX));
  res.setHeader('X-RateLimit-Remaining', String(remaining));
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(bucket.resetAt / 1000)));
  if (bucket.count <= RATE_LIMIT_MAX) return true;
  const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
  res.setHeader('Retry-After', String(retryAfter));
  sendJson(res, 429, {
    ok: false,
    service: SERVICE_NAME,
    error: {
      code: 'RATE_LIMITED',
      message: 'nyaa~ slow down a little, cutie',
      retry_after_seconds: retryAfter
    },
    path: req.url,
    timestamp: new Date().toISOString()
  });
  return false;
}

function sendJson(res, statusCode, data) {
  if (res.writableEnded) return;
  const body = JSON.stringify(data, null, 2);
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
}

function successPayload(result) {
  if (result && typeof result === 'object' && !Array.isArray(result)) {
    return { ...result, ok: true, service: SERVICE_NAME, timestamp: result.timestamp || new Date().toISOString() };
  }
  return { ok: true, service: SERVICE_NAME, data: result, timestamp: new Date().toISOString() };
}

function fail(res, req, error) {
  const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;
  const code = error.code || (statusCode >= 500 ? 'NYA_INTERNAL_ERROR' : 'NYA_REQUEST_ERROR');
  const message = error instanceof ApiError ? error.message : 'nyaa~ something went wobbly on our side';
  const payload = {
    ok: false,
    service: SERVICE_NAME,
    error: { code, message },
    path: req.url,
    timestamp: new Date().toISOString()
  };
  if (error.details !== undefined) payload.error.details = error.details;
  if (statusCode >= 500 && process.env.EXPOSE_ERROR_DETAILS === 'true') payload.error.debug = error.message;
  sendJson(res, statusCode, payload);
}

function matchRoute(urlPath, method) {
  let pathFound = false;
  for (const route of routeTable) {
    const match = urlPath.match(route.pattern);
    if (!match) continue;
    pathFound = true;
    if (route.method !== method) continue;
    const params = {};
    for (let index = 0; index < route.paramNames.length; index += 1) {
      try {
        params[route.paramNames[index]] = decodeURIComponent(match[index + 1]);
      } catch {
        throw new ApiError(400, 'BAD_PATH_ENCODING', 'nya~ that path has a weird encoding');
      }
    }
    return { route, params, pathFound: true };
  }
  return { route: null, params: {}, pathFound };
}

async function handleRequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    sendJson(res, 200, { ok: true, service: SERVICE_NAME, message: 'nya~ preflight is okay', timestamp: new Date().toISOString() });
    return;
  }
  if (!rateLimit(req, res)) return;

  let url;
  try {
    url = new URL(req.url || '/', 'http://localhost');
  } catch {
    sendJson(res, 400, { ok: false, service: SERVICE_NAME, error: { code: 'BAD_URL', message: 'nya~ that URL looks a little wonky' }, timestamp: new Date().toISOString() });
    return;
  }

  try {
    const method = String(req.method || 'GET').toUpperCase();
    const match = matchRoute(url.pathname, method);
    if (!match.route) {
      const allowed = routeTable.filter(route => route.pattern.test(url.pathname)).map(route => route.method);
      if (allowed.length) {
        res.setHeader('Allow', [...new Set(allowed)].join(', '));
        sendJson(res, 405, {
          ok: false,
          service: SERVICE_NAME,
          error: { code: 'METHOD_NOT_ALLOWED', message: 'nya~ this path wants a different method', allowed: [...new Set(allowed)] },
          path: url.pathname,
          timestamp: new Date().toISOString()
        });
        return;
      }
      sendJson(res, 404, {
        ok: false,
        service: SERVICE_NAME,
        error: { code: 'ROUTE_NOT_FOUND', message: 'nya~ this path is not in the den, cutie' },
        path: url.pathname,
        available_at: '/api',
        timestamp: new Date().toISOString()
      });
      return;
    }

    const query = Object.fromEntries(url.searchParams.entries());
    const result = await match.route.handler({
      req,
      res,
      params: match.params,
      query,
      searchParams: url.searchParams,
      env: process.env,
      url,
      ApiError
    });
    if (!res.writableEnded) sendJson(res, 200, successPayload(result));
  } catch (error) {
    fail(res, req, error);
  }
}

function startWatcher() {
  try {
    fs.watch(API_DIR, { persistent: false }, () => {
      if (reloadTimer) clearTimeout(reloadTimer);
      reloadTimer = setTimeout(reloadRoutes, 180);
      if (typeof reloadTimer.unref === 'function') reloadTimer.unref();
    });
  } catch (error) {
    log('warn', 'api_file_watch_unavailable', { message: error.message });
  }
}

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(error => {
    log('error', 'request_handler_crashed', { message: error.message });
    fail(res, req, error);
  });
});

server.requestTimeout = Math.max(1000, Number.parseInt(process.env.REQUEST_TIMEOUT_MS || '30000', 10) || 30000);
server.headersTimeout = Math.max(server.requestTimeout + 1000, 35000);
server.keepAliveTimeout = 5000;

const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [ip, bucket] of rateBuckets.entries()) {
    if (now >= bucket.resetAt + RATE_LIMIT_WINDOW_MS) rateBuckets.delete(ip);
  }
}, Math.min(RATE_LIMIT_WINDOW_MS, 60000));
if (typeof cleanupTimer.unref === 'function') cleanupTimer.unref();

function shutdown(signal) {
  if (stopping) return;
  stopping = true;
  clearInterval(cleanupTimer);
  if (reloadTimer) clearTimeout(reloadTimer);
  log('info', 'api_worker_stopping', { signal });
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

if (!reloadRoutes()) {
  log('error', 'api_start_failed', { reason: 'check the plugin files in the api folder' });
  process.exit(1);
}
startWatcher();
server.listen(PORT, HOST, () => {
  const address = server.address();
  log('info', 'api_listening', {
    host: HOST,
    port: address && typeof address === 'object' ? address.port : PORT,
    service: SERVICE_NAME,
    version: VERSION,
    endpoints: routeTable.length
  });
});
