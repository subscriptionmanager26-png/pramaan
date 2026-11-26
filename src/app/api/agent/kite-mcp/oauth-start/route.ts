import { NextResponse } from "next/server";

import { requirePocketedgeAgentUser } from "@/lib/agent/require-pocketedge-user";
import { beginKiteMcpOAuth, kiteMcpBearer } from "@/lib/zerodha/kite-mcp-oauth";
import { zerodhaStoreConfigured } from "@/lib/zerodha/supabase";

export const dynamic = "force-dynamic";

function wantsJsonResponse(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.get("format") === "json") return true;
  return (request.headers.get("accept") || "").includes("application/json");
}

function authRequestFrom(request: Request, formToken?: string) {
  const headers = new Headers(request.headers);
  const token = formToken?.trim();
  if (token && !headers.get("authorization")) headers.set("authorization", `Bearer ${token}`);
  return new Request(request.url, { headers, method: "GET" });
}

async function startKiteMcpOAuth(request: Request) {
  const jsonOut = wantsJsonResponse(request);
  if (!zerodhaStoreConfigured()) {
    return NextResponse.json({ error: "zerodha_store_unconfigured" }, { status: 503 });
  }
  const auth = await requirePocketedgeAgentUser(request);
  if ("response" in auth) return auth.response;

  const bearer = await kiteMcpBearer();
  if (bearer) {
    if (jsonOut) return NextResponse.json({ ready: true });
    return NextResponse.redirect(new URL("/ai/connections?kiteMcp=ready", request.url));
  }

  const callback = new URL("/api/agent/kite-mcp/oauth-callback", request.url).toString();
  try {
    const { url } = await beginKiteMcpOAuth({ redirectUri: callback });
    if (jsonOut) return NextResponse.json({ ready: false, url });
    return NextResponse.redirect(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not start Kite MCP OAuth.";
    return NextResponse.json({ error: { message } }, { status: 502 });
  }
}

export async function GET(request: Request) {
  return startKiteMcpOAuth(request);
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const formToken = String(form?.get("access_token") || "");
  return startKiteMcpOAuth(authRequestFrom(request, formToken));
}