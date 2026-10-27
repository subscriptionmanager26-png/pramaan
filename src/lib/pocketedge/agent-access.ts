import { createClient } from "@supabase/supabase-js";

function supabaseUrl() {
  return process.env.POCKETEDGE_SUPABASE_URL || process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
}

function anonKey() {
  return process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;
}

function serviceRoleKey() {
  const key =
    process.env.POCKETEDGE_SUPABASE_SERVICE_ROLE_KEY?.trim() ||
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  return key || undefined;
}

/** Column on `social_profiles` your backend toggles when a user may use the agent. */
function accessField() {
  return process.env.POCKETEDGE_AGENT_ACCESS_FIELD || "agent_access";
}

function flagFromMetadata(userMetadata?: Record<string, unknown>) {
  const field = accessField();
  if (userMetadata && field in userMetadata) return Boolean(userMetadata[field]);
  if (userMetadata?.agent_access !== undefined) return Boolean(userMetadata.agent_access);
  return false;
}

const ACCESS_CACHE_MS = 10 * 60 * 1000;
const accessCache = new Map<string, { allowed: boolean; exp: number }>();

function cacheGet(userId: string): boolean | null {
  const hit = accessCache.get(userId);
  if (!hit) return null;
  if (hit.exp <= Date.now()) {
    accessCache.delete(userId);
    return null;
  }
  return hit.allowed;
}

function cacheSet(userId: string, allowed: boolean) {
  if (accessCache.size > 500) accessCache.clear();
  accessCache.set(userId, { allowed, exp: Date.now() + ACCESS_CACHE_MS });
}

async function readProfileFlagAdmin(userId: string): Promise<boolean | null> {
  const url = supabaseUrl();
  const key = serviceRoleKey();
  const field = accessField();
  if (!url || !key) return null;
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await supabase
    .from("social_profiles")
    .select(field)
    .eq("user_id", userId)
    .maybeSingle();
  if (error || !data || typeof data !== "object" || !(field in data)) return null;
  return Boolean((data as Record<string, unknown>)[field]);
}

async function readProfileFlagAsUser(userId: string, accessToken: string): Promise<boolean | null> {
  const url = supabaseUrl();
  const anon = anonKey();
  const field = accessField();
  if (!url || !anon) return null;
  const supabase = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase
    .from("social_profiles")
    .select(field)
    .eq("user_id", userId)
    .maybeSingle();
  if (error) return null;
  if (!data) return false;
  if (typeof data === "object" && field in data) return Boolean((data as Record<string, unknown>)[field]);
  return null;
}

/** Persist entitlement on social_profiles when we have service role (best-effort). */
export async function persistAgentAccessGranted(userId: string) {
  const url = supabaseUrl();
  const key = serviceRoleKey();
  const field = accessField();
  if (!url || !key) return;
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  await supabase
    .from("social_profiles")
    .update({ [field]: true, updated_at: new Date().toISOString() })
    .eq("user_id", userId);
}

/**
 * Whether this user may use the Pocketedge personal agent.
 * Hot path: JWT metadata / in-memory cache first; at most one profile read.
 */
export async function userHasAgentAccess(
  userId: string,
  userMetadata?: Record<string, unknown>,
  accessToken?: string,
) {
  if (process.env.POCKETEDGE_AGENT_ACCESS_OPEN === "1") return true;

  const fromMeta = flagFromMetadata(userMetadata);
  if (fromMeta) {
    cacheSet(userId, true);
    void persistAgentAccessGranted(userId);
    return true;
  }

  const cached = cacheGet(userId);
  if (cached !== null) return cached;

  const fromAdmin = await readProfileFlagAdmin(userId);
  if (fromAdmin === true) {
    cacheSet(userId, true);
    return true;
  }
  if (fromAdmin === false) {
    cacheSet(userId, false);
    return false;
  }

  // Service role unavailable / row missing — try once as the user.
  if (accessToken) {
    const fromUser = await readProfileFlagAsUser(userId, accessToken);
    if (fromUser === true) {
      cacheSet(userId, true);
      return true;
    }
    if (fromUser === false) {
      cacheSet(userId, false);
      return false;
    }
  }

  return false;
}

/** True only when service role confirms agent_access is false (not when config is missing). */
export async function agentAccessDefinitelyDisabled(userId: string) {
  const cached = cacheGet(userId);
  if (cached === false) return true;
  const fromAdmin = await readProfileFlagAdmin(userId);
  if (fromAdmin === false) {
    cacheSet(userId, false);
    return true;
  }
  return false;
}
