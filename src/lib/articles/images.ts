/** Deterministic placeholder cover for a research memo (Finimize-style thumbnails). */
export function articleCover(slug: string, size: "card" | "hero" | "thumb" = "card"): string {
  const dims = size === "hero" ? "1400/780" : size === "thumb" ? "640/400" : "960/600";
  return `https://picsum.photos/seed/pramaan-${encodeURIComponent(slug)}/${dims}`;
}
