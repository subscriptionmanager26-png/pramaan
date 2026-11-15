"use client";

import Link from "next/link";
import { X } from "lucide-react";

import {
  ArtifactFileRow,
  artifactMetaLine,
  useArtifactDownloads,
} from "@/components/agent/chat/ArtifactDownloadButton";
import type { Advisor } from "@/lib/agent/advisors";
import type { AgentArtifact } from "@/lib/agent/artifacts";
import { formatBytes } from "@/lib/agent/file-limits";
import type { JobAttachment } from "@/lib/agent/types";

export function AgentFilesPanel({
  open,
  onClose,
  threadUploads,
  library,
  agentArtifacts,
  getAuthHeaders,
  advisor,
}: {
  open: boolean;
  onClose: () => void;
  threadUploads: JobAttachment[];
  library: JobAttachment[];
  agentArtifacts: { messageId: string; artifact: AgentArtifact }[];
  getAuthHeaders: () => Promise<Record<string, string>>;
  advisor?: Advisor | null;
}) {
  const { download, activeKey, savedKey, error, setError } = useArtifactDownloads(getAuthHeaders);

  if (!open) return null;

  const byId = new Map<string, JobAttachment>();
  for (const f of library) byId.set(f.id, f);
  for (const f of threadUploads) byId.set(f.id, f);
  const uploads = [...byId.values()];

  const artifactRows = agentArtifacts.map(({ messageId, artifact }) => ({
    key: `${messageId}:${artifact.path}`,
    messageId,
    artifact,
  }));

  const empty = !uploads.length && !artifactRows.length;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
        aria-label="Close panel"
        onClick={onClose}
      />
      <aside className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,18rem)] flex-col border-l border-line bg-paper-2 shadow-xl lg:static lg:z-0 lg:w-[17rem] lg:shrink-0 lg:shadow-none">
        <div className="flex items-center justify-between border-b border-line bg-white px-4 py-3 lg:hidden">
          <h3 className="text-[14px] font-semibold text-ink">Context</h3>
          <button type="button" className="btn-ghost !px-2 !py-1.5" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-3 py-4">
          {advisor ? (
            <section>
              <p className="text-meta uppercase tracking-[0.14em]">Agent</p>
              <div className="mt-2 rounded-2xl border border-line bg-white p-3 shadow-[3px_3px_0_rgba(11,11,11,0.06)]">
                <p className="text-[14px] font-bold tracking-tight text-ink">{advisor.name}</p>
                <p className="mt-1 text-[12px] leading-snug text-ink-2">{advisor.tagline}</p>
              </div>
            </section>
          ) : null}

          <section>
            <p className="text-meta uppercase tracking-[0.14em]">Connections</p>
            <Link
              href="/ai/connections"
              className="mt-2 flex items-center justify-between rounded-2xl border border-line bg-accent-2 px-3 py-3 text-[13px] font-semibold text-ink hover:border-accent"
            >
              <span>Manage connectors</span>
              <span className="text-accent">→</span>
            </Link>
          </section>

          <section>
            <p className="text-meta uppercase tracking-[0.14em]">Outputs</p>
            {error ? (
              <p
                className="mt-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-800"
                role="alert"
              >
                {error}
                <button type="button" className="ml-2 font-semibold underline" onClick={() => setError(null)}>
                  Dismiss
                </button>
              </p>
            ) : null}
            {empty ? (
              <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
                Attachments and agent files show up here.
              </p>
            ) : (
              <div className="mt-2 space-y-2">
                {artifactRows.map(({ key, messageId, artifact }) => (
                  <div key={key} className="rounded-xl border border-line bg-white p-1">
                    <ArtifactFileRow
                      messageId={messageId}
                      artifact={artifact}
                      activeKey={activeKey}
                      savedKey={savedKey}
                      onDownload={download}
                      meta={artifactMetaLine(artifact)}
                    />
                  </div>
                ))}
                {uploads.map((f) => (
                  <div
                    key={f.id}
                    className="rounded-xl border border-line bg-white px-3 py-2.5 text-[13px] text-ink"
                  >
                    <p className="truncate font-semibold">{f.name}</p>
                    <p className="text-meta mt-0.5">
                      {f.kind.toUpperCase()} · {formatBytes(f.size)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </aside>
    </>
  );
}
