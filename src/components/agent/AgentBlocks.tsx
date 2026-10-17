import type { AgentAction, UiBlock } from "@/lib/agent/types";

function formatCell(value: string | number | null, format?: string) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value !== "number") return value;
  if (format === "currency") return `₹${Math.round(value).toLocaleString("en-IN")}`;
  if (format === "percent") return `${(value * 100).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`;
  return value.toLocaleString("en-IN");
}

function ActionCard({ action, pe }: { action: AgentAction; pe: boolean }) {
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
  return (
    <div
      className={`rounded-xl border p-4 text-sm ${pe ? "border-[var(--pe-border)] bg-[var(--pe-surface-muted)] text-[var(--pe-text-secondary)]" : "border-line bg-paper-2 text-ink-2"}`}
    >
      Review the order proposal in the app to confirm or reject.
    </div>
  );
}

export function AgentBlocks({
  blocks,
  actions,
  theme = "pramaan",
}: {
  blocks: UiBlock[];
  actions: AgentAction[];
  theme?: "pramaan" | "pocketedge";
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
          return (
            <div key={i} className={`prose prose-sm max-w-none whitespace-pre-wrap ${text2}`}>
              {block.text}
            </div>
          );
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
        <ActionCard key={i} action={action} pe={pe} />
      ))}
    </div>
  );
}
