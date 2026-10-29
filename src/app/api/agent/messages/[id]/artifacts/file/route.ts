import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type Params = { params: Promise<{ id: string }> };

const UNTRUSTED_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Content-Security-Policy": "sandbox",
};

export async function GET(request: Request, { params }: Params) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  const { id } = await params;
  const url = new URL(request.url);
  const path = url.searchParams.get("path") || "";
  const as = url.searchParams.get("as");
  const qs = new URLSearchParams({ path });
  if (as) qs.set("as", as);

  const upstream = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages/${encodeURIComponent(id)}/artifacts/file?${qs}`,
    { redirect: "manual" },
  );

  if (upstream.status >= 300 && upstream.status < 400) {
    const location = upstream.headers.get("location");
    if (!location) return NextResponse.json({ error: "missing_redirect" }, { status: 502 });
    const file = await fetch(location, { cache: "no-store" });
    if (!file.ok) return NextResponse.json({ error: "artifact_fetch_failed" }, { status: 502 });
    const headers = new Headers(UNTRUSTED_HEADERS);
    const type = file.headers.get("content-type");
    if (type) headers.set("Content-Type", type);
    headers.set("Cache-Control", "private, no-store");
    const name = path.split("/").pop() || "download";
    headers.set("Content-Disposition", `attachment; filename="${name.replace(/[^\x20-\x7e]/g, "_")}"`);
    return new NextResponse(file.body, { status: 200, headers });
  }

  const body = await upstream.arrayBuffer();
  const headers = new Headers(upstream.headers);
  for (const [k, v] of Object.entries(UNTRUSTED_HEADERS)) headers.set(k, v);
  return new NextResponse(body, { status: upstream.status, headers });
}
