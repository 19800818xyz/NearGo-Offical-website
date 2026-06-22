# NearGo — Official Website

Rebuild of [neargo.ai](https://neargo.ai) — a commerce platform for the MENA region
(NearShop · NearPay · NearBoss). Built with **Next.js 14 (App Router) + TypeScript + Tailwind**.

## Design versions

The repo ships several design directions at different routes so they can be compared
side‑by‑side (a floating switcher in the bottom‑left jumps between them):

| Route | Direction |
|-------|-----------|
| `/` | **v1** — warm immersive (orange Hero, SF Pro) |
| `/v2` | **v2** — warm editorial (Fraunces serif) |
| `/v2b` | **v2b** — retro arcade / pixel |
| `/v2c` | **v2c** — Stripe‑style angled gradient |

Each version covers the full site: home, `payment`, `pricing`, `download`, `restaurants`
(v2c subpages live under `/v2c/*`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3300
```

macOS shortcut: double‑click `启动预览.command`.

## Project layout

- `app/` — routes (App Router). v2/v2b/v2c each have scoped CSS.
- `components/` — shared UI (navbar, hero, products, sections, icons, version switcher).
- `public/generated/` — AI‑generated brand imagery (Google Gemini).
- `public/real/` — real product images (POS, terminal, NearBoss app).
- `scripts/gen-image.mjs` — image generation helper (reads `GEMINI_API_KEY` from `.env.local`).
- `AGENTS.md` — handoff notes for AI coding agents.

## Notes

- Secrets live only in `.env.local` (git‑ignored). Never commit API keys.
- Product imagery is partly AI‑generated placeholder; replace with final brand assets before production.
