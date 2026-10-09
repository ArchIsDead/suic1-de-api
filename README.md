# suic1.de API 🖤

## Run it

Node.js 22+ and Git are recommended.

```bash
git clone https://github.com/ArchIsDead/suic1-de-api.git
cd suic1-de-api
cp .env.example .env
node server.js
```

## Shared settings

- `PORT`: listening port
- `HOST`: listening address
- `RATE_LIMIT_MAX`: requests per IP per window
- `RATE_LIMIT_WINDOW_MS`: rate-limit window
- `AUTO_UPDATE`: enables the auto-update setting for compatible deployment setup
- `GIT_REMOTE`: Git remote name
- `GIT_BRANCH`: branch name
- `UPDATE_INTERVAL_SECONDS`: desired update polling interval
