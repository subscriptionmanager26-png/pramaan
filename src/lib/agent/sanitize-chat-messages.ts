import type { AgentMessage } from "@/lib/agent/types";

const TIMEOUT_ERROR =
  /timed out|send failed|check the thread|upstream|server timeout|could not finish this message/i;

const SUPERSEDED_ERROR = /interrupted before it finished|superseded by a new message/i;

export function isGhostTurn(m: AgentMessage): boolean {
  if (m.id.startsWith("local-") && m.status !== "working") return true;
  if (m.status === "failed" && (TIMEOUT_ERROR.test(m.error ?? "") || SUPERSEDED_ERROR.test(m.error ?? ""))) {
    return true;
  }
  return false;
}

/** Drop client-only ghosts so refresh never replays a dead send. */
export function stripGhostTurns(messages: AgentMessage[]): AgentMessage[] {
  return messages.filter((m) => !isGhostTurn(m));
}

export function isTimeoutFailure(m: AgentMessage): boolean {
  return m.status === "failed" && TIMEOUT_ERROR.test(m.error ?? "");
}