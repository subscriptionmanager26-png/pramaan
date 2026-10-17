"use client";

import { formatBytes } from "@/lib/agent/file-limits";
import type { JobAttachment } from "@/lib/agent/types";

export function AgentFilesPanel({
  open,
  onClose,
  threadUploads,
  library,
}: {
  open: boolean;
  onClose: () => void;
  threadUploads: JobAttachment[];
  library: JobAttachment[];
}) {
  if (!open) return null;

  const byId = new Map<string, JobAttachment>();
  for (const f of library) byId.set(f.id, f);
  for (const f of threadUploads) byId.set(f.id, f);
  const files = [...byId.values()];

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
          {!files.length ? (
            <p className="text-sm text-ink-2">Uploads you attach in chat appear here.</p>
          ) : (
            <ul className="space-y-2">
              {files.map((f) => (
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
          )}
        </div>
      </aside>
    </>
  );
}
