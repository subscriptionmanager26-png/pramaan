import type { AgentAction, UiBlock } from "@/lib/agent/types";

function formatCell(value: string | number | null, format?: string) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value !== "number") return value;
  if (format === "currency") return `₹${Math.round(value).toLocaleString("en-IN")}`;
  if (format === "percent") return `${(value * 100).toLocaleString("en-IN", { maximumFractionDigits: 2 })}%`;
  return value.toLocaleString("en-IN");
}

function ActionCard({ action }: { action: AgentAction }) {
  if (action.kind === "connection_login") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
        <p className="font-semibold text-ink">Log in to {action.service}</p>
        {action.message && <p className="mt-1 text-sm text-ink-2">{action.message}</p>}
        <a
          href={action.url}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-3 inline-flex text-[13px]"
        >
          Log in
        </a>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-line bg-paper-2 p-4 text-sm text-ink-2">
      Review the order proposal in the app to confirm or reject.
    </div>
  );
}

export function AgentBlocks({ blocks, actions }: { blocks: UiBlock[]; actions: AgentAction[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "markdown") {
          return (
            <div key={i} className="prose prose-sm max-w-none text-ink-2 whitespace-pre-wrap">
              {block.text}
            </div>
          );
        }
        if (block.kind === "card") {
          return (
            <div key={i} className="rounded-xl border border-line bg-white p-4">
              <p className="font-semibold text-ink">{block.title}</p>
              {block.body && <p className="mt-1 text-sm text-ink-2">{block.body}</p>}
              {block.fields?.length ? (
                <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                  {block.fields.map((f) => (
                    <div key={f.label}>
                      <dt className="text-meta text-ink-2">{f.label}</dt>
                      <dd className="font-medium text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={i} className="overflow-hidden rounded-xl border border-line bg-white">
              {block.title && <p className="border-b border-line px-4 py-2 text-sm font-medium">{block.title}</p>}
              <div className="max-h-80 overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-ink-2">
                      {block.columns.map((c) => (
                        <th key={c.key} className="border-b border-line px-3 py-2">{c.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-line/60">
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
        <ActionCard key={i} action={action} />
      ))}
    </div>
  );
}
