"use client";

import { useEffect, useState } from "react";

import { AdvisorAvatar } from "@/components/agent/AdvisorAvatar";
import { AgentBlocks } from "@/components/agent/AgentBlocks";
import { MessageArtifacts } from "@/components/agent/chat/MessageArtifacts";
import type { AgentArtifact } from "@/lib/agent/artifacts";
import type { Advisor } from "@/lib/agent/advisors";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { formatBytes } from "@/lib/agent/file-limits";
import { formatDateTime } from "@/lib/utils";

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
          className="flex max-w-full items-center gap-2 rounded-lg border border-line bg-white py-1 pr-2.5 pl-1.5 text-xs text-ink"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-accent-2 text-[10px] font-bold text-accent">
            {a.kind === "pdf" ? "PDF" : "CSV"}
          </span>
          <span className="max-w-48 truncate font-medium">{a.name}</span>
          <span className="text-ink-3">{formatBytes(a.size)}</span>
        </span>
      ))}
    </div>
  );
}

function MessageTimestamp({ label, at }: { label: string; at: string }) {
  const formatted = formatDateTime(at);
  if (!formatted) return null;
  return (
    <p className="mt-1.5 text-[11px] leading-snug text-ink-3" title={at}>
      <span className="font-medium text-ink-2">{label}</span>
      <span aria-hidden className="mx-1.5 text-line">
        ·
      </span>
      <time dateTime={at}>{formatted}</time>
    </p>
  );
}

export function UserMessage({ text, attachments, sentAt }: { text: string; attachments?: JobAttachment[]; sentAt: string }) {
  return (
    <div className="ml-auto w-full max-w-[min(100%,38rem)]">
      <div className="rounded-2xl border-2 border-accent/35 bg-accent-2 px-4 py-3 shadow-[4px_4px_0_rgba(47,87,255,0.14)] ring-1 ring-accent/10">
        <AttachmentList attachments={attachments ?? []} />
        <p className="text-[15px] font-medium leading-7 whitespace-pre-wrap text-ink [overflow-wrap:anywhere]">
          {text}
        </p>
      </div>
      <MessageTimestamp label="You sent" at={sentAt} />
    </div>
  );
}

function Elapsed({ since }: { since: string }) {
  const [, tick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => tick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="text-xs tabular-nums text-ink-3">{duration(since)}</span>;
}

function WorkingSteps({ steps, startedAt }: { steps: string[]; startedAt: string }) {
  const done = steps.length > 1 ? steps.slice(0, -1) : [];
  const current = steps[steps.length - 1] ?? "Thinking…";
  return (
    <div role="status" aria-live="polite" className="space-y-1.5 text-sm">
      {done.map((s, i) => (
        <p key={`${s}-${i}`} className="flex items-center gap-2 text-ink-3">
          <span className="text-accent" aria-hidden>✓</span>
          {s}
        </p>
      ))}
      <p className="flex items-center gap-2 text-ink">
        <span className="inline-block size-3.5 animate-spin rounded-full border-2 border-line border-t-accent" />
        <span className="agent-shimmer font-medium">{current.replace(/…$/, "")}</span>
        <Elapsed since={startedAt} />
      </p>
    </div>
  );
}

function StepsSummary({ steps, from, to }: { steps: string[]; from: string; to?: string }) {
  const label = `Worked for ${duration(from, to)}`;
  if (!steps.length) return <p className="text-xs text-ink-3">{label}</p>;
  return (
    <details className="text-xs text-ink-3">
      <summary className="cursor-pointer hover:text-ink">{label} · {steps.length} steps</summary>
      <ul className="mt-2 space-y-1.5 border-l border-line pl-3">
        {steps.map((s, i) => (
          <li key={`${s}-${i}`} className="flex items-center gap-2">
            <span className="text-accent">✓</span>
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
      className="text-xs text-ink-3 hover:text-ink"
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
  advisor,
  orders,
  onDecide,
  artifacts,
  getAuthHeaders,
}: {
  message: AgentMessage;
  advisor: Advisor;
  orders?: Record<string, OrderState>;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
  artifacts?: AgentArtifact[];
  getAuthHeaders?: () => Promise<Record<string, string>>;
}) {
  const working = message.status === "working";
  const steps = message.steps ?? [];
  const showSteps = working || steps.length > 0;
  const repliedAt = message.completedAt || (message.status === "completed" ? message.createdAt : undefined);
  return (
    <div className="mr-auto w-full max-w-[min(100%,42rem)] space-y-4">
      <div className="flex flex-wrap items-end gap-x-2 gap-y-0.5">
        <AdvisorAvatar advisor={advisor} size="sm" />
        <p className="text-[13px] font-semibold text-ink-2">{advisor.name}</p>
        {working ? (
          <p className="text-[11px] text-ink-3">
            Replying
            <span className="mx-1.5 text-line" aria-hidden>
              ·
            </span>
            <time dateTime={message.createdAt}>since {formatDateTime(message.createdAt)}</time>
          </p>
        ) : repliedAt ? (
          <p className="text-[11px] text-ink-3">
            <span className="font-medium text-ink-2">Replied</span>
            <span className="mx-1.5 text-line" aria-hidden>
              ·
            </span>
            <time dateTime={repliedAt}>{formatDateTime(repliedAt)}</time>
          </p>
        ) : null}
      </div>
      {showSteps &&
        (working ? (
          <WorkingSteps steps={steps.length ? steps : ["Thinking…"]} startedAt={message.createdAt} />
        ) : (
          <StepsSummary steps={steps} from={message.createdAt} to={message.completedAt} />
        ))}
      {(message.blocks.length > 0 || message.actions.length > 0) && (
        <AgentBlocks
          blocks={message.blocks}
          actions={message.actions}
          theme="pramaan"
          orders={orders}
          onDecide={onDecide}
        />
      )}
      {message.status === "failed" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {message.error || "The agent could not finish this message."}
        </div>
      )}
      {artifacts?.length && getAuthHeaders ? (
        <MessageArtifacts messageId={message.id} items={artifacts} getAuthHeaders={getAuthHeaders} />
      ) : null}
      <CopyReply message={message} />
    </div>
  );
}

export function ChatTurn({
  message,
  advisor,
  orders,
  onDecide,
  artifacts,
  getAuthHeaders,
}: {
  message: AgentMessage;
  advisor: Advisor;
  orders?: Record<string, OrderState>;
  onDecide?: (orderId: string, decision: "confirm" | "reject") => void;
  artifacts?: AgentArtifact[];
  getAuthHeaders?: () => Promise<Record<string, string>>;
}) {
  return (
    <section className="flex flex-col gap-6 border-b border-line/70 pb-10 last:border-0 last:pb-4">
      <UserMessage text={message.text} attachments={message.attachments} sentAt={message.createdAt} />
      <AssistantMessage
        message={message}
        advisor={advisor}
        orders={orders}
        onDecide={onDecide}
        artifacts={artifacts}
        getAuthHeaders={getAuthHeaders}
      />
    </section>
  );
}
