"use client";

import { useCallback, useState } from "react";

import { artifactDisplayName, type AgentArtifact } from "@/lib/agent/artifacts";
import { artifactDownloadKey, downloadAgentArtifact } from "@/lib/agent/download-artifact";
import { formatBytes } from "@/lib/agent/file-limits";

export function useArtifactDownloads(getAuthHeaders: () => Promise<Record<string, string>>) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [savedKey, setSavedKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const download = useCallback(
    async (messageId: string, path: string) => {
      const key = artifactDownloadKey(messageId, path);
      if (activeKey === key) return;
      setActiveKey(key);
      setError(null);
      setSavedKey(null);
      const result = await downloadAgentArtifact(messageId, path, getAuthHeaders);
      setActiveKey(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setSavedKey(key);
      window.setTimeout(() => setSavedKey((k) => (k === key ? null : k)), 2500);
    },
    [activeKey, getAuthHeaders],
  );

  return { download, activeKey, savedKey, error, setError };
}

export function ArtifactDownloadButton({
  messageId,
  path,
  activeKey,
  savedKey,
  onDownload,
  size = "sm",
}: {
  messageId: string;
  path: string;
  activeKey: string | null;
  savedKey: string | null;
  onDownload: (messageId: string, path: string) => void;
  size?: "sm" | "md";
}) {
  const key = artifactDownloadKey(messageId, path);
  const loading = activeKey === key;
  const saved = savedKey === key;

  const pad = size === "md" ? "px-3 py-1.5 text-[13px]" : "px-2.5 py-1 text-xs";

  return (
    <button
      type="button"
      disabled={loading}
      aria-busy={loading}
      onClick={(e) => {
        e.stopPropagation();
        onDownload(messageId, path);
      }}
      className={`shrink-0 rounded-full border border-line bg-white font-semibold text-ink transition-colors hover:bg-paper-2 disabled:cursor-wait disabled:opacity-70 ${pad}`}
    >
      {loading ? (
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block size-3 animate-spin rounded-full border-2 border-line border-t-accent" aria-hidden />
          Downloading…
        </span>
      ) : saved ? (
        <span className="text-accent">Saved</span>
      ) : (
        "Download"
      )}
    </button>
  );
}

export function ArtifactFileRow({
  messageId,
  artifact,
  activeKey,
  savedKey,
  onDownload,
  meta,
}: {
  messageId: string;
  artifact: AgentArtifact;
  activeKey: string | null;
  savedKey: string | null;
  onDownload: (messageId: string, path: string) => void;
  meta?: string;
}) {
  const name = artifactDisplayName(artifact.path);
  return (
    <div className="flex items-start gap-2 rounded-xl border border-line bg-white px-3 py-2.5">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink" title={name}>{name}</p>
        {meta ? <p className="mt-0.5 text-xs text-ink-2">{meta}</p> : null}
      </div>
      <ArtifactDownloadButton
        messageId={messageId}
        path={artifact.path}
        activeKey={activeKey}
        savedKey={savedKey}
        onDownload={onDownload}
        size="md"
      />
    </div>
  );
}

export function artifactMetaLine(artifact: AgentArtifact) {
  const parts = [artifact.kind.toUpperCase()];
  if (artifact.sizeBytes != null) parts.push(formatBytes(artifact.sizeBytes));
  return parts.join(" · ");
}
