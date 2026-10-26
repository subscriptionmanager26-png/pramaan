import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { POST_AUTH_REDIRECT_COOKIE } from "@/lib/pocketedge/auth-constants";
import { pocketedgeAuthCookieOptions } from "@/lib/pocketedge/auth-cookies";
import { createPocketedgeServerClient, pocketedgeSupabaseConfigured } from "@/lib/pocketedge/supabase-ssr";

export const dynamic = "force-dynamic";

/** Exchange OAuth code for a session; PKCE verifier is read from cookies set at /api/auth/google. */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;
  const code = requestUrl.searchParams.get("code");

  if (!pocketedgeSupabaseConfigured()) {
    return NextResponse.redirect(`${origin}/ai?auth_error=auth_not_configured`);
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/ai?auth_error=missing_code`);
  }

  const supabase = await createPocketedgeServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(`${origin}/ai?auth_error=${encodeURIComponent(error.message)}`);
  }

  const cookieOpts = pocketedgeAuthCookieOptions(requestUrl.hostname);
  const jar = await cookies();
  const dest = jar.get(POST_AUTH_REDIRECT_COOKIE)?.value?.trim() || "/ai";
  const safeDest = dest.startsWith("/") && !dest.startsWith("//") ? dest : "/ai";

  const response = NextResponse.redirect(`${origin}${safeDest}`);
  response.cookies.set(POST_AUTH_REDIRECT_COOKIE, "", { ...cookieOpts, maxAge: 0 });
  return response;
}
