# suic1.de API 🖤

A lil JSON-only Node.js API. Each scraper lives in one file under `api/`.

## Run it

Node.js 22+ and Git are recommended.

```bash
git clone https://github.com/ArchIsDead/suic1-de-api.git
cd suic1-de-api
cp .env.example .env
node server.js
```

The server listens on port 3000 by default. Keep the working tree clean for Git-based updates. Set up a process manager such as systemd to keep it running after SSH disconnects.

## Shared settings

- `PORT`: listening port
- `HOST`: listening address
- `RATE_LIMIT_MAX`: requests per IP per window
- `RATE_LIMIT_WINDOW_MS`: rate-limit window
- `AUTO_UPDATE`: enables the auto-update setting for compatible deployment setup
- `GIT_REMOTE`: Git remote name
- `GIT_BRANCH`: branch name
- `UPDATE_INTERVAL_SECONDS`: desired update polling interval

## AnimeInWeb routes

- `GET /api/animeinweb/home`
- `GET /api/animeinweb/detail/:id`
- `GET /api/animeinweb/episodes/:id`
- `GET /api/animeinweb/popular?page=0`
- `GET /api/animeinweb/search?q=naruto&page=0`
- `GET /api/animeinweb/schedule?day=RABU`
- `GET /api/animeinweb/stream/:id`

Open `/` or `/api` for the route list and `/health` for health status.

The original scraper's proxy secret is kept as a fallback in the AnimeInWeb module. It may be expired or rejected by the upstream, so successful live responses are not guaranteed. Do not publish real secrets if you replace it.
