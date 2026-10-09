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
 * Judul : animeinweb.js - AnimeInWeb Scraper
 * Base Url : https://animeinweb.com
 * Deskripsi : AnimeInWeb home, detail, episode, populer, search, jadwal, stream. Output JSON melalui proxy /api/proxy.
 * Author : Vellzyy
 * Sl Author : https://whatsapp.com/channel/0029VbDl6c1KmCPJErq9ox3F
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const BASE = 'https://animeinweb.com';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36';
const DAY_NAMES = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
const HARDCODED_PROXY_SECRET = 'animein-secure-proxy-key-123';

function imageFull(raw) {
  if (!raw) return '';
  const value = String(raw);
  if (value.startsWith('http')) return value;
  if (value.startsWith('//')) return `https:${value}`;
  if (value.startsWith('/assets')) return `https://xyz-api.animein.net${value}`;
  if (value.startsWith('/')) return `${BASE}${value}`;
  return value;
}

function extractId(raw) {
  if (!raw) return '';
  const value = String(raw).trim();
  const anime = value.match(/\/anime\/(\d+)/);
  if (anime) return anime[1];
  const watch = value.match(/\/watch\/(\d+)/);
  if (watch) return watch[1];
  const digits = value.match(/(\d{2,7})/);
  if (digits && /^\d+$/.test(value)) return value;
  if (digits) return digits[1];
  return value;
}

function getPage(raw) {
  const page = Number.parseInt(String(raw ?? '0'), 10);
  return Number.isInteger(page) && page >= 0 ? page : 0;
}

function todayDay() {
  return DAY_NAMES[new Date().getDay()];
}

function makeTinyClient(ApiError) {
  const base = String(BASE).replace(/\/$/, '');
  const proxy = `${base}/api/proxy`.replace(/\/$/, '');
  const cozyTimeoutMs = Math.max(1000, Number.parseInt('15000', 10) || 15000);
  let purrCookieJar = '';

  function mergeCookies(setCookies) {
    const values = Array.isArray(setCookies) ? setCookies : setCookies ? [setCookies] : [];
    for (const cookie of values) {
      const pair = String(cookie).split(';')[0].trim();
      if (!pair || !pair.includes('=')) continue;
      const key = pair.split('=')[0];
      const current = purrCookieJar ? purrCookieJar.split('; ').filter(Boolean) : [];
      purrCookieJar = [...current.filter(part => !part.startsWith(`${key}=`)), pair].join('; ');
    }
  }

  async function requestOnce(apiPath, params = null) {
    let target = `${proxy}${apiPath}`;
    if (params) {
      const search = new URLSearchParams(params).toString();
      if (search) target += `?${search}`;
    }
    const softHeaders = {
      'User-Agent': UA,
      Accept: 'application/json, text/plain, */*',
      Referer: `${base}/`,
      'x-proxy-secret': HARDCODED_PROXY_SECRET
    };
    if (purrCookieJar) softHeaders.Cookie = purrCookieJar;

    let response;
    try {
      response = await fetch(target, {
        method: 'GET',
        headers: softHeaders,
        redirect: 'manual',
        signal: AbortSignal.timeout(cozyTimeoutMs)
      });
    } catch (error) {
      const timeout = error.name === 'TimeoutError' || error.name === 'AbortError' || error.code === 'UND_ERR_CONNECT_TIMEOUT';
      throw new ApiError(
        502,
        timeout ? 'ANIMEIN_TIMEOUT' : 'ANIMEIN_FETCH_FAILED',
        timeout ? 'nyaa~ AnimeInWeb took too long to answer' : 'nyaa~ could not reach AnimeInWeb',
        { reason: error.message }
      );
    }

    let setCookies = [];
    if (typeof response.headers.getSetCookie === 'function') setCookies = response.headers.getSetCookie();
    else {
      const oneCookie = response.headers.get('set-cookie');
      if (oneCookie) setCookies = [oneCookie];
    }
    mergeCookies(setCookies);

    const rawUpstreamText = await response.text();
    let payload;
    try {
      payload = JSON.parse(rawUpstreamText);
    } catch {
      throw new ApiError(
        502,
        'ANIMEIN_BAD_JSON',
        'nya~ AnimeInWeb sent something that was not JSON',
        { http_status: response.status, preview: rawUpstreamText.slice(0, 180) }
      );
    }
    if (!response.ok || payload.error || payload.status !== 200) {
      throw new ApiError(502, 'ANIMEIN_UPSTREAM_ERROR', 'nyaa~ AnimeInWeb sent back an error', {
        http_status: response.status,
        upstream_status: payload.status ?? null,
        upstream_message: String(payload.message || payload.error || 'upstream error').slice(0, 180)
      });
    }
    return payload.data;
  }

  async function fetchAPI(apiPath, params = null) {
    let lastOops;
    for (let attempt = 0; attempt <= 2; attempt += 1) {
      try {
        return await requestOnce(apiPath, params);
      } catch (error) {
        lastOops = error;
        if (!(error.code === 'ANIMEIN_TIMEOUT' || error.code === 'ANIMEIN_FETCH_FAILED') || attempt >= 2) throw error;
        await new Promise(resolve => setTimeout(resolve, 1200 * (attempt + 1)));
      }
    }
    throw lastOops;
  }

  return { base, proxy, fetchAPI };
}

function movieItem(movie, fields) {
  const item = {
    id: movie.id,
    title: movie.title,
    url: `${BASE}/anime/${movie.id}`,
    image_poster: imageFull(movie.image_poster)
  };
  for (const field of fields) {
    if (field === 'image_cover') item.image_cover = imageFull(movie.image_cover);
    else item[field] = movie[field];
  }
  return item;
}

async function doHome(tinyClient) {
  const day = todayDay();
  const data = await tinyClient.fetchAPI('/3/2/home/data', { day, limit: '16' });
  const hot = data.hot || [];
  const fresh = data.new || [];
  const today = data.today || [];
  const popular = data.popular || [];
  const waiting = data.waiting || [];
  const random = data.random || [];
  const slider = data.slider || [];
  return {
    source: `${tinyClient.proxy}/3/2/home/data?day=${day}&limit=16`,
    type: 'home',
    day,
    slider: slider.map(item => ({
      id: item.id,
      type: item.type,
      image: imageFull(item.image),
      link: item.link
    })),
    hot: hot.map(item => movieItem(item, ['image_cover', 'type', 'year', 'status', 'views', 'favorites', 'genre'])),
    new: fresh.map(item => movieItem(item, ['image_cover', 'type', 'year', 'status', 'views', 'favorites', 'genre'])),
    today: today.map(item => ({
      ...movieItem(item, ['image_cover', 'type', 'status', 'views', 'favorites', 'genre']),
      time: item.time
    })),
    popular: popular.map(item => movieItem(item, ['image_cover', 'type', 'year', 'status', 'views', 'favorites', 'genre'])),
    waiting: waiting.map(item => movieItem(item, ['type', 'status', 'favorites', 'genre'])),
    random: random.map(item => movieItem(item, ['image_cover', 'type', 'status', 'views', 'favorites'])),
    trailer: data.trailer || [],
    counts: {
      slider: slider.length,
      hot: hot.length,
      new: fresh.length,
      today: today.length,
      popular: popular.length,
      waiting: waiting.length,
      random: random.length
    }
  };
}

async function doDetail(tinyClient, rawId, ApiError) {
  const id = extractId(rawId);
  if (!id) throw new ApiError(400, 'NYA_MISSING_ID', 'nya~ tell me which anime you wanna peek at');
  const data = await tinyClient.fetchAPI(`/3/2/movie/detail/${encodeURIComponent(id)}`);
  const movie = data.movie || {};
  const episode = data.episode || null;
  const seasons = data.season || [];
  const base = String(BASE).replace(/\/$/, '');
  return {
    source: `${base}/anime/${id}`,
    api: `${tinyClient.proxy}/3/2/movie/detail/${encodeURIComponent(id)}`,
    type: 'anime',
    id: movie.id || id,
    title: movie.title || '',
    synonyms: movie.synonyms || '',
    synopsis: movie.synopsis || '',
    image_poster: imageFull(movie.image_poster || ''),
    image_cover: imageFull(movie.image_cover || ''),
    poster: imageFull(movie.image_poster || ''),
    cover: imageFull(movie.image_cover || ''),
    type_anime: movie.type || '',
    year: movie.year || '',
    day: movie.day || '',
    status: movie.status || '',
    views: movie.views || '',
    favorites: movie.favorites || '',
    studio: movie.studio || '',
    aired_start: movie.aired_start || '',
    aired_end: movie.aired_end || '',
    genre: movie.genre || '',
    time: movie.time || '',
    first_episode: episode ? {
      id: episode.id,
      index: episode.index,
      title: episode.title,
      views: episode.views,
      key_time: episode.key_time,
      image: imageFull(episode.image),
      url: `${base}/watch/${episode.id}`
    } : null,
    seasons: seasons.map(season => ({
      id: season.id,
      title: season.title,
      season: season.season || '',
      type: season.type,
      year: season.year,
      status: season.status,
      views: season.views,
      favorites: season.favorites,
      url: `${base}/anime/${season.id}`
    })),
    seasons_count: seasons.length
  };
}

async function doEpisodes(tinyClient, rawId, ApiError) {
  const id = extractId(rawId);
  if (!id) throw new ApiError(400, 'NYA_MISSING_ID', 'nya~ tell me which anime episodes you wanna grab');
  const detail = await tinyClient.fetchAPI(`/3/2/movie/detail/${encodeURIComponent(id)}`);
  const title = (detail.movie && detail.movie.title) || '';
  const episodes = [];
  let page = 0;
  while (page <= 60) {
    const data = await tinyClient.fetchAPI(`/3/2/movie/episode/${encodeURIComponent(id)}`, { page: String(page) });
    const pageEpisodes = data.episode || [];
    if (!pageEpisodes.length) break;
    for (const episode of pageEpisodes) {
      episodes.push({
        id: episode.id,
        index: episode.index,
        title: episode.title,
        views: episode.views,
        key_time: episode.key_time,
        image: imageFull(episode.image),
        url: `${BASE}/watch/${episode.id}`,
        anime_url: `${BASE}/anime/${id}`,
        stream_api: `${tinyClient.proxy}/3/2/episode/streamnew/${episode.id}`,
        is_new: episode.is_new || '0',
        is_book: episode.is_book ?? 0
      });
    }
    if (pageEpisodes.length < 30) break;
    page += 1;
  }
  return {
    source: `${BASE}/anime/${id}`,
    api: `${tinyClient.proxy}/3/2/movie/episode/${id}`,
    type: 'episodes',
    anime_id: id,
    anime_title: title,
    count: episodes.length,
    episodes
  };
}

async function doPopular(tinyClient, rawPage) {
  const page = getPage(rawPage);
  const data = await tinyClient.fetchAPI('/3/2/explore/movie', { page: String(page), sort: 'views', keyword: '' });
  const items = (data.movie || []).map(movie => movieItem(movie, ['image_cover', 'type', 'year', 'status', 'views', 'favorites', 'genre']));
  return {
    source: `${tinyClient.proxy}/3/2/explore/movie?page=${page}&sort=views`,
    type: 'populer',
    page,
    count: items.length,
    items
  };
}

async function doSearch(tinyClient, rawQuery, rawPage, ApiError) {
  const query = String(rawQuery || '').trim();
  if (!query) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a search word in ?q=, cutie');
  const page = getPage(rawPage);
  const data = await tinyClient.fetchAPI('/3/2/explore/movie', { page: String(page), sort: 'views', keyword: query });
  const items = (data.movie || []).map(movie => movieItem(movie, ['image_cover', 'type', 'year', 'status', 'views', 'favorites', 'genre']));
  return {
    source: `${tinyClient.proxy}/3/2/explore/movie?keyword=${encodeURIComponent(query)}&page=${page}`,
    type: 'search',
    query,
    page,
    count: items.length,
    items
  };
}

async function doSchedule(tinyClient, rawDay) {
  const day = String(rawDay || '').trim().toUpperCase();
  if (day && DAY_NAMES.includes(day)) {
    const data = await tinyClient.fetchAPI('/3/2/schedule/data', { day });
    const items = (data.movie || []).map(movie => ({
      ...movieItem(movie, ['image_cover', 'type', 'status', 'views', 'favorites', 'genre']),
      day: movie.day,
      time: movie.time,
      key_time: movie.key_time
    }));
    return {
      source: `${tinyClient.proxy}/3/2/schedule/data?day=${day}`,
      type: 'jadwal',
      day,
      count: items.length,
      items
    };
  }
  const all = [];
  const byDay = {};
  for (const scheduleDay of DAY_NAMES) {
    const data = await tinyClient.fetchAPI('/3/2/schedule/data', { day: scheduleDay });
    const items = (data.movie || []).map(movie => ({
      ...movieItem(movie, ['image_cover', 'type', 'status', 'views', 'favorites', 'genre']),
      day: movie.day,
      time: movie.time,
      key_time: movie.key_time
    }));
    byDay[scheduleDay] = { count: items.length, items };
    all.push(...items);
  }
  return {
    source: `${tinyClient.proxy}/3/2/schedule/data`,
    type: 'jadwal',
    count: all.length,
    by_day: byDay,
    items: all
  };
}

async function doStream(tinyClient, rawId, ApiError) {
  const id = extractId(rawId);
  if (!id) throw new ApiError(400, 'NYA_MISSING_ID', 'nya~ tell me which episode to look for');
  const data = await tinyClient.fetchAPI(`/3/2/episode/streamnew/${encodeURIComponent(id)}`);
  const episode = data.episode || {};
  const next = data.episode_next || null;
  const base = String(BASE).replace(/\/$/, '');
  const servers = (data.server || []).map(server => ({
    id: server.id,
    name: server.name,
    quality: server.quality,
    type: server.type,
    link: server.link,
    url_stream: server.link,
    embed_url: server.link,
    key_file_size: server.key_file_size,
    server_id: server.server_id,
    username: server.username || ''
  }));
  return {
    source: `${tinyClient.proxy}/3/2/episode/streamnew/${id}`,
    type: 'stream',
    episode: episode && episode.id ? {
      id: episode.id,
      index: episode.index,
      title: episode.title,
      views: episode.views,
      key_time: episode.key_time,
      image: imageFull(episode.image),
      url: `${base}/watch/${episode.id}`
    } : null,
    episode_next: next ? {
      id: next.id,
      index: next.index,
      title: next.title,
      url: `${base}/watch/${next.id}`
    } : null,
    count: servers.length,
    servers,
    stream_url: servers[0] ? servers[0].link : '',
    embed_url: servers[0] ? servers[0].link : ''
  };
}

module.exports = {
  name: 'animeinweb',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/animeinweb/home',
      description: 'trending, hot, new, today, popular, waiting and random picks',
      params: {},
      handler: async ({ ApiError }) => doHome(makeTinyClient(ApiError))
    },
    {
      method: 'GET',
      path: '/api/animeinweb/detail/:id',
      description: 'anime detail, first episode and seasons',
      params: { id: 'anime id or an anime URL; URL form also works with ?url=' },
      handler: async ({ params, query, ApiError }) => doDetail(makeTinyClient(ApiError), query.url || params.id, ApiError)
    },
    {
      method: 'GET',
      path: '/api/animeinweb/episodes/:id',
      description: 'all episode rows for one anime',
      params: { id: 'anime id or an anime URL; URL form also works with ?url=' },
      handler: async ({ params, query, ApiError }) => doEpisodes(makeTinyClient(ApiError), query.url || params.id, ApiError)
    },
    {
      method: 'GET',
      path: '/api/animeinweb/popular',
      description: 'popular anime sorted by views',
      params: { page: 'optional page number, starts at 0' },
      handler: async ({ query, ApiError }) => doPopular(makeTinyClient(ApiError), query.page)
    },
    {
      method: 'GET',
      path: '/api/animeinweb/search',
      description: 'search anime by title',
      params: { q: 'search text', page: 'optional page number, starts at 0' },
      handler: async ({ query, ApiError }) => doSearch(makeTinyClient(ApiError), query.q || query.query, query.page, ApiError)
    },
    {
      method: 'GET',
      path: '/api/animeinweb/schedule',
      description: 'schedule for one day, or all days when day is missing',
      params: { day: 'MINGGU, SENIN, SELASA, RABU, KAMIS, JUMAT or SABTU; omit for all' },
      handler: async ({ query, ApiError }) => doSchedule(makeTinyClient(ApiError), query.day)
    },
    {
      method: 'GET',
      path: '/api/animeinweb/stream/:id',
      description: 'stream servers for an episode id',
      params: { id: 'episode id or an episode URL' },
      handler: async ({ params, query, ApiError }) => doStream(makeTinyClient(ApiError), query.url || params.id, ApiError)
    }
  ]
};
