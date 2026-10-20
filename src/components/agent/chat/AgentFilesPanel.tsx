"use client";

import {
  ArtifactFileRow,
  artifactMetaLine,
  useArtifactDownloads,
} from "@/components/agent/chat/ArtifactDownloadButton";
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
}: {
  open: boolean;
  onClose: () => void;
  threadUploads: JobAttachment[];
  library: JobAttachment[];
  agentArtifacts: { messageId: string; artifact: AgentArtifact }[];
  getAuthHeaders: () => Promise<Record<string, string>>;
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

  return (
    <>
      <button type="button" className="fixed inset-0 z-40 bg-black/40 lg:hidden" aria-label="Close files" onClick={onClose} />
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-line bg-white shadow-xl lg:static lg:z-0 lg:shadow-none"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <h3 className="text-sm font-semibold text-ink">Your files</h3>
          <button type="button" className="text-sm text-ink-2" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          {!uploads.length && !artifactRows.length ? (
            <p className="text-sm text-ink-2">
              Files you attach in chat and files the agent creates appear here. Use <strong>Download</strong> on each
              agent file — nothing saves until you click it.
            </p>
          ) : (
            <div className="space-y-4">
              {error ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
                  {error}
                  <button type="button" className="ml-2 font-semibold underline" onClick={() => setError(null)}>
                    Dismiss
                  </button>
                </p>
              ) : null}
              {artifactRows.length > 0 && (
                <div>
                  <p className="px-1 text-meta">From the agent</p>
                  <ul className="mt-2 space-y-2">
                    {artifactRows.map(({ key, messageId, artifact }) => (
                      <li key={key}>
                        <ArtifactFileRow
                          messageId={messageId}
                          artifact={artifact}
                          activeKey={activeKey}
                          savedKey={savedKey}
                          onDownload={download}
                          meta={artifactMetaLine(artifact)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {uploads.length > 0 && (
                <div>
                  <p className="px-1 text-meta">Your uploads</p>
                  <ul className="mt-2 space-y-2">
                    {uploads.map((f) => (
                      <li
                        key={f.id}
                        className="rounded-xl border border-line px-3 py-2 text-sm text-ink"
                      >
                        <p className="truncate font-medium">{f.name}</p>
                        <p className="text-xs text-ink-2">
                          {f.kind.toUpperCase()} · {formatBytes(f.size)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
