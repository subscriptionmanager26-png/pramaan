import { siteUrl } from "@/lib/site-url";

/**
 * Where the legacy Pocketedge SPA (social-pocketedge) lives during unification.
 * Pramaan editorial routes stay on this origin; product paths link or proxy here until ported.
 */
/** Legacy Vite app (`social-pocketedge`) after www → Pramaan flip. */
const DEFAULT_APP = "https://pramaan.pocketedge.in";

export function pocketedgeAppOrigin() {
  return (process.env.NEXT_PUBLIC_POCKETEDGE_APP_URL || DEFAULT_APP).replace(/\/$/, "");
}

/** Public www host — use for tools proxied onto www (see next.config rewrites). */
export function pocketedgeSitePath(path: string) {
  const base = siteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
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

/** Native Pramaan AI chat on www (not the legacy SPA). */
export function pocketedgeAiUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_POCKETEDGE_AI_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.pocketedge.in").replace(/\/$/, "");
  return `${site}/ai`;
}

export function pocketedgeFeedUrl() {
  return pocketedgeAppPath("/feed");
}

export function pocketedgeIdeasUrl() {
  return pocketedgeAppPath("/ideas");
}

/** Product paths we intend to proxy onto the Pramaan host in Phase B (see docs/unification-roadmap.md). */
export const POCKETEDGE_PROXY_PATHS = [
  "/assets/:path*",
  "/logo.png",
  "/manifest.webmanifest",
  "/sw.js",
  "/feed",
  "/ideas",
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
  "/markets",
  "/explore",
  "/resources/:path*",
  "/business-model",
  "/business-model/:path*",
  "/@:handle",
] as const;
