"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";

import { usePocketedgeAuth } from "@/lib/pocketedge/use-pocketedge-auth";

/**
 * Keeps PostHog person identity in sync with PocketEdge auth.
 * Init lives in instrumentation-client.ts; this only identify/resets.
 */
export function PostHogIdentify() {
  const auth = usePocketedgeAuth();
  const lastId = useRef<string | null>(null);

  useEffect(() => {
    if (!auth.ready || !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;

    if (auth.user?.id) {
      if (lastId.current === auth.user.id) return;
      lastId.current = auth.user.id;
      posthog.identify(auth.user.id, {
        email: auth.user.email ?? undefined,
        name: auth.displayName || undefined,
        username: auth.profile?.username ?? undefined,
      });
      return;
    }

    if (lastId.current) {
      lastId.current = null;
      posthog.reset();
    }
  }, [auth.ready, auth.user, auth.displayName, auth.profile?.username]);

  return null;
}
