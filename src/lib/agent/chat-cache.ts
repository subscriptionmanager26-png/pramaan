import type { AgentMessage } from "@/lib/agent/types";

const TTL_MS = 30 * 60 * 1000;

type CachePayload = {
  updatedAt: number;
  messages: AgentMessage[];
};

function keyFor(userId: string, threadId: string) {
  return `pe:agent-chat:v1:${userId}:${threadId}`;
}

export function readChatCache(userId: string, threadId: string): AgentMessage[] | null {
  if (typeof window === "undefined" || !userId || !threadId) return null;
  try {
    const raw = window.sessionStorage.getItem(keyFor(userId, threadId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed || !Array.isArray(parsed.messages) || typeof parsed.updatedAt !== "number") return null;
    if (Date.now() - parsed.updatedAt > TTL_MS) return null;
    return parsed.messages;
  } catch {
    return null;
  }
}

export function writeChatCache(userId: string, threadId: string, messages: AgentMessage[]) {
  if (typeof window === "undefined" || !userId || !threadId) return;
  try {
    const payload: CachePayload = { updatedAt: Date.now(), messages };
    window.sessionStorage.setItem(keyFor(userId, threadId), JSON.stringify(payload));
  } catch {
    // quota / private mode
  }
}

export function clearChatCache(userId?: string, threadId?: string) {
  if (typeof window === "undefined") return;
  try {
    if (userId && threadId) {
      window.sessionStorage.removeItem(keyFor(userId, threadId));
      return;
    }
    for (let i = window.sessionStorage.length - 1; i >= 0; i--) {
      const k = window.sessionStorage.key(i);
      if (k?.startsWith("pe:agent-chat:")) window.sessionStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
}
