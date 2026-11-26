"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { AdvisorAvatar } from "@/components/agent/AdvisorAvatar";
import { useAgentShell } from "@/components/agent/agent-shell-context";
import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { ChatTurn } from "@/components/agent/chat/AgentChatMessages";
import { AgentFilesPanel } from "@/components/agent/chat/AgentFilesPanel";
import { ScrollAnchor } from "@/components/agent/chat/ScrollAnchor";
import { useThreadArtifacts } from "@/components/agent/chat/MessageArtifacts";
import {
  aiHref,
  DEFAULT_ADVISOR_ID,
  durableAdvisorThreadId,
  getAdvisor,
} from "@/lib/agent/advisors";
import { aiTeamPreviewEnabled } from "@/lib/agent/ai-team-preview";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { formatBytes, MAX_FILE_BYTES } from "@/lib/agent/file-limits";
import { isValidThreadId } from "@/lib/agent/thread-id";
import { applyStreamEvent } from "@/lib/agent/apply-stream-event";
import { parseSseFrame, parseStreamEvent } from "@/lib/agent/sse";
import { readChatCache, writeChatCache } from "@/lib/agent/chat-cache";
import { mergeChatMessages } from "@/lib/agent/merge-chat-messages";
import { isGhostTurn, isTimeoutFailure, stripGhostTurns } from "@/lib/agent/sanitize-chat-messages";
import { reportAgentClientEvent } from "@/lib/agent/client-telemetry";
import { messageFromFailedResponse, parseJsonResponse } from "@/lib/agent/parse-json-response";
import {
  AGENTS_CREDITS_BANNER_TEXT,
  isAgenticAdvisorChatPaused,
} from "@/lib/agent/agents-credits-outage";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";
import { usePocketedgeAuth } from "@/lib/pocketedge/use-pocketedge-auth";
import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";
import { Lock } from "lucide-react";

export function PramaanAgentChat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    threads,
    threadsReady,
    filesOpen,
    setFilesOpen,
    refreshThreads,
    upsertThread,
    draftNonce,
    activeAdvisorId,
    showAgentInbox,
  } = useAgentShell();
  const auth = usePocketedgeAuth();
  const advisorId = activeAdvisorId ?? DEFAULT_ADVISOR_ID;
  const advisor = getAdvisor(advisorId);
  const chatPaused = isAgenticAdvisorChatPaused(advisor);
  const durableId = durableAdvisorThreadId(advisorId);
  const threadParam = searchParams.get("t");
  const hasAgent = Boolean(activeAdvisorId);
  // One continuous thread per agent — history is the context about you.
  const threadId = hasAgent
    ? threadParam && isValidThreadId(threadParam) && threadParam !== "new"
      ? threadParam
      : durableId
    : "";
  /** No agent selected (mobile inbox). With an agent we always bind the durable thread. */
  const isDraft = !hasAgent;

  const chatUrl = useCallback(
    (tid: string) => aiHref({ agent: advisorId, threadId: tid }),
    [advisorId],
  );

  const authHeaders = useCallback(() => pocketedgeAuthHeaders(), []);

  // Strip invalid / placeholder ?t=; bind one thread per advisor in the URL.
  useEffect(() => {
    if (!hasAgent) return;
    if (threadParam === "new" || (threadParam && !isValidThreadId(threadParam))) {
      router.replace(aiHref({ agent: advisorId, threadId: durableId }));
      return;
    }
    if (!threadParam) {
      router.replace(aiHref({ agent: advisorId, threadId: durableId }));
    }
  }, [threadParam, router, hasAgent, advisorId, durableId]);

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
  /** In-flight first send — used to detect silent wipe back to New chat. */
  const pendingSendRef = useRef<{
    optimisticId: string;
    sendThreadId: string;
    fromDraft: boolean;
    startedAt: number;
  } | null>(null);
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
        const merged = mergeChatMessages(prev, next);
        persistMessages(tid, merged);
        return merged;
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

  // Draft / localhost preview: composer immediately. Otherwise paint cache + fetch.
  useEffect(() => {
    if (isDraft || aiTeamPreviewEnabled()) {
      const draftKey = isDraft ? `__draft__:${draftNonce}` : `__agent__:${advisorId}:${draftNonce}`;
      // First send still on /ai — keep optimistic turns on this draft only.
      if (draftSendIdRef.current && loadedThreadRef.current === draftKey) {
        setReady(true);
        setAgentState("active");
        return;
      }
      const pending = pendingSendRef.current;
      if (pending?.fromDraft) {
        reportAgentClientEvent("chat_send_ui_reset", {
          reason: "draft_effect_cleared",
          durationMs: Date.now() - pending.startedAt,
          threadId: pending.sendThreadId,
          clientSendId: pending.optimisticId,
          draftNonce,
        });
        pendingSendRef.current = null;
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

    // First send already promotes the URL — onSend owns messages + stream until settled.
    if (promoted) {
      loadedThreadRef.current = threadId;
      return () => {
        if (loadGenRef.current === gen) loadGenRef.current += 1;
      };
    }

    libraryLoaded.current = false;
    setOrders({});
    setFileLibrary([]);
    setError(null);
    setBusy(false);
    const seeded = stripGhostTurns(readChatCache("", threadId) ?? []);
    setMessages((prev) => {
      if (prev.some((m) => m.status === "working")) return prev;
      return seeded.length ? seeded : [];
    });

    const controller = new AbortController();
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 20_000);

    void (async () => {
      try {
        const { data } = await getPocketedgeSupabase().auth.getSession();
        if (loadGenRef.current !== gen) return;
        const uid = data.session?.user?.id || "";
        const cached = stripGhostTurns(readChatCache(uid, threadId) ?? []);
        if (cached.length) {
          setMessages((prev) => mergeChatMessages(prev, cached));
        }
      } catch {
        // keep seed / empty
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
  }, [isDraft, threadId, reloadChat, draftNonce, advisorId]);
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

  const healAttemptRef = useRef<Set<string>>(new Set());

  const fetchMessageByClientSendId = useCallback(
    async (clientSendId: string, headers: Record<string, string>): Promise<AgentMessage | undefined> => {
      const res = await fetch(
        `/api/agent/messages?threadId=${encodeURIComponent(threadId)}&clientSendId=${encodeURIComponent(clientSendId)}&limit=3`,
        { headers, cache: "no-store", signal: AbortSignal.timeout(20_000) },
      );
      if (!res.ok) return undefined;
      const json = await res.json();
      return ((json.messages as AgentMessage[]) || [])[0];
    },
    [threadId],
  );

  const adoptServerTurn = useCallback(
    (thread: string, staleId: string, match: AgentMessage) => {
      setError(null);
      setMessages((m) => {
        const next = [match, ...m.filter((x) => x.id !== staleId && x.id !== match.id)];
        persistMessages(thread, next);
        return next;
      });
      const title =
        threads.find((t) => t.id === thread)?.title ??
        (match.text.length > 72 ? `${match.text.slice(0, 72)}…` : match.text || "Chat");
      upsertThread({
        id: thread,
        title,
        updatedAt: new Date().toISOString(),
        working: match.status === "working",
      });
    },
    [persistMessages, threads, upsertThread],
  );

  /** Drop cached timeout failures and reconcile in-flight server jobs (never locks composer). */
  useEffect(() => {
    if (!threadId || !ready || isDraft || pendingSendRef.current) return;

    const healKeys = messages
      .filter((m) => {
        if (healAttemptRef.current.has(m.id)) return false;
        if (isTimeoutFailure(m)) return true;
        if (m.id.startsWith("local-") && m.status === "working") return true;
        return false;
      })
      .map((m) => m.id);
    if (!healKeys.length) return;

    void (async () => {
      const headers = await authHeaders();
      for (const stale of messages.filter((m) => healKeys.includes(m.id))) {
        healAttemptRef.current.add(stale.id);
        const clientSendId =
          stale.clientSendId || (stale.id.startsWith("local-") ? stale.id : "");
        const match = clientSendId ? await fetchMessageByClientSendId(clientSendId, headers) : undefined;
        if (match) {
          adoptServerTurn(threadId, stale.id, match);
        } else {
          setMessages((m) => {
            const next = m.filter((x) => x.id !== stale.id);
            persistMessages(threadId, next);
            return next;
          });
          setError(null);
        }
      }
    })();
  }, [
    messages,
    threadId,
    ready,
    isDraft,
    authHeaders,
    fetchMessageByClientSendId,
    adoptServerTurn,
    persistMessages,
  ]);

  const updateMessage = useCallback((id: string, patch: Partial<AgentMessage>) => {
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }, []);

  const fetchMessage = useCallback(
    async (
      messageId: string,
      headers: Record<string, string>,
      timeoutMs = 20_000,
      opts?: { snapshot?: boolean },
    ): Promise<AgentMessage | null> => {
      const q = opts?.snapshot ? "?deep=0" : "";
      const res = await fetch(`/api/agent/messages/${messageId}${q}`, {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(timeoutMs),
      });
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
        await new Promise((r) => setTimeout(r, 1000));
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

    const pullFull = async (snapshot = false) => {
      const msg = await fetchMessage(messageId, headers, 20_000, { snapshot });
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
            await pullFull(true);
            if (track.latest) return track.latest;
          }
        }
        boundary = buffer.indexOf("\n\n");
      }
    }

    await pullFull(true);
    const snapshot = track.latest;
    if (snapshot && snapshot.status === "working") {
      const settled = await reconcileMessage(messageId, headers, 45_000);
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
    if (advisor.status !== "unlocked") {
      setBusy(false);
      setError(`Unlock ${advisor.name} to chat with this advisor.`);
      return false;
    }
    if (chatPaused) {
      setBusy(false);
      setError(AGENTS_CREDITS_BANNER_TEXT);
      return false;
    }
    const sendThreadId = threadId || durableId;
    const promotedFromDraft = isDraft;
    const optimisticId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const optimistic: AgentMessage = {
      id: optimisticId,
      clientSendId: optimisticId,
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
    const sendStartedAt = Date.now();
    pendingSendRef.current = {
      optimisticId,
      sendThreadId,
      fromDraft: promotedFromDraft,
      startedAt: sendStartedAt,
    };
    reportAgentClientEvent("chat_send_start", {
      threadId: sendThreadId,
      clientSendId: optimisticId,
      fromDraft: promotedFromDraft,
      attachmentCount: attachmentIds.length,
    });

    const markFailed = (errText: string, extra?: Record<string, string | number | boolean | null>) => {
      reportAgentClientEvent("chat_send_fail", {
        threadId: sendThreadId,
        clientSendId: optimisticId,
        fromDraft: promotedFromDraft,
        durationMs: Date.now() - sendStartedAt,
        error: errText.slice(0, 240),
        ...extra,
      });
      if (pendingSendRef.current?.optimisticId === optimisticId) pendingSendRef.current = null;
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

    const adoptServerMessage = async (match: AgentMessage, headers: Record<string, string>, recovered: boolean) => {
      reportAgentClientEvent("chat_send_ok", {
        threadId: sendThreadId,
        clientSendId: optimisticId,
        messageId: match.id,
        fromDraft: promotedFromDraft,
        durationMs: Date.now() - sendStartedAt,
        recovered,
      });
      sentId = match.id;
      if (pendingSendRef.current?.optimisticId === optimisticId) pendingSendRef.current = null;
      const working = { ...match, status: "working" as const, steps: match.steps?.length ? match.steps : ["Thinking…"] };
      setMessages((m) => {
        const next = [working, ...m.filter((x) => x.id !== optimisticId && x.id !== match.id)];
        persistMessages(sendThreadId, next);
        return next;
      });
      if (promotedFromDraft) {
        draftSendIdRef.current = sendThreadId;
        loadedThreadRef.current = sendThreadId;
        router.replace(chatUrl(sendThreadId));
      }
      void refreshThreads();
      const final = await streamMessage(match.id, headers);
      setMessages((m) => {
        const next = m.map((x) => (x.id === final.id ? final : x));
        persistMessages(sendThreadId, next);
        return next;
      });
      void fetch(
        `/api/agent/chat-state?threadId=${encodeURIComponent(sendThreadId)}&limit=50&scope=messages`,
        { headers, cache: "no-store" },
      )
        .then(async (r) => {
          if (!r.ok) return;
          const body = await r.json();
          applyServerMessages(sendThreadId, (body.messages as AgentMessage[]) || []);
        })
        .catch(() => undefined);
      void refreshArtifacts();
      void refreshThreads();
    };

    const recoverEnqueuedMessage = async (headers: Record<string, string>): Promise<boolean> => {
      const deadline = Date.now() + 45_000;
      while (Date.now() < deadline) {
        const byKey = await fetch(
          `/api/agent/messages?threadId=${encodeURIComponent(sendThreadId)}&clientSendId=${encodeURIComponent(optimisticId)}&limit=5`,
          { headers, cache: "no-store" },
        )
          .then(async (r) => (r.ok ? ((await r.json()).messages as AgentMessage[]) || [] : []))
          .catch(() => [] as AgentMessage[]);
        const recoveredList =
          byKey.length > 0
            ? byKey
            : await fetch(
                `/api/agent/chat-state?threadId=${encodeURIComponent(sendThreadId)}&limit=10&scope=messages`,
                { headers, cache: "no-store" },
              )
                .then(async (r) => (r.ok ? ((await r.json()).messages as AgentMessage[]) || [] : []))
                .catch(() => [] as AgentMessage[]);
        const match =
          recoveredList.find((m) => m.clientSendId === optimisticId) ||
          recoveredList.find((m) => m.id === optimisticId) ||
          recoveredList.find(
            (m) => (m.text || "").trim() === q.trim() && Date.parse(m.createdAt) >= sendStartedAt - 5_000,
          );
        if (match) {
          await adoptServerMessage(match, headers, true);
          return true;
        }
        await new Promise((r) => setTimeout(r, 1500));
      }
      return false;
    };

    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/messages", {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
          "Idempotency-Key": `${sendThreadId}:${optimisticId}`,
        },
        body: JSON.stringify({
          text: q,
          threadId: sendThreadId,
          // Stable for HTTP retries of this click — PA reuses the same job.
          clientSendId: optimisticId,
          attachments: attachmentIds.length ? attachmentIds : undefined,
        }),
      });
      const parsed = await parseJsonResponse(res);
      const json = parsed.json;
      if (!parsed.ok || !json?.message) {
        const errObj =
          json?.error && typeof json.error === "object" && !Array.isArray(json.error)
            ? (json.error as { code?: string; message?: string })
            : null;
        const agentBusy = parsed.status === 409 || errObj?.code === "agent_busy";
        const upstreamTimeout = parsed.status === 504 || errObj?.code === "upstream_timeout";
        if (upstreamTimeout) {
          setMessages((m) =>
            m.map((x) =>
              x.id === optimisticId ? { ...x, steps: ["Still connecting to the agent…"] } : x,
            ),
          );
          const recovered = await recoverEnqueuedMessage(headers);
          if (recovered) return true;
        }
        const errText = agentBusy
          ? "Still finishing the last reply. Give it a few seconds, then try again."
          : messageFromFailedResponse(parsed);
        if (agentBusy && threadId) {
          await loadThread(headers);
          refreshThreads();
        }
        if (promotedFromDraft) {
          draftSendIdRef.current = sendThreadId;
          loadedThreadRef.current = sendThreadId;
          router.replace(chatUrl(sendThreadId));
        }
        markFailed(errText, {
          httpStatus: parsed.status,
          errorCode: errObj?.code ?? null,
          parseError: parsed.parseError,
          bodyPreview: parsed.text.replace(/\s+/g, " ").trim().slice(0, 80) || null,
        });
        return false;
      }
      const msg = {
        ...(json.message as AgentMessage),
        steps: [`Starting ${advisor.name}…`],
      };
      await adoptServerMessage(msg, headers, false);
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
            router.replace(chatUrl(sendThreadId));
          }
          refreshThreads();
        } catch {
          markFailed(e instanceof Error ? e.message : "Something went wrong.");
        }
      } else {
        try {
          const headers = await authHeaders();
          if (await recoverEnqueuedMessage(headers)) return true;
        } catch {
          // fall through to markFailed
        }
        if (promotedFromDraft) {
          draftSendIdRef.current = sendThreadId;
          loadedThreadRef.current = sendThreadId;
          router.replace(chatUrl(sendThreadId));
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

  const thread = useMemo(
    () => [...messages].filter((m) => !isGhostTurn(m)).reverse(),
    [messages],
  );
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
  /** Greeting only for a true draft — never flash "new chat" while on ?t= or mid-send. */
  const showEmptyHome = hasAgent && !hasConversation && !busy;
  const greetName = auth.displayName?.split(/\s+/)[0] || "there";

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
      disabled={!chatActive || busy || advisor.status !== "unlocked" || chatPaused}
      getAuthHeaders={authHeaders}
      onSend={onSend}
      placeholder={
        chatPaused ? "Agents are paused — back 25 Nov" : `Message ${advisor.name}…`
      }
      suggestions={
        showEmptyHome && advisor.status === "unlocked" && !chatPaused ? advisor.suggestions : undefined
      }
      hint={
        !showEmptyHome
          ? `PDF, CSV and Excel up to ${formatBytes(MAX_FILE_BYTES)}. Shift+Enter for a new line.`
          : undefined
      }
    />
  );

  if (!hasAgent) {
    return null;
  }

  if (showEmptyHome && (advisor.status !== "unlocked" || chatPaused)) {
    return (
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-6 pb-10 text-center">
          <AdvisorAvatar advisor={advisor} size="lg" dimmed />
          <div>
            <p className="text-[clamp(1.4rem,4vw,1.85rem)] font-semibold tracking-tight text-ink">
              {advisor.name}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{advisor.description}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-ink-2 shadow-[3px_3px_0_rgba(11,11,11,0.06)]">
            <Lock className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
            {chatPaused
              ? "Paused"
              : advisor.status === "soon"
                ? "Coming soon"
                : "Locked"}
          </div>
          <p className="max-w-sm text-[13px] text-ink-3">
            {chatPaused ? (
              AGENTS_CREDITS_BANNER_TEXT
            ) : (
              <>
                Use <span className="font-semibold text-ink-2">More → Request an agent</span> if you want this
                unlocked — specialists are curated, not created on the fly.
              </>
            )}
          </p>
          <button type="button" className="btn-ghost text-sm lg:hidden" onClick={showAgentInbox}>
            Back to agents
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="grid-paper flex min-w-0 flex-1 flex-col">
        <div className="hidden h-12 shrink-0 items-center border-b border-line bg-white/90 px-4 backdrop-blur-md lg:flex">
          <div className="inline-flex max-w-full items-center gap-2">
            <AdvisorAvatar advisor={advisor} size="sm" />
            <div className="min-w-0">
              <p className="truncate text-[14px] font-bold tracking-tight text-ink">{advisor.name}</p>
              <p className="text-meta truncate">{advisor.tagline}</p>
            </div>
          </div>
        </div>

        {showEmptyHome ? (
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <AdvisorAvatar advisor={advisor} size="lg" />
                <p className="text-section mt-4 text-ink">{advisor.name}</p>
                <p className="mt-3 max-w-md text-[15px] leading-6 text-ink-2">
                  Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"},{" "}
                  {greetName}. {advisor.greeting}
                </p>
              </div>
              <div className="w-full">
                {error ? (
                  <p className="mb-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
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
              <div className="mx-auto max-w-2xl space-y-10 py-4">
                {thread.map((message) => (
                  <ChatTurn
                    key={message.id}
                    message={message}
                    advisor={advisor}
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
            <div className="border-t border-line bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
              {error && hasConversation ? (
                <p className="mb-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                  {error}
                </p>
              ) : null}
              <div className="mx-auto max-w-2xl">{composer}</div>
            </div>
          </>
        )}
      </div>

      <AgentFilesPanel
        open={filesOpen}
        onClose={() => setFilesOpen(false)}
        advisor={advisor}
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
