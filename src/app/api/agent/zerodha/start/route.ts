import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

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
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}

/**
 * Form POST target for Connect / Log in — opens in a new tab, then 303s to Kite.
 * Matches the Pocketedge studio pattern (no about:blank + async location.assign).
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

  try {
    await ensureAgentUserSynced(auth.user);
    const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/zerodha`, {
      method: "POST",
      body: JSON.stringify({ action }),
    });
    const body = (await res.json().catch(() => ({}))) as {
      url?: string;
      loggedInAs?: string;
      error?: { message?: string } | string;
    };
    if (!res.ok) {
      const err = body.error;
      const message =
        (typeof err === "object" && err?.message) ||
        (typeof err === "string" ? err : null) ||
        "Could not start Zerodha login.";
      return tabPage("Zerodha", `<p>${escapeHtml(message)}</p><p><a href="${escapeHtml(returnTo)}">Back</a></p>`, res.status);
    }
    if (typeof body.url === "string" && /^https:\/\//i.test(body.url)) {
      return NextResponse.redirect(body.url, 303);
    }
    if (body.loggedInAs) {
      const dest = new URL(returnTo, request.url);
      dest.searchParams.set("zerodha", "ready");
      return NextResponse.redirect(dest, 303);
    }
    return tabPage(
      "Zerodha",
      `<p>Zerodha did not return a login link. Close this tab and try again.</p><p><a href="${escapeHtml(returnTo)}">Back</a></p>`,
      502,
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not reach Zerodha.";
    return tabPage("Zerodha", `<p>${escapeHtml(message)}</p><p><a href="${escapeHtml(returnTo)}">Back</a></p>`, 502);
  }
}
