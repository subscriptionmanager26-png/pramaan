export type AgentStreamEvent = {
  seq?: number;
  type: "status" | "block" | "action_required" | "done" | "error";
  label?: string;
  block?: import("@/lib/agent/types").UiBlock;
  action?: import("@/lib/agent/types").AgentAction;
  message?: string;
  at?: string;
};

export type RawSseFrame = { id?: string; event: string; data: string };

/** Parse one SSE frame (blocks separated by blank lines). */
export function parseSseFrame(block: string): RawSseFrame | undefined {
  let id: string | undefined;
  let event = "message";
  const data: string[] = [];
  for (const line of block.split("\n")) {
    if (!line || line.startsWith(":")) continue;
    const colon = line.indexOf(":");
    const field = colon === -1 ? line : line.slice(0, colon);
    const value = colon === -1 ? "" : line.slice(colon + 1).replace(/^ /, "");
    if (field === "id") id = value;
    else if (field === "event") event = value;
    else if (field === "data") data.push(value);
  }
  if (!data.length && event === "message") return undefined;
  return { id, event, data: data.join("\n") };
}

export function parseStreamEvent(frame: RawSseFrame): AgentStreamEvent | undefined {
  try {
    const parsed = JSON.parse(frame.data) as AgentStreamEvent;
    if (parsed?.type) return parsed;
  } catch {
    /* fall through */
  }
  const type = frame.event as AgentStreamEvent["type"];
  if (!type) return undefined;
  try {
    const parsed = JSON.parse(frame.data) as Record<string, unknown>;
    return { ...parsed, type } as AgentStreamEvent;
  } catch {
    return { type, message: frame.data } as AgentStreamEvent;
  }
}
