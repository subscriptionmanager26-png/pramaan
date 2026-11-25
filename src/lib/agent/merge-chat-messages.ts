import type { AgentMessage } from "@/lib/agent/types";
import { stripGhostTurns } from "@/lib/agent/sanitize-chat-messages";

/**
 * Reconcile a server message list with local UI state.
 * Prevents optimistic / in-flight turns from disappearing when chat-state lags the POST.
 */
export function mergeChatMessages(prev: AgentMessage[], server: AgentMessage[]): AgentMessage[] {
  const prevClean = stripGhostTurns(prev);
  if (!server.length && prevClean.length) return prevClean;
  if (!prevClean.length) return server;

  const serverById = new Map(server.map((m) => [m.id, m]));
  const serverClientIds = new Set(
    server.map((m) => m.clientSendId).filter((id): id is string => Boolean(id)),
  );

  const localClientKey = (m: AgentMessage) => m.clientSendId || (m.id.startsWith("local-") ? m.id : "");

  const carry = prevClean.filter((m) => {
    if (serverById.has(m.id)) return false;
    const key = localClientKey(m);
    if (key && serverClientIds.has(key)) return false;
    // Never resurrect failed / timed-out ghosts — only true in-flight turns.
    if (m.status !== "working") return false;
    return m.id.startsWith("local-") || m.status === "working";
  });

  const merged = server.map((s) => {
    const local = prevClean.find((p) => p.id === s.id);
    if (!local || local.status !== "working" || s.status !== "working") return s;
    const localSteps = local.steps?.length ?? 0;
    const serverSteps = s.steps?.length ?? 0;
    return localSteps > serverSteps ? local : s;
  });

  if (!carry.length) return merged;
  return [...carry, ...merged];
}