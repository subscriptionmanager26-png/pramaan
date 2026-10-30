import { cachedPocketedgeAccessToken, pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

export type ZerodhaLoginResult =
  | { ok: true; url: string }
  | { ok: true; loggedInAs: string }
  | { ok: false; error: string };

/** Ask personal-agents for a Kite login URL (Bearer JSON — same path Connections uses). */
export async function requestZerodhaLogin(action: "connect" | "login"): Promise<ZerodhaLoginResult> {
  // Warm cache for any follow-up calls; ignore failures here.
  void cachedPocketedgeAccessToken();
  try {
    const headers = await pocketedgeAuthHeaders();
    const res = await fetch("/api/agent/zerodha", {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
      signal: AbortSignal.timeout(45_000),
    });
    const json = (await res.json().catch(() => ({}))) as {
      url?: string;
      loggedInAs?: string;
      error?: { message?: string } | string;
    };
    if (!res.ok) {
      const err = json.error;
      return {
        ok: false,
        error:
          (typeof err === "object" && err?.message) ||
          (typeof err === "string" ? err : null) ||
          "Zerodha action failed.",
      };
    }
    if (typeof json.url === "string" && /^https:\/\//i.test(json.url)) {
      return { ok: true, url: json.url };
    }
    if (typeof json.loggedInAs === "string" && json.loggedInAs) {
      return { ok: true, loggedInAs: json.loggedInAs };
    }
    return { ok: false, error: "Zerodha did not return a login link. Try Connections, or retry in a minute." };
  } catch (err) {
    const timedOut =
      err instanceof Error && (err.name === "TimeoutError" || /timeout/i.test(err.message));
    return {
      ok: false,
      error: timedOut
        ? "Zerodha timed out. Open Connections to link Kite, then import here."
        : "Zerodha action failed.",
    };
  }
}
