import { AgentMarkdown } from "@/components/agent/chat/AgentMarkdown";
import type { AgentAction, OrderState, UiBlock } from "@/lib/agent/types";

function formatCell(value: string | number | null, format?: string) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value !== "number") return value;
  if (format === "currency") return `₹${Math.round(value).toLocaleString("en-IN")}`;
  if (format === "percent") return `${(value * 100).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`;
  return value.toLocaleString("en-IN");
}

function ActionCard({
  action,
  pe,
  order,
  onDecide,
  onPortfolioConfirm,
  onPortfolioDismiss,
  portfolioApplyingId,
  portfolioAppliedIds,
  portfolioDismissedIds,
}: {
  action: AgentAction;
  pe: boolean;
  order?: OrderState;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
  onPortfolioConfirm?: (action: Extract<AgentAction, { kind: "portfolio_confirmation" }>) => void;
  onPortfolioDismiss?: (proposalId: string) => void;
  portfolioApplyingId?: string | null;
  portfolioAppliedIds?: string[];
  portfolioDismissedIds?: string[];
}) {
  if (action.kind === "connection_login") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
        <p className={`font-semibold ${pe ? "text-[var(--pe-text)]" : "text-ink"}`}>Log in to {action.service}</p>
        {action.message && (
          <p className={`mt-1 text-sm ${pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2"}`}>{action.message}</p>
        )}
        <a
          href={action.url}
          target="_blank"
          rel="noreferrer"
          className={
            pe
              ? "mt-3 inline-flex rounded-full bg-[var(--pe-accent)] px-4 py-2 text-[13px] font-medium text-white"
              : "btn-primary mt-3 inline-flex text-[13px]"
          }
        >
          Log in
        </a>
      </div>
    );
  }
  if (action.kind === "portfolio_confirmation") {
    const applying = portfolioApplyingId === action.proposalId;
    const applied = portfolioAppliedIds?.includes(action.proposalId);
    const dismissed = portfolioDismissedIds?.includes(action.proposalId);
    const expired = Date.parse(action.expiresAt) < Date.now();
    return (
      <div className={`overflow-hidden rounded-xl border ${pe ? "border-[var(--pe-border)] bg-[var(--pe-surface)]" : "border-line bg-white"}`}>
        <div className="p-4">
          <p className={`font-semibold ${pe ? "text-[var(--pe-text)]" : "text-ink"}`}>
            {action.mode === "merge" ? "Update holdings" : "Replace holdings"}
          </p>
          <p className={`mt-1 text-sm ${pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2"}`}>{action.summary}</p>
          <ul className="mt-3 max-h-40 space-y-1 overflow-y-auto text-[13px] tabular-nums">
            {action.holdings.slice(0, 40).map((h) => (
              <li key={h.ticker} className={pe ? "text-[var(--pe-text)]" : "text-ink"}>
                <span className="font-medium">{h.ticker}</span>
                <span className={pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2"}>
                  {" "}
                  · {h.qty.toLocaleString("en-IN")}
                  {h.avg != null ? ` @ ₹${h.avg.toLocaleString("en-IN")}` : ""}
                </span>
              </li>
            ))}
            {action.holdings.length > 40 ? (
              <li className={pe ? "text-[var(--pe-text-secondary)]" : "text-ink-3"}>
                +{action.holdings.length - 40} more
              </li>
            ) : null}
          </ul>
        </div>
        <div
          className={`flex flex-wrap items-center justify-between gap-3 border-t px-4 py-2.5 ${pe ? "border-[var(--pe-border)] bg-[var(--pe-surface-muted)]" : "border-line bg-paper-2"}`}
        >
          {applied ? (
            <span className="text-xs font-medium text-emerald-700">Saved to your book</span>
          ) : dismissed ? (
            <span className="text-xs text-[var(--pe-text-secondary)]">Dismissed — ask again if you change your mind</span>
          ) : expired ? (
            <span className="text-xs text-[var(--pe-text-secondary)]">This proposal expired — ask the assistant again</span>
          ) : onPortfolioConfirm ? (
            <>
              <span className="text-xs text-[var(--pe-text-secondary)]">Not saved until you confirm</span>
              <div className="flex gap-2">
                {onPortfolioDismiss ? (
                  <button
                    type="button"
                    className={
                      pe
                        ? "rounded-full px-3 py-1.5 text-sm font-medium text-[var(--pe-text-secondary)] hover:bg-white"
                        : "rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-white"
                    }
                    disabled={applying}
                    onClick={() => onPortfolioDismiss(action.proposalId)}
                  >
                    Dismiss
                  </button>
                ) : null}
                <button
                  type="button"
                  className={
                    pe
                      ? "rounded-full bg-[var(--pe-accent)] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-60"
                      : "btn-primary text-[13px] disabled:opacity-60"
                  }
                  disabled={applying}
                  onClick={() => onPortfolioConfirm(action)}
                >
                  {applying ? "Saving…" : "Confirm & save"}
                </button>
              </div>
            </>
          ) : (
            <span className="text-xs text-[var(--pe-text-secondary)]">Open Portfolio to confirm</span>
          )}
        </div>
      </div>
    );
  }
  const o = action.order;
  const status = order?.status ?? "proposed";
  const buy = o.side === "BUY";
  return (
    <div className={`overflow-hidden rounded-xl border ${pe ? "border-[var(--pe-border)] bg-[var(--pe-surface)]" : "border-line bg-white"}`}>
      <div className="flex items-start gap-3 p-4">
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold ${buy ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}
        >
          {o.side}
        </span>
        <div className="min-w-0 flex-1">
          <p className={`font-medium ${pe ? "text-[var(--pe-text)]" : "text-ink"}`}>
            {o.quantity} × {o.symbol}
            <span className={`ml-2 text-sm font-normal ${pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2"}`}>
              {o.exchange} · {o.product === "CNC" ? "Delivery" : "Intraday"} ·{" "}
              {o.orderType === "LIMIT" ? `Limit ₹${o.price?.toLocaleString("en-IN")}` : "Market"}
            </span>
          </p>
          <p className={`mt-1 text-sm ${pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2"}`}>{action.rationale}</p>
        </div>
      </div>
      <div
        className={`flex flex-wrap items-center justify-between gap-3 border-t px-4 py-2.5 ${pe ? "border-[var(--pe-border)] bg-[var(--pe-surface-muted)]" : "border-line bg-paper-2"}`}
      >
        {status === "proposed" && onDecide ? (
          <>
            <span className="text-xs text-[var(--pe-text-secondary)]">Not placed until you confirm</span>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-[var(--pe-text-secondary)] hover:bg-white"
                onClick={() => onDecide(action.orderId, "reject")}
              >
                Reject
              </button>
              <button
                type="button"
                className="rounded-full bg-[var(--pe-accent)] px-3 py-1.5 text-sm font-medium text-white"
                onClick={() => onDecide(action.orderId, "confirm")}
              >
                Confirm order
              </button>
            </div>
          </>
        ) : (
          <span className={`text-xs font-medium ${status === "executed" ? "text-emerald-700" : "text-[var(--pe-text-secondary)]"}`}>
            {status === "executed" ? `Placed · broker id ${order?.brokerOrderId ?? "—"}` : status[0].toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>
    </div>
  );
}

export function AgentBlocks({
  blocks,
  actions,
  theme = "pramaan",
  orders,
  onDecide,
  onPortfolioConfirm,
  onPortfolioDismiss,
  portfolioApplyingId,
  portfolioAppliedIds,
  portfolioDismissedIds,
}: {
  blocks: UiBlock[];
  actions: AgentAction[];
  theme?: "pramaan" | "pocketedge";
  orders?: Record<string, OrderState>;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
  onPortfolioConfirm?: (action: Extract<AgentAction, { kind: "portfolio_confirmation" }>) => void;
  onPortfolioDismiss?: (proposalId: string) => void;
  portfolioApplyingId?: string | null;
  portfolioAppliedIds?: string[];
  portfolioDismissedIds?: string[];
}) {
  const pe = theme === "pocketedge";
  const border = pe ? "border-[var(--pe-border)]" : "border-line";
  const text = pe ? "text-[var(--pe-text)]" : "text-ink";
  const text2 = pe ? "text-[var(--pe-text-secondary)]" : "text-ink-2";
  const surface = pe ? "bg-[var(--pe-surface)]" : "bg-white";
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "markdown") {
          return <AgentMarkdown key={i} text={block.text} />;
        }
        if (block.kind === "card") {
          return (
            <div key={i} className={`rounded-xl border ${border} ${surface} p-4`}>
              <p className={`font-semibold ${text}`}>{block.title}</p>
              {block.body && <p className={`mt-1 text-sm ${text2}`}>{block.body}</p>}
              {block.fields?.length ? (
                <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                  {block.fields.map((f) => (
                    <div key={f.label}>
                      <dt className={`text-meta ${text2}`}>{f.label}</dt>
                      <dd className={`font-medium ${text}`}>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={i} className={`overflow-hidden rounded-xl border ${border} ${surface}`}>
              {block.title && <p className={`border-b ${border} px-4 py-2 text-sm font-medium ${text}`}>{block.title}</p>}
              <div className="max-h-80 overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`text-left text-xs ${text2}`}>
                      {block.columns.map((c) => (
                        <th key={c.key} className={`border-b ${border} px-3 py-2`}>{c.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={`border-b ${border}/60`}>
                        {block.columns.map((c) => (
                          <td key={c.key} className="px-3 py-2 tabular-nums">
                            {formatCell(row[c.key] ?? null, c.format)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
        return null;
      })}
      {actions.map((action, i) => (
        <ActionCard
          key={i}
          action={action}
          pe={pe}
          order={action.kind === "order_confirmation" ? orders?.[action.orderId] : undefined}
          onDecide={onDecide}
          onPortfolioConfirm={onPortfolioConfirm}
          onPortfolioDismiss={onPortfolioDismiss}
          portfolioApplyingId={portfolioApplyingId}
          portfolioAppliedIds={portfolioAppliedIds}
          portfolioDismissedIds={portfolioDismissedIds}
        />
      ))}
    </div>
  );
}
