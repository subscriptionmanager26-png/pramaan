"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { clearPostAuthRedirect, getPostAuthRedirect } from "@/lib/pocketedge/auth-storage";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

/** Finishes Supabase Google OAuth (PKCE) and returns the user to their prior page. */
export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) {
      setError("Sign-in is not configured.");
      return;
    }
    const supabase = getPocketedgeSupabase();
    let cancelled = false;

    (async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (cancelled) return;
        if (exchangeError) {
          setError(exchangeError.message);
          return;
        }
      } else {
        const { error: sessionError } = await supabase.auth.getSession();
        if (cancelled) return;
        if (sessionError) {
          setError(sessionError.message);
          return;
        }
      }
      const dest = getPostAuthRedirect() || "/ai";
      clearPostAuthRedirect();
      router.replace(dest);
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (error) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <p className="text-[15px] text-red-700">{error}</p>
        <a href="/ai" className="btn-primary mt-6 inline-flex">Back to AI</a>
      </div>
    );
  }

  return <p className="py-16 text-center text-ink-2">Signing you in…</p>;
}
