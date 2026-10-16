import { createClient } from "@supabase/supabase-js";

function adminClient() {
  const url = process.env.POCKETEDGE_SUPABASE_URL || process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
  const key = process.env.POCKETEDGE_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return undefined;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

/** Column on `profiles` (or table) your backend toggles when a user may use the agent. */
function accessField() {
  return process.env.POCKETEDGE_AGENT_ACCESS_FIELD || "agent_access";
}

/**
 * Whether this user may use the Pocketedge personal agent.
 * Reads `profiles.<field>` when service role is set; otherwise falls back to user_metadata.
 */
export async function userHasAgentAccess(userId: string, userMetadata?: Record<string, unknown>) {
  const field = accessField();
  const supabase = adminClient();
  if (supabase) {
    const { data, error } = await supabase.from("profiles").select(field).eq("id", userId).maybeSingle();
    if (!error && data && typeof data === "object" && field in data) {
      return Boolean((data as Record<string, unknown>)[field]);
    }
  }
  if (userMetadata && field in userMetadata) return Boolean(userMetadata[field]);
  if (userMetadata?.agent_access !== undefined) return Boolean(userMetadata.agent_access);
  return false;
}
