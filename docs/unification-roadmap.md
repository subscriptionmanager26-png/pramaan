# Unifying Pocketedge (main app) onto Pramaan

**Goal:** `www.pocketedge.in` (and eventually the primary brand domain) becomes the **Pramaan Next.js shell** — editorial + product in one place, with a path to retire the standalone Vite app (`social-pocketedge`) without losing features like **portfolio tracking**.

**Staging today:** [pramaan.pocketedge.in](https://pramaan.pocketedge.in) — use this host to validate unified nav, auth, and cutovers before moving `www`.

---

## Three layers (keep separate in code)

| Layer | What | Repos / runtime |
|--------|------|------------------|
| **Editorial** | Desk news, research memos, advisors, guides | `pramaan` (Next.js) |
| **Product** | Feed, ideas, live portfolio, AI chat, profiles, stock pages, settings | Today: `pocketedge` → Vercel `social-pocketedge` |
| **Platform** | Auth (Supabase `zweqxjeuwwfrlpbuuayg`), portfolios RPC, agent (Personal Agents API), DMA signals | Shared env across both frontends |

Pramaan should **not** reimplement Supabase or agent backends — only UI and routing.

---

## Feature map (main website → Pramaan)

| User-facing capability | Pocketedge path today | Pramaan today | Migration approach |
|------------------------|----------------------|---------------|-------------------|
| **Portfolio tracking** (holdings, P&amp;L, news on positions) | `/portfolio` | — | **P0 proxy** or embed SPA zone; long-term port UI to Next |
| **Portfolio review** (AI + uploads) | via `/ai` | `/portfolio` archive | **Done** — chat produces blocks; page lists history |
| **AI assistant** | `/ai` | `/ai` → redirect | **P0** — in-app chat on Pramaan (same BFF as pocketedge `api/agent/*`) |
| **Social feed** | `/feed` | — | Proxy `/feed` → app origin until port |
| **Ideas / discovery** | `/ideas` | `/research` (different product) | Keep both; link Ideas in nav during transition |
| **Social “News” tab** | `/news` (in-app) | `/news` (desk) | **Rename conflict** — desk stays `/news`; social → `/feed` or `/social` only |
| **Stock / ETF / fund pages** | `/stock/:sym`, … | — | Proxy asset URLs to app origin (SEO-critical) |
| **Profiles & shared portfolios** | `/@user`, `/@user/portfolio/:id` | — | Proxy; same auth cookies on `*.pocketedge.in` |
| **ETF iNAV, gold, MF screener** | `/etf-tracker`, … | `/tools` (outbound links) | Proxy paths on unified domain or inline later |
| **Business model library** | `/business-model` | partial in guides | Merge into `/research` or `/guides` over time |
| **Activity, settings** | in-app tabs | — | Proxy with app shell |
| **Advisors / SEBI voices** | — | `/advisors` | Stays on Pramaan |
| **OpenFin** | `openfin.pocketedge.in` | — | Separate product; link only |

---

## Recommended hosting model (phased)

### Phase A — **Dual host, shared auth** (pre-flip)

- **pramaan.pocketedge.in** — editorial staging.
- **www.pocketedge.in** — legacy Vite app (`social-pocketedge`).

### Phase B — **www = Pramaan, legacy on pramaan subdomain** (target now)

- **www.pocketedge.in** — **Pramaan** Vercel project (editorial + `/portfolio` AI archive).
- **pramaan.pocketedge.in** — **legacy** Vite app (`social-pocketedge`): feed, ideas, live portfolio, `/ai`, stock pages.
- Shared: Supabase Google login, `pe_sb_*` cookies on `.pocketedge.in`, Personal Agents on both projects.

`NEXT_PUBLIC_POCKETEDGE_APP_URL` / proxy origin → `https://pramaan.pocketedge.in`. Login and marketing canonical → `https://www.pocketedge.in`.

On **www**, `next.config.ts` rewrites (`POCKETEDGE_APP_PROXY=1`) proxy unmigrated paths to the legacy host:

- `/feed`, `/ideas`, `/portfolio`, `/ai`, `/stock/:path*`, `/etf-tracker`, …

Requirements:

- Rewrites must preserve **path and query**; test Vite asset paths (`/assets/*`) — may need additional rewrite rules or deploy Vite under a subpath prefix (e.g. `/app/*`) to avoid breaking.
- Auth cookies already scoped to `.pocketedge.in` — works when www serves from Pramaan.

Cutover steps: `scripts/flip-www-domains.md` (swap Vercel domains, then redeploy).

### Phase C — **Port high-value surfaces into Next** (incremental)

Order by revenue / retention:

1. **AI chat** — already partially on Pramaan (`PramaanAgentChat`, agent API routes); stop redirecting `/ai`.
2. **Portfolio tracking** — extract `@pocketedge/portfolio-core` package (Supabase RPC + DMA + `PortfolioPage` data layer); new `/portfolio/holdings` route.
3. **Asset detail pages** — SSR-friendly for SEO.
4. **Feed** — largest surface; last or keep as embedded SPA.

### Phase D — **Retire standalone SPA**

When proxy traffic hits zero for a path, remove rewrite and delete duplicate UI from Vite.

---

## Portfolio (two products, one nav)

| Surface | URL (target) | Purpose |
|---------|--------------|---------|
| **Reviews** | `/portfolio` | Read-only history from Personal Agents (no manual entry) |
| **Holdings** | `/portfolio/holdings` or proxied `/portfolio` tab | Live tracking, Zerodha import, form check — until ported, link/proxy to app origin |

Do not ask users to re-enter holdings on Pramaan; AI + imports stay in chat / main portfolio flow.

---

## Domain cutover checklist

1. Add `www.pocketedge.in` to **pramaan** Vercel project (or swap CNAME from `social-pocketedge` after Phase B rewrites work).
2. Copy production env from `social-pocketedge` → `pramaan` (`VITE_*` → `NEXT_PUBLIC_*` where applicable).
3. Smoke: login, `/portfolio` review list, proxied `/feed`, `/ai` message + file upload.
4. Keep `social-pocketedge` deployed as **rewrite target** until Phase C completes.

---

## What not to do

- Rebuild portfolio tracking as manual ticker forms on Pramaan.
- Merge desk `/news` with in-app social news without a clear URL split.
- Fork Supabase projects per frontend — one social project, one DMA project.

---

## Code pointers

- Pramaan app zone URL: `src/lib/product-routes.ts`
- Portfolio archive: `src/components/portfolio/PortfolioSection.tsx`
- Pocketedge shell tabs: `pocketedge/src/components/Shell.jsx`
- Pocketedge routes: `pocketedge/src/lib/routes.js`
