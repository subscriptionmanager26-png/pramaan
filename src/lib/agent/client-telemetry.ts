import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

/** Fire-and-forget client → BFF event so silent chat UI failures show in Vercel logs. */
export function reportAgentClientEvent(
  event: string,
  props: Record<string, string | number | boolean | null | undefined> = {},
) {
  if (typeof window === "undefined") return;
  const body = JSON.stringify({
    event,
    props,
    path: window.location.pathname + window.location.search,
    at: new Date().toISOString(),
  });
  void (async () => {
    try {
      const headers = await pocketedgeAuthHeaders();
      await fetch("/api/agent/client-event", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body,
        keepalive: true,
      });
    } catch {
      // Never block chat on telemetry.
    }
  })();
}
