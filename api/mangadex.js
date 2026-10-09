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
 * Judul : mangadex.js - MangaDex Wrapper (ESM)
 * Base Url : https://api.mangadex.org
 * Deskripsi : home, popular, recent, latest, search, detail, random, chapters, allchapters, chapter, read, covers, tags, stats. No API key required.
 * Author : shanmolyvr
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const API_BASE = 'https://api.mangadex.org';
const UPLOADS_BASE = 'https://uploads.mangadex.org';
const REPORT_URL = 'https://api.mangadex.network/report';
const USER_AGENT = 'MangaDex-Wrapper/3.1';
const RATE_MS = 220;
const COZY_TIMEOUT_MS = 20000;

const softHeaders = {
  'User-Agent': USER_AGENT,
  Accept: 'application/json'
};

let lastCallAt = 0;

function cozySleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pickLang(obj, langs = ['en', 'ja-ro', 'ja', 'id']) {
  if (!obj || typeof obj !== 'object') return null;
  for (const lang of langs) if (obj[lang]) return obj[lang];
  const keys = Object.keys(obj);
  return keys.length ? obj[keys[0]] : null;
}

function flatParams(params = {}) {
  const out = {};
  for (const [key, value] of Object.entries(params)) {
    if (value == null) continue;
    if (Array.isArray(value)) out[`${key}[]`] = value;
    else if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        out[`${key}[${subKey}]`] = subValue;
      }
    } else out[key] = value;
  }
  return out;
}

function buildQuery(params) {
  const flat = flatParams(params);
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(flat)) {
    if (Array.isArray(value)) for (const v of value) search.append(key, String(v));
    else search.append(key, String(value));
  }
  const str = search.toString();
  return str ? `?${str}` : '';
}

async function mangadexFetch(pathname, params, ApiError) {
  const wait = RATE_MS - (Date.now() - lastCallAt);
  if (wait > 0) await cozySleep(wait);
  lastCallAt = Date.now();

  const target = `${API_BASE}${pathname}${params ? buildQuery(params) : ''}`;
  let response;
  try {
    response = await fetch(target, {
      method: 'GET',
      headers: softHeaders,
      signal: AbortSignal.timeout(COZY_TIMEOUT_MS)
    });
  } catch (error) {
    const timeout = error.name === 'TimeoutError' || error.name === 'AbortError';
    throw new ApiError(
      502,
      timeout ? 'MANGADEX_TIMEOUT' : 'MANGADEX_FETCH_FAILED',
      timeout
        ? 'nyaa~ MangaDex fell asleep mid-answer, give the kitty a sec and try again uwu'
        : 'nyaa~ could not reach MangaDex, the server is probably shy today',
      { reason: error.message }
    );
  }

  const rawUpstreamText = await response.text();
  let payload;
  try {
    payload = rawUpstreamText ? JSON.parse(rawUpstreamText) : {};
  } catch {
    throw new ApiError(
      502,
      'MANGADEX_BAD_JSON',
      'nyaa~ MangaDex sent back gibberish, not JSON, so confused >w<',
      { http_status: response.status, preview: rawUpstreamText.slice(0, 180) }
    );
  }

  if (!response.ok) {
    const detail =
      payload?.errors?.[0]?.detail ||
      payload?.message ||
      'upstream error';
    throw new ApiError(
      502,
      'MANGADEX_UPSTREAM_ERROR',
      `nyaa~ MangaDex threw a tantrum and said: ${String(detail).slice(0, 180)}`,
      {
        http_status: response.status,
        upstream_message: String(detail).slice(0, 180)
      }
    );
  }
  return payload;
}

function mapManga(entry) {
  if (!entry) return null;
  const attrs = entry.attributes || {};
  const rels = entry.relationships || [];
  const coverRel = rels.find(r => r.type === 'cover_art');
  const fileName = coverRel?.attributes?.fileName;
  const authors = rels
    .filter(r => r.type === 'author' || r.type === 'artist')
    .map(r => r.attributes?.name)
    .filter(Boolean);

  return {
    id: entry.id,
    title: pickLang(attrs.title),
    description: (pickLang(attrs.description) || '').slice(0, 300) || null,
    status: attrs.status,
    year: attrs.year,
    originalLanguage: attrs.originalLanguage,
    contentRating: attrs.contentRating,
    tags: (attrs.tags || [])
      .map(t => pickLang(t.attributes?.name))
      .filter(Boolean)
      .slice(0, 12),
    authors: [...new Set(authors)],
    cover: fileName ? `${UPLOADS_BASE}/covers/${entry.id}/${fileName}.256.jpg` : null,
    coverFull: fileName ? `${UPLOADS_BASE}/covers/${entry.id}/${fileName}` : null,
    lastChapter: attrs.lastChapter,
    lastVolume: attrs.lastVolume
  };
}

function mapChapter(entry) {
  if (!entry) return null;
  const attrs = entry.attributes || {};
  const rels = entry.relationships || [];
  const mangaRel = rels.find(r => r.type === 'manga');
  const groups = rels
    .filter(r => r.type === 'scanlation_group')
    .map(r => r.attributes?.name || r.id);

  return {
    id: entry.id,
    chapter: attrs.chapter,
    volume: attrs.volume,
    title: attrs.title || null,
    lang: attrs.translatedLanguage,
    pages: attrs.pages,
    publishAt: attrs.publishAt,
    externalUrl: attrs.externalUrl || null,
    mangaId: mangaRel?.id || null,
    mangaTitle: mangaRel?.attributes?.title
      ? pickLang(mangaRel.attributes.title)
      : null,
    groups
  };
}

function mapList(payload, mapFn) {
  return {
    data: (payload.data || []).map(mapFn),
    total: payload.total ?? 0,
    limit: payload.limit ?? 0,
    offset: payload.offset ?? 0
  };
}

async function searchManga(opts, ApiError) {
  const {
    title,
    limit = 10,
    offset = 0,
    status,
    lang,
    order,
    hasAvailableChapters,
    contentRating = ['safe', 'suggestive', 'erotica']
  } = opts;
  const params = {
    limit: Math.min(limit, 100),
    offset,
    title,
    status: status ? [status] : undefined,
    availableTranslatedLanguage: lang ? [lang] : undefined,
    order,
    hasAvailableChapters,
    contentRating,
    includes: ['cover_art', 'author', 'artist']
  };
  Object.keys(params).forEach(k => params[k] === undefined && delete params[k]);
  const payload = await mangadexFetch('/manga', params, ApiError);
  return mapList(payload, mapManga);
}

async function doPopular(limit, offset, ApiError) {
  return searchManga(
    {
      limit,
      offset,
      order: { followedCount: 'desc' },
      hasAvailableChapters: true
    },
    ApiError
  );
}

async function doRecent(limit, offset, ApiError) {
  return searchManga(
    {
      limit,
      offset,
      order: { createdAt: 'desc' },
      hasAvailableChapters: true
    },
    ApiError
  );
}

async function doLatest(limit, offset, lang, ApiError) {
  const payload = await mangadexFetch(
    '/chapter',
    {
      limit: Math.min(limit, 100),
      offset,
      translatedLanguage: [lang],
      order: { readableAt: 'desc' },
      includes: ['manga', 'scanlation_group'],
      contentRating: ['safe', 'suggestive', 'erotica', 'pornographic'],
      includeFutureUpdates: '0'
    },
    ApiError
  );
  const list = mapList(payload, mapChapter);
  list.data = list.data.filter(c => c.pages > 0);
  return list;
}

async function doHome(limit, lang, ApiError) {
  const [popular, latest, recent] = await Promise.all([
    doPopular(limit, 0, ApiError),
    doLatest(limit, 0, lang, ApiError),
    doRecent(limit, 0, ApiError)
  ]);
  return {
    popular: popular.data,
    latest: latest.data,
    recent: recent.data
  };
}

async function doSearch(q, limit, offset, lang, ApiError) {
  const query = String(q || '').trim();
  if (!query) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ tell me what to search for, cutie, do not leave me guessing uwu');
  return searchManga({ title: query, limit, offset, lang }, ApiError);
}

async function doDetail(mangaId, ApiError) {
  const id = String(mangaId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_MANGA_ID', 'nya~ which manga, kitten? gimme an id pretty please~');
  const payload = await mangadexFetch(
    `/manga/${encodeURIComponent(id)}`,
    { includes: ['cover_art', 'author', 'artist', 'tag'] },
    ApiError
  );
  return mapManga(payload.data);
}

async function doRandom(ApiError) {
  const payload = await mangadexFetch(
    '/manga/random',
    { includes: ['cover_art', 'author', 'artist'] },
    ApiError
  );
  return mapManga(payload.data);
}

async function doChapters(mangaId, limit, offset, lang, includeEmpty, ApiError) {
  const id = String(mangaId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_MANGA_ID', 'nya~ whose chapter list, cutie? gimme a manga id~');
  const payload = await mangadexFetch(
    `/manga/${encodeURIComponent(id)}/feed`,
    {
      limit: Math.min(limit, 100),
      offset,
      translatedLanguage: [lang],
      order: { volume: 'asc', chapter: 'asc' },
      includes: ['scanlation_group'],
      contentRating: ['safe', 'suggestive', 'erotica', 'pornographic'],
      includeFutureUpdates: '0',
      includeEmptyPages: includeEmpty ? '1' : '0',
      includeExternalUrl: includeEmpty ? '1' : '0'
    },
    ApiError
  );
  const list = mapList(payload, mapChapter);
  if (!includeEmpty) {
    list.data = list.data.filter(c => c.pages > 0 && !c.externalUrl);
  }
  return list;
}

async function doAllChapters(mangaId, lang, includeEmpty, ApiError) {
  const id = String(mangaId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_MANGA_ID', 'nya~ whose full chapter list, baby? manga id please~');
  const all = [];
  let offset = 0;
  let total = Infinity;
  while (offset < total) {
    const page = await doChapters(id, 100, offset, lang, includeEmpty, ApiError);
    all.push(...page.data);
    total = page.total;
    offset += 100;
    if (!page.data.length && offset >= total) break;
    if (!page.data.length && !includeEmpty) {
      if (offset >= total) break;
      continue;
    }
    if (!page.data.length) break;
  }
  return all;
}

async function doChapter(chapterId, ApiError) {
  const id = String(chapterId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_CHAPTER_ID', 'nya~ which chapter, kitten? gimme an id and I will purr it back~');
  const payload = await mangadexFetch(
    `/chapter/${encodeURIComponent(id)}`,
    { includes: ['manga', 'scanlation_group'] },
    ApiError
  );
  return mapChapter(payload.data);
}

async function probeUrl(url) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': USER_AGENT, Referer: 'https://mangadex.org/' },
      signal: AbortSignal.timeout(8000)
    });
    if (res.status >= 200 && res.status < 400) return true;
  } catch {
    // fall through to range GET
  }
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': USER_AGENT,
        Referer: 'https://mangadex.org/',
        Range: 'bytes=0-0'
      },
      signal: AbortSignal.timeout(10000)
    });
    return res.status >= 200 && res.status < 400;
  } catch {
    return false;
  }
}

async function reportNode(url, success) {
  try {
    await fetch(REPORT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, success, bytes: 0, duration: 0, cached: false }),
      signal: AbortSignal.timeout(5000)
    });
  } catch {
    // ignore
  }
}

async function doRead(chapterId, quality, ApiError) {
  const id = String(chapterId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_CHAPTER_ID', 'nya~ which chapter should I pull pages from, sweetie?');
  const q = quality === 'data-saver' ? 'data-saver' : 'data';
  const retries = 3;
  let lastOops = null;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    if (attempt > 0) await cozySleep(400 * attempt);

    const data = await mangadexFetch(`/at-home/server/${encodeURIComponent(id)}`, null, ApiError);
    const { baseUrl, chapter } = data;
    if (!chapter?.hash) {
      throw new ApiError(502, 'MANGADEX_NO_PAGES', 'nyaa~ this chapter has no pages at all, maybe it is external or empty uwu');
    }
    const files = q === 'data-saver' ? chapter.dataSaver : chapter.data;
    if (!files?.length) {
      throw new ApiError(502, 'MANGADEX_NO_FILES', 'nyaa~ no page files here, the kitty found an empty basket ;w;');
    }
    const urls = files.map(f => `${baseUrl}/${q}/${chapter.hash}/${f}`);
    const ok = await probeUrl(urls[0]);
    if (ok) {
      return { chapterId: id, quality: q, count: urls.length, urls };
    }
    reportNode(urls[0], false).catch(() => {});
    lastOops = new ApiError(
      502,
      'MANGADEX_NODE_FAILED',
      `nyaa~ MD@Home node was sleepy again (attempt ${attempt + 1}/${retries + 1}), poking it once more~`
    );
  }
  throw lastOops || new ApiError(502, 'MANGADEX_READ_FAILED', 'nyaa~ gave up on readable pages, maybe try again later, cutie');
}

async function doCovers(mangaId, limit, ApiError) {
  const id = String(mangaId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_MANGA_ID', 'nya~ whose covers, cutie? gimme a manga id~');
  const payload = await mangadexFetch(
    '/cover',
    { manga: [id], limit: Math.min(limit, 100), order: { volume: 'asc' } },
    ApiError
  );
  return (payload.data || []).map(e => {
    const attrs = e.attributes || {};
    return {
      id: e.id,
      volume: attrs.volume,
      fileName: attrs.fileName,
      url: `${UPLOADS_BASE}/covers/${id}/${attrs.fileName}`,
      url256: `${UPLOADS_BASE}/covers/${id}/${attrs.fileName}.256.jpg`
    };
  });
}

async function doTags(ApiError) {
  const payload = await mangadexFetch('/manga/tag', null, ApiError);
  return (payload.data || []).map(t => ({
    id: t.id,
    name: pickLang(t.attributes?.name),
    group: t.attributes?.group
  }));
}

async function doStats(mangaId, ApiError) {
  const id = String(mangaId || '').trim();
  if (!id) throw new ApiError(400, 'NYA_MISSING_MANGA_ID', 'nya~ whose stats, sweetie? gimme a manga id~');
  const payload = await mangadexFetch('/statistics/manga', { manga: [id] }, ApiError);
  const s = payload.statistics?.[id];
  if (!s) return null;
  return {
    follows: s.follows,
    rating: s.rating?.average ?? null,
    bayesian: s.rating?.bayesian ?? null,
    comments: s.comments?.repliesCount ?? 0
  };
}

function readInt(raw, fallback) {
  const n = Number.parseInt(String(raw ?? ''), 10);
  return Number.isInteger(n) && n >= 0 ? n : fallback;
}

module.exports = {
  name: 'mangadex',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/mangadex/home',
      description: 'popular + latest + recent in one cozy bundle, uwu',
      params: { limit: 'optional, default 12', lang: 'optional, default en' },
      handler: async ({ query, ApiError }) => {
        const limit = readInt(query.limit, 12);
        const lang = String(query.lang || 'en');
        return doHome(limit, lang, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/popular',
      description: 'popular manga sorted by follows, purr~',
      params: { limit: 'optional, default 20', offset: 'optional, default 0' },
      handler: async ({ query, ApiError }) => {
        const limit = readInt(query.limit, 20);
        const offset = readInt(query.offset, 0);
        return doPopular(limit, offset, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/recent',
      description: 'freshly added manga, still warm uwu',
      params: { limit: 'optional, default 20', offset: 'optional, default 0' },
      handler: async ({ query, ApiError }) => {
        const limit = readInt(query.limit, 20);
        const offset = readInt(query.offset, 0);
        return doRecent(limit, offset, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/latest',
      description: 'newest chapters that actually have pages, cutie',
      params: { limit: 'optional, default 20', offset: 'optional, default 0', lang: 'optional, default en' },
      handler: async ({ query, ApiError }) => {
        const limit = readInt(query.limit, 20);
        const offset = readInt(query.offset, 0);
        const lang = String(query.lang || 'en');
        return doLatest(limit, offset, lang, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/search',
      description: 'search manga by title, nya~',
      params: { q: 'search text', limit: 'optional, default 10', offset: 'optional, default 0', lang: 'optional, default en' },
      handler: async ({ query, ApiError }) => {
        const limit = readInt(query.limit, 10);
        const offset = readInt(query.offset, 0);
        const lang = query.lang ? String(query.lang) : undefined;
        return doSearch(query.q || query.title, limit, offset, lang, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/detail/:id',
      description: 'peek one manga detail, uwu~',
      params: { id: 'manga id' },
      handler: async ({ params, ApiError }) => doDetail(params.id, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mangadex/random',
      description: 'roll a random manga, lucky you cutie',
      params: {},
      handler: async ({ ApiError }) => doRandom(ApiError)
    },
    {
      method: 'GET',
      path: '/api/mangadex/chapters/:id',
      description: 'chapter list for one manga (only readable ones by default)',
      params: { id: 'manga id', limit: 'optional, default 100', offset: 'optional, default 0', lang: 'optional, default en', empty: 'set 1 to include pages=0 / external' },
      handler: async ({ params, query, ApiError }) => {
        const limit = readInt(query.limit, 100);
        const offset = readInt(query.offset, 0);
        const lang = String(query.lang || 'en');
        const includeEmpty = String(query.empty || '') === '1';
        return doChapters(params.id, limit, offset, lang, includeEmpty, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/allchapters/:id',
      description: 'every chapter, walking page by page, purr~',
      params: { id: 'manga id', lang: 'optional, default en', empty: 'set 1 to include pages=0 / external' },
      handler: async ({ params, query, ApiError }) => {
        const lang = String(query.lang || 'en');
        const includeEmpty = String(query.empty || '') === '1';
        return doAllChapters(params.id, lang, includeEmpty, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/chapter/:id',
      description: 'one chapter metadata, nya~',
      params: { id: 'chapter id' },
      handler: async ({ params, ApiError }) => doChapter(params.id, ApiError)
    },
    {
      method: 'GET',
      path: '/api/mangadex/read/:id',
      description: 'page image URLs, auto-retrying sleepy nodes uwu',
      params: { id: 'chapter id', quality: 'optional, data or data-saver' },
      handler: async ({ params, query, ApiError }) => {
        const quality = String(query.quality || 'data');
        return doRead(params.id, quality, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/covers/:id',
      description: 'cover art list for one manga, so pretty~',
      params: { id: 'manga id', limit: 'optional, default 20' },
      handler: async ({ params, query, ApiError }) => {
        const limit = readInt(query.limit, 20);
        return doCovers(params.id, limit, ApiError);
      }
    },
    {
      method: 'GET',
      path: '/api/mangadex/tags',
      description: 'all the MangaDex tags, cutie pie',
      params: {},
      handler: async ({ ApiError }) => doTags(ApiError)
    },
    {
      method: 'GET',
      path: '/api/mangadex/stats/:id',
      description: 'follows and rating for one manga, uwu~',
      params: { id: 'manga id' },
      handler: async ({ params, ApiError }) => doStats(params.id, ApiError)
    }
  ]
};
