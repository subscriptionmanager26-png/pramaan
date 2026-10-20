"use client";

import { useCallback, useEffect, useState } from "react";

import {
  artifactDisplayName,
  artifactDownloadPath,
  type AgentArtifact,
} from "@/lib/agent/artifacts";

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
  if (!items.length) return null;

  async function download(path: string) {
    const headers = await getAuthHeaders();
    const res = await fetch(artifactDownloadPath(messageId, path), { headers });
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = artifactDisplayName(path);
    a.click();
    URL.revokeObjectURL(url);
  }

  const shown = items.slice(0, 4);
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {shown.map((item) => (
        <button
          key={item.path}
          type="button"
          onClick={() => void download(item.path)}
          className="flex max-w-60 items-center gap-1.5 rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
        >
          <span className="truncate font-medium">{artifactDisplayName(item.path)}</span>
        </button>
      ))}
      {items.length > shown.length ? (
        <span className="text-xs text-ink-3">+{items.length - shown.length} more in Files</span>
      ) : null}
    </div>
  );
}
