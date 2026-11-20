import { isAgenticAdvisorChatPaused } from "@/lib/agent/agents-credits-outage";
import type { Advisor, AdvisorId } from "@/lib/agent/advisors";
import { durableAdvisorThreadId, threadBelongsToAdvisor } from "@/lib/agent/advisors";

export type AgentThreadSummary = {
  id: string;
  title: string;
  updatedAt: string;
  working: boolean;
};

export type AdvisorActivityState =
  | "locked"
  | "soon"
  | "empty"
  | "in_progress"
  | "unread"
  | "idle";

export type AdvisorActivity = {
  state: AdvisorActivityState;
  preview: string;
  updatedAt: string | null;
  unreadCount: number;
};

const READ_KEY = "pe_advisor_last_read_v1";

function readMap(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(READ_KEY) || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

export function markAdvisorRead(advisorId: AdvisorId) {
  if (typeof window === "undefined") return;
  const map = readMap();
  map[advisorId] = new Date().toISOString();
  localStorage.setItem(READ_KEY, JSON.stringify(map));
}

export function latestThreadForAdvisor(threads: AgentThreadSummary[], advisorId: AdvisorId) {
  const durable = durableAdvisorThreadId(advisorId);
  const matches = threads.filter((t) => threadBelongsToAdvisor(t.id, advisorId));
  matches.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  return matches.find((t) => t.id === durable) ?? matches[0] ?? null;
}

export function getAdvisorActivity(
  advisor: Advisor,
  threads: AgentThreadSummary[],
): AdvisorActivity {
  if (advisor.status === "locked") {
    return { state: "locked", preview: "Locked", updatedAt: null, unreadCount: 0 };
  }
  if (advisor.status === "soon") {
    return { state: "soon", preview: "Coming soon", updatedAt: null, unreadCount: 0 };
  }
  if (isAgenticAdvisorChatPaused(advisor)) {
    return {
      state: "locked",
      preview: "Paused — back 25 Nov",
      updatedAt: null,
      unreadCount: 0,
    };
  }

  const latest = latestThreadForAdvisor(threads, advisor.id);
  if (!latest) {
    return {
      state: "empty",
      preview: "No messages yet",
      updatedAt: null,
      unreadCount: 0,
    };
  }

  if (latest.working) {
    return {
      state: "in_progress",
      preview: latest.title || "Working…",
      updatedAt: latest.updatedAt,
      unreadCount: 0,
    };
  }

  const lastRead = readMap()[advisor.id];
  const unread =
    !lastRead || Date.parse(latest.updatedAt) > Date.parse(lastRead)
      ? 1
      : 0;

  // Treat default tagline-only preview rows (no real chat) as empty.
  const isPlaceholder =
    latest.title === advisor.tagline || latest.title.trim().length === 0;

  if (isPlaceholder) {
    return {
      state: "empty",
      preview: "No messages yet",
      updatedAt: latest.updatedAt,
      unreadCount: 0,
    };
  }

  return {
    state: unread ? "unread" : "idle",
    preview: latest.title,
    updatedAt: latest.updatedAt,
    unreadCount: unread,
  };
}
