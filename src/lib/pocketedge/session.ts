import { createClient } from "@supabase/supabase-js";

import { readPocketedgeSessionRaw, tokensFromSessionJson } from "./cookie-session";

export type PocketedgeUser = {
  id: string;
  email?: string;
  name?: string;
  metadata?: Record<string, unknown>;
};

function authEnv() {
  const url = process.env.POCKETEDGE_SUPABASE_URL || process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
  const key =
    process.env.POCKETEDGE_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;
  if (!url || !key) return undefined;
  return { url, key };
}

export function accessTokenFromRequest(request: Request): string | undefined {
  const header = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  if (header) return header;
  const raw = readPocketedgeSessionRaw(request.headers.get("cookie"));
  if (!raw) return undefined;
  return tokensFromSessionJson(raw)?.accessToken;
}

/** Validates Supabase access token from Authorization header or shared pocketedge.in session cookie. */
export async function pocketedgeUserFromRequest(request: Request): Promise<PocketedgeUser | undefined> {
  const token = accessTokenFromRequest(request);
  if (!token) return undefined;
  const env = authEnv();
  if (!env) return undefined;
  const supabase = createClient(env.url, env.key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return undefined;
  const meta = data.user.user_metadata as Record<string, unknown> | undefined;
  const name =
    (typeof meta?.full_name === "string" && meta.full_name) ||
    (typeof meta?.name === "string" && meta.name) ||
    undefined;
  return { id: data.user.id, email: data.user.email, name, metadata: meta };
}
