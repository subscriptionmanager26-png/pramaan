import type { AgentThreadSummary } from "@/components/agent/agent-shell-context";

const TTL_MS = 15 * 60 * 1000;

type CachePayload = {
  updatedAt: number;
  threads: AgentThreadSummary[];
};

function keyFor(userId: string) {
  return `pe:agent-threads:v1:${userId}`;
}

export function readThreadsCache(userId: string): AgentThreadSummary[] | null {
  if (typeof window === "undefined" || !userId) return null;
  try {
    const raw = window.localStorage.getItem(keyFor(userId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed || !Array.isArray(parsed.threads) || typeof parsed.updatedAt !== "number") return null;
    if (Date.now() - parsed.updatedAt > TTL_MS) return null;
    return parsed.threads.filter(
      (t) => t && typeof t.id === "string" && typeof t.title === "string" && typeof t.updatedAt === "string",
    );
  } catch {
    return null;
  }
}

export function writeThreadsCache(userId: string, threads: AgentThreadSummary[]) {
  if (typeof window === "undefined" || !userId) return;
  try {
    const payload: CachePayload = { updatedAt: Date.now(), threads };
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
      return;
    }
    const prefix = "pe:agent-threads:v1:";
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
      const k = window.localStorage.key(i);
      if (k?.startsWith(prefix)) window.localStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
}
