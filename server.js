/* dont.suic1.de */
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const a = __dirname;
const b = path.join(a, 'api');
function j() {
const envFile = path.join(a, '.env');
if (!fs.existsSync(envFile)) return;
for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
const entry = line.trim();
if (!entry || entry.startsWith('#')) continue;
const separator = entry.indexOf('=');
if (separator < 1) continue;
const key = entry.slice(0, separator).trim();
let value = entry.slice(separator + 1).trim();
if (
(value.startsWith('"') && value.endsWith('"')) ||
(value.startsWith("'") && value.endsWith("'"))
) {
value = value.slice(1, -1);
}
if (process.env[key] === undefined) process.env[key] = value;
}
}
j();
const c = {
host: '0.0.0.0',
port: Number(process.env.PORT || process.env.SERVER_PORT || 10422),
service: process.env.SERVICE_NAME || 'suic1.de API',
version: process.env.npm_package_version || '1.0.0',
prefix: l(process.env.API_PREFIX || '/api'),
corsOrigin: process.env.CORS_ORIGIN || '*',
rateLimit: Math.max(0, Number(process.env.RATE_LIMIT || 120)),
rateWindow: Math.max(1000, Number(process.env.RATE_WINDOW_MS || 60000)),
githubMonitor: String(process.env.GITHUB_MONITOR || 'true').toLowerCase() === 'true',
githubOverwrite: String(process.env.GITHUB_UPDATE_EXISTING || 'false').toLowerCase() === 'true',
githubInterval: 300000,
localScanInterval: 5000,
githubOwner: 'ArchIsDead',
githubRepo: 'suic1-de-api',
githubBranch: 'main',
githubDirectory: 'api'
};
const d = new Date().toISOString();
const e = crypto.randomUUID();
const f = new Map();
let g = [];
let h = '';
let i = false;
class ApiError extends Error {
constructor(status, message, details) {
super(message);
this.name = 'ApiError';
this.status = status;
this.details = details;
}
}
function k(value) {
if (typeof value !== 'string' || !value.startsWith('/')) {
throw new Error('Route path must start with /');
}
return value.replace(/\/{2,}/g, '/').replace(/\/+$/, '') || '/';
}
function l(value) {
const parts = String(value || '/api').trim().split('/').filter(Boolean);
return parts.length ? k(`/${parts.join('/')}`) : '/';
}
function m(level, event, details = {}) {
console.log(JSON.stringify({ at: new Date().toISOString(), level, event, ...details }));
}
function n(req, res, status, payload) {
if (res.writableEnded) return;
const body = JSON.stringify(payload, null, 2);
res.writeHead(status, {
'Content-Type': 'application/json; charset=utf-8',
'Content-Length': Buffer.byteLength(body),
'Cache-Control': 'no-store',
'Access-Control-Allow-Origin': c.corsOrigin,
'X-Content-Type-Options': 'nosniff'
});
res.end(req.method === 'HEAD' ? undefined : body);
}
function o(directory) {
if (!fs.existsSync(directory)) return [];
const files = [];
for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
const fullPath = path.join(directory, entry.name);
if (entry.isDirectory()) {
files.push(...o(fullPath));
} else if (entry.isFile() && entry.name.endsWith('.js')) {
files.push(fullPath);
}
}
return files.sort();
}
function p() {
return o(b).map(file => {
const stat = fs.statSync(file);
return `${path.relative(b, file)}:${stat.size}:${stat.mtimeMs}`;
}).join('|');
}
function q(value) {
const originalPath = k(value || '/');
let suffix = originalPath;
if (originalPath === '/api') suffix = '/';
else if (originalPath.startsWith('/api/')) suffix = originalPath.slice(4);
if (c.prefix === '/') return originalPath;
return suffix === '/' ? c.prefix : k(c.prefix + suffix);
}
function r(target, route, moduleName) {
if (!route || typeof route !== 'object' || typeof route.handler !== 'function') {
return false;
}
const method = String(route.method || 'GET').toUpperCase();
if (!/^(GET|POST|PUT|PATCH|DELETE|HEAD)$/.test(method)) return false;
let routePath;
try {
routePath = q(route.path || '/');
} catch (error) {
m('warn', 'route_skipped', { module: moduleName, error: error.message });
return false;
}
const duplicate = target.some(item => item.method === method && item.path === routePath);
if (duplicate) {
m('warn', 'duplicate_route', { module: moduleName, method, path: routePath });
return false;
}
target.push({
method,
path: routePath,
description: route.description || '',
params: route.params || {},
handler: route.handler,
module: moduleName
});
return true;
}
function s(reason = 'manual') {
fs.mkdirSync(b, { recursive: true });
const nextRoutes = [];
let moduleCount = 0;
for (const file of o(b)) {
try {
const resolved = require.resolve(file);
delete require.cache[resolved];
const loaded = require(file);
const plugin = loaded?.default || loaded;
if (!plugin || !Array.isArray(plugin.routes)) {
m('warn', 'api_module_skipped', {
file: path.relative(a, file),
reason: 'Expected module.exports = { routes: [...] }'
});
continue;
}
const moduleName = plugin.name || path.basename(file, '.js');
let moduleRoutes = 0;
for (const route of plugin.routes) {
if (r(nextRoutes, route, moduleName)) moduleRoutes++;
}
moduleCount++;
m('info', 'api_module_loaded', {
file: path.relative(a, file),
name: moduleName,
routes: moduleRoutes
});
} catch (error) {
m('error', 'api_module_load_failed', {
file: path.relative(a, file),
error: error.message
});
}
}
g = nextRoutes;
h = p();
m('info', 'routes_reloaded', {
reason,
modules: moduleCount,
api_endpoints: g.length,
total_endpoints: w().length
});
}
function t(routePath, requestPath) {
const expected = routePath.split('/');
const actual = requestPath.split('/');
if (expected.length !== actual.length) return null;
const params = {};
for (let index = 0; index < expected.length; index++) {
if (expected[index].startsWith(':')) {
try {
params[expected[index].slice(1)] = decodeURIComponent(actual[index]);
} catch {
return null;
}
} else if (expected[index] !== actual[index]) {
return null;
}
}
return params;
}
function u(req, res) {
if (c.rateLimit <= 0) return true;
const key = req.socket.remoteAddress || 'unknown';
const now = Date.now();
let record = f.get(key);
if (!record || now - record.startedAt >= c.rateWindow) {
record = { startedAt: now, count: 0 };
}
record.count++;
f.set(key, record);
res.setHeader('X-RateLimit-Limit', String(c.rateLimit));
res.setHeader('X-RateLimit-Remaining', String(Math.max(0, c.rateLimit - record.count)));
if (f.size > 5000) {
for (const [address, item] of f) {
if (now - item.startedAt >= c.rateWindow) f.delete(address);
}
}
if (record.count > c.rateLimit) {
n(req, res, 429, { success: false, error: 'rate_limit_exceeded' });
return false;
}
return true;
}
function v(totalSeconds) {
let seconds = Math.max(0, Math.floor(totalSeconds));
const days = Math.floor(seconds / 86400);
seconds %= 86400;
const hours = Math.floor(seconds / 3600);
seconds %= 3600;
const minutes = Math.floor(seconds / 60);
seconds %= 60;
return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
function w() {
const endpoints = [
{ method: 'GET', path: '/', description: 'API endpoint list' },
{ method: 'GET', path: '/api', description: 'API endpoint list alias' },
{ method: 'GET', path: '/health', description: 'Health check' }
];
if (c.prefix !== '/') {
endpoints.push(
{ method: 'GET', path: c.prefix, description: 'API endpoint list' },
{ method: 'GET', path: k(`${c.prefix}/health`), description: 'Health check' }
);
}
for (const route of g) {
endpoints.push({
method: route.method,
path: route.path,
description: route.description,
params: route.params,
module: route.module
});
}
const seen = new Set();
return endpoints.filter(endpoint => {
const key = `${endpoint.method} ${endpoint.path}`;
if (seen.has(key)) return false;
seen.add(key);
return true;
});
}
function x() {
const endpoints = w();
return {
success: true,
started_at: d,
uptime_seconds: Math.floor(process.uptime()),
uptime: v(process.uptime()),
service: c.service,
version: c.version,
counts: {
total: endpoints.length,
api: g.length,
modules: new Set(g.map(route => route.module)).size
},
endpoints
};
}
function y(requestPath) {
return requestPath === '/' || requestPath === '/api' || requestPath === c.prefix;
}
function z(requestPath) {
return requestPath === '/health' || (
c.prefix !== '/' && requestPath === k(`${c.prefix}/health`)
);
}
async function A(req, res) {
res.setHeader('Access-Control-Allow-Origin', c.corsOrigin);
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
n(req, res, 400, { success: false, error: 'invalid_url' });
return;
}
let requestPath;
try {
requestPath = k(url.pathname || '/');
} catch {
n(req, res, 400, { success: false, error: 'invalid_path' });
return;
}
if (!u(req, res)) return;
if (['GET', 'HEAD'].includes(req.method) && y(requestPath)) {
n(req, res, 200, x());
return;
}
if (['GET', 'HEAD'].includes(req.method) && z(requestPath)) {
n(req, res, 200, {
success: true,
started_at: d,
uptime_seconds: Math.floor(process.uptime()),
uptime: v(process.uptime()),
service: c.service,
version: c.version,
status: 'ok'
});
return;
}
for (const route of g) {
const methodMatches = route.method === req.method || (req.method === 'HEAD' && route.method === 'GET');
if (!methodMatches) continue;
const params = t(route.path, requestPath);
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
if (!res.writableEnded && result !== undefined) n(req, res, 200, result);
} catch (error) {
const knownError = error?.name === 'ApiError';
m('error', 'route_handler_failed', {
method: req.method,
path: requestPath,
module: route.module,
error: error?.message || String(error)
});
if (!res.writableEnded) {
n(req, res, knownError && error.status >= 400 && error.status <= 599 ? error.status : 500, {
success: false,
error: knownError ? error.message : 'internal_server_error',
...(knownError && error.details !== undefined ? { details: error.details } : {})
});
}
}
return;
}
n(req, res, 404, { success: false, error: 'not_found', path: requestPath });
}
async function B(url) {
const response = await fetch(url, {
headers: {
Accept: 'application/vnd.github+json',
'User-Agent': 'suic1-de-api'
},
signal: AbortSignal.timeout(15000)
});
if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
return response.json();
}
async function C() {
if (!c.githubMonitor || i) return;
i = true;
try {
const treeUrl = `https://api.github.com/repos/${c.githubOwner}/${c.githubRepo}/git/trees/${c.githubBranch}?recursive=1`;
const tree = await B(treeUrl);
if (!Array.isArray(tree.tree)) throw new Error('Invalid GitHub tree response');
const directoryPrefix = `${c.githubDirectory}/`;
const remoteFiles = tree.tree.filter(file =>
file.type === 'blob' &&
file.path.startsWith(directoryPrefix) &&
file.path.toLowerCase().endsWith('.js')
);
let added = 0;
let updated = 0;
for (const remoteFile of remoteFiles) {
const relativePath = remoteFile.path.slice(directoryPrefix.length);
const destination = path.resolve(b, relativePath);
const safeRoot = `${path.resolve(b)}${path.sep}`;
if (!destination.startsWith(safeRoot)) continue;
const exists = fs.existsSync(destination);
if (exists && !c.githubOverwrite) continue;
if (exists && tree.sha === h) continue;
const encodedPath = remoteFile.path.split('/').map(encodeURIComponent).join('/');
const rawUrl = `https://raw.githubusercontent.com/${c.githubOwner}/${c.githubRepo}/${c.githubBranch}/${encodedPath}`;
const response = await fetch(rawUrl, {
headers: { 'User-Agent': 'suic1-de-api' },
signal: AbortSignal.timeout(20000)
});
if (!response.ok) throw new Error(`Download failed for ${remoteFile.path}: HTTP ${response.status}`);
const source = await response.text();
if (Buffer.byteLength(source) > 1024 * 1024) {
m('warn', 'github_file_skipped', { file: remoteFile.path, reason: 'File exceeds 1 MB' });
continue;
}
fs.mkdirSync(path.dirname(destination), { recursive: true });
const temporaryPath = `${destination}.${crypto.randomBytes(5).toString('hex')}.tmp`;
try {
fs.writeFileSync(temporaryPath, source, 'utf8');
fs.renameSync(temporaryPath, destination);
} catch (error) {
if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
throw error;
}
if (exists) updated++;
else added++;
m('info', exists ? 'github_api_updated' : 'github_api_added', {
file: path.relative(a, destination)
});
}
h = tree.sha || '';
m('info', 'github_monitor_check_complete', {
remote_files: remoteFiles.length,
added,
updated,
overwrite_existing: c.githubOverwrite
});
if (added || updated) s('github_monitor');
} catch (error) {
m('warn', 'github_monitor_failed', { error: error.message });
} finally {
i = false;
}
}
async function D() {
fs.mkdirSync(b, { recursive: true });
if (c.githubMonitor) await C();
s('startup');
const server = http.createServer((req, res) => {
A(req, res).catch(error => {
m('error', 'request_failed', { error: error?.message || String(error) });
if (!res.writableEnded) {
n(req, res, 500, { success: false, error: 'internal_server_error' });
}
});
});
server.on('error', error => {
m('error', 'server_error', { code: error.code, message: error.message });
process.exitCode = 1;
});
server.listen(c.port, c.host, () => {
m('info', 'server_started', {
host: c.host,
port: c.port,
service: c.service,
version: c.version,
prefix: c.prefix,
instance_id: e,
github_monitor: c.githubMonitor
});
});
setInterval(() => {
try {
if (p() !== h) s('local_api_change');
} catch (error) {
m('warn', 'local_api_scan_failed', { error: error.message });
}
}, c.localScanInterval).unref();
if (c.githubMonitor) {
setInterval(C, c.githubInterval).unref();
}
process.on('unhandledRejection', error => {
m('error', 'unhandled_rejection', { error: error?.message || String(error) });
});
}
D().catch(error => {
m('error', 'startup_failed', { error: error.message });
process.exitCode = 1;
});
