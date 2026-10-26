/** Static screener JSON — served from `public/data/screener` on www (avoids broken gzip proxy to legacy). */
export function screenerDataUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/data/screener${p}`;
}
