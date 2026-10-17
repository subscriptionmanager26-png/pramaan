import { setPostAuthRedirect } from "./auth-storage";
import { getPocketedgeSupabase } from "./supabase-browser";

/** Copy shared `.pocketedge.in` session cookie into this tab's Supabase client when possible. */
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

export async function signInWithGoogleOnPramaan() {
  const supabase = getPocketedgeSupabase();
  const returnTo = window.location.href.split("#")[0];
  const redirectTo = `${window.location.origin}/auth/callback`;
  setPostAuthRedirect(returnTo);
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      queryParams: { prompt: "select_account" },
    },
  });
  if (error) throw error;
}

/** Same Google account as pocketedge.in — opens native sign-in on www. */
export function openPocketedgeLogin() {
  setPostAuthRedirect(window.location.href.split("#")[0]);
  window.location.href = "/ai";
}
