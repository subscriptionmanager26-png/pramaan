"use client";

import { useCallback, useEffect, useState } from "react";

import {
  ArtifactDownloadButton,
  useArtifactDownloads,
} from "@/components/agent/chat/ArtifactDownloadButton";
import { artifactDisplayName, type AgentArtifact } from "@/lib/agent/artifacts";

async function loadArtifacts(messageId: string, headers: Record<string, string>) {
  const res = await fetch(`/api/agent/messages/${encodeURIComponent(messageId)}/artifacts`, {
    headers,
    cache: "no-store",
  });
  if (!res.ok) return [];
  const json = (await res.json()) as { items?: AgentArtifact[] };
  return json.items ?? [];
}

export function useThreadArtifacts(
  messages: { id: string; status: string }[],
  getAuthHeaders: () => Promise<Record<string, string>>,
) {
  const [byMessage, setByMessage] = useState<Record<string, AgentArtifact[]>>({});

  const refresh = useCallback(async () => {
    if (!messages.length) return;
    try {
      const headers = await getAuthHeaders();
      const entries = await Promise.all(
        messages.map(async (m) => [m.id, await loadArtifacts(m.id, headers)] as const),
      );
      setByMessage(Object.fromEntries(entries));
    } catch {
      /* ignore */
    }
  }, [messages, getAuthHeaders]);

  const key = messages.map((m) => `${m.id}:${m.status}`).join("|");
  useEffect(() => {
    void refresh();
    const active = messages.some((m) => m.status === "working");
    if (!active) return;
    const id = window.setInterval(() => void refresh(), 8000);
    return () => window.clearInterval(id);
  }, [key, refresh, messages]);

  return { byMessage, refresh };
}

export function MessageArtifacts({
  messageId,
  items,
  getAuthHeaders,
}: {
  messageId: string;
  items: AgentArtifact[];
  getAuthHeaders: () => Promise<Record<string, string>>;
}) {
  const { download, activeKey, savedKey, error, setError } = useArtifactDownloads(getAuthHeaders);

  if (!items.length) return null;

  const shown = items.slice(0, 4);
  return (
    <div className="mt-3 space-y-2">
      <p className="text-meta">Files from this reply</p>
      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
          {error}
          <button type="button" className="ml-2 font-semibold underline" onClick={() => setError(null)}>
            Dismiss
          </button>
        </p>
      ) : null}
      <ul className="space-y-1.5">
        {shown.map((item) => (
          <li
            key={item.path}
            className="flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-2"
          >
            <span
              className="min-w-0 flex-1 truncate text-xs font-medium text-ink"
              title={artifactDisplayName(item.path)}
            >
              {artifactDisplayName(item.path)}
            </span>
            <ArtifactDownloadButton
              messageId={messageId}
              path={item.path}
              activeKey={activeKey}
              savedKey={savedKey}
              onDownload={download}
            />
          </li>
        ))}
      </ul>
      {items.length > shown.length ? (
        <p className="text-xs text-ink-3">+{items.length - shown.length} more in Files (sidebar)</p>
      ) : null}
    </div>
  );
}
