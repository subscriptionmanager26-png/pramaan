import type { AgentMessage } from "@/lib/agent/types";

export type ThreadSummary = {
  id: string;
  title: string;
  updatedAt: string;
  working: boolean;
};

const ACTIVE = new Set(["working"]);

function titleFrom(text: string | undefined) {
  const t = (text ?? "").replace(/\s+/g, " ").trim();
  if (!t) return "New chat";
  return t.length > 72 ? `${t.slice(0, 72)}…` : t;
}

/** Build sidebar threads from message list when /threads is unavailable or empty. */
export function threadsFromMessages(messages: AgentMessage[], limit = 40): ThreadSummary[] {
  const map = new Map<string, ThreadSummary>();
  for (const m of messages) {
    const id = m.threadId || "main";
    const at = m.completedAt || m.createdAt || new Date(0).toISOString();
    const working = ACTIVE.has(m.status);
    const existing = map.get(id);
    if (!existing) {
      map.set(id, { id, title: titleFrom(m.text), updatedAt: at, working });
      continue;
    }
    if (at.localeCompare(existing.updatedAt) > 0) {
      existing.updatedAt = at;
      existing.title = titleFrom(m.text);
    }
    existing.working ||= working;
  }
  return [...map.values()]
    .sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""))
    .slice(0, limit);
}

/** Drop optimistic sidebar rows once the backend has the same thread id. */
export function prunePendingThreads(server: ThreadSummary[], pending: ThreadSummary[]) {
  if (!pending.length) return pending;
  const onServer = new Set(server.map((t) => t.id));
  return pending.filter((t) => !onServer.has(t.id));
}

export function mergeThreadLists(
  server: ThreadSummary[],
  local: ThreadSummary[],
): ThreadSummary[] {
  const map = new Map<string, ThreadSummary>();
  for (const t of [...server, ...local]) {
    const prev = map.get(t.id);
    if (!prev) {
      map.set(t.id, t);
      continue;
    }
    const tAt = t.updatedAt || "";
    const prevAt = prev.updatedAt || "";
    if (tAt.localeCompare(prevAt) > 0) {
      prev.updatedAt = t.updatedAt;
      prev.title = t.title;
    }
    prev.working ||= t.working;
  }
  return [...map.values()].sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
}
