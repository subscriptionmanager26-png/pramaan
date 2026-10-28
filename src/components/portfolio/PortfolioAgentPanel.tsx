"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AgentBlocks } from "@/components/agent/AgentBlocks";
import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import type { AgentAction, AgentMessage } from "@/lib/agent/types";
import type { LiveHolding, LivePortfolio } from "@/lib/portfolio/holdings";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

const THREAD_ID = "portfolio";

const FILE_ONLY_PROMPT =
  "Parse the attached holdings file(s) or screenshot and propose my current portfolio book for confirmation. Prefer mode=replace for a full statement.";

const ZERODHA_IMPORT_PROMPT =
  "Import my Zerodha holdings into my portfolio book. Use Zerodha tools to fetch current holdings (and avg cost where available), then call propose_portfolio_holdings with mode=replace so I can confirm.";

type Props = {
  portfolio: LivePortfolio | null;
  /** edit = import/change book; review = ask about the book (no save prompts expected). */
  mode: "edit" | "review";
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

function displayUserText(text: string) {
  return text.replace(/^\[Portfolio assistant\][\s\S]*?Client request:\s*/i, "") || text;
}

function EmptyGuidance({
  onImportZerodha,
  onAttach,
  busy,
}: {
  onImportZerodha: () => void;
  onAttach: () => void;
  busy: boolean;
}) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[14px] font-medium text-ink">Add your current holdings</p>
        <p className="mt-1 text-[13px] leading-5 text-ink-2">
          Nothing is saved until you confirm a proposal. You can:
        </p>
      </div>
      <ul className="space-y-2.5 text-[13px] leading-5 text-ink-2">
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
          <span>
            <button
              type="button"
              className="font-semibold text-accent hover:underline disabled:opacity-50"
              onClick={onAttach}
              disabled={busy}
            >
              Upload a screenshot
            </button>{" "}
            of your broker holdings screen
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
          <span>
            <button
              type="button"
              className="font-semibold text-accent hover:underline disabled:opacity-50"
              onClick={onAttach}
              disabled={busy}
            >
              Send a PDF statement
            </button>{" "}
            (or CSV / Excel export)
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
          <span>
            <button
              type="button"
              className="font-semibold text-accent hover:underline disabled:opacity-50"
              onClick={onImportZerodha}
              disabled={busy}
            >
              Import Zerodha holdings
            </button>{" "}
            if your account is linked in Connections
          </span>
        </li>
      </ul>
    </div>
  );
}

export function PortfolioAgentPanel({ portfolio, mode, onPortfolioSaved }: Props) {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applying, setApplying] = useState<string | null>(null);
  const [appliedIds, setAppliedIds] = useState<string[]>([]);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);
  const [pickerToken, setPickerToken] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const empty = !(portfolio?.holdings.length);

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
      if (mode !== "edit") return;
      setApplying(action.proposalId);
      setError(null);
      setSavedNotice(null);
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
        if (json.portfolio) {
          const next = json.portfolio as LivePortfolio;
          setAppliedIds((ids) => (ids.includes(action.proposalId) ? ids : [...ids, action.proposalId]));
          setSavedNotice(
            `Saved ${next.holdings.length} holding${next.holdings.length === 1 ? "" : "s"} to your book.`,
          );
          onPortfolioSaved(next);
        }
      } catch {
        setError("Could not save holdings");
      } finally {
        setApplying(null);
      }
    },
    [mode, onPortfolioSaved],
  );

  const send = useCallback(
    async (raw: string, attachmentIds: string[]) => {
      const q = raw.trim() || (attachmentIds.length ? FILE_ONLY_PROMPT : "");
      if ((!q && !attachmentIds.length) || busy) return false;
      setBusy(true);
      setError(null);
      setSavedNotice(null);
      const context = holdingsContext(portfolio?.holdings ?? []);
      const modeLine =
        mode === "edit"
          ? "Mode: EDIT — if they want the book changed, finish with propose_portfolio_holdings."
          : "Mode: REVIEW — answer questions about the current book only. Do not propose holdings changes unless they explicitly ask to edit.";
      const payloadText = `[Portfolio assistant]\n${modeLine}\n${context}\n\nClient request: ${q}`;
      try {
        const headers = await pocketedgeAuthHeaders();
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
          setError((body as { error?: { message?: string } }).error?.message || `Send failed (${res.status})`);
          setBusy(false);
          return false;
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
        return true;
      } catch {
        setError("Could not reach the assistant");
        return false;
      } finally {
        setBusy(false);
      }
    },
    [busy, mode, portfolio?.holdings, reload],
  );

  const title = mode === "edit" ? (empty ? "Set up your book" : "Edit holdings") : "Review with AI";
  const subtitle =
    mode === "edit"
      ? "Import or change positions. Changes save only after you confirm."
      : "Ask about concentration, risk, or what is in the book — editing happens in Edit mode.";

  return (
    <div className="flex h-full min-h-[480px] flex-col rounded-2xl border border-line bg-white lg:min-h-[560px]">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-headline text-ink">{title}</h2>
        <p className="mt-0.5 text-[13px] text-ink-2">{subtitle}</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {!messages.length && mode === "edit" && empty ? (
          <EmptyGuidance
            busy={busy}
            onAttach={() => setPickerToken((n) => n + 1)}
            onImportZerodha={() => void send(ZERODHA_IMPORT_PROMPT, [])}
          />
        ) : null}
        {!messages.length && mode === "edit" && !empty ? (
          <p className="text-[13px] leading-5 text-ink-2">
            Describe a change, attach an updated statement or screenshot, or ask to import from Zerodha. Confirm any
            proposal before it is saved.
          </p>
        ) : null}
        {!messages.length && mode === "review" ? (
          <p className="text-[13px] leading-5 text-ink-2">
            Ask about your current holdings — allocation, concentration, or a specific position. Switch to Edit to change
            the book.
          </p>
        ) : null}

        {messages.map((m) => (
          <div key={m.id} className="space-y-2">
            <div className="rounded-xl bg-paper-2 px-3 py-2 text-[14px] text-ink">
              {displayUserText(m.text)}
              {m.attachments?.length ? (
                <p className="mt-1 text-[12px] text-ink-3">
                  {m.attachments.length} file{m.attachments.length === 1 ? "" : "s"} attached
                </p>
              ) : null}
            </div>
            {(m.blocks.length > 0 || m.actions.length > 0) && (
              <AgentBlocks
                blocks={m.blocks}
                actions={m.actions}
                onPortfolioConfirm={
                  mode === "edit" ? (action) => void applyProposal(action) : undefined
                }
                onPortfolioDismiss={
                  mode === "edit"
                    ? (proposalId) =>
                        setDismissedIds((ids) => (ids.includes(proposalId) ? ids : [...ids, proposalId]))
                    : undefined
                }
                portfolioApplyingId={applying}
                portfolioAppliedIds={appliedIds}
                portfolioDismissedIds={dismissedIds}
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

      {savedNotice ? (
        <p className="border-t border-emerald-200 bg-emerald-50 px-4 py-2 text-[13px] text-emerald-900">{savedNotice}</p>
      ) : null}
      {error ? <p className="px-4 pb-1 text-[13px] text-rose-700">{error}</p> : null}

      <div className="border-t border-line p-3">
        <AgentComposer
          disabled={busy}
          getAuthHeaders={pocketedgeAuthHeaders}
          onSend={send}
          openFilePickerToken={pickerToken}
          hint={
            mode === "edit"
              ? "Screenshot, PDF, CSV, or Excel · confirm before anything is saved"
              : "Ask about the book — switch to Edit to change holdings"
          }
        />
      </div>
    </div>
  );
}
