import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";

let cached: { token: string; until: number } | null = null;

/** Cached Bearer headers — avoids hammering Supabase auth on every poll. */
export async function pocketedgeAuthHeaders(): Promise<Record<string, string>> {
  const now = Date.now();
  if (cached && cached.until > now + 60_000) {
    return { Authorization: `Bearer ${cached.token}` };
  }
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  const until = data.session?.expires_at ? data.session.expires_at * 1000 : now + 3_600_000;
  cached = { token, until };
  return { Authorization: `Bearer ${token}` };
}

export function clearPocketedgeAuthHeaderCache() {
  cached = null;
}
