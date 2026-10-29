import { NextResponse } from "next/server";

import { ensureAgentUserSynced } from "@/lib/agent/ensure-agent-user";
import { requireAgentUser } from "@/lib/agent/require-agent-user";
import { paFetch } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

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
  await ensureAgentUserSynced(auth.user);

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
  const outbound = new FormData();
  outbound.append("file", raw, filename);

  const res = await paFetch(`/api/v1/users/${encodeURIComponent(auth.user.id)}/files`, {
    method: "POST",
    body: outbound,
  });

  const text = await res.text();
  let body: unknown = {};
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = {
      error: {
        code: "upstream_error",
        message: res.ok ? "Upload response was invalid." : `Upload failed (${res.status}).`,
      },
    };
  }
  return NextResponse.json(body, { status: res.status });
}
