import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import type { AgentAction, AgentMessage, PortfolioHoldingDraft } from "@/lib/agent/types";

const THREAD_ID = "portfolio";

export type ImportResult =
  | {
      ok: true;
      holdings: PortfolioHoldingDraft[];
      mode: "replace" | "merge";
      summary: string;
    }
  | {
      ok: false;
      error: string;
      login?: Extract<AgentAction, { kind: "connection_login" }>;
    };

/**
 * Silent agent run: parse files or fetch Zerodha → portfolio_confirmation.
 * No chat UI — used only as a document/broker parser for the portfolio wizard.
 */
export async function runPortfolioImport(opts: {
  text: string;
  attachmentIds?: string[];
  getAuthHeaders: () => Promise<Record<string, string>>;
  onStatus?: (label: string) => void;
}): Promise<ImportResult> {
  const { text, attachmentIds = [], getAuthHeaders, onStatus } = opts;
  const headers = await getAuthHeaders();
  const payloadText = `[Portfolio assistant]\nMode: EDIT — update the portfolio artifact via propose_portfolio_holdings.\nThe client has no chat UI; finish with propose_portfolio_holdings.\n\nClient request: ${text}`;

  onStatus?.("Starting…");
  const res = await fetch("/api/agent/messages", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      text: payloadText,
      threadId: THREAD_ID,
      attachments: attachmentIds.length ? attachmentIds : undefined,
    }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    return {
      ok: false,
      error:
        (body as { error?: { message?: string } }).error?.message || `Import failed (${res.status})`,
    };
  }

  const json = await res.json();
  let current = json.message as AgentMessage;

  const evRes = await fetch(`/api/agent/messages/${encodeURIComponent(current.id)}/events`, {
    headers,
    cache: "no-store",
  });
  if (evRes.ok && evRes.body) {
    const reader = evRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() ?? "";
      for (const part of parts) {
        const frame = parseSseFrame(part);
        if (!frame?.data) continue;
        const event = parseStreamEvent(frame);
        if (!event) continue;
        current = applyStreamEvent(current, event);
        if (event.type === "status" && event.label) onStatus?.(event.label);
      }
    }
  }

  if (current.status === "failed") {
    return { ok: false, error: current.error || "Import failed" };
  }

  const login = current.actions.find(
    (a): a is Extract<AgentAction, { kind: "connection_login" }> => a.kind === "connection_login",
  );
  if (login) {
    return {
      ok: false,
      error: login.message || `Log in to ${login.service} to continue.`,
      login,
    };
  }

  const proposal = current.actions.find(
    (a): a is Extract<AgentAction, { kind: "portfolio_confirmation" }> =>
      a.kind === "portfolio_confirmation",
  );
  if (!proposal?.holdings?.length) {
    return {
      ok: false,
      error: "No holdings were found. Try another file or enter them manually.",
    };
  }

  return {
    ok: true,
    holdings: proposal.holdings,
    mode: proposal.mode,
    summary: proposal.summary,
  };
}
