import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
/** Uploads proxy to personal-agents (cold start + extract). Keep headroom above 60s. */
export const maxDuration = 120;

function parseUpstream(text: string, ok: boolean, status: number) {
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {
      error: {
        code: "upstream_error",
        message: ok
          ? "Upload response was invalid."
          : status === 504 || status === 408
            ? "Upload timed out. Try a smaller file, or retry in a moment."
            : `Upload failed (${status}).`,
      },
    };
  }
}

export async function GET(request: Request) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;
  await ensureAgentUserSynced(auth.user);
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || "50";
  const res = await paFetch(
    `/api/v1/users/${encodeURIComponent(auth.user.id)}/files?limit=${encodeURIComponent(limit)}`,
  );
  const body = await res.json().catch(() => ({}));
  return NextResponse.json(body, { status: res.status });
}

export async function POST(request: Request) {
  const auth = await requireAgentUser(request);
  if ("response" in auth) return auth.response;

  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json(
      { error: { code: "invalid_upload", message: "Could not read the upload. Try a smaller file or refresh the page." } },
      { status: 400 },
    );
  }

  const raw = incoming.get("file");
  if (!raw || typeof raw === "string") {
    return NextResponse.json(
      { error: { code: "missing_file", message: "Choose a PDF, CSV, or Excel file to attach." } },
      { status: 400 },
    );
  }

  const filename = raw instanceof File && raw.name ? raw.name : "upload";
  const bytes = Buffer.from(await raw.arrayBuffer());

  const uploadOnce = async () => {
    const outbound = new FormData();
    outbound.append(
      "file",
      new Blob([new Uint8Array(bytes)], { type: raw.type || "application/octet-stream" }),
      filename,
    );
    return paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/files`, {
      method: "POST",
      body: outbound,
    });
  };

  // Fast path: skip sync when the PA user already exists (common after /ai bootstrap).
  let res = await uploadOnce();
  if (res.status === 404) {
    await ensureAgentUserSynced(auth.user);
    res = await uploadOnce();
  }

  const text = await res.text();
  return NextResponse.json(parseUpstream(text, res.ok, res.status), { status: res.status });
}
