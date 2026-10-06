import { normalizeSubstackUrl } from "../ingest/feeds";

export function twitterHandleFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    if (host !== "x.com" && host !== "twitter.com") return null;
    const part = u.pathname.split("/").filter(Boolean)[0];
    if (!part || part === "i" || part === "intent" || part === "search") return null;
    return part.replace(/^@/, "");
  } catch {
    return null;
  }
}

export function externalIdFromUrl(platform: "twitter" | "substack", url: string): string | null {
  try {
    const u = new URL(url);
    if (platform === "twitter") {
      return u.pathname.match(/status\/(\d+)/)?.[1] ?? null;
    }
    const slug = u.pathname.match(/\/p\/([^/?#]+)/)?.[1];
    return slug ?? null;
  } catch {
    return null;
  }
}

export function isRetweetText(text: string | null | undefined) {
  if (!text) return false;
  return /^\s*rt\s+@/i.test(text) || /^\s*rt\s+/i.test(text);
}

export function canonicalTwitterUrl(handle: string) {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

export function canonicalSubstackUrl(url: string) {
  return normalizeSubstackUrl(url);
}
