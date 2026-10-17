import type { AgentMessage } from "@/lib/agent/types";
import type { AgentStreamEvent } from "@/lib/agent/sse";

function mergeSteps(steps: string[], label: string | undefined) {
  if (!label) return steps;
  const next = [...steps];
  if (next[next.length - 1] !== label) next.push(label);
  return next.slice(-12);
}

/** Apply one SSE payload to the in-flight assistant message (live streaming UI). */
export function applyStreamEvent(message: AgentMessage, event: AgentStreamEvent): AgentMessage {
  switch (event.type) {
    case "status":
      return {
        ...message,
        status: "working",
        steps: mergeSteps(message.steps ?? [], event.label),
      };
    case "block":
      if (!event.block) return message;
      return {
        ...message,
        status: "working",
        blocks: [...message.blocks, event.block],
      };
    case "action_required":
      if (!event.action) return message;
      return {
        ...message,
        status: "working",
        actions: [...message.actions, event.action],
      };
    case "error":
      return {
        ...message,
        status: "failed",
        error: event.message || "The agent could not finish this message.",
        completedAt: event.at ?? new Date().toISOString(),
      };
    case "done":
      return {
        ...message,
        status: "completed",
        completedAt: event.at ?? new Date().toISOString(),
      };
    default:
      return message;
  }
}
