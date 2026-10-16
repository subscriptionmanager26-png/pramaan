import { NextResponse } from "next/server";

import { readPocketedgeSessionRaw, tokensFromSessionJson } from "@/lib/pocketedge/cookie-session";

export const dynamic = "force-dynamic";

/** Hydrate the Pramaan tab from the shared `.pocketedge.in` session cookie (if present). */
export async function GET(request: Request) {
  const raw = readPocketedgeSessionRaw(request.headers.get("cookie"));
  if (!raw) {
    return NextResponse.json({ ok: false }, { headers: { "Cache-Control": "private, no-store" } });
  }
  const tokens = tokensFromSessionJson(raw);
  if (!tokens) {
    return NextResponse.json({ ok: false }, { headers: { "Cache-Control": "private, no-store" } });
  }
  return NextResponse.json(
    { ok: true, access_token: tokens.accessToken, refresh_token: tokens.refreshToken },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
