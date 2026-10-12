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
 * PROJECT     : Wikipedia Search + Detail All
 * AUTHOR      : BINTANG
 * CREATOR     : BINTANG
 * DESC        : Search Wikipedia + detail setiap hasil langsung digabung
 * SOURCE      : https://id.wikipedia.org
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const WIKI_HOST = 'id.wikipedia.org';
const SEARCH_ENDPOINT = '/w/rest.php/v1/search/title';
const API_ENDPOINT = '/w/api.php';
const SOFT_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const COZY_TIMEOUT_MS = 30000;

async function wikiGet(path, ApiError) {
  let response;
  try {
    response = await fetch(`https://${WIKI_HOST}${path}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': SOFT_UA
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(COZY_TIMEOUT_MS)
    });
  } catch (error) {
    const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';
    throw new ApiError(
      502,
      timedOut ? 'WIKI_TIMEOUT' : 'WIKI_FETCH_FAILED',
      timedOut
        ? 'nyaa~ wikipedia was napping too long, try again in a sec uwu'
        : 'nyaa~ could not reach wikipedia, it is being shy right now ;w;',
      { reason: error.message }
    );
  }
  const rawText = await response.text();
  let payload;
  try {
    payload = rawText ? JSON.parse(rawText) : {};
  } catch {
    throw new ApiError(502, 'WIKI_BAD_JSON', 'nyaa~ wikipedia sent something unreadable, so confusing >w<', {
      http_status: response.status,
      preview: rawText.slice(0, 180)
    });
  }
  if (!response.ok) {
    throw new ApiError(502, 'WIKI_HTTP_ERROR', `nyaa~ wikipedia replied with HTTP ${response.status}, drama queen`);
  }
  return payload;
}

async function searchTitle(query, limit, ApiError) {
  const path = `${SEARCH_ENDPOINT}?q=${encodeURIComponent(query)}&limit=${limit}`;
  const payload = await wikiGet(path, ApiError);
  return payload.pages || [];
}

async function getPageDetail(title, ApiError) {
  const params = {
    action: 'query',
    format: 'json',
    prop: 'extracts|pageimages|info',
    titles: title,
    exintro: 1,
    explaintext: 1,
    exsentences: 15,
    piprop: 'thumbnail',
    pithumbsize: 300,
    inprop: 'url',
    origin: '*'
  };
  const queryString = Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  const path = `${API_ENDPOINT}?${queryString}`;
  const payload = await wikiGet(path, ApiError);
  const pages = payload.query?.pages || {};
  const pageId = Object.keys(pages)[0];
  const page = pages[pageId];
  if (!page || page.missing) return null;
  return {
    id: page.pageid,
    title: page.title,
    url: page.fullurl,
    content: page.extract || '',
    thumbnail: page.thumbnail?.source || null,
    length: page.length
  };
}

async function searchWithDetails(rawQuery, rawLimit, ApiError) {
  const query = String(rawQuery || '').trim();
  if (!query) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a search word in ?q=, cutie');
  const limit = Math.max(1, Math.min(20, Number.parseInt(String(rawLimit ?? '10'), 10) || 10));

  const pages = await searchTitle(query, limit, ApiError);
  if (!pages.length) {
    return { query, total: 0, results: [] };
  }

  const results = [];
  for (const page of pages.slice(0, limit)) {
    const detail = await getPageDetail(page.title, ApiError);
    results.push({
      id: page.id,
      title: page.title,
      key: page.key,
      description: page.description || '',
      excerpt: page.excerpt || '',
      thumbnail: page.thumbnail?.url ? `https:${page.thumbnail.url}` : null,
      detail: detail ? {
        content: detail.content,
        url: detail.url,
        length: detail.length
      } : null
    });
  }

  return {
    query,
    total: results.length,
    results
  };
}

module.exports = {
  name: 'wiki',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/wiki/search',
      description: 'search wikipedia id and merge details for each hit, purr~',
      params: { q: 'search text', limit: 'optional, default 10, max 20' },
      handler: async ({ query, ApiError }) => searchWithDetails(query.q, query.limit, ApiError)
    },
    {
      method: 'GET',
      path: '/api/wiki/search/:q',
      description: 'same search but the keyword rides in the path, uwu',
      params: { q: 'search text, url encoded', limit: 'optional, default 10, max 20' },
      handler: async ({ params, query, ApiError }) => searchWithDetails(decodeURIComponent(params.q || ''), query.limit, ApiError)
    }
  ]
};
