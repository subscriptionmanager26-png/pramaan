/**
 * Where the legacy Pocketedge SPA (social-pocketedge) lives during unification.
 * Pramaan editorial routes stay on this origin; product paths link or proxy here until ported.
 */
const DEFAULT_APP = "https://www.pocketedge.in";

export function pocketedgeAppOrigin() {
  return (process.env.NEXT_PUBLIC_POCKETEDGE_APP_URL || DEFAULT_APP).replace(/\/$/, "");
}

export function pocketedgeAppPath(path: string) {
  const base = pocketedgeAppOrigin();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Live holdings, import, and position-level news — main app portfolio tab. */
export function pocketedgePortfolioTrackingUrl() {
  return pocketedgeAppPath("/portfolio");
}

export function pocketedgeAiUrl() {
  return (
    process.env.NEXT_PUBLIC_POCKETEDGE_AI_URL?.replace(/\/$/, "") || pocketedgeAppPath("/ai")
  );
}

export function pocketedgeFeedUrl() {
  return pocketedgeAppPath("/feed");
}

export function pocketedgeIdeasUrl() {
  return pocketedgeAppPath("/ideas");
}

/** Product paths we intend to proxy onto the Pramaan host in Phase B (see docs/unification-roadmap.md). */
export const POCKETEDGE_PROXY_PATHS = [
  "/feed",
  "/ideas",
  "/ai",
  "/activity",
  "/settings",
  "/portfolio",
  "/stock/:path*",
  "/etf/:path*",
  "/fund/:path*",
  "/index/:path*",
  "/commodity/:path*",
  "/etf-tracker",
  "/gold-tracker",
  "/resources/:path*",
  "/business-model/:path*",
  "/@:handle",
] as const;
