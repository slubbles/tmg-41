# TMG — Thela Media Group rebuild (Genesis job 41)

Multipage Next.js 15 marketing site for Thela Media Group, rebuilt from
`tmg.agency` content (their copy, photos, logos, phones) with a Palantir-grade
type/space grammar and a warm paper editorial palette.

- Framework: Next.js 15.5.25 / React 19 / TypeScript 5.9 / Tailwind v4
- Fonts: Fraunces (display) + Outfit (body) via `next/font/google`
- Motion: GSAP hero reveal
- Sentry: env-ready (`SENTRY_DSN`, `NEXT_PUBLIC_SENTRY_DSN`) — no-op when unset
- Contact form: `POST /api/submit` → `WEBHOOK_URL_CONTACT` (offline success when unset)
- Healthcheck: `GET /api/health` → `{"ok":true}`

## Run

```bash
bun install
bun run next build
bun run next start
```

## Deploy

- Vercel: project name from `.genesis_vercel.json` (`tmg-41`)
- Docker: `docker build -t tmg . && docker run -p 3000:3000 tmg`
- Railway: `railway.toml` (Dockerfile builder, `/api/health` healthcheck)
