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
                          this code is not 100% owned by suic1.de, contact us to add your name if you made this code
                                              https://dont.suic1.de
*/

/*
 * mc scraper
 * Sources: zxko.site, mineaddons.web.id, mcpedl.com
 * Deskripsi : list, search, resolve, download, api untuk Minecraft addons.
 * Credit : SakaxabeII
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const SOFT_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36';
const COZY_TIMEOUT_MS = 18000;

async function cozyGet(url) {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'User-Agent': SOFT_UA,
      Accept: 'text/html,application/json,*/*',
      'Accept-Language': 'id,en;q=0.9'
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(COZY_TIMEOUT_MS)
  });
  const rawUpstreamText = await response.text();
  let json = null;
  try {
    json = rawUpstreamText ? JSON.parse(rawUpstreamText) : null;
  } catch {
    json = null;
  }
  return {
    status: response.status,
    url: response.url,
    raw: rawUpstreamText,
    json
  };
}

async function cozyHead(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'User-Agent': SOFT_UA },
    redirect: 'manual',
    signal: AbortSignal.timeout(12000)
  });
  try {
    response.body?.cancel?.();
  } catch {
    // tiny cleanup, nothing to do
  }
  return {
    status: response.status,
    location: response.headers.get('location') || null
  };
}

function grabAll(html, regex, max = 40) {
  const out = [];
  const re = new RegExp(regex, 'gi');
  let m;
  while ((m = re.exec(html)) && out.length < max) {
    const t = (m[1] || m[0]).replace(/\s+/g, ' ').trim();
    if (t && out.indexOf(t) === -1) out.push(t);
  }
  return out;
}

function wrapFetchError(error, label, ApiError) {
  const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';
  throw new ApiError(
    502,
    timedOut ? 'MC_TIMEOUT' : 'MC_FETCH_FAILED',
    timedOut
      ? `nyaa~ ${label} was napping too long, try again in a sec uwu`
      : `nyaa~ could not reach ${label}, it is being shy today ;w;`,
    { reason: error.message }
  );
}

async function doZxkoList(ApiError) {
  let page;
  try {
    page = await cozyGet('https://zxko.site/mods');
  } catch (error) {
    wrapFetchError(error, 'zxko', ApiError);
  }
  if (page.status >= 400) {
    throw new ApiError(502, 'MC_UPSTREAM_ERROR', `nyaa~ zxko replied with status ${page.status}, drama queen`);
  }
  const slugs = grabAll(page.raw, 'href="/mods/([^"?#]+)"', 60);
  return {
    source: 'https://zxko.site/mods',
    type: 'zxko_list',
    count: slugs.length,
    items: slugs.map(s => ({ slug: s, url: `https://zxko.site/mods/${s}` }))
  };
}

async function doZxkoSearch(rawQuery, ApiError) {
  const q = String(rawQuery || '').trim();
  if (!q) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a search word in ?q=, cutie');
  let page;
  try {
    page = await cozyGet('https://zxko.site/mods');
  } catch (error) {
    wrapFetchError(error, 'zxko', ApiError);
  }
  const slugs = grabAll(page.raw, 'href="/mods/([^"?#]+)"', 100);
  const q2 = q.toLowerCase().replace(/\s+/g, '-');
  const lower = q.toLowerCase();
  let hit = slugs.filter(s => {
    const sl = s.toLowerCase();
    return sl.indexOf(q2) !== -1 || sl.indexOf(lower) !== -1;
  });
  if (!hit.length) {
    const words = lower.split(/\s+/);
    hit = slugs.filter(s => {
      const sl = s.toLowerCase();
      return words.every(w => sl.indexOf(w) !== -1);
    });
  }
  return {
    source: 'https://zxko.site/mods',
    type: 'zxko_search',
    query: q,
    count: hit.length,
    items: hit.map(s => ({ slug: s, url: `https://zxko.site/mods/${s}` }))
  };
}

async function doZxkoResolve(rawCode, ApiError) {
  const code = String(rawCode || '').trim();
  if (!code) throw new ApiError(400, 'NYA_MISSING_CODE', 'nya~ gimme a zxko code like MKG, cutie');
  const short = code.replace(/^https?:\/\/zxko\.site\//i, '').replace(/^\//, '');
  let head;
  try {
    head = await cozyHead(`https://zxko.site/${short}`);
  } catch (error) {
    wrapFetchError(error, 'zxko', ApiError);
  }
  const finalUrl = head.location
    ? (head.location.startsWith('/') ? `https://zxko.site${head.location}` : head.location)
    : `https://zxko.site/${short}`;
  return {
    source: `https://zxko.site/${short}`,
    type: 'zxko_resolve',
    code: short,
    status: head.status,
    location: head.location,
    final: finalUrl,
    note: 'file mcaddon cuma keluar setelah nonton iklan di browser'
  };
}

async function doMineList(rawLimit, ApiError) {
  const limit = Math.max(1, Math.min(200, Number.parseInt(String(rawLimit ?? '20'), 10) || 20));
  let page;
  try {
    page = await cozyGet(`https://www.mineaddons.web.id/api/sb?table=addons&limit=${limit}`);
  } catch (error) {
    wrapFetchError(error, 'mineaddons', ApiError);
  }
  if (!Array.isArray(page.json)) {
    throw new ApiError(502, 'MC_BAD_JSON', 'nyaa~ mineaddons babbled something unreadable, not a list uwu');
  }
  return {
    source: `https://www.mineaddons.web.id/api/sb?table=addons&limit=${limit}`,
    type: 'mineaddons_list',
    limit,
    count: page.json.length,
    items: page.json
  };
}

async function doMineSearch(rawQuery, ApiError) {
  const q = String(rawQuery || '').trim();
  if (!q) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a search word in ?q=, cutie');
  let page;
  try {
    page = await cozyGet('https://www.mineaddons.web.id/api/sb?table=addons&limit=150');
  } catch (error) {
    wrapFetchError(error, 'mineaddons', ApiError);
  }
  if (!Array.isArray(page.json)) {
    throw new ApiError(502, 'MC_BAD_JSON', 'nyaa~ mineaddons babbled something unreadable, not a list uwu');
  }
  const qq = q.toLowerCase();
  const items = page.json.filter(a => {
    const blob = `${a.name || ''} ${a.slug || ''} ${a.description || ''}`.toLowerCase();
    return blob.indexOf(qq) !== -1;
  });
  return {
    source: 'https://www.mineaddons.web.id/api/sb?table=addons&limit=150',
    type: 'mineaddons_search',
    query: q,
    count: items.length,
    items: items.slice(0, 25)
  };
}

async function doMineDownload(rawKey, ApiError) {
  const key = String(rawKey || '').trim();
  if (!key) throw new ApiError(400, 'NYA_MISSING_KEY', 'nya~ gimme an id, slug, or name to download, cutie');
  let page;
  try {
    page = await cozyGet('https://www.mineaddons.web.id/api/sb?table=addons&limit=200');
  } catch (error) {
    wrapFetchError(error, 'mineaddons', ApiError);
  }
  if (!Array.isArray(page.json)) {
    throw new ApiError(502, 'MC_BAD_JSON', 'nyaa~ mineaddons babbled something unreadable, not a list uwu');
  }
  const lower = key.toLowerCase();
  const found = page.json.find(x => (
    String(x.id) === key ||
    x.slug === key ||
    (x.name || '').toLowerCase() === lower
  ));
  if (!found) {
    throw new ApiError(404, 'NYA_NOT_FOUND', 'nyaa~ could not find that addon, try searching first cutie');
  }
  return {
    source: 'https://www.mineaddons.web.id/api/sb?table=addons&limit=200',
    type: 'mineaddons_download',
    key,
    item: {
      id: found.id,
      name: found.name,
      slug: found.slug,
      version: found.version,
      author: found.author,
      download_url: found.download_url || null,
      premium_download_url: found.premium_download_url || null,
      image_url: found.image_url || null
    }
  };
}

async function doMineApi(ApiError) {
  let page;
  try {
    page = await cozyGet('https://www.mineaddons.web.id/api/getconfig');
  } catch (error) {
    wrapFetchError(error, 'mineaddons', ApiError);
  }
  if (!page.json) {
    throw new ApiError(502, 'MC_BAD_JSON', 'nyaa~ mineaddons getconfig was not JSON, so confused >w<');
  }
  return {
    source: 'https://www.mineaddons.web.id/api/getconfig',
    type: 'mineaddons_config',
    config: page.json
  };
}

async function doMcpedlList(ApiError) {
  let page;
  try {
    page = await cozyGet('https://mcpedl.com/addons/');
  } catch (error) {
    wrapFetchError(error, 'mcpedl', ApiError);
  }
  if (page.status >= 400) {
    throw new ApiError(502, 'MC_UPSTREAM_ERROR', `nyaa~ mcpedl replied with status ${page.status}, drama queen`);
  }
  const links = grabAll(page.raw, 'href="(/addons/[^"]+)"', 50);
  return {
    source: 'https://mcpedl.com/addons/',
    type: 'mcpedl_list',
    count: links.length,
    items: links.map(l => ({ url: `https://mcpedl.com${l}` }))
  };
}

async function doMcpedlSearch(rawQuery, ApiError) {
  const q = String(rawQuery || '').trim();
  if (!q) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a search word in ?q=, cutie');
  const target = `https://mcpedl.com/search/?q=${encodeURIComponent(q)}&sort=popularity_week`;
  let page;
  try {
    page = await cozyGet(target);
  } catch (error) {
    wrapFetchError(error, 'mcpedl', ApiError);
  }
  const titles = grabAll(page.raw, '<(?:h[123]|a)[^>]*>([^<]{4,80})</(?:h[123]|a)>', 25);
  const links = grabAll(page.raw, 'href="(https://mcpedl\\.com/[^"]+)"', 20).slice(0, 12);
  return {
    source: target,
    type: 'mcpedl_search',
    query: q,
    titles,
    links
  };
}

function readLimit(raw, fallback) {
  const n = Number.parseInt(String(raw ?? ''), 10);
  return Number.isInteger(n) && n > 0 ? Math.min(n, 200) : fallback;
}

module.exports = {
  name: 'mc',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/mc/zxko/list',
      description: 'peek the cozy zxko mods list, nya~',
      params: { limit: 'optional, default 60, max 60' },
      handler: async ({ query, ApiError }) => {
        const result = await doZxkoList(ApiError);
        const limit = readLimit(query.limit, 60);
        return { ...result, items: result.items.slice(0, limit), count: Math.min(result.count, limit) };
      }
    },
    {
      method: 'GET',
      path: '/api/mc/zxko/search',
      description: 'search zxko mods by keyword, cutie',
      params: { q: 'search text' },
      handler: async ({ query, ApiError }) => doZxkoSearch(query.q, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/zxko/resolve/:code',
      description: 'resolve a zxko short code like MKG, uwu',
      params: { code: 'short code or full zxko url' },
      handler: async ({ params, ApiError }) => doZxkoResolve(decodeURIComponent(params.code || ''), ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/zxko/resolve',
      description: 'same resolve but the code rides in ?code=, uwu',
      params: { code: 'short code or full zxko url' },
      handler: async ({ query, ApiError }) => doZxkoResolve(query.code, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mineaddons/list',
      description: 'list mineaddons addons, purr~',
      params: { limit: 'optional, default 20, max 200' },
      handler: async ({ query, ApiError }) => doMineList(query.limit, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mineaddons/search',
      description: 'search mineaddons by keyword, cutie pie',
      params: { q: 'search text' },
      handler: async ({ query, ApiError }) => doMineSearch(query.q, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mineaddons/download/:key',
      description: 'peek one mineaddons addon by id, slug, or name, uwu',
      params: { key: 'id, slug, or exact name' },
      handler: async ({ params, ApiError }) => doMineDownload(decodeURIComponent(params.key || ''), ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mineaddons/download',
      description: 'same download peek but key rides in ?key=, uwu',
      params: { key: 'id, slug, or exact name' },
      handler: async ({ query, ApiError }) => doMineDownload(query.key, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mineaddons/api',
      description: 'peek mineaddons getconfig, so curious~',
      params: {},
      handler: async ({ ApiError }) => doMineApi(ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mcpedl/list',
      description: 'peek the cozy mcpedl addons page, nya~',
      params: {},
      handler: async ({ ApiError }) => doMcpedlList(ApiError)
    },
    {
      method: 'GET',
      path: '/api/mc/mcpedl/search',
      description: 'search mcpedl addons by keyword, purr~',
      params: { q: 'search text' },
      handler: async ({ query, ApiError }) => doMcpedlSearch(query.q, ApiError)
    }
  ]
};
