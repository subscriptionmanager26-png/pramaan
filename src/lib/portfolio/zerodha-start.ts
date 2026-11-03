import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

export type ZerodhaLoginResult =
  | { ok: true; url: string }
  | { ok: true; loggedInAs: string }
  | { ok: false; error: string };

/**
 * One-click Kite login: form POST in a new tab (survives popup blockers).
 * The start route redirects the tab to Zerodha — no about:blank, no second click.
 */
export async function openZerodhaLoginTab(action: "connect" | "login"): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const headers = await pocketedgeAuthHeaders();
    const token = headers.Authorization?.replace(/^Bearer\s+/i, "").trim();
    if (!token) return { ok: false, error: "Sign in required." };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/api/agent/zerodha/start";
    form.target = "_blank";
    form.rel = "noopener";
    form.style.display = "none";

    const fields: Record<string, string> = {
      action,
      access_token: token,
      returnTo: typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/ai/connections",
    };
    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    form.remove();
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not open Zerodha login." };
  }
}

/** JSON fallback when a form tab cannot be used (tests / embedded). */
export async function requestZerodhaLogin(action: "connect" | "login"): Promise<ZerodhaLoginResult> {
  try {
    const headers = await pocketedgeAuthHeaders();
    const res = await fetch("/api/agent/zerodha", {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
      signal: AbortSignal.timeout(55_000),
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
    return { ok: false, error: "Zerodha did not return a login link. Try again in a minute." };
  } catch (err) {
    const timedOut =
      err instanceof Error && (err.name === "TimeoutError" || /timeout/i.test(err.message));
    return {
      ok: false,
      error: timedOut
        ? "Zerodha timed out talking to Kite. Try again in a minute."
        : "Zerodha action failed.",
    };
  }
}
