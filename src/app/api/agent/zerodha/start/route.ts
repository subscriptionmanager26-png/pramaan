import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 30;
/** Run next to Indian users / Kite — cuts Mumbai→US→Kite hairpin latency. */
export const preferredRegion = ["bom1"];

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tabPage(title: string, body: string, status = 200) {
  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>${escapeHtml(title)}</title>
<style>body{font-family:ui-sans-serif,system-ui,sans-serif;padding:2rem;max-width:32rem;line-height:1.5;color:#111}
a{color:#0b6e4f}</style></head><body>${body}</body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );
}

/**
 * Return a spinner tab immediately, then fetch the Kite URL from the JSON route.
 * Keeps Connect from sitting on a blank tab while PA talks to mcp.kite.trade.
 */
function waitingTab(input: { action: string; token: string; returnTo: string }) {
  const payload = JSON.stringify({
    action: input.action,
    token: input.token,
    returnTo: input.returnTo,
  });
  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Opening Zerodha</title>
<style>
body{font-family:ui-sans-serif,system-ui,sans-serif;padding:2rem;max-width:32rem;line-height:1.5;color:#111}
.spin{display:inline-block;width:1.1rem;height:1.1rem;border:2px solid #ccc;border-top-color:#0b6e4f;border-radius:50%;animation:s .7s linear infinite;vertical-align:-.15rem;margin-right:.5rem}
@keyframes s{to{transform:rotate(360deg)}}
a{color:#0b6e4f}#err{display:none;color:#a11}
</style></head><body>
<p><span class="spin" aria-hidden="true"></span>Opening Zerodha login…</p>
<p id="err"></p>
<p><a href="${escapeHtml(input.returnTo)}">Back</a></p>
<script>
(async () => {
  const cfg = ${payload};
  const err = document.getElementById("err");
  try {
    const headers = { "Content-Type": "application/json" };
    if (cfg.token) headers.Authorization = "Bearer " + cfg.token;
    const res = await fetch("/api/agent/zerodha", {
      method: "POST",
      headers,
      credentials: "same-origin",
      body: JSON.stringify({ action: cfg.action }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = (body && body.error && (body.error.message || body.error)) || "Could not start Zerodha login.";
      throw new Error(typeof msg === "string" ? msg : "Could not start Zerodha login.");
    }
    if (body && typeof body.url === "string" && /^https:\\/\\//i.test(body.url)) {
      location.replace(body.url);
      return;
    }
    if (body && body.loggedInAs) {
      const u = new URL(cfg.returnTo, location.origin);
      u.searchParams.set("zerodha", "ready");
      location.replace(u.toString());
      return;
    }
    throw new Error("Zerodha did not return a login link. Try again in a minute.");
  } catch (e) {
    err.style.display = "block";
    err.textContent = e && e.message ? e.message : "Could not reach Zerodha.";
  }
})();
</script>
</body></html>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );
}

/**
 * Form POST target for Connect / Log in — opens in a new tab with an instant spinner,
 * then the tab fetches the Kite URL (does not block the form response on mcp.kite.trade).
 */
export async function POST(request: Request) {
  if (!personalAgentsConfigured()) {
    return tabPage("Zerodha", "<p>Agent backend is not configured.</p>", 503);
  }
  const form = await request.formData().catch(() => null);
  const action = String(form?.get("action") || "connect");
  if (action !== "connect" && action !== "login") {
    return tabPage("Zerodha", "<p>Unknown action.</p>", 400);
  }

  const returnToRaw = String(form?.get("returnTo") || "/ai/connections");
  const returnTo = returnToRaw.startsWith("/") && !returnToRaw.startsWith("//") ? returnToRaw : "/ai/connections";

  const formToken = String(form?.get("access_token") || "").trim();
  const authHeaders = new Headers();
  const cookie = request.headers.get("cookie");
  if (cookie) authHeaders.set("cookie", cookie);
  const bearer = request.headers.get("authorization") || (formToken ? `Bearer ${formToken}` : null);
  if (bearer) authHeaders.set("authorization", bearer);
  const auth = await requireAgentUser(new Request(request.url, { headers: authHeaders }));
  if ("response" in auth) {
    return tabPage(
      "Sign in required",
      `<p>Sign in on Pocketedge, then try Connect Zerodha again.</p><p><a href="${escapeHtml(returnTo)}">Back</a></p>`,
      401,
    );
  }

  return waitingTab({ action, token: formToken, returnTo });
}
