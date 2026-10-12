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
 * PROJECT      : Domain Safety Info Scraper
 * AUTHOR       : BINTANG
 * DESC         : scrape info domain dari sur.ly
 * SOURCE       : https://sur.ly
 * Note : Dont rm this Credit
 */

const VERSION = '1.0.0';
const SOFT_UA = 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Mobile Safari/537.36';
const AUTHOR = 'bintang';
const COZY_TIMEOUT_MS = 30000;
const MAX_REDIRECTS = 5;

const ADULT_BADGE_LABELS = ['PORN', 'PIRACY', 'GAMBLING', 'DRUGS'];
const MALICIOUS_BADGE_LABELS = ['MALWARE', 'PHISHING', 'SPAM', 'FRAUD'];

async function cozyGet(urlStr, ApiError) {
  let current = urlStr;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
    let parsed;
    try {
      parsed = new URL(current);
    } catch {
      throw new ApiError(400, 'NYA_BAD_URL', 'nya~ that url is not valid, paste a real one cutie');
    }
    let response;
    try {
      response = await fetch(parsed.toString(), {
        method: 'GET',
        headers: {
          'User-Agent': SOFT_UA,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9,id;q=0.8'
        },
        redirect: 'manual',
        signal: AbortSignal.timeout(COZY_TIMEOUT_MS)
      });
    } catch (error) {
      const timedOut = error.name === 'TimeoutError' || error.name === 'AbortError';
      throw new ApiError(
        502,
        timedOut ? 'SURLY_TIMEOUT' : 'SURLY_FETCH_FAILED',
        timedOut
          ? 'nyaa~ sur.ly was napping too long, try again in a sec uwu'
          : 'nyaa~ could not reach sur.ly, it is being shy right now ;w;',
        { reason: error.message }
      );
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) {
        return { status: response.status, body: '', finalUrl: current };
      }
      const nextUrl = new URL(location, current).toString();
      try {
        await response.body?.cancel?.();
      } catch {
        // tiny cleanup, nothing to do
      }
      current = nextUrl;
      continue;
    }

    const body = await response.text();
    return { status: response.status, body, finalUrl: current };
  }
  throw new ApiError(502, 'SURLY_TOO_MANY_REDIRECTS', 'nyaa~ too many redirects, sur.ly is doing loopies uwu');
}

async function fetchWithRetry(url, ApiError, retries = 3) {
  let lastOops;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const res = await cozyGet(url, ApiError);
      if (res.status >= 200 && res.status < 400) return res;
      lastOops = new ApiError(502, 'SURLY_HTTP_ERROR', `nyaa~ sur.ly replied with HTTP ${res.status}, drama queen`);
    } catch (error) {
      lastOops = error;
    }
    if (attempt < retries) {
      await new Promise(r => setTimeout(r, 800 * attempt));
    }
  }
  throw lastOops;
}

function decodeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .trim();
}

function stripTags(html) {
  return decodeHtml(String(html || '').replace(/<[^>]*>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
}

function matchOne(html, re, idx = 1) {
  const m = html.match(re);
  return m && m[idx] != null ? decodeHtml(m[idx]) : null;
}

function cleanHtml(html) {
  return String(html || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '');
}

function extractMeta(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`,
    'i'
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`,
    'i'
  );
  return matchOne(html, re) || matchOne(html, re2) || '';
}

function extractBasic(rawHtml) {
  const html = cleanHtml(rawHtml);
  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i) || '';
  const canonical = matchOne(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || '';
  const ampUrl = matchOne(html, /<link[^>]+rel=["']amphtml["'][^>]+href=["']([^"']+)["']/i) || '';
  const keywords = extractMeta(html, 'keywords');
  const description = extractMeta(html, 'description');

  const domainFromCanonical = (canonical.match(/\/i\/([^\/]+)\//) || [])[1] || '';

  const h1 = matchOne(html, /<h1[^>]*class=["'][^"']*\btitle\b[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i)
    || matchOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
    || '';

  const siteUrlRaw = matchOne(html, /<a[^>]+class=["'][^"']*\bdomain-link\b[^"']*["'][^>]*href=["']([^"']+)["']/i) || '';
  const siteUrl = siteUrlRaw
    ? (siteUrlRaw.match(/\/o\/([^\/]+)\//) || [])[1] || ''
    : '';
  const displayUrl = matchOne(html, /<a[^>]+class=["'][^"']*\bdomain-link\b[^"']*["'][^>]*>([\s\S]*?)<\/a>/i) || '';

  const screenshot = matchOne(html, /<img[^>]+class=["'][^"']*domain-page__screenshot-img[^"']*["'][^>]+src=["']([^"']+)["']/i) || '';
  const favicon = matchOne(html, /<img[^>]+src=["']([^"']+\/favicons\/[^"']+)["']/i) || '';

  return {
    title: stripTags(title),
    h1: stripTags(h1),
    canonical,
    ampUrl,
    keywords,
    description,
    domain: domainFromCanonical || siteUrl || '',
    siteUrl,
    displayUrl: stripTags(displayUrl),
    screenshot,
    favicon
  };
}

function extractPageInfoList(html) {
  const items = [];
  const re = /<li[^>]+class=["']([^"']*page-info__item[^"']*)["'][\s\S]*?<p[^>]*class=["'][^"']*\bcaption\b[^"']*["'][^>]*>([\s\S]*?)<\/p>[\s\S]*?<p[^>]*class=["'][^"']*page-info__text[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const classStr = m[1];
    const lvlMatch = classStr.match(/page-info__item_(\w+)/);
    items.push({
      level: lvlMatch ? lvlMatch[1].toLowerCase() : null,
      caption: stripTags(m[2]),
      text: stripTags(m[3])
    });
  }
  return items;
}

function extractSafetyStatus(html) {
  const list = extractPageInfoList(html);
  const safety = list.find(x => /safety status/i.test(x.caption));
  const created = list.find(x => /domain created/i.test(x.caption));
  const latest = list.find(x => /latest check/i.test(x.caption));
  return {
    level: safety ? safety.level : null,
    status: safety ? safety.text : '',
    domainCreated: created ? created.text : '',
    latestCheck: latest ? latest.text : '',
    raw: list
  };
}

function extractConfidenceBlock(html, label) {
  const re = new RegExp(
    `<p[^>]*class=["'][^"']*\\bcaption\\b[^"']*["'][^>]*>\\s*${label}\\s*<\\/p>[\\s\\S]*?` +
      `<div[^>]+class=["'][^"']*\\bconfidence\\b[^"']*confidence-(\\w+)["'][\\s\\S]*?` +
      `<span[^>]*class=["']confidence__status["'][^>]*>([\\s\\S]*?)<\\/span>[\\s\\S]*?` +
      `<span[^>]*class=["']confidence__label["'][^>]*>([\\s\\S]*?)<\\/span>`,
    'i'
  );
  const m = html.match(re);
  if (!m) return { verdict: 'unknown', confidence: 'N/A', percent: '0%' };
  return {
    verdict: m[1].toLowerCase(),
    confidence: stripTags(m[2]) || 'N/A',
    percent: stripTags(m[3]) || '0%'
  };
}

function extractMyWot(html) {
  return {
    childSafety: extractConfidenceBlock(html, 'Child safety'),
    trustworthiness: extractConfidenceBlock(html, 'Trustworthiness')
  };
}

function extractContentTypeVerdict(html, blockTitle) {
  const re = new RegExp(
    `<p[^>]*class=["'][^"']*content-type__block-title[^"']*["'][^>]*>\\s*${blockTitle}\\s*<\\/p>[\\s\\S]*?` +
      `<div[^>]+class=["']content-type-verdict["'][^>]*>[\\s\\S]*?<p>([\\s\\S]*?)<\\/p>`,
    'i'
  );
  const verdict = matchOne(html, re);
  return { verdict: verdict ? stripTags(verdict) : '' };
}

function extractContentTypeBadges(html, blockTitle, labels) {
  const blockRe = new RegExp(
    `<p[^>]*class=["'][^"']*content-type__block-title[^"']*["'][^>]*>\\s*${blockTitle}\\s*<\\/p>[\\s\\S]*?` +
      `<ul[^>]*class=["'][^"']*content-type-badges[^"']*["'][^>]*>([\\s\\S]*?)<\\/ul>`,
    'i'
  );
  const blockMatch = html.match(blockRe);
  if (!blockMatch) {
    return labels.map(label => ({ label, active: false, raw: null }));
  }

  const ulContent = blockMatch[1];
  const badges = [];
  const liRe = /<li[^>]+class=["']([^"']*)["'][^>]*>/gi;
  let m;
  while ((m = liRe.exec(ulContent)) !== null) {
    const cls = m[1];
    const activeMatch = cls.match(/-badge_(active|inactive)\b/i);
    badges.push({
      active: activeMatch ? activeMatch[1].toLowerCase() === 'active' : false,
      raw: cls
    });
  }

  return labels.map((label, i) => ({
    label,
    active: badges[i] ? badges[i].active : false,
    raw: badges[i] ? badges[i].raw : null
  }));
}

function extractStatusList(html) {
  const results = {};
  const statusRe = /<li[^>]+class=["']status status-(\w+)["'][\s\S]*?<p[^>]*class=["'][^"']*status__block-title[^"']*["'][^>]*>([\s\S]*?)<\/p>[\s\S]*?<p[^>]*class=["']status__text["'][^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = statusRe.exec(html)) !== null) {
    const name = stripTags(m[2]).toLowerCase().replace(/\s+/g, '');
    results[name] = {
      level: m[1].toLowerCase(),
      status: stripTags(m[3])
    };
  }
  return {
    siteadvisor: results.siteadvisor || { level: null, status: '' },
    safebrowsing: results.safebrowsing || { level: null, status: '' },
    phishtank: results.phishtank || { level: null, status: '' }
  };
}

function extractConnection(html) {
  const blockMatch = html.match(/<div[^>]+class=["'][^"']*\bwr-connection\b[^"']*["'][\s\S]*?<\/div>\s*<\/div>/i);
  const scope = blockMatch ? blockMatch[0] : html;

  const m = scope.match(
    /<div[^>]+class=["'][^"']*connection-type\b[^"']*connection-type_(\w+)["'][\s\S]*?<p[^>]*class=["'][^"']*connection-type__name[^"']*["'][^>]*>([\s\S]*?)<\/p>[\s\S]*?<p[^>]*class=["'][^"']*\bcaption\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i
  );

  if (!m) return { type: '', ssl: false, description: '' };
  const scheme = stripTags(m[2]).toUpperCase();
  return {
    type: scheme,
    ssl: scheme === 'HTTPS',
    description: stripTags(m[3])
  };
}

function normalizeDomain(input) {
  if (!input) return '';
  let s = String(input).trim();
  const surlyMatch = s.match(/sur\.ly\/i\/([^\/\?#]+)/i);
  if (surlyMatch) return decodeURIComponent(surlyMatch[1]).toLowerCase();
  s = s.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
  return s.toLowerCase();
}

async function scrapeSurly(input, ApiError) {
  const domain = normalizeDomain(input);
  if (!domain) throw new ApiError(400, 'NYA_MISSING_DOMAIN', 'nya~ gimme a domain like starlabs.biz.id, cutie');

  const targetUrl = `https://sur.ly/i/${encodeURIComponent(domain)}/`;
  const res = await fetchWithRetry(targetUrl, ApiError, 3);
  if (res.status !== 200) {
    throw new ApiError(502, 'SURLY_HTTP_ERROR', `nyaa~ sur.ly returned HTTP ${res.status} for ${domain}`);
  }
  const raw = res.body;
  const html = cleanHtml(raw);

  const basic = extractBasic(raw);
  const safety = extractSafetyStatus(html);
  const mywot = extractMyWot(html);
  const malicious = extractContentTypeVerdict(html, 'MALICIOUS CONTENT INDICATORS');
  const adult = extractContentTypeVerdict(html, 'ADULT CONTENT INDICATORS');
  const statusList = extractStatusList(html);
  const connection = extractConnection(html);

  const adultBadges = extractContentTypeBadges(html, 'ADULT CONTENT INDICATORS', ADULT_BADGE_LABELS);
  const maliciousBadges = extractContentTypeBadges(html, 'MALICIOUS CONTENT INDICATORS', MALICIOUS_BADGE_LABELS);

  const adultFlagged = adultBadges.filter(b => b.active).map(b => b.label);
  const maliciousFlagged = maliciousBadges.filter(b => b.active).map(b => b.label);

  const is18Plus = adultFlagged.length > 0;
  const isMalicious = maliciousFlagged.length > 0;
  const finalDomain = basic.domain || domain;

  return {
    success: true,
    author: AUTHOR,
    query: input,
    scrapedAt: new Date().toISOString(),
    source: targetUrl,
    result: {
      domain: finalDomain,
      title: basic.h1 || basic.title,
      siteUrl: basic.siteUrl,
      displayUrl: basic.displayUrl,
      canonical: basic.canonical,
      ampUrl: basic.ampUrl,
      screenshot: basic.screenshot,
      favicon: basic.favicon,
      meta: {
        keywords: basic.keywords,
        description: basic.description
      },
      safety: {
        status: safety.status,
        level: safety.level,
        domainCreated: safety.domainCreated,
        latestCheck: safety.latestCheck,
        is18Plus,
        adultFlagged: adultFlagged.length ? adultFlagged : ['NONE'],
        isMalicious,
        maliciousFlagged: maliciousFlagged.length ? maliciousFlagged : ['NONE'],
        mywot,
        maliciousContent: { ...malicious, badges: maliciousBadges },
        adultContent: { ...adult, badges: adultBadges },
        siteadvisor: statusList.siteadvisor,
        safebrowsing: statusList.safebrowsing,
        phishtank: statusList.phishtank
      },
      connection,
      allInfo: safety.raw
    }
  };
}

module.exports = {
  name: 'surly',
  version: VERSION,
  routes: [
    {
      method: 'GET',
      path: '/api/surly/check',
      description: 'check a domain safety info from sur.ly, curious kitty~',
      params: { domain: 'domain like starlabs.biz.id, or a sur.ly /i/ url' },
      handler: async ({ query, ApiError }) => scrapeSurly(query.domain || query.url, ApiError)
    },
    {
      method: 'GET',
      path: '/api/surly/check/:domain',
      description: 'same check but the domain rides in the path, uwu',
      params: { domain: 'domain like starlabs.biz.id, url encoded' },
      handler: async ({ params, ApiError }) => scrapeSurly(decodeURIComponent(params.domain || ''), ApiError)
    }
  ]
};
