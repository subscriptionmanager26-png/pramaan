"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import type { AgentAction, AgentMessage } from "@/lib/agent/types";
import type { LiveHolding, LivePortfolio } from "@/lib/portfolio/holdings";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

type DraftRow = {
  key: string;
  ticker: string;
  qty: string;
  avg: string;
  name: string;
};

type ChatPane = "open" | "docked";

const THREAD_ID = "portfolio";

const FILE_ONLY_PROMPT =
  "Parse the attached holdings file(s) or screenshot and propose my CURRENT portfolio book. Prefer mode=replace. Include avg cost when available. Call propose_portfolio_holdings.";

const ZERODHA_PROMPT =
  "Import my Zerodha holdings into my portfolio book. Use Zerodha tools to fetch current holdings and avg cost where available, then call propose_portfolio_holdings with mode=replace.";

function newKey() {
  return `r-${Math.random().toString(36).slice(2, 9)}`;
}

function rowsFromHoldings(holdings: LiveHolding[]): DraftRow[] {
  if (!holdings.length) return [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
  return holdings.map((h) => ({
    key: newKey(),
    ticker: h.ticker,
    qty: String(h.qty),
    avg: h.avg != null ? String(h.avg) : "",
    name: h.name ?? "",
  }));
}

function rowsFromProposal(holdings: { ticker: string; qty: number; avg?: number; name?: string }[]): DraftRow[] {
  const next = holdings
    .filter((h) => h.qty > 0)
    .map((h) => ({
      key: newKey(),
      ticker: h.ticker,
      qty: String(h.qty),
      avg: h.avg != null ? String(h.avg) : "",
      name: h.name ?? "",
    }));
  return next.length ? next : [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
}

function parseDraft(rows: DraftRow[]) {
  const out: { ticker: string; qty: number; avg?: number; name?: string }[] = [];
  for (const row of rows) {
    const ticker = row.ticker.trim().toUpperCase();
    const qty = Number(row.qty);
    if (!ticker || !Number.isFinite(qty) || qty <= 0) continue;
    const item: { ticker: string; qty: number; avg?: number; name?: string } = { ticker, qty };
    const avg = Number(row.avg);
    if (row.avg.trim() && Number.isFinite(avg) && avg > 0) item.avg = avg;
    if (row.name.trim()) item.name = row.name.trim();
    out.push(item);
  }
  return out;
}

function draftEqual(
  a: { ticker: string; qty: number; avg?: number; name?: string }[],
  b: LiveHolding[],
) {
  if (a.length !== b.length) return false;
  const map = new Map(b.map((h) => [h.ticker, h]));
  for (const row of a) {
    const cur = map.get(row.ticker);
    if (!cur || cur.qty !== row.qty) return false;
    if ((row.avg ?? null) !== (cur.avg ?? null)) return false;
  }
  return true;
}

function displayUserText(text: string) {
  return text.replace(/^\[Portfolio assistant\][\s\S]*?Client request:\s*/i, "") || text;
}

function holdingsContext(holdings: LiveHolding[], draft: DraftRow[]) {
  const parsed = parseDraft(draft);
  const source = parsed.length
    ? parsed
    : holdings.map((h) => ({ ticker: h.ticker, qty: h.qty, avg: h.avg }));
  if (!source.length) return "The client has no holdings in the artifact yet.";
  return `Current portfolio artifact (draft, may be unsaved): ${source
    .slice(0, 80)
    .map((h) => `${h.ticker} qty=${h.qty}${h.avg != null ? ` avg=${h.avg}` : ""}`)
    .join("; ")}`;
}

type Props = {
  portfolio: LivePortfolio | null;
  onSaved: (portfolio: LivePortfolio) => void;
  onCancel?: () => void;
};

export function PortfolioEditor({ portfolio, onSaved, onCancel }: Props) {
  const holdings = portfolio?.holdings ?? [];
  const empty = !holdings.length;
  const [rows, setRows] = useState<DraftRow[]>(() => rowsFromHoldings(holdings));
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [artifactFlash, setArtifactFlash] = useState<string | null>(null);
  // Mobile: docked by default so artifact is primary. Desktop chat column is always shown.
  const [chatPane, setChatPane] = useState<ChatPane>("docked");
  const [pickerToken, setPickerToken] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef(rows);
  rowsRef.current = rows;
  const openedEmptyChat = useRef(false);

  const parsed = useMemo(() => parseDraft(rows), [rows]);
  const dirty = empty ? parsed.length > 0 : !draftEqual(parsed, holdings);

  useEffect(() => {
    setRows(rowsFromHoldings(holdings));
  }, [portfolio?.id, portfolio?.updatedAt]);

  useEffect(() => {
    if (!empty || openedEmptyChat.current) return;
    if (window.matchMedia("(max-width: 1023px)").matches) {
      openedEmptyChat.current = true;
      setChatPane("open");
    }
  }, [empty]);

  useEffect(() => {
    void (async () => {
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch(
          `/api/agent/chat-state?threadId=${encodeURIComponent(THREAD_ID)}&limit=20&scope=messages`,
          { headers, cache: "no-store" },
        );
        if (!res.ok) return;
        const json = await res.json();
        setMessages((json.messages as AgentMessage[]) || []);
      } catch {
        // ignore
      }
    })();
  }, []);

  useEffect(() => {
    if (chatPane === "open") bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy, chatPane]);

  const applyProposal = useCallback((action: Extract<AgentAction, { kind: "portfolio_confirmation" }>) => {
    setRows(rowsFromProposal(action.holdings));
    setArtifactFlash(
      action.mode === "merge"
        ? `Artifact updated · ${action.holdings.length} changes proposed`
        : `Artifact updated · ${action.holdings.length} holdings`,
    );
    window.setTimeout(() => setArtifactFlash(null), 4000);
  }, []);

  const save = useCallback(async () => {
    if (!parsed.length) {
      setError("Add at least one holding before saving.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const headers = await pocketedgeAuthHeaders();
      const res = await fetch("/api/portfolio", {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "replace", holdings: parsed }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError((json as { error?: string }).error || "Could not save holdings");
        return;
      }
      if (json.portfolio) onSaved(json.portfolio as LivePortfolio);
    } catch {
      setError("Could not save holdings");
    } finally {
      setSaving(false);
    }
  }, [onSaved, parsed]);

  const send = useCallback(
    async (raw: string, attachmentIds: string[]) => {
      const q = raw.trim() || (attachmentIds.length ? FILE_ONLY_PROMPT : "");
      if ((!q && !attachmentIds.length) || busy) return false;
      setBusy(true);
      setError(null);
      setChatPane("open");
      const context = holdingsContext(holdings, rowsRef.current);
      const payloadText = `[Portfolio assistant]\nMode: EDIT — update the portfolio artifact via propose_portfolio_holdings when the book should change.\n${context}\n\nClient request: ${q}`;
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
          return false;
        }
        const json = await res.json();
        let current = json.message as AgentMessage;
        setMessages((prev) => [...prev.filter((m) => m.id !== current.id), current]);

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
              setMessages((prev) => prev.map((m) => (m.id === current.id ? current : m)));
              if (event.type === "action_required" && event.action?.kind === "portfolio_confirmation") {
                applyProposal(event.action);
              }
            }
          }
        }

        const proposal = current.actions.find(
          (a): a is Extract<AgentAction, { kind: "portfolio_confirmation" }> =>
            a.kind === "portfolio_confirmation",
        );
        if (proposal) applyProposal(proposal);

        // On small screens, dock chat so the artifact is visible again.
        if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
          setChatPane("docked");
        }
        return true;
      } catch {
        setError("Could not reach the assistant");
        return false;
      } finally {
        setBusy(false);
      }
    },
    [applyProposal, busy, holdings],
  );

  const patchRow = (key: string, patch: Partial<DraftRow>) => {
    setRows((cur) => cur.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  };

  const chatBody = (
    <>
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3">
        {!messages.length ? (
          <div className="space-y-3 text-[13px] leading-5 text-ink-2">
            <p className="font-medium text-ink">Tell AI how to update the book</p>
            <p>Examples: paste a list, attach a screenshot or PDF, or ask to import Zerodha holdings.</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] text-ink hover:border-ink/30 disabled:opacity-50"
                disabled={busy}
                onClick={() => setPickerToken((n) => n + 1)}
              >
                Attach file
              </button>
              <button
                type="button"
                className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] text-ink hover:border-ink/30 disabled:opacity-50"
                disabled={busy}
                onClick={() => void send(ZERODHA_PROMPT, [])}
              >
                Import Zerodha
              </button>
            </div>
          </div>
        ) : null}

        {messages.map((m) => {
          const proposal = m.actions.find(
            (a): a is Extract<AgentAction, { kind: "portfolio_confirmation" }> =>
              a.kind === "portfolio_confirmation",
          );
          return (
            <div key={m.id} className="space-y-2">
              <div className="rounded-xl bg-paper-2 px-3 py-2 text-[13px] text-ink">
                {displayUserText(m.text)}
                {m.attachments?.length ? (
                  <p className="mt-1 text-[11px] text-ink-3">
                    {m.attachments.length} file{m.attachments.length === 1 ? "" : "s"}
                  </p>
                ) : null}
              </div>
              {m.steps?.length && m.status === "working" ? (
                <p className="text-[12px] text-ink-3">{m.steps[m.steps.length - 1]}</p>
              ) : null}
              {m.blocks
                .filter((b) => b.kind === "markdown" || b.kind === "card")
                .slice(-2)
                .map((b, i) => (
                  <div key={i} className="rounded-xl border border-line bg-white px-3 py-2 text-[13px] text-ink-2">
                    {b.kind === "markdown" ? b.text.slice(0, 600) : `${b.title}${b.body ? ` — ${b.body}` : ""}`}
                  </div>
                ))}
              {proposal ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-[12px] text-emerald-900">
                  Proposed {proposal.holdings.length} holdings → applied to artifact
                  <button
                    type="button"
                    className="ml-2 font-semibold underline"
                    onClick={() => applyProposal(proposal)}
                  >
                    Re-apply
                  </button>
                </div>
              ) : null}
              {m.status === "failed" && m.error ? (
                <p className="text-[12px] text-rose-700">{m.error}</p>
              ) : null}
            </div>
          );
        })}
        {busy ? <p className="text-[12px] text-ink-3">Working…</p> : null}
        <div ref={bottomRef} />
      </div>

      {error ? <p className="px-3 pb-1 text-[12px] text-rose-700">{error}</p> : null}

      <div className="shrink-0 border-t border-line p-2">
        <AgentComposer
          disabled={busy || saving}
          getAuthHeaders={pocketedgeAuthHeaders}
          onSend={send}
          openFilePickerToken={pickerToken}
          hint="Chat updates the artifact · Save when ready"
        />
      </div>
    </>
  );

  const artifact = (
    <div className="flex h-full min-h-0 flex-col rounded-2xl border border-line bg-white shadow-[4px_4px_0_rgba(11,11,11,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-3">Artifact</p>
          <h2 className="text-headline text-ink">Portfolio book</h2>
          <p className="text-[12px] text-ink-2">
            {parsed.length
              ? `${parsed.length} position${parsed.length === 1 ? "" : "s"}`
              : "Empty — chat or add a row"}
            {dirty ? " · unsaved" : ""}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {onCancel && !empty ? (
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-paper-2"
              disabled={saving}
              onClick={onCancel}
            >
              Cancel
            </button>
          ) : null}
          <button
            type="button"
            className="btn-primary text-[13px] disabled:opacity-50"
            disabled={saving || !parsed.length || !dirty}
            onClick={() => void save()}
          >
            {saving ? "Saving…" : "Save book"}
          </button>
        </div>
      </div>

      {artifactFlash ? (
        <p className="border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-[12px] text-emerald-900">
          {artifactFlash}
        </p>
      ) : null}

      <div className="min-h-0 flex-1 overflow-auto px-3 py-3 sm:px-4">
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            className="text-[12px] font-semibold text-accent hover:underline"
            disabled={saving}
            onClick={() =>
              setRows((cur) => [...cur, { key: newKey(), ticker: "", qty: "", avg: "", name: "" }])
            }
          >
            + Add row
          </button>
        </div>
        <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-line text-meta text-ink-3">
              <th className="pb-2 pr-2 font-normal">Ticker</th>
              <th className="pb-2 pr-2 font-normal">Qty</th>
              <th className="pb-2 pr-2 font-normal">Avg</th>
              <th className="pb-2 pr-2 font-normal">Name</th>
              <th className="pb-2 w-8 font-normal" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-line/70 last:border-0">
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[5.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 uppercase outline-none focus:border-ink/40"
                    value={row.ticker}
                    placeholder="INFY"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { ticker: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[4.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 tabular-nums outline-none focus:border-ink/40"
                    value={row.qty}
                    inputMode="decimal"
                    placeholder="10"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { qty: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[4.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 tabular-nums outline-none focus:border-ink/40"
                    value={row.avg}
                    inputMode="decimal"
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { avg: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[6rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 outline-none focus:border-ink/40"
                    value={row.name}
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { name: e.target.value })}
                  />
                </td>
                <td className="py-1.5 text-right">
                  <button
                    type="button"
                    aria-label="Remove row"
                    className="rounded-lg px-2 py-1 text-ink-3 hover:bg-paper-2 hover:text-ink"
                    disabled={saving}
                    onClick={() =>
                      setRows((cur) => {
                        const next = cur.filter((r) => r.key !== row.key);
                        return next.length
                          ? next
                          : [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
                      })
                    }
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="relative lg:min-h-[calc(100vh-12rem)]">
      {/* Desktop: chat ~22% / artifact ~78% */}
      <div className="hidden h-[calc(100vh-12rem)] min-h-[560px] gap-4 lg:grid lg:grid-cols-[minmax(240px,22%)_minmax(0,1fr)]">
        <aside className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-line bg-white">
          <div className="shrink-0 border-b border-line px-3 py-2.5">
            <h2 className="text-[14px] font-semibold text-ink">Chat</h2>
            <p className="text-[12px] text-ink-2">Edit the artifact with AI</p>
          </div>
          {chatBody}
        </aside>
        <div className="min-h-0 min-w-0">{artifact}</div>
      </div>

      {/* Mobile: artifact primary + chat overlay */}
      <div className="lg:hidden">
        <div className="min-h-[70vh] pb-24">{artifact}</div>

        {chatPane === "docked" ? (
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 py-2 backdrop-blur safe-bottom">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-left"
              onClick={() => setChatPane("open")}
            >
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-ink">
                  {busy ? "AI is working…" : "Chat to edit"}
                </span>
                <span className="block truncate text-[12px] text-ink-2">
                  {artifactFlash || "Tap to open · artifact stays behind"}
                </span>
              </span>
              <span className="shrink-0 text-[12px] font-semibold text-accent">Open</span>
            </button>
          </div>
        ) : (
          <div className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/35" role="dialog" aria-modal="true">
            <button
              type="button"
              className="min-h-[20vh] flex-1 cursor-default"
              aria-label="Close chat"
              onClick={() => setChatPane("docked")}
            />
            <div className="flex max-h-[78vh] flex-col overflow-hidden rounded-t-2xl border border-line bg-white shadow-[0_-8px_30px_rgba(11,11,11,0.12)]">
              <div className="flex items-center justify-between border-b border-line px-3 py-2.5">
                <div>
                  <p className="text-[14px] font-semibold text-ink">Chat</p>
                  <p className="text-[12px] text-ink-2">Updates the artifact on the page</p>
                </div>
                <button
                  type="button"
                  className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-paper-2"
                  onClick={() => setChatPane("docked")}
                >
                  Minimize
                </button>
              </div>
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{chatBody}</div>
            </div>
          </div>
        )}

        {chatPane === "docked" && empty && !messages.length ? (
          <button
            type="button"
            className="fixed bottom-20 right-4 z-30 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg"
            onClick={() => setChatPane("open")}
          >
            Start with AI
          </button>
        ) : null}
      </div>
    </div>
  );
}
