"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAgentShell } from "@/components/agent/agent-shell-context";
import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { ChatTurn } from "@/components/agent/chat/AgentChatMessages";
import { AgentFilesPanel } from "@/components/agent/chat/AgentFilesPanel";
import { ScrollAnchor } from "@/components/agent/chat/ScrollAnchor";
import { useThreadArtifacts } from "@/components/agent/chat/MessageArtifacts";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { formatBytes, MAX_FILE_BYTES } from "@/lib/agent/file-limits";
import { isValidThreadId, newThreadId } from "@/lib/agent/thread-id";
import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

const SUGGESTIONS = [
  "What moved in Indian markets today?",
  "Summarise my portfolio risk",
  "Explain the latest RBI stance on rates",
];

export function PramaanAgentChat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { threads, filesOpen, setFilesOpen, refreshThreads, upsertThread, bootstrapChat } = useAgentShell();
  const threadParam = searchParams.get("t");
  const threadId = threadParam && isValidThreadId(threadParam) ? threadParam : "main";

  const authHeaders = useCallback(() => pocketedgeAuthHeaders(), []);

  useEffect(() => {
    if (threadParam === "new") {
      router.replace(`/ai?t=${newThreadId()}`);
      return;
    }
    if (threadParam && isValidThreadId(threadParam)) return;
    const newest = threads[0]?.id;
    if (newest && newest !== "main") {
      router.replace(`/ai?t=${encodeURIComponent(newest)}`);
    }
  }, [threadParam, threads, router]);

  const [ready, setReady] = useState(false);
  const [agentState, setAgentState] = useState<"unknown" | "active" | "disabled" | "error">("unknown");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [orders, setOrders] = useState<Record<string, OrderState>>({});
  const [fileLibrary, setFileLibrary] = useState<JobAttachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const libraryLoaded = useRef(false);
  const consumedBootstrapFor = useRef<string | null>(null);

  const loadThread = useCallback(
    async (headers: Record<string, string>, opts?: { includeLibrary?: boolean }) => {
      const includeLibrary = opts?.includeLibrary ?? false;
      const scope = includeLibrary ? "full" : "messages";
      const res = await fetch(
        `/api/agent/chat-state?threadId=${encodeURIComponent(threadId)}&limit=50&fileLimit=100&scope=${scope}`,
        { headers, cache: "no-store" },
      );
      if (!res.ok) return;
      const json = await res.json();
      setMessages((json.messages as AgentMessage[]) || []);
      if (includeLibrary) {
        const map: Record<string, OrderState> = {};
        for (const o of json.orders ?? []) {
          map[o.id] = { status: o.status, brokerOrderId: o.brokerOrderId };
        }
        setOrders(map);
        setFileLibrary(json.files ?? []);
      }
    },
    [threadId],
  );

  const reloadChat = useCallback(async () => {
    try {
      const headers = await authHeaders();
      const includeLibrary = !libraryLoaded.current;
      await loadThread(headers, { includeLibrary });
      if (includeLibrary) libraryLoaded.current = true;
      setAgentState("active");
    } catch {
      setAgentState("error");
    } finally {
      setReady(true);
    }
  }, [authHeaders, loadThread]);

  useEffect(() => {
    consumedBootstrapFor.current = null;
    libraryLoaded.current = false;
    setReady(false);
    void reloadChat();
  }, [threadId, reloadChat]);

  useEffect(() => {
    if (!bootstrapChat || bootstrapChat.threadId !== threadId) return;
    if (consumedBootstrapFor.current === threadId) return;
    consumedBootstrapFor.current = threadId;
    setMessages(bootstrapChat.messages);
    setOrders(bootstrapChat.orders);
    setFileLibrary(bootstrapChat.files);
    libraryLoaded.current = true;
    setAgentState("active");
    setReady(true);
  }, [bootstrapChat, threadId]);

  const working = messages.some((m) => m.status === "working");
  useEffect(() => {
    if (!working) return;
    const id = window.setInterval(() => {
      void authHeaders().then((headers) => loadThread(headers, { includeLibrary: false }));
    }, 8000);
    return () => window.clearInterval(id);
  }, [working, authHeaders, loadThread]);

  const updateMessage = useCallback((id: string, patch: Partial<AgentMessage>) => {
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }, []);

  const fetchMessage = useCallback(
    async (messageId: string, headers: Record<string, string>): Promise<AgentMessage | null> => {
      const res = await fetch(`/api/agent/messages/${messageId}`, { headers, cache: "no-store" });
      if (!res.ok) return null;
      const json = await res.json();
      return json.message as AgentMessage;
    },
    [],
  );

  const reconcileMessage = useCallback(
    async (messageId: string, headers: Record<string, string>, maxWaitMs = 0): Promise<AgentMessage | null> => {
      const deadline = Date.now() + maxWaitMs;
      let msg: AgentMessage | null = null;
      while (true) {
        msg = await fetchMessage(messageId, headers);
        if (msg) updateMessage(messageId, msg);
        if (!msg || msg.status !== "working" || Date.now() >= deadline) return msg;
        await new Promise((r) => setTimeout(r, 2000));
      }
    },
    [fetchMessage, updateMessage],
  );

  async function streamMessage(messageId: string, headers: Record<string, string>): Promise<AgentMessage> {
    const res = await fetch(`/api/agent/messages/${messageId}/events`, {
      headers: { ...headers, Accept: "text/event-stream" },
    });
    if (!res.ok || !res.body) {
      const detail = await res.text().catch(() => "");
      throw new Error(detail.trim() || `stream_failed (${res.status})`);
    }

    const track = { latest: null as AgentMessage | null };
    const apply = (event: ReturnType<typeof parseStreamEvent>) => {
      if (!event) return;
      setMessages((list) =>
        list.map((m) => {
          if (m.id !== messageId) return m;
          const next = applyStreamEvent(m, event);
          track.latest = next;
          return next;
        }),
      );
    };

    const pullFull = async () => {
      const msg = await fetchMessage(messageId, headers);
      if (!msg) return;
      track.latest = msg;
      setMessages((list) => list.map((m) => (m.id === messageId ? msg : m)));
    };

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
      let boundary = buffer.indexOf("\n\n");
      while (boundary !== -1) {
        const part = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        const frame = parseSseFrame(part);
        if (frame) {
          const event = parseStreamEvent(frame);
          apply(event);
          if (event?.type === "done" || event?.type === "error") {
            await pullFull();
            if (track.latest) return track.latest;
          }
        }
        boundary = buffer.indexOf("\n\n");
      }
    }

    await pullFull();
    const snapshot = track.latest;
    if (snapshot && snapshot.status === "working") {
      const settled = await reconcileMessage(messageId, headers, 120_000);
      if (settled) return settled;
    }
    if (snapshot) return snapshot;
    throw new Error("stream_empty");
  }

  async function onSend(text: string, attachmentIds: string[]) {
    const q = text.trim();
    if ((!q && !attachmentIds.length) || busy) return false;
    setBusy(true);
    setError(null);
    let sentId: string | undefined;
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
        const busy = res.status === 409 || json?.error?.code === "agent_busy";
        if (busy) {
          await loadThread(headers);
          refreshThreads();
        }
        setError(
          busy
            ? "Still finishing the last reply — give it a few seconds, then try again."
            : json?.error?.message || json?.error || "Could not send message.",
        );
        return false;
      }
      const msg = { ...(json.message as AgentMessage), steps: ["Starting your agent…"] };
      sentId = msg.id;
      setMessages((m) => [msg, ...m]);
      const title = q.trim() || "New chat";
      upsertThread({
        id: threadId,
        title: title.length > 72 ? `${title.slice(0, 72)}…` : title,
        updatedAt: new Date().toISOString(),
        working: true,
      });
      refreshThreads();
      const final = await streamMessage(msg.id, headers);
      setMessages((m) => m.map((x) => (x.id === final.id ? final : x)));
      await loadThread(headers);
      await refreshArtifacts();
      refreshThreads();
      return true;
    } catch (e) {
      if (sentId) {
        try {
          const headers = await authHeaders();
          await reconcileMessage(sentId, headers, 30_000);
          await loadThread(headers);
          refreshThreads();
        } catch {
          // keep the surfaced error below
        }
      }
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
  const { byMessage: artifactsByMessage, refresh: refreshArtifacts } = useThreadArtifacts(messages, authHeaders);
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
          <button type="button" className="btn-secondary mt-6 text-sm" onClick={() => void reloadChat()}>
            Check again
          </button>
        </div>
      </div>
    );
  }

  const chatActive = agentState === "active";

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-end gap-2 px-3 py-2 sm:px-5">
          <button type="button" className="btn-ghost text-xs" onClick={() => setFilesOpen(!filesOpen)}>
            Files
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 sm:px-6">
          {!thread.length ? (
            <div className="flex min-h-[min(52vh,28rem)] flex-col items-center justify-center px-4 text-center">
              <p className="text-display text-[clamp(1.75rem,4vw,2.5rem)]">
                Ask about <span className="mark">markets</span>
              </p>
              <p className="mt-4 max-w-md text-body">
                Portfolio context, research, uploads, and trade ideas — always with your confirmation before orders.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-12 py-2">
              {thread.map((message) => (
                <ChatTurn
                  key={message.id}
                  message={message}
                  orders={orders}
                  onDecide={onDecide}
                  artifacts={artifactsByMessage[message.id]}
                  getAuthHeaders={authHeaders}
                />
              ))}
              <ScrollAnchor version={scrollKey} />
            </div>
          )}
        </div>

        <div className="border-t border-line/70 bg-white/90 px-4 py-4 backdrop-blur-sm sm:px-6">
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
        agentArtifacts={messages.flatMap((m) =>
          (artifactsByMessage[m.id] ?? []).map((a) => ({ messageId: m.id, artifact: a })),
        )}
        getAuthHeaders={authHeaders}
      />
    </div>
  );
}
