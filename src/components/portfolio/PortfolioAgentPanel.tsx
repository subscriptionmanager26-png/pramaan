"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AgentBlocks } from "@/components/agent/AgentBlocks";
import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import type { AgentAction, AgentMessage } from "@/lib/agent/types";
import type { LiveHolding, LivePortfolio } from "@/lib/portfolio/holdings";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

const THREAD_ID = "portfolio";

const SUGGESTIONS_EMPTY = [
  "Here are my holdings: paste or list ticker and quantity",
  "I uploaded a broker holdings CSV — build my portfolio from it",
  "Replace my book with: 100 HDFCBANK, 50 INFY, 20 RELIANCE",
];

const SUGGESTIONS_EXISTING = [
  "Summarise concentration risk in my current holdings",
  "Add 30 units of TCS at avg ₹3,800",
  "Remove INFY from my portfolio",
];

type Props = {
  portfolio: LivePortfolio | null;
  onPortfolioSaved: (portfolio: LivePortfolio) => void;
};

function holdingsContext(holdings: LiveHolding[]) {
  if (!holdings.length) return "The client has no saved holdings yet.";
  const lines = holdings
    .slice(0, 80)
    .map((h) => `${h.ticker} qty=${h.qty}${h.avg != null ? ` avg=${h.avg}` : ""}`)
    .join("; ");
  return `Current holdings (only known positions — no trade history): ${lines}`;
}

export function PortfolioAgentPanel({ portfolio, onPortfolioSaved }: Props) {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applying, setApplying] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const reload = useCallback(async () => {
    try {
      const headers = await pocketedgeAuthHeaders();
      const res = await fetch(
        `/api/agent/chat-state?threadId=${encodeURIComponent(THREAD_ID)}&limit=30&scope=messages`,
        { headers, cache: "no-store" },
      );
      if (!res.ok) return;
      const json = await res.json();
      setMessages((json.messages as AgentMessage[]) || []);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  const applyProposal = useCallback(
    async (action: Extract<AgentAction, { kind: "portfolio_confirmation" }>) => {
      setApplying(action.proposalId);
      setError(null);
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch("/api/portfolio", {
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({ mode: action.mode, holdings: action.holdings }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          setError((json as { error?: string }).error || "Could not save holdings");
          return;
        }
        if (json.portfolio) onPortfolioSaved(json.portfolio as LivePortfolio);
      } catch {
        setError("Could not save holdings");
      } finally {
        setApplying(null);
      }
    },
    [onPortfolioSaved],
  );

  const send = useCallback(
    async (raw: string) => {
      const q = raw.trim();
      if (!q || busy) return;
      setBusy(true);
      setError(null);
      setText("");
      const context = holdingsContext(portfolio?.holdings ?? []);
      const payloadText = `[Portfolio assistant]\n${context}\n\nClient request: ${q}`;
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch("/api/agent/messages", {
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({ text: payloadText, threadId: THREAD_ID }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setError((body as { error?: { message?: string } }).error?.message || `Send failed (${res.status})`);
          setBusy(false);
          return;
        }
        const json = await res.json();
        const message = json.message as AgentMessage;
        setMessages((prev) => [...prev.filter((m) => m.id !== message.id), message]);

        const eventsUrl = `/api/agent/messages/${encodeURIComponent(message.id)}/events`;
        const evRes = await fetch(eventsUrl, { headers, cache: "no-store" });
        if (evRes.ok && evRes.body) {
          const reader = evRes.body.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          let current = message;
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
              setMessages((prev) => prev.map((m) => (m.id === current.id ? current : m)));
            }
          }
        }
        await reload();
      } catch {
        setError("Could not reach the assistant");
      } finally {
        setBusy(false);
      }
    },
    [busy, portfolio?.holdings, reload],
  );

  const suggestions = portfolio?.holdings.length ? SUGGESTIONS_EXISTING : SUGGESTIONS_EMPTY;

  return (
    <div className="flex h-full min-h-[420px] flex-col rounded-2xl border border-line bg-white">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-headline text-ink">Portfolio AI</h2>
        <p className="mt-0.5 text-[13px] text-ink-2">
          Ask about your current holdings, or paste a list / statement to update the book. Changes save only after you
          confirm.
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {!messages.length && (
          <div className="space-y-2">
            <p className="text-[13px] text-ink-3">Try one of these:</p>
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="block w-full rounded-xl border border-line bg-paper-2 px-3 py-2 text-left text-[13px] text-ink hover:border-ink/30"
                onClick={() => void send(s)}
                disabled={busy}
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {messages.map((m) => (
          <div key={m.id} className="space-y-2">
            <div className="rounded-xl bg-paper-2 px-3 py-2 text-[14px] text-ink">
              {m.text.replace(/^\[Portfolio assistant\][\s\S]*?Client request:\s*/i, "") || m.text}
            </div>
            {(m.blocks.length > 0 || m.actions.length > 0) && (
              <AgentBlocks
                blocks={m.blocks}
                actions={m.actions}
                onPortfolioConfirm={(action) => void applyProposal(action)}
                portfolioApplyingId={applying}
              />
            )}
            {m.status === "failed" && m.error ? (
              <p className="text-[13px] text-rose-700">{m.error}</p>
            ) : null}
          </div>
        ))}
        {busy ? <p className="text-[13px] text-ink-3">Working…</p> : null}
        <div ref={bottomRef} />
      </div>

      {error ? <p className="px-4 text-[13px] text-rose-700">{error}</p> : null}

      <form
        className="border-t border-line p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send(text);
        }}
      >
        <div className="flex gap-2">
          <input
            className="min-w-0 flex-1 rounded-xl border border-line bg-paper-2 px-3 py-2 text-[14px] text-ink outline-none focus:border-ink/40"
            placeholder="Ask or paste holdings…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={busy}
          />
          <button type="submit" className="btn-primary shrink-0 text-[13px]" disabled={busy || !text.trim()}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
