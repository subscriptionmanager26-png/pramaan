import { normalizeThreadSummaries } from "@/lib/agent/normalize-threads";
import { paFetch } from "@/lib/personal-agents";

/** Load sidebar threads from Personal Agents (metadata only — no message payloads). */
export async function fetchAgentThreads(externalUserId: string, opts?: { ifNoneMatch?: string | null }) {
  const userPath = `/api/v1/users/${encodeURIComponent(externalUserId)}`;
  const headers: Record<string, string> = {};
  if (opts?.ifNoneMatch) headers["If-None-Match"] = opts.ifNoneMatch;

  const threadsRes = await paFetch(`${userPath}/threads`, { headers });

  if (threadsRes.status === 304) {
    return {
      threads: [] as ReturnType<typeof normalizeThreadSummaries>,
      notModified: true as const,
      etag: threadsRes.headers.get("etag"),
      threadsResOk: true,
      messagesFailed: false,
      messagesStatus: 200,
      threadsStatus: 304,
      serverTiming: threadsRes.headers.get("server-timing"),
    };
  }

  let fromThreads: ReturnType<typeof normalizeThreadSummaries> = [];
  if (threadsRes.ok) {
    const body = await threadsRes.json().catch(() => ({}));
    fromThreads = normalizeThreadSummaries(body.threads);
  }

  return {
    threads: fromThreads,
    notModified: false as const,
    etag: threadsRes.headers.get("etag"),
    threadsResOk: threadsRes.ok,
    messagesFailed: false,
    messagesStatus: 200,
    threadsStatus: threadsRes.status,
    serverTiming: threadsRes.headers.get("server-timing"),
  };
}
