/** Canonical public origin for www (Pramaan on pocketedge.in). */
export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.pocketedge.in").replace(/\/$/, "");
}
