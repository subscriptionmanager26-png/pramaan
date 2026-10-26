import { normalizeThreadSummaries } from "@/lib/agent/normalize-threads";
import type { AgentMessage } from "@/lib/agent/types";
import { mergeThreadLists, threadsFromMessages } from "@/lib/agent/threads-from-messages";
import { paFetch } from "@/lib/personal-agents";

/** Load sidebar threads from Personal Agents (parallel upstream calls). */
export async function fetchAgentThreads(externalUserId: string) {
  const userPath = `/api/v1/users/${encodeURIComponent(externalUserId)}`;
  const [threadsRes, msgRes] = await Promise.all([
    paFetch(`${userPath}/threads`),
    paFetch(`${userPath}/messages?limit=60`),
  ]);

  let fromThreads: ReturnType<typeof normalizeThreadSummaries> = [];
  if (threadsRes.ok) {
    const body = await threadsRes.json().catch(() => ({}));
    fromThreads = normalizeThreadSummaries(body.threads);
  }

  let fromMessages: ReturnType<typeof threadsFromMessages> = [];
  let messagesFailed = false;
  if (msgRes.ok) {
    const msgBody = await msgRes.json().catch(() => ({}));
    const raw = msgBody.messages;
    const messages = Array.isArray(raw) ? (raw as AgentMessage[]) : [];
    try {
      fromMessages = threadsFromMessages(messages, 60);
    } catch {
      messagesFailed = true;
    }
  } else {
    messagesFailed = true;
  }

  return {
    threads: mergeThreadLists(fromThreads, fromMessages),
    threadsResOk: threadsRes.ok,
    messagesFailed,
    messagesStatus: msgRes.status,
    threadsStatus: threadsRes.status,
  };
}

