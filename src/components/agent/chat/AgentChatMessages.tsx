"use client";

import { useEffect, useState } from "react";

import { AgentBlocks } from "@/components/agent/AgentBlocks";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { formatBytes } from "@/lib/agent/file-limits";

function duration(from: string, to?: string) {
  const s = Math.max(0, Math.round(((to ? Date.parse(to) : Date.now()) - Date.parse(from)) / 1000));
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
}

function AttachmentList({ attachments }: { attachments: JobAttachment[] }) {
  if (!attachments?.length) return null;
  return (
    <div className="mb-2.5 flex flex-wrap gap-1.5">
      {attachments.map((a) => (
        <span
          key={a.id}
          className="flex max-w-full items-center gap-2 rounded-lg border border-[var(--pe-border)] bg-[var(--pe-surface)] py-1 pr-2.5 pl-1.5 text-xs text-[var(--pe-text)]"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-[var(--pe-accent-soft)] text-[var(--pe-accent)]">
            {a.kind === "pdf" ? "PDF" : "CSV"}
          </span>
          <span className="max-w-48 truncate font-medium">{a.name}</span>
          <span className="text-[var(--pe-text-secondary)]">{formatBytes(a.size)}</span>
        </span>
      ))}
    </div>
  );
}

export function UserMessage({ text, attachments }: { text: string; attachments?: JobAttachment[] }) {
  return (
    <div className="rounded-2xl border border-[var(--pe-border)] bg-[var(--pe-surface-muted)] px-4 py-3">
      <AttachmentList attachments={attachments ?? []} />
      <p className="text-[15px] leading-7 whitespace-pre-wrap text-[var(--pe-text)] [overflow-wrap:anywhere]">{text}</p>
    </div>
  );
}

function Elapsed({ since }: { since: string }) {
  const [, tick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => tick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="text-xs tabular-nums text-[var(--pe-text-secondary)]">{duration(since)}</span>;
}

function WorkingSteps({ steps, startedAt }: { steps: string[]; startedAt: string }) {
  const done = steps.length > 1 ? steps.slice(0, -1) : [];
  const current = steps[steps.length - 1] ?? "Thinking…";
  return (
    <div role="status" aria-live="polite" className="space-y-1.5 text-sm">
      {done.map((s, i) => (
        <p key={`${s}-${i}`} className="flex items-center gap-2 text-[var(--pe-text-secondary)]">
          <span className="text-emerald-600" aria-hidden>✓</span>
          {s}
        </p>
      ))}
      <p className="flex items-center gap-2 text-[var(--pe-text)]">
        <span className="inline-block size-3.5 animate-spin rounded-full border-2 border-[var(--pe-border)] border-t-[var(--pe-accent)]" />
        <span className="pe-shimmer font-medium">{current.replace(/…$/, "")}</span>
        <Elapsed since={startedAt} />
      </p>
    </div>
  );
}

function StepsSummary({ steps, from, to }: { steps: string[]; from: string; to?: string }) {
  const label = `Worked for ${duration(from, to)}`;
  if (!steps.length) return <p className="text-xs text-[var(--pe-text-secondary)]">{label}</p>;
  return (
    <details className="text-xs text-[var(--pe-text-secondary)]">
      <summary className="cursor-pointer hover:text-[var(--pe-text)]">
        {label} · {steps.length} {steps.length === 1 ? "step" : "steps"}
      </summary>
      <ul className="mt-2 space-y-1.5 border-l border-[var(--pe-border)] pl-3">
        {steps.map((s, i) => (
          <li key={`${s}-${i}`} className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            {s}
          </li>
        ))}
      </ul>
    </details>
  );
}

function CopyReply({ message }: { message: AgentMessage }) {
  const [copied, setCopied] = useState(false);
  const copyText = message.blocks.flatMap((b) => (b.kind === "markdown" ? [b.text] : [])).join("\n\n");
  if (!copyText || message.status === "working") return null;
  return (
    <button
      type="button"
      className="text-xs text-[var(--pe-text-secondary)] hover:text-[var(--pe-text)]"
      onClick={() => {
        void navigator.clipboard.writeText(copyText).then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        });
      }}
    >
      {copied ? "Copied" : "Copy reply"}
    </button>
  );
}

export function AssistantMessage({
  message,
  orders,
  onDecide,
}: {
  message: AgentMessage;
  orders?: Record<string, OrderState>;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
}) {
  const working = message.status === "working";
  const steps = message.steps ?? [];
  return (
    <div className="space-y-4">
      {working ? (
        <WorkingSteps steps={steps.length ? steps : ["Thinking…"]} startedAt={message.createdAt} />
      ) : (
        <StepsSummary steps={steps} from={message.createdAt} to={message.completedAt} />
      )}
      {message.blocks.length > 0 || message.actions.length > 0 ? (
        <div className="pe-agent-blocks">
          <AgentBlocks
            blocks={message.blocks}
            actions={message.actions}
            theme="pramaan"
            orders={orders}
            onDecide={onDecide}
          />
        </div>
      ) : null}
      {message.status === "failed" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {message.error || "The agent could not finish this message."}
        </div>
      )}
      <CopyReply message={message} />
    </div>
  );
}

export function ChatTurn({
  message,
  orders,
  onDecide,
}: {
  message: AgentMessage;
  orders?: Record<string, OrderState>;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
}) {
  return (
    <section className="space-y-4">
      <UserMessage text={message.text} attachments={message.attachments} />
      <AssistantMessage message={message} orders={orders} onDecide={onDecide} />
    </section>
  );
}
