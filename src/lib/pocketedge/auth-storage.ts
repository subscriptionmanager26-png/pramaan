/** Shared Supabase session storage across *.pocketedge.in (same as pocketedge.in). */

const COOKIE_PREFIX = "pe_sb_";

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

function writeCookie(name: string, value: string, maxAgeSec = 30 * 86400) {
  const domain = sharedCookieDomain();
  let cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSec}; SameSite=Lax`;
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

export function createSharedAuthStorage() {
  return {
    getItem(key: string) {
      try {
        const fromLs = window.localStorage.getItem(key);
        if (fromLs != null) return fromLs;
      } catch {
        /* ignore */
      }
      return readCookie(`${COOKIE_PREFIX}${key}`);
    },
    setItem(key: string, value: string) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* ignore */
      }
      if (value.length <= 3200) writeCookie(`${COOKIE_PREFIX}${key}`, value);
    },
    removeItem(key: string) {
      try {
        window.localStorage.removeItem(key);
      } catch {
        /* ignore */
      }
      deleteCookie(`${COOKIE_PREFIX}${key}`);
    },
  };
}
