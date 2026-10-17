"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useAgentShell } from "@/components/agent/agent-shell-context";
import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { ChatTurn } from "@/components/agent/chat/AgentChatMessages";
import { AgentFilesPanel } from "@/components/agent/chat/AgentFilesPanel";
import { ScrollAnchor } from "@/components/agent/chat/ScrollAnchor";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { formatBytes, MAX_FILE_BYTES } from "@/lib/agent/file-limits";
import { isValidThreadId, newThreadId } from "@/lib/agent/thread-id";
import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";

const SUGGESTIONS = [
  "What moved in Indian markets today?",
  "Summarise my portfolio risk",
  "Explain the latest RBI stance on rates",
];

async function authHeaders() {
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  return { Authorization: `Bearer ${token}` };
}

function mergeSteps(steps: string[], label: string | undefined) {
  if (!label) return steps;
  const next = [...steps];
  if (next[next.length - 1] !== label) next.push(label);
  return next.slice(-12);
}

export function PramaanAgentChat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { filesOpen, setFilesOpen, refreshThreads } = useAgentShell();
  const threadParam = searchParams.get("t");
  const threadId = threadParam && isValidThreadId(threadParam) ? threadParam : "main";

  useEffect(() => {
    if (threadParam === "new") {
      router.replace(`/ai?t=${newThreadId()}`);
    }
  }, [threadParam, router]);

  const [ready, setReady] = useState(false);
  const [agentState, setAgentState] = useState<"unknown" | "active" | "disabled" | "error">("unknown");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [orders, setOrders] = useState<Record<string, OrderState>>({});
  const [fileLibrary, setFileLibrary] = useState<JobAttachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadThread = useCallback(
    async (headers: Record<string, string>) => {
      const list = await fetch(
        `/api/agent/messages?limit=50&threadId=${encodeURIComponent(threadId)}`,
        { headers },
      );
      if (list.ok) {
        const json = await list.json();
        setMessages((json.messages as AgentMessage[]) || []);
      }
      const ord = await fetch("/api/agent/orders", { headers });
      if (ord.ok) {
        const json = await ord.json();
        const map: Record<string, OrderState> = {};
        for (const o of json.orders ?? []) {
          map[o.id] = { status: o.status, brokerOrderId: o.brokerOrderId };
        }
        setOrders(map);
      }
      const files = await fetch("/api/agent/files?limit=100", { headers });
      if (files.ok) {
        const json = await files.json();
        setFileLibrary(json.files ?? []);
      }
    },
    [threadId],
  );

  const refreshSession = useCallback(async () => {
    try {
      const headers = await authHeaders();
      const sync = await fetch("/api/agent/sync", { method: "POST", headers });
      const body = await sync.json();
      setAgentState(body.agent === "active" ? "active" : body.agent === "disabled" ? "disabled" : "error");
      await loadThread(headers);
    } catch {
      setAgentState("error");
    } finally {
      setReady(true);
    }
  }, [loadThread]);

  useEffect(() => {
    void refreshSession();
  }, [refreshSession]);

  useEffect(() => {
    void authHeaders()
      .then((headers) => loadThread(headers))
      .catch(() => undefined);
  }, [threadId, loadThread]);

  const working = messages.some((m) => m.status === "working");
  useEffect(() => {
    if (!working) return;
    const id = window.setInterval(() => {
      void authHeaders().then((headers) => loadThread(headers));
    }, 4000);
    return () => window.clearInterval(id);
  }, [working, loadThread]);

  const updateMessage = useCallback((id: string, patch: Partial<AgentMessage>) => {
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }, []);

  async function streamMessage(messageId: string, headers: Record<string, string>): Promise<AgentMessage> {
    const res = await fetch(`/api/agent/messages/${messageId}/events`, { headers });
    if (!res.ok || !res.body) throw new Error("stream_failed");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let latest: AgentMessage | null = null;
    let steps: string[] = [];

    const pullFull = async () => {
      const full = await fetch(`/api/agent/messages/${messageId}`, { headers });
      if (full.ok) {
        const json = await full.json();
        latest = json.message as AgentMessage;
        latest = { ...latest, steps };
        updateMessage(messageId, latest);
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";
      for (const part of parts) {
        const dataLine = part.split("\n").find((l) => l.startsWith("data:"));
        if (!dataLine) continue;
        try {
          const data = JSON.parse(dataLine.slice(5).trim()) as { type?: string; label?: string };
          if (data.type === "status" && data.label) {
            steps = mergeSteps(steps, data.label);
            updateMessage(messageId, { steps });
          }
          if (data.type === "block" || data.type === "action_required" || data.type === "status") {
            await pullFull();
          }
          if (data.type === "done" || data.type === "error") {
            await pullFull();
            if (latest) return latest;
          }
        } catch {
          /* ignore */
        }
      }
    }
    if (latest) return latest;
    throw new Error("stream_empty");
  }

  async function onSend(text: string, attachmentIds: string[]) {
    const q = text.trim();
    if ((!q && !attachmentIds.length) || busy) return false;
    setBusy(true);
    setError(null);
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/messages", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          text: q,
          threadId,
          attachments: attachmentIds.length ? attachmentIds : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || json?.error || "Could not send message.");
        return false;
      }
      const msg = { ...(json.message as AgentMessage), steps: ["Starting your agent…"] };
      setMessages((m) => [msg, ...m]);
      refreshThreads();
      const final = await streamMessage(msg.id, headers);
      setMessages((m) => m.map((x) => (x.id === final.id ? final : x)));
      await loadThread(headers);
      refreshThreads();
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function onDecide(orderId: string, decision: "confirm" | "reject") {
    const headers = await authHeaders();
    const res = await fetch(`/api/agent/orders/${encodeURIComponent(orderId)}`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ status: decision === "confirm" ? "executed" : "rejected" }),
    });
    if (res.ok) {
      const json = await res.json();
      setOrders((o) => ({
        ...o,
        [orderId]: { status: json.order?.status ?? decision, brokerOrderId: json.order?.brokerOrderId },
      }));
    }
  }

  const thread = useMemo(() => [...messages].reverse(), [messages]);
  const threadUploads = useMemo(
    () => [...new Map(thread.flatMap((m) => m.attachments ?? []).map((a) => [a.id, a])).values()],
    [thread],
  );
  const scrollKey = useMemo(
    () =>
      thread
        .map((m) => `${m.id}:${m.status}:${m.blocks.length}:${(m.steps ?? []).join("|")}`)
        .join(";"),
    [thread],
  );

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <p className="text-ink-2">Loading conversation…</p>
      </div>
    );
  }

  if (agentState === "disabled") {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-md rounded-2xl border border-line bg-paper-2 px-6 py-10 text-center">
          <p className="text-headline">Your agent is not enabled yet</p>
          <p className="mt-2 text-sm text-ink-2">
            Pocketedge turns this on from your account. Once enabled, check again.
          </p>
          <button type="button" className="btn-secondary mt-6 text-sm" onClick={() => refreshSession()}>
            Check again
          </button>
        </div>
      </div>
    );
  }

  const chatActive = agentState === "active";
  const threadLabel = threadId === "main" ? "Main" : threadId.slice(0, 8);

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-end border-b border-line px-3 py-2 sm:hidden">
          <button type="button" className="btn-ghost text-xs" onClick={() => setFilesOpen(!filesOpen)}>
            Files
          </button>
        </div>
        <header className="hidden items-center justify-between gap-3 border-b border-line px-4 py-3 sm:flex sm:px-6">
          <div>
            <p className="text-headline text-base">Chat</p>
            <p className="text-meta text-ink-3">{threadLabel}</p>
          </div>
          <button type="button" className="btn-ghost text-xs" onClick={() => setFilesOpen(!filesOpen)}>
            Files
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          {!thread.length ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
              <p className="text-section text-2xl">What can I help you with?</p>
              <p className="mt-2 max-w-md text-sm text-ink-2">
                Markets, portfolio questions, research — with uploads and trade proposals you confirm.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-10">
              {thread.map((message) => (
                <ChatTurn key={message.id} message={message} orders={orders} onDecide={onDecide} />
              ))}
              <ScrollAnchor version={scrollKey} />
            </div>
          )}
        </div>

        <div className="border-t border-line bg-gradient-to-t from-paper-2 to-white px-4 py-4 sm:px-6">
          {error && (
            <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
          )}
          <div className="mx-auto max-w-3xl">
            <AgentComposer
              disabled={!chatActive || busy}
              getAuthHeaders={authHeaders}
              onSend={onSend}
              suggestions={thread.length ? undefined : SUGGESTIONS}
              hint={`PDF, CSV and Excel up to ${formatBytes(MAX_FILE_BYTES)}. Shift+Enter for a new line.`}
            />
          </div>
        </div>
      </div>

      <AgentFilesPanel
        open={filesOpen}
        onClose={() => setFilesOpen(false)}
        threadUploads={threadUploads}
        library={fileLibrary}
      />
    </div>
  );
}
