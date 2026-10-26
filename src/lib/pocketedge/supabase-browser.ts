import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

import { pocketedgeAuthCookieOptions } from "@/lib/pocketedge/auth-cookies";

const url = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;

export function pocketedgeAuthConfigured() {
  return Boolean(url && anon);
}

let client: SupabaseClient | null = null;

export function getPocketedgeSupabase() {
  if (!url || !anon) throw new Error("Pocketedge auth is not configured.");
  if (!client) {
    const host = typeof window !== "undefined" ? window.location.hostname : undefined;
    client = createBrowserClient(url, anon, {
      cookieOptions: pocketedgeAuthCookieOptions(host),
    });
  }
  return client;
}
