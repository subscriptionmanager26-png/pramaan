import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type Params = { params: Promise<{ id: string }> };

const UNTRUSTED_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Content-Security-Policy": "sandbox",
};

function filenameFromPath(path: string) {
  return (path.split("/").pop() || "download").replace(/[^\x20-\x7e]/g, "_");
}

export async function GET(request: Request, { params }: Params) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  await ensureAgentUserSynced(auth.user);

  const { id } = await params;
  const url = new URL(request.url);
  const path = url.searchParams.get("path") || "";
  const as = url.searchParams.get("as");
  const mode = url.searchParams.get("mode"); // "redirect" | "proxy" (default: redirect URL JSON for browser)
  const qs = new URLSearchParams({ path });
  if (as) qs.set("as", as);

  let upstream: Response;
  try {
    upstream = await paFetch(
      `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages/${encodeURIComponent(id)}/artifacts/file?${qs}`,
      { redirect: "manual" },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not reach the agent backend.";
    return NextResponse.json({ error: { code: "upstream_unreachable", message } }, { status: 502 });
  }

  if (upstream.status >= 300 && upstream.status < 400) {
    const location = upstream.headers.get("location");
    if (!location) {
      return NextResponse.json(
        { error: { code: "missing_redirect", message: "Download link was missing." } },
        { status: 502 },
      );
    }
    const name = filenameFromPath(path);

    // Default: hand the signed URL to the browser (avoids Vercel→Cursor CDN failures).
    if (mode !== "proxy") {
      return NextResponse.json({ url: location, name });
    }

    try {
      const file = await fetch(location, { cache: "no-store" });
      if (!file.ok) {
        return NextResponse.json(
          {
            error: {
              code: "artifact_fetch_failed",
              message: `Could not fetch artifact (${file.status}).`,
            },
          },
          { status: 502 },
        );
      }
      const headers = new Headers(UNTRUSTED_HEADERS);
      const type = file.headers.get("content-type");
      if (type) headers.set("Content-Type", type);
      headers.set("Cache-Control", "private, no-store");
      headers.set("Content-Disposition", `attachment; filename="${name}"`);
      return new NextResponse(file.body, { status: 200, headers });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not fetch artifact.";
      return NextResponse.json({ error: { code: "artifact_fetch_failed", message } }, { status: 502 });
    }
  }

  const contentType = upstream.headers.get("content-type") || "";
  if (contentType.includes("application/json") || upstream.status >= 400) {
    const body = await upstream.json().catch(() => ({
      error: { code: "artifact_error", message: `Download failed (${upstream.status}).` },
    }));
    return NextResponse.json(body, { status: upstream.status });
  }

  const body = await upstream.arrayBuffer();
  const headers = new Headers(UNTRUSTED_HEADERS);
  if (contentType) headers.set("Content-Type", contentType);
  headers.set("Cache-Control", "private, no-store");
  headers.set("Content-Disposition", `attachment; filename="${filenameFromPath(path)}"`);
  return new NextResponse(body, { status: upstream.status, headers });
}
