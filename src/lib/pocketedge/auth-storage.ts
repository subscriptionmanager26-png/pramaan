/** Legacy shared Supabase session mirror across *.pocketedge.in (main pocketedge app). */

import { POST_AUTH_REDIRECT_COOKIE } from "@/lib/pocketedge/auth-constants";

const COOKIE_PREFIX = "pe_sb_";
const POST_AUTH_REDIRECT_MAX_AGE_SEC = 30 * 60;
const MAX_COOKIE_VALUE_CHARS = 3200;

function sharedCookieDomain() {
  if (typeof window === "undefined") return null;
  const host = window.location.hostname;
  if (host === "localhost" || host.endsWith(".localhost") || /^\d+\.\d+\.\d+\.\d+$/.test(host)) return null;
  if (host.endsWith("pocketedge.in")) return ".pocketedge.in";
  return null;
}

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, { maxAgeDays = 30, maxAgeSec }: { maxAgeDays?: number; maxAgeSec?: number } = {}) {
  const domain = sharedCookieDomain();
  const maxAge = maxAgeSec ?? maxAgeDays * 86400;
  let cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  if (domain) cookie += `; domain=${domain}`;
  if (window.location.protocol === "https:") cookie += "; Secure";
  document.cookie = cookie;
}

function deleteCookie(name: string) {
  const domain = sharedCookieDomain();
  let cookie = `${name}=; path=/; max-age=0`;
  if (domain) cookie += `; domain=${domain}`;
  document.cookie = cookie;
}

function isSessionShaped(raw: string | null) {
  if (!raw || typeof raw !== "string") return false;
  if (!raw.startsWith("{")) return false;
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const session = parsed.currentSession as Record<string, unknown> | undefined;
    return Boolean(parsed.access_token || session?.access_token || parsed.user);
  } catch {
    return false;
  }
}

export function setPostAuthRedirect(url: string) {
  writeCookie(POST_AUTH_REDIRECT_COOKIE, url, { maxAgeSec: POST_AUTH_REDIRECT_MAX_AGE_SEC });
}

export function getPostAuthRedirect() {
  return readCookie(POST_AUTH_REDIRECT_COOKIE);
}

export function clearPostAuthRedirect() {
  deleteCookie(POST_AUTH_REDIRECT_COOKIE);
}

export function pocketedgeAuthStorageKey() {
  const url = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
  if (!url) return null;
  try {
    const ref = new URL(url).hostname.split(".")[0];
    return `sb-${ref}-auth-token`;
  } catch {
    return null;
  }
}

/** Cookie name used by pocketedge.in for cross-subdomain session mirror (and HttpOnly when set). */
export function pocketedgeSessionCookieName() {
  const key = pocketedgeAuthStorageKey();
  return key ? `${COOKIE_PREFIX}${key}` : null;
}

export function createSharedAuthStorage() {
  return {
    getItem(key: string) {
      try {
        const fromLs = window.localStorage.getItem(key);
        if (fromLs != null) return fromLs;
      } catch {
        /* ignore */
      }

      const fromCookie = readCookie(`${COOKIE_PREFIX}${key}`);
      if (fromCookie == null) return null;

      if (isSessionShaped(fromCookie) || !fromCookie.startsWith("{")) {
        try {
          window.localStorage.setItem(key, fromCookie);
        } catch {
          /* ignore */
        }
        return fromCookie;
      }

      deleteCookie(`${COOKIE_PREFIX}${key}`);
      return null;
    },
    setItem(key: string, value: string) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* ignore */
      }

      const encodedLen = encodeURIComponent(String(value ?? "")).length;
      if (encodedLen <= MAX_COOKIE_VALUE_CHARS) {
        writeCookie(`${COOKIE_PREFIX}${key}`, value);
      } else {
        deleteCookie(`${COOKIE_PREFIX}${key}`);
      }
    },
    removeItem(key: string) {
      deleteCookie(`${COOKIE_PREFIX}${key}`);
      try {
        window.localStorage.removeItem(key);
      } catch {
        /* ignore */
      }
    },
  };
}
