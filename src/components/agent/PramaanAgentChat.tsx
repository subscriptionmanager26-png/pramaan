"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAgentShell } from "@/components/agent/agent-shell-context";
import { useAgentUi } from "@/components/agent/agent-ui-context";
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
import { readChatCache, writeChatCache } from "@/lib/agent/chat-cache";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";
import { usePocketedgeAuth } from "@/lib/pocketedge/use-pocketedge-auth";
import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";

const SUGGESTIONS = [
  "What moved in Indian markets today?",
  "Summarise my portfolio risk",
  "Explain the latest RBI stance on rates",
];

export function PramaanAgentChat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { threads, threadsReady, filesOpen, setFilesOpen, refreshThreads, upsertThread, draftNonce } =
    useAgentShell();
  const { setConversationLive } = useAgentUi();
  const auth = usePocketedgeAuth();
  const threadParam = searchParams.get("t");
  const threadId = threadParam && isValidThreadId(threadParam) ? threadParam : "";
  /** Composer-ready draft: no ?t= yet — thread id is minted only on first send. */
  const isDraft = !threadParam || threadParam === "new" || !isValidThreadId(threadParam);

  const authHeaders = useCallback(() => pocketedgeAuthHeaders(), []);

  // Strip invalid / placeholder ?t= so refresh of /ai stays a draft (no orphan thread ids).
  useEffect(() => {
    if (threadParam === "new" || (threadParam && !isValidThreadId(threadParam))) {
      router.replace("/ai");
    }
  }, [threadParam, router]);

  const [ready, setReady] = useState(false);
  const [agentState, setAgentState] = useState<"unknown" | "active" | "disabled" | "error">("unknown");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [orders, setOrders] = useState<Record<string, OrderState>>({});
  const [fileLibrary, setFileLibrary] = useState<JobAttachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const libraryLoaded = useRef(false);
  const loadedThreadRef = useRef<string | null>(null);
  /** Id chosen for the current draft send (before URL updates). */
  const draftSendIdRef = useRef<string | null>(null);
  /** Bumps on each thread/draft switch so in-flight loads don't clobber newer ones. */
  const loadGenRef = useRef(0);

  /** Thread already has history on the server (sidebar), so we must fetch messages. */
  const isExistingThread = useMemo(
    () => Boolean(threadId && threads.some((t) => t.id === threadId)),
    [threads, threadId],
  );

  const persistMessages = useCallback((tid: string, list: AgentMessage[]) => {
    if (!tid) return;
    void getPocketedgeSupabase()
      .auth.getSession()
      .then(({ data }) => {
        writeChatCache(data.session?.user?.id || "", tid, list);
      })
      .catch(() => {
        writeChatCache("", tid, list);
      });
  }, []);

  /** Never replace local turns with an empty server snapshot (indexing lag / mid-send). */
  const applyServerMessages = useCallback(
    (tid: string, next: AgentMessage[]) => {
      setMessages((prev) => {
        if (!next.length && prev.length) return prev;
        persistMessages(tid, next.length ? next : prev);
        return next.length ? next : prev;
      });
    },
    [persistMessages],
  );

  const loadThread = useCallback(
    async (headers: Record<string, string>, opts?: { includeLibrary?: boolean; signal?: AbortSignal }) => {
      if (!threadId) return;
      const includeLibrary = opts?.includeLibrary ?? false;
      const scope = includeLibrary ? "full" : "messages";
      const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
      const res = await fetch(
        `/api/agent/chat-state?threadId=${encodeURIComponent(threadId)}&limit=40&fileLimit=100&scope=${scope}`,
        { headers, cache: "no-store", signal: opts?.signal },
      );
      const timing = res.headers.get("server-timing");
      if (typeof console !== "undefined") {
        console.debug(
          `[agent-chat] ${res.status} ${Math.round((typeof performance !== "undefined" ? performance.now() : Date.now()) - t0)}ms`,
          timing,
        );
      }
      if (!res.ok) {
        throw new Error(res.status === 401 ? "Sign in again to load this chat." : `Could not load chat (${res.status}).`);
      }
      const json = await res.json();
      const next = (json.messages as AgentMessage[]) || [];
      applyServerMessages(threadId, next);
      if (includeLibrary) {
        const map: Record<string, OrderState> = {};
        for (const o of json.orders ?? []) {
          map[o.id] = { status: o.status, brokerOrderId: o.brokerOrderId };
        }
        setOrders(map);
        setFileLibrary(json.files ?? []);
        libraryLoaded.current = true;
      }
    },
    [threadId, applyServerMessages],
  );

  const reloadChat = useCallback(
    async (opts?: { signal?: AbortSignal; gen?: number; timedOut?: () => boolean }) => {
      if (!threadId) return;
      const stale = () => opts?.gen != null && loadGenRef.current !== opts.gen;
      try {
        const headers = await authHeaders();
        if (stale()) return;
        await loadThread(headers, { includeLibrary: libraryLoaded.current, signal: opts?.signal });
        if (stale()) return;
        setAgentState("active");
        setError(null);
      } catch (e) {
        if (stale()) return;
        // Keep composer usable — load failure should not brick the thread UI.
        setAgentState("active");
        if (opts?.timedOut?.()) {
          setError("Loading this chat timed out. Try again.");
        } else if (opts?.signal?.aborted) {
          return;
        } else {
          setError(e instanceof Error ? e.message : "Could not load chat.");
        }
      } finally {
        if (!stale()) {
          setReady(true);
          loadedThreadRef.current = threadId;
        }
      }
    },
    [authHeaders, loadThread, threadId],
  );

  // Draft: composer immediately. URL thread: paint cache + fetch (don't wait on sidebar).
  useEffect(() => {
    if (isDraft) {
      const draftKey = `__draft__:${draftNonce}`;
      // First send still on /ai — keep optimistic turns on this draft only.
      if (draftSendIdRef.current && loadedThreadRef.current === draftKey) {
        setReady(true);
        setAgentState("active");
        return;
      }
      draftSendIdRef.current = null;
      loadGenRef.current += 1;
      libraryLoaded.current = false;
      setMessages([]);
      setOrders({});
      setFileLibrary([]);
      setError(null);
      setAgentState("active");
      setReady(true);
      loadedThreadRef.current = draftKey;
      return;
    }

    if (!threadId) return;

    const gen = ++loadGenRef.current;
    const promoted = draftSendIdRef.current === threadId;
    if (promoted) draftSendIdRef.current = null;

    // Never gate the UI on network — "Loading conversation…" must not stick.
    setReady(true);
    setAgentState("active");

    // Keep optimistic/cached turns visible while we revalidate — never skip the fetch.
    if (!promoted) {
      libraryLoaded.current = false;
      setOrders({});
      setFileLibrary([]);
      setError(null);
      // Memory seed is keyed by threadId only; session cache needs uid (async below).
      const seeded = readChatCache("", threadId);
      setMessages(seeded?.length ? seeded : []);
    }

    const controller = new AbortController();
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 20_000);

    void (async () => {
      if (!promoted) {
        try {
          const { data } = await getPocketedgeSupabase().auth.getSession();
          if (loadGenRef.current !== gen) return;
          const uid = data.session?.user?.id || "";
          const cached = readChatCache(uid, threadId);
          if (cached?.length) setMessages(cached);
        } catch {
          // keep seed / empty
        }
      }
      if (loadGenRef.current !== gen) return;
      await reloadChat({
        signal: controller.signal,
        gen,
        timedOut: () => timedOut,
      });
    })();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
      // Invalidate only if this effect's gen is still current (Strict Mode / deps change).
      if (loadGenRef.current === gen) loadGenRef.current += 1;
    };
  }, [isDraft, threadId, reloadChat, draftNonce]);
  // Lazy-load files/orders when the Files panel opens.
  useEffect(() => {
    if (!filesOpen || !threadId || !isExistingThread || libraryLoaded.current) return;
    void authHeaders().then((headers) => loadThread(headers, { includeLibrary: true }));
  }, [filesOpen, threadId, isExistingThread, authHeaders, loadThread]);

  const working = messages.some((m) => m.status === "working");
  useEffect(() => {
    if (!working || !threadId) return;
    const id = window.setInterval(() => {
      void authHeaders().then((headers) => loadThread(headers, { includeLibrary: false }));
    }, 8000);
    return () => window.clearInterval(id);
  }, [working, authHeaders, loadThread, threadId]);
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
    // Mint id only when sending so empty drafts never become threads.
    const sendThreadId = threadId || newThreadId();
    const promotedFromDraft = !threadId;
    const optimisticId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const optimistic: AgentMessage = {
      id: optimisticId,
      threadId: sendThreadId,
      text: q || (attachmentIds.length ? "Sent with attachment" : ""),
      attachments: attachmentIds.map((id, i) => ({
        id,
        name: attachmentIds.length === 1 ? "Attachment" : `Attachment ${i + 1}`,
        kind: "file",
        size: 0,
      })),
      status: "working",
      createdAt: new Date().toISOString(),
      blocks: [],
      actions: [],
      steps: ["Sending…"],
    };
    setMessages((m) => {
      const next = [optimistic, ...m];
      persistMessages(sendThreadId, next);
      return next;
    });
    const title = q.trim() || "New chat";
    upsertThread({
      id: sendThreadId,
      title: title.length > 72 ? `${title.slice(0, 72)}…` : title,
      updatedAt: new Date().toISOString(),
      working: true,
    });
    // Stay on draft URL until POST succeeds — early ?t= remounts wipe optimistic state.
    if (promotedFromDraft) {
      draftSendIdRef.current = sendThreadId;
      loadedThreadRef.current = `__draft__:${draftNonce}`;
    }

    const markFailed = (errText: string) => {
      setMessages((m) => {
        const next = m.map((x) =>
          x.id === optimisticId
            ? { ...x, status: "failed" as const, steps: [], error: errText }
            : x,
        );
        persistMessages(sendThreadId, next);
        return next;
      });
      upsertThread({
        id: sendThreadId,
        title: title.length > 72 ? `${title.slice(0, 72)}…` : title,
        updatedAt: new Date().toISOString(),
        working: false,
      });
      setError(errText);
    };

    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/messages", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          text: q,
          threadId: sendThreadId,
          // Stable for HTTP retries of this click — PA reuses the same job.
          clientSendId: optimisticId,
          attachments: attachmentIds.length ? attachmentIds : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        const agentBusy = res.status === 409 || json?.error?.code === "agent_busy";
        const errText = agentBusy
          ? "Still finishing the last reply — give it a few seconds, then try again."
          : json?.error?.message || json?.error || "Could not send message.";
        if (agentBusy && threadId) {
          await loadThread(headers);
          refreshThreads();
        }
        if (promotedFromDraft) {
          draftSendIdRef.current = sendThreadId;
          loadedThreadRef.current = sendThreadId;
          router.replace(`/ai?t=${encodeURIComponent(sendThreadId)}`);
        }
        markFailed(typeof errText === "string" ? errText : "Could not send message.");
        return false;
      }
      const msg = { ...(json.message as AgentMessage), steps: ["Starting your agent…"] };
      sentId = msg.id;
      setMessages((m) => {
        const next = [msg, ...m.filter((x) => x.id !== optimisticId)];
        persistMessages(sendThreadId, next);
        return next;
      });
      if (promotedFromDraft) {
        draftSendIdRef.current = sendThreadId;
        loadedThreadRef.current = sendThreadId;
        router.replace(`/ai?t=${encodeURIComponent(sendThreadId)}`);
      }
      refreshThreads();
      const final = await streamMessage(msg.id, headers);
      setMessages((m) => {
        const next = m.map((x) => (x.id === final.id ? final : x));
        persistMessages(sendThreadId, next);
        return next;
      });
      await fetch(
        `/api/agent/chat-state?threadId=${encodeURIComponent(sendThreadId)}&limit=50&scope=messages`,
        { headers, cache: "no-store" },
      )
        .then(async (r) => {
          if (!r.ok) return;
          const body = await r.json();
          applyServerMessages(sendThreadId, (body.messages as AgentMessage[]) || []);
        })
        .catch(() => undefined);
      await refreshArtifacts();
      refreshThreads();
      return true;
    } catch (e) {
      if (sentId) {
        try {
          const headers = await authHeaders();
          await reconcileMessage(sentId, headers, 30_000);
          await fetch(
            `/api/agent/chat-state?threadId=${encodeURIComponent(sendThreadId)}&limit=50&scope=messages`,
            { headers, cache: "no-store" },
          )
            .then(async (r) => {
              if (!r.ok) return;
              const body = await r.json();
              applyServerMessages(sendThreadId, (body.messages as AgentMessage[]) || []);
            })
            .catch(() => undefined);
          if (promotedFromDraft && !threadId) {
            draftSendIdRef.current = sendThreadId;
            loadedThreadRef.current = sendThreadId;
            router.replace(`/ai?t=${encodeURIComponent(sendThreadId)}`);
          }
          refreshThreads();
        } catch {
          markFailed(e instanceof Error ? e.message : "Something went wrong.");
        }
      } else {
        if (promotedFromDraft) {
          draftSendIdRef.current = sendThreadId;
          loadedThreadRef.current = sendThreadId;
          router.replace(`/ai?t=${encodeURIComponent(sendThreadId)}`);
        }
        markFailed(e instanceof Error ? e.message : "Something went wrong.");
      }
      if (sentId) setError(e instanceof Error ? e.message : "Something went wrong.");
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

  const hasConversation = thread.length > 0;
  /** Greeting only for a true draft — never flash "new chat" while on ?t=. */
  const showEmptyHome = isDraft && !hasConversation;
  const greetName = auth.displayName?.split(/\s+/)[0] || "there";

  useEffect(() => {
    setConversationLive(hasConversation || busy || Boolean(threadId));
    return () => setConversationLive(false);
  }, [hasConversation, busy, threadId, setConversationLive]);

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

  const composer = (
    <AgentComposer
      disabled={!chatActive || busy}
      getAuthHeaders={authHeaders}
      onSend={onSend}
      suggestions={showEmptyHome ? SUGGESTIONS : undefined}
      hint={
        !showEmptyHome
          ? `PDF, CSV and Excel up to ${formatBytes(MAX_FILE_BYTES)}. Shift+Enter for a new line.`
          : undefined
      }
    />
  );

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Desktop: Files stays top-right. Mobile: Files is next to New Chat in AgentWorkspace chrome. */}
        <div className="hidden items-center justify-end gap-2 px-3 py-2 sm:px-5 lg:flex">
          <button type="button" className="btn-ghost text-xs" onClick={() => setFilesOpen(!filesOpen)}>
            Files
          </button>
        </div>

        {showEmptyHome ? (
          /* New chat: greeting + composer live in the screen body (not the site nav). */
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-8 pb-8">
              <div className="text-center">
                <p className="text-[clamp(1.5rem,5vw,2rem)] font-semibold tracking-tight text-ink">
                  Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"},{" "}
                  {greetName}.
                </p>
                <p className="mt-2 text-[14px] text-ink-2">
                  Ask about markets, your portfolio, or research.
                </p>
              </div>
              <div className="w-full">
                {error ? (
                  <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                    {error}
                  </p>
                ) : null}
                {composer}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 pb-4 sm:px-6">
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
                {!hasConversation ? (
                  <div className="space-y-3 py-8 text-center">
                    <p className="text-sm text-ink-2">{error || "No messages in this chat yet."}</p>
                    {error ? (
                      <button
                        type="button"
                        className="btn-secondary text-sm"
                        onClick={() => void reloadChat()}
                      >
                        Retry
                      </button>
                    ) : null}
                  </div>
                ) : null}
                <ScrollAnchor version={scrollKey} />
              </div>
            </div>
            <div className="border-t border-line/70 bg-white/90 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
              {error && hasConversation ? (
                <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                  {error}
                </p>
              ) : null}
              <div className="mx-auto max-w-3xl">{composer}</div>
            </div>
          </>
        )}
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
