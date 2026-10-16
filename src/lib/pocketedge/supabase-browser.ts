import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { createSharedAuthStorage } from "./auth-storage";

const url = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;

export function pocketedgeAuthConfigured() {
  return Boolean(url && anon);
}

let client: SupabaseClient | null = null;

export function getPocketedgeSupabase() {
  if (!url || !anon) throw new Error("Pocketedge auth is not configured.");
  if (!client) {
    client = createClient(url, anon, {
      auth: {
        storage: createSharedAuthStorage(),
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: "pkce",
      },
    });
  }
  return client;
}
