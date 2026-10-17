# Domain flip

| Host | Serves |
|------|--------|
| **www.pocketedge.in** | Pramaan (Next.js) |
| **pramaan.pocketedge.in** | Legacy app (Vite / `social-pocketedge`) |

Legacy traffic that used to live on www moves to **pramaan.pocketedge.in**; www becomes the unified Pramaan shell (with optional path proxy to the legacy host).

Run these in the Vercel dashboard (team **Kushagra's projects**) or with a logged-in CLI (`vercel login`).

## 1. Move domains off `social-pocketedge`

Project → **social-pocketedge** → Settings → Domains → remove:

- `www.pocketedge.in`
- `pocketedge.in` (apex redirect)

Leave redirects (`social.pocketedge.in`, `saffronai.in`, …) pointing at **`www.pocketedge.in`** (Pramaan after flip).

## 2. Attach main host to `pramaan`

Project → **pramaan** → Settings → Domains → add:

- `www.pocketedge.in` (production)
- `pocketedge.in` → redirect to `www.pocketedge.in` (308)

Remove `pramaan.pocketedge.in` from this project.

## 3. Attach legacy host to `social-pocketedge`

Project → **social-pocketedge** → Settings → Domains → add:

- `pramaan.pocketedge.in` (production)

Optional: set `social-pocketedge.vercel.app` redirect to `pramaan.pocketedge.in`.

## 4. Production env (pramaan)

Already set via automation when possible:

- `NEXT_PUBLIC_POCKETEDGE_APP_URL=https://pramaan.pocketedge.in`
- `NEXT_PUBLIC_POCKETEDGE_AI_URL=https://pramaan.pocketedge.in/ai`
- `POCKETEDGE_APP_PROXY=1`
- `POCKETEDGE_APP_ORIGIN=https://pramaan.pocketedge.in`
- `NEXT_PUBLIC_POCKETEDGE_LOGIN_URL=https://www.pocketedge.in`

Redeploy **pramaan** after env + domain changes.

## 5. Smoke

- https://www.pocketedge.in/ — Pramaan home / nav
- https://www.pocketedge.in/portfolio — AI review archive
- https://www.pocketedge.in/feed — proxied Vite feed
- https://pramaan.pocketedge.in/feed — legacy app directly
- https://pramaan.pocketedge.in/ai — AI chat
