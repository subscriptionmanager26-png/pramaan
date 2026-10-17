import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || "50";
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/files?limit=${encodeURIComponent(limit)}`,
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}

/** Proxy multipart uploads without re-parsing (keeps file bytes intact). */
export async function POST(request: Request) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("multipart/form-data")) {
    return NextResponse.json(
      { error: { message: "Upload must be multipart form data with a file field." } },
      { status: 400 },
    );
  }
  const bytes = await request.arrayBuffer();
  const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/files`, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: bytes,
  });
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}
