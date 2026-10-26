import { NextResponse } from "next/server";

import { createPocketedgeServerClient, pocketedgeSupabaseConfigured } from "@/lib/pocketedge/supabase-ssr";

export const dynamic = "force-dynamic";

/** Returns session tokens for the browser client when cookies already hold a Supabase session. */
export async function GET() {
  if (!pocketedgeSupabaseConfigured()) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
  try {
    const supabase = await createPocketedgeServerClient();
    const { data, error } = await supabase.auth.getSession();
    if (error || !data.session?.access_token) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
    return NextResponse.json({
      ok: true,
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
