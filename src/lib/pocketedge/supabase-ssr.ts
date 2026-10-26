import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { pocketedgeAuthCookieOptions } from "@/lib/pocketedge/auth-cookies";

const url = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_POCKETEDGE_SUPABASE_ANON_KEY;

export function pocketedgeSupabaseConfigured() {
  return Boolean(url && anon);
}

export { pocketedgeAuthCookieOptions };

export async function createPocketedgeServerClient() {
  if (!url || !anon) throw new Error("Pocketedge auth is not configured.");
  const cookieStore = await cookies();
  const base = pocketedgeAuthCookieOptions();

  return createServerClient(url, anon, {
    cookieOptions: base,
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          cookieStore.set(name, value, { ...base, ...options });
        }
      },
    },
  });
}
