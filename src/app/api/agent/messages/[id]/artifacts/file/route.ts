import { NextResponse } from "next/server";

import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
/** Only mints a Cursor presigned URL — keep short so we fail fast instead of a 60s hang. */
export const maxDuration = 30;

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
  // No ensureAgentUserSynced here — download must stay fast; user already exists from chat.

  const { id } = await params;
  const url = new URL(request.url);
  const path = url.searchParams.get("path") || "";
  const as = url.searchParams.get("as");
  const qs = new URLSearchParams({ path });
  if (as) qs.set("as", as);

  let upstream: Response;
  try {
    upstream = await paFetch(
      `/api/v1/users/${encodeURIComponent(auth.user.id)}/messages/${encodeURIComponent(id)}/artifacts/file?${qs}`,
      { redirect: "manual", signal: AbortSignal.timeout(25_000) },
    );
  } catch (err) {
    const timedOut = err instanceof Error && (err.name === "TimeoutError" || /timeout/i.test(err.message));
    return NextResponse.json(
      {
        error: {
          code: timedOut ? "upstream_timeout" : "upstream_unreachable",
          message: timedOut
            ? "Timed out getting the download link. Try again in a moment."
            : err instanceof Error
              ? err.message
              : "Could not reach the agent backend.",
        },
      },
      { status: 504 },
    );
  }

  // PA returns JSON { url } for downloads; keep 302 support for older PA deploys.
  if (upstream.status >= 300 && upstream.status < 400) {
    const location = upstream.headers.get("location");
    if (!location) {
      return NextResponse.json(
        { error: { code: "missing_redirect", message: "Download link was missing." } },
        { status: 502 },
      );
    }
    return NextResponse.json({ url: location, name: filenameFromPath(path) });
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
