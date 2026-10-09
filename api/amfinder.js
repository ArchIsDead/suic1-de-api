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
 * AM Preset Finder Scraper
 * Source: https://amfinder.web.id
 * Scans TikTok video description, bio, comments, and bio-link to extract Alight Motion preset links.
 * Credit By Zx
 * Sumber Kode: https://whatsapp.com/channel/0029VbDLqe7EquiSF4STU13o
 * Note: Kalau Mau Di sher Lagi Minimal Credit atau sumber jangan di hapus dong
 */

const VERSION = '1.0.0';
const BASE_URL = 'https://amfinder.web.id';
const SSE_TIMEOUT_MS = 60000;

function isValidTikTokUrl(url) {
  const trimmed = String(url || '').trim();
  return /tiktok\.com/i.test(trimmed) || /^\d{15,}$/.test(trimmed);
}

async function parseSSEStream(response, ApiError) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let currentEvent = null;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('event:')) {
        currentEvent = line.slice(6).trim();
      } else if (line.startsWith('data:')) {
        const data = line.slice(5).trim();

        if (currentEvent === 'result') {
          try {
            return JSON.parse(data);
          } catch {
            throw new ApiError(502, 'AMFINDER_BAD_RESULT', 'nyaa~ the finder babbled something unreadable, try again cutie uwu');
          }
        }

        if (currentEvent === 'error') {
          let message = 'nyaa~ the finder had a little oopsie, try again sweetie';
          try {
            const err = JSON.parse(data);
            if (err && err.message) message = `nyaa~ the finder says: ${String(err.message)}`;
          } catch {
            message = 'nyaa~ the finder had a little oopsie, try again sweetie';
          }
          throw new ApiError(502, 'AMFINDER_UPSTREAM_ERROR', message);
        }
      }
    }
  }

  throw new ApiError(502, 'AMFINDER_STREAM_CLOSED', 'nyaa~ the stream closed before finishing, sad kitty noises, try again uwu');
}

async function getPresetLinks(linkTiktok, ApiError) {
  const url = String(linkTiktok || '').trim();

  if (!url) {
    throw new ApiError(400, 'NYA_MISSING_URL', 'nya~ paste a TikTok link first, do not be shy cutie~');
  }
  if (!isValidTikTokUrl(url)) {
    throw new ApiError(400, 'NYA_BAD_URL', 'nya~ that is not a TikTok link, sweetie, paste a real one for me?');
  }

  const apiUrl = `${BASE_URL}/api/find?url=${encodeURIComponent(url)}`;
  const controller = new AbortController();
  const cozyTimeout = setTimeout(() => controller.abort(), SSE_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'text/event-stream',
        'User-Agent': 'Mozilla/5.0 (compatible; AMFinderScraper/1.0)'
      },
      signal: controller.signal
    });
  } catch (error) {
    clearTimeout(cozyTimeout);
    const timedOut = error.name === 'AbortError' || error.name === 'TimeoutError';
    throw new ApiError(
      502,
      timedOut ? 'AMFINDER_TIMEOUT' : 'AMFINDER_FETCH_FAILED',
      timedOut
        ? 'nyaa~ the finder took too long, maybe napping, try again in a sec uwu'
        : 'nyaa~ could not reach the finder, it is being shy right now',
      { reason: error.message }
    );
  }

  try {
    if (!response.ok) {
      throw new ApiError(502, 'AMFINDER_HTTP_ERROR', `nyaa~ the finder replied with status ${response.status}, what a drama queen`);
    }
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/event-stream')) {
      throw new ApiError(502, 'AMFINDER_BAD_CONTENT_TYPE', 'nyaa~ the finder sent the wrong kind of stream, so confusing >w<');
    }

    const result = await parseSSEStream(response, ApiError);

    if (result.ok === false) {
      throw new ApiError(502, 'AMFINDER_NO_RESULT', `nyaa~ the finder could not sniff any preset: ${String(result.error || 'mystery oopsie')}`);
    }

    return {
      ok: true,
      author: result.author || null,
      avatar: result.authorDetail?.avatar || null,
      video: {
        description: (result.video?.description || '').trim(),
        cover: result.video?.cover || null,
        playUrl: result.video?.playUrlNoWm || result.video?.playUrl || null,
        width: result.video?.width || null,
        height: result.video?.height || null,
        stats: {
          views: result.video?.stats?.views ?? null,
          likes: result.video?.stats?.likes ?? null,
          comments: result.video?.stats?.comments ?? null
        }
      },
      presetLinks: (result.presetLinks || []).map(p => ({
        title: p.title || (p.type === '5mb' ? '5MB preset' : 'XML file'),
        url: p.url,
        type: p.type,
        size: p.size || null,
        ratio: p.ratio || null,
        thumb: p.thumb || null,
        pinned: !!p.pinned,
        byAuthor: !!p.byAuthor,
        detail: p.detail || null
      }))
    };
  } finally {
    clearTimeout(cozyTimeout);
  }
}

module.exports = {
  name: 'amfinder',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/amfinder/find',
      description: 'sniff Alight Motion preset links out of a TikTok video, nya~',
      params: { url: 'TikTok video URL or numeric video id' },
      handler: async ({ query, ApiError }) => getPresetLinks(query.url, ApiError)
    },
    {
      method: 'GET',
      path: '/api/amfinder/find/:url',
      description: 'same finder, but the TikTok link rides in the path, uwu',
      params: { url: 'TikTok video URL or numeric video id, encoded' },
      handler: async ({ params, ApiError }) => getPresetLinks(decodeURIComponent(params.url || ''), ApiError)
    }
  ]
};
