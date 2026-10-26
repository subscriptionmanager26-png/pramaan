import { setPostAuthRedirect } from "./auth-storage";
import { getPocketedgeSupabase } from "./supabase-browser";

/** Align browser client with HttpOnly/cookie session after server OAuth or cross-tab login. */
export async function hydratePocketedgeSessionFromCookie(): Promise<boolean> {
  const res = await fetch("/api/pocketedge/session", { credentials: "include" });
  if (!res.ok) return false;
  const body = (await res.json()) as { ok?: boolean; access_token?: string; refresh_token?: string };
  if (!body.ok || !body.access_token) return false;
  const supabase = getPocketedgeSupabase();
  const { error } = await supabase.auth.setSession({
    access_token: body.access_token,
    refresh_token: body.refresh_token ?? "",
  });
  return !error;
}

/** Server-side OAuth start so PKCE verifier is stored in cookies (safe for account switching). */
export function signInWithGoogleOnPramaan() {
  const returnTo = window.location.href.split("#")[0];
  const qs = new URLSearchParams({ returnTo });
  window.location.assign(`/api/auth/google?${qs.toString()}`);
}

/** Same Google account as pocketedge.in — opens native sign-in on www. */
export function openPocketedgeLogin() {
  setPostAuthRedirect(window.location.href.split("#")[0]);
  window.location.href = "/ai";
}
