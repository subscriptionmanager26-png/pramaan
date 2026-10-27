import type { AgentThreadSummary } from "@/components/agent/agent-shell-context";

const TTL_MS = 15 * 60 * 1000;

type CachePayload = {
  updatedAt: number;
  threads: AgentThreadSummary[];
  etag?: string | null;
};

function keyFor(userId: string) {
  return `pe:agent-threads:v2:${userId}`;
}

export function readThreadsCache(userId: string): { threads: AgentThreadSummary[]; etag: string | null } | null {
  if (typeof window === "undefined" || !userId) return null;
  try {
    const raw = window.localStorage.getItem(keyFor(userId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed || !Array.isArray(parsed.threads) || typeof parsed.updatedAt !== "number") return null;
    if (Date.now() - parsed.updatedAt > TTL_MS) return null;
    const threads = parsed.threads.filter(
      (t) => t && typeof t.id === "string" && typeof t.title === "string" && typeof t.updatedAt === "string",
    );
    return { threads, etag: typeof parsed.etag === "string" ? parsed.etag : null };
  } catch {
    return null;
  }
}

export function writeThreadsCache(userId: string, threads: AgentThreadSummary[], etag?: string | null) {
  if (typeof window === "undefined" || !userId) return;
  try {
    const payload: CachePayload = { updatedAt: Date.now(), threads, etag: etag ?? null };
    window.localStorage.setItem(keyFor(userId), JSON.stringify(payload));
  } catch {
    // quota / private mode
  }
}

export function clearThreadsCache(userId?: string) {
  if (typeof window === "undefined") return;
  try {
    if (userId) {
      window.localStorage.removeItem(keyFor(userId));
      window.localStorage.removeItem(`pe:agent-threads:v1:${userId}`);
      return;
    }
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
      const k = window.localStorage.key(i);
      if (k?.startsWith("pe:agent-threads:")) window.localStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
}
