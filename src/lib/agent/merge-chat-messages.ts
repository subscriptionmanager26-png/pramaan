import type { AgentMessage } from "@/lib/agent/types";

/**
 * Reconcile a server message list with local UI state.
 * Prevents optimistic / in-flight turns from disappearing when chat-state lags the POST.
 */
export function mergeChatMessages(prev: AgentMessage[], server: AgentMessage[]): AgentMessage[] {
  if (!server.length && prev.length) return prev;
  if (!prev.length) return server;

  const serverById = new Map(server.map((m) => [m.id, m]));
  const serverClientIds = new Set(
    server.map((m) => m.clientSendId).filter((id): id is string => Boolean(id)),
  );

  const carry = prev.filter((m) => {
    if (serverById.has(m.id)) return false;
    if (m.clientSendId && serverClientIds.has(m.clientSendId)) return false;
    return m.id.startsWith("local-") || m.status === "working";
  });

  const merged = server.map((s) => {
    const local = prev.find((p) => p.id === s.id);
    if (!local || local.status !== "working" || s.status !== "working") return s;
    const localSteps = local.steps?.length ?? 0;
    const serverSteps = s.steps?.length ?? 0;
    return localSteps > serverSteps ? local : s;
  });

  if (!carry.length) return merged;
  return [...carry, ...merged];
}