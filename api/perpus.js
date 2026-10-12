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
 * PROJECT      : Search Buku Perpus
 * AUTHOR       : BINTANG
 * CREATOR      : BINTANG
 * DESC         : Scrape pencarian buku di perpus.org
 * SOURCE       : https://www.perpus.org
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const BASE_URL = 'https://www.perpus.org';
const SOFT_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const COZY_TIMEOUT_MS = 30000;

async function cozyGet(targetUrl, ApiError) {
  let response;
  try {
    response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': SOFT_UA,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive'
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(COZY_TIMEOUT_MS)
    });
  } catch (error) {
    const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';
    throw new ApiError(
      502,
      timedOut ? 'PERPUS_TIMEOUT' : 'PERPUS_FETCH_FAILED',
      timedOut
        ? 'nyaa~ perpus took too long to answer, try again in a sec uwu'
        : 'nyaa~ could not reach perpus, it is being shy right now ;w;',
      { reason: error.message }
    );
  }
  const body = await response.text();
  return { status: response.status, body };
}

function parseSearchResults(html, baseUrl) {
  const results = [];
  const itemRegex = /<div class="col-md-2 ebook-product-wrap">[\s\S]*?<div class="ebook p-2 ebook-product">[\s\S]*?<a href="([^"]+)">[\s\S]*?<img[^>]*data-src="([^"]+)"[^>]*>[\s\S]*?<div class="book-title">([^<]+)<\/div>[\s\S]*?<\/a>[\s\S]*?<div class="text-grey small"[^>]*>([^<]+)<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/g;
  let match;
  while ((match = itemRegex.exec(html)) !== null) {
    const url = match[1].startsWith('http') ? match[1] : baseUrl + match[1];
    const slug = url.replace(`${baseUrl}/`, '');
    const image = match[2].startsWith('http') ? match[2] : baseUrl + match[2];
    const title = match[3].trim();
    const viewsText = match[4].trim();
    const viewsMatch = viewsText.match(/(\d+(?:,\d+)?)/);
    const views = viewsMatch ? parseInt(viewsMatch[1].replace(/,/g, ''), 10) : 0;
    results.push({
      judul: title,
      slug,
      url,
      gambar: image,
      dilihat: views
    });
  }
  return results;
}

async function searchBooks(rawQuery, ApiError) {
  const query = String(rawQuery || '').trim();
  if (!query) throw new ApiError(400, 'NYA_MISSING_QUERY', 'nya~ put a book title in ?q=, cutie');

  const searchUrl = `${BASE_URL}/search?${new URLSearchParams({ q: query }).toString()}`;
  const res = await cozyGet(searchUrl, ApiError);
  if (res.status !== 200) {
    throw new ApiError(502, 'PERPUS_HTTP_ERROR', `nyaa~ perpus replied with HTTP ${res.status}, drama queen`);
  }
  const hasil = parseSearchResults(res.body, BASE_URL);
  return {
    keyword: query,
    total: hasil.length,
    hasil
  };
}

module.exports = {
  name: 'perpus',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/perpus/search',
      description: 'search books on perpus.org, curious kitty~',
      params: { q: 'book title keyword' },
      handler: async ({ query, ApiError }) => searchBooks(query.q, ApiError)
    },
    {
      method: 'GET',
      path: '/api/perpus/search/:q',
      description: 'same search but the keyword rides in the path, uwu',
      params: { q: 'book title keyword, url encoded' },
      handler: async ({ params, ApiError }) => searchBooks(decodeURIComponent(params.q || ''), ApiError)
    }
  ]
};
