import { NextResponse } from "next/server";

import { POST_AUTH_REDIRECT_COOKIE } from "@/lib/pocketedge/auth-constants";
import { pocketedgeAuthCookieOptions } from "@/lib/pocketedge/auth-cookies";
import { createPocketedgeServerClient, pocketedgeSupabaseConfigured } from "@/lib/pocketedge/supabase-ssr";

export const dynamic = "force-dynamic";

/** Start Google OAuth on the server so the PKCE verifier lives in cookies (not localStorage). */
export async function GET(request: Request) {
  if (!pocketedgeSupabaseConfigured()) {
    return NextResponse.json({ error: "auth_not_configured" }, { status: 503 });
  }

  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;
  const returnTo = requestUrl.searchParams.get("returnTo")?.trim() || "/ai";
  const safeReturn =
    returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/ai";

  const supabase = await createPocketedgeServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: { prompt: "select_account" },
    },
  });

  if (error || !data?.url) {
    const message = error?.message || "Could not start Google sign-in.";
    return NextResponse.redirect(`${origin}/ai?auth_error=${encodeURIComponent(message)}`);
  }

  const cookieOpts = pocketedgeAuthCookieOptions(requestUrl.hostname);
  const response = NextResponse.redirect(data.url);
  response.cookies.set(POST_AUTH_REDIRECT_COOKIE, safeReturn, {
    ...cookieOpts,
    maxAge: 30 * 60,
  });
  return response;
}
