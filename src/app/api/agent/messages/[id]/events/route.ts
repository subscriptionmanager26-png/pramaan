import { userHasAgentAccess } from "@/lib/pocketedge/agent-access";
import { accessTokenFromRequest, pocketedgeUserFromRequest } from "@/lib/pocketedge/session";
import { paFetch, personalAgentsConfigured } from "@/lib/personal-agents";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Params) {
  if (!personalAgentsConfigured()) {
    return new Response("agent_backend_unconfigured", { status: 503 });
  }
  const user = await pocketedgeUserFromRequest(request);
  if (!user) return new Response("unauthorized", { status: 401 });
  const token = accessTokenFromRequest(request);
  if (!(await userHasAgentAccess(user.id, user.metadata, token))) {
    return new Response("agent_not_enabled", { status: 403 });
  }
  const { id } = await params;
  const url = new URL(request.url);
  const after = url.searchParams.get("after");
  const path = `/api/v1/users/${encodeURIComponent(user.id)}/messages/${encodeURIComponent(id)}/events${
    after ? `?after=${encodeURIComponent(after)}` : ""
  }`;
  const upstream = await paFetch(path, {
    headers: { Accept: "text/event-stream", "Last-Event-ID": request.headers.get("last-event-id") || "" },
  });
  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") || "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
