import { pocketedgeSessionCookieName } from "./auth-storage";

export function readPocketedgeSessionRaw(cookieHeader: string | null): string | null {
  const name = pocketedgeSessionCookieName();
  if (!name || !cookieHeader) return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = cookieHeader.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

export function tokensFromSessionJson(raw: string): { accessToken: string; refreshToken: string } | null {
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const nested = parsed.currentSession as Record<string, unknown> | undefined;
    const accessToken =
      (typeof parsed.access_token === "string" && parsed.access_token) ||
      (typeof nested?.access_token === "string" && nested.access_token) ||
      "";
    const refreshToken =
      (typeof parsed.refresh_token === "string" && parsed.refresh_token) ||
      (typeof nested?.refresh_token === "string" && nested.refresh_token) ||
      "";
    if (!accessToken) return null;
    return { accessToken, refreshToken };
  } catch {
    return null;
  }
}
