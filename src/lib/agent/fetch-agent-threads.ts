import { normalizeThreadSummaries } from "@/lib/agent/normalize-threads";
import { paFetch } from "@/lib/personal-agents";

/** Load sidebar threads from Personal Agents (metadata only — no message payloads). */
export async function fetchAgentThreads(externalUserId: string) {
  const userPath = `/api/v1/users/${encodeURIComponent(externalUserId)}`;
  const threadsRes = await paFetch(`${userPath}/threads`);

  let fromThreads: ReturnType<typeof normalizeThreadSummaries> = [];
  if (threadsRes.ok) {
    const body = await threadsRes.json().catch(() => ({}));
    fromThreads = normalizeThreadSummaries(body.threads);
  }

  return {
    threads: fromThreads,
    threadsResOk: threadsRes.ok,
    messagesFailed: false,
    messagesStatus: 200,
    threadsStatus: threadsRes.status,
  };
}
