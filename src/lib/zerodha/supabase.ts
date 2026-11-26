import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | undefined;

function supabaseUrl() {
  return (
    process.env.POCKETEDGE_SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL?.trim()
  );
}

function supabaseServiceRoleKey() {
  return process.env.POCKETEDGE_SUPABASE_SERVICE_ROLE_KEY?.trim();
}

export function zerodhaStoreConfigured() {
  return Boolean(supabaseUrl() && supabaseServiceRoleKey());
}

export function getZerodhaSupabaseAdmin(): SupabaseClient {
  if (client) return client;
  const url = supabaseUrl();
  const key = supabaseServiceRoleKey();
  if (!url || !key) {
    throw new Error("POCKETEDGE_SUPABASE_URL and POCKETEDGE_SUPABASE_SERVICE_ROLE_KEY are required for Zerodha.");
  }
  client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

export const ZERODHA_STORE_TABLE = "personal_agents_store";