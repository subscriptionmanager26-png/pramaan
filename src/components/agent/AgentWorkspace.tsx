"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  AgentShellContext,
  type AgentBootstrapChat,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";
import { AGENT_OPEN_SIDEBAR_EVENT } from "@/lib/agent/open-sidebar";
import { mergeThreadLists, prunePendingThreads } from "@/lib/agent/threads-from-messages";
import { newThreadId } from "@/lib/agent/thread-id";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";
import {
  hydratePocketedgeSessionFromCookie,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

function formatThreadWhen(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const sameDay =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();
  if (sameDay) {
    return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function AgentSidebar({
  threads,
  activeThreadId,
  threadsError,
  onRetryThreads,
  onNewChat,
  onCloseMobile,
}: {
  threads: AgentThreadSummary[];
  activeThreadId: string;
  threadsError: string | null;
  onRetryThreads: () => void;
  onNewChat: () => void;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();
  const onConnections = pathname === "/ai/connections";

  return (
    <aside className="flex h-full w-full flex-col bg-paper-2">
      <div className="flex items-center gap-2 p-3">
        <button type="button" className="btn-primary flex-1 justify-center text-sm" onClick={onNewChat}>
          <span aria-hidden>+</span>
          New chat
        </button>
        {onCloseMobile && (
          <button
            type="button"
            className="btn-ghost px-3 py-2 text-xs lg:hidden"
            onClick={onCloseMobile}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-2">
        <p className="px-2 py-1.5 text-meta">Your chats</p>
        {threadsError ? (
          <div className="mx-2 mb-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-[12px] leading-relaxed text-rose-900">
            {threadsError}
            <button type="button" className="mt-2 block font-semibold text-rose-950 underline" onClick={onRetryThreads}>
              Try again
            </button>
          </div>
        ) : null}
        {!threads.length && !threadsError ? (
          <p className="px-2 py-6 text-sm leading-relaxed text-ink-3">
            Start a conversation — it will show up here on every device once you send a message.
          </p>
        ) : null}
        {threads.length ? (
          <ul className="space-y-0.5">
            {threads.map((t) => {
              const active = !onConnections && t.id === activeThreadId;
              return (
                <li key={t.id}>
                  <Link
                    href={`/ai?t=${encodeURIComponent(t.id)}`}
                    onClick={onCloseMobile}
                    className={`group block rounded-xl px-3 py-2.5 text-left transition-colors ${
                      active
                        ? "bg-white text-ink shadow-[3px_3px_0_rgba(11,11,11,0.06)] ring-1 ring-line"
                        : "text-ink-2 hover:bg-white/90 hover:text-ink"
                    }`}
                  >
                    <p className="truncate text-[13px] font-medium leading-snug">{t.title}</p>
                    <p className="mt-1 flex items-center gap-2 text-[11px] text-ink-3">
                      {formatThreadWhen(t.updatedAt)}
                      {t.working && (
                        <span className="inline-flex items-center gap-1 font-medium text-accent">
                          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                          Live
                        </span>
                      )}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      <div className="mt-auto space-y-0.5 border-t border-line p-2">
        <Link
          href="/ai/connections"
          onClick={onCloseMobile}
          className={`block rounded-xl px-3 py-2.5 text-[13px] font-medium ${
            onConnections ? "bg-white text-accent ring-1 ring-line" : "text-ink-2 hover:bg-white/80 hover:text-ink"
          }`}
        >
          Connections
        </Link>
        <p className="px-3 py-2 text-[10px] leading-relaxed text-ink-3">
          Not investment advice. You confirm every trade.
        </p>
      </div>
    </aside>
  );
}

export function AgentWorkspace({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const threadFromUrl = searchParams.get("t") || "main";
  const activeThreadId = threadFromUrl;
  const authError = searchParams.get("auth_error");
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [bootstrapChat, setBootstrapChat] = useState<AgentBootstrapChat | null>(null);
  const [serverThreads, setServerThreads] = useState<AgentThreadSummary[]>([]);
  const [pendingThreads, setPendingThreads] = useState<AgentThreadSummary[]>([]);
  const [threadsError, setThreadsError] = useState<string | null>(null);
  const [filesOpen, setFilesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const open = () => setSidebarOpen(true);
    window.addEventListener(AGENT_OPEN_SIDEBAR_EVENT, open);
    return () => window.removeEventListener(AGENT_OPEN_SIDEBAR_EVENT, open);
  }, []);

  const threads = useMemo(
    () => mergeThreadLists(serverThreads, pendingThreads),
    [serverThreads, pendingThreads],
  );

  const loadThreads = useCallback(async () => {
    try {
      const headers = await pocketedgeAuthHeaders();
      const res = await fetch("/api/agent/threads", { headers, cache: "no-store" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg =
          (body as { error?: { message?: string } }).error?.message ||
          (body as { error?: string }).error ||
          `Could not load chats (${res.status})`;
        setThreadsError(msg);
        return;
      }
      const json = await res.json();
      const next = (json.threads as AgentThreadSummary[]) ?? [];
      setServerThreads(next);
      setPendingThreads((pending) => prunePendingThreads(next, pending));
      setThreadsError(null);
    } catch {
      setThreadsError("Could not load chats. Check your connection and try again.");
    }
  }, []);

  const upsertThread = useCallback((thread: AgentThreadSummary) => {
    setPendingThreads((prev) => mergeThreadLists(prev, [thread]));
    void loadThreads();
  }, [loadThreads]);

  const loadBootstrap = useCallback(
    async (threadId: string) => {
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch(
          `/api/agent/bootstrap?threadId=${encodeURIComponent(threadId)}&limit=50&fileLimit=100`,
          { headers, cache: "no-store" },
        );
        if (!res.ok) {
          await loadThreads();
          return;
        }
        const json = await res.json();
        const nextThreads = (json.threads as AgentThreadSummary[]) ?? [];
        setServerThreads(nextThreads);
        setPendingThreads((pending) => prunePendingThreads(nextThreads, pending));
        setThreadsError(null);
        const orders: Record<string, OrderState> = {};
        for (const o of json.orders ?? []) {
          orders[o.id] = { status: o.status, brokerOrderId: o.brokerOrderId };
        }
        setBootstrapChat({
          threadId,
          messages: (json.messages as AgentMessage[]) || [],
          orders,
          files: (json.files as JobAttachment[]) || [],
        });
      } catch {
        await loadThreads();
      }
    },
    [loadThreads],
  );

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    let cancelled = false;
    (async () => {
      await hydratePocketedgeSessionFromCookie();
      const supabase = getPocketedgeSupabase();
      const { data } = await supabase.auth.getSession();
      const ok = Boolean(data.session?.user);
      setSignedIn(ok);
      if (!ok) {
        setServerThreads([]);
        setPendingThreads([]);
        setBootstrapChat(null);
        setThreadsError(null);
      }
      setReady(true);
    })();
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "TOKEN_REFRESHED") return;
      if (event === "SIGNED_OUT") {
        setSignedIn(false);
        setServerThreads([]);
        setPendingThreads([]);
        setBootstrapChat(null);
        return;
      }
      if (event === "SIGNED_IN") setSignedIn(true);
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!signedIn) return;
    void loadBootstrap(threadFromUrl);
  }, [signedIn, threadFromUrl, loadBootstrap]);

  const anyWorking = useMemo(() => threads.some((t) => t.working), [threads]);
  useEffect(() => {
    if (!signedIn || anyWorking) return;
    const id = window.setInterval(() => void loadThreads(), 60_000);
    return () => window.clearInterval(id);
  }, [signedIn, anyWorking, loadThreads]);

  useEffect(() => {
    if (!signedIn) return;
    const refresh = () => void loadThreads();
    window.addEventListener("focus", refresh);
    const onVis = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [signedIn, loadThreads]);

  const shellValue = useMemo(
    () => ({
      threads,
      refreshThreads: loadThreads,
      upsertThread,
      bootstrapChat,
      filesOpen,
      setFilesOpen,
      sidebarOpen,
      setSidebarOpen,
    }),
    [threads, loadThreads, upsertThread, bootstrapChat, filesOpen, sidebarOpen],
  );

  function startNewChat() {
    const id = newThreadId();
    setPendingThreads((prev) =>
      mergeThreadLists(prev, [{ id, title: "New chat", updatedAt: new Date().toISOString(), working: false }]),
    );
    router.push(`/ai?t=${encodeURIComponent(id)}`);
    setSidebarOpen(false);
  }

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <p className="text-ink-2">Loading agent…</p>
      </div>
    );
  }

  if (!pocketedgeAuthConfigured()) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <p className="max-w-md rounded-2xl border border-dashed border-line bg-paper-2 px-6 py-12 text-center text-ink-2">
          Agent chat is not configured on this deployment yet.
        </p>
      </div>
    );
  }

  if (!signedIn) {
    return (
      <div className="grid-paper flex flex-1 items-center justify-center p-6">
        <div className="max-w-md rounded-2xl border border-line bg-white px-6 py-10 text-center shadow-[8px_8px_0_rgba(11,11,11,0.08)]">
          {authError ? (
            <p className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-left text-[13px] text-rose-900">
              {authError}
            </p>
          ) : null}
          <p className="text-section text-2xl">
            Your <span className="mark">private</span> market agent
          </p>
          <p className="mt-3 text-sm text-ink-2">
            Same Google account as Pocketedge. Chats sync to your account and appear on any device you sign into.
          </p>
          <button type="button" className="btn-primary mt-8" onClick={() => void signInWithGoogleOnPramaan()}>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  const sidebarProps = {
    threads,
    activeThreadId,
    threadsError,
    onRetryThreads: () => void loadThreads(),
    onNewChat: startNewChat,
  };

  return (
    <AgentShellContext.Provider value={shellValue}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden h-full w-[min(100%,15.5rem)] shrink-0 border-r border-line lg:block xl:w-64">
          <AgentSidebar {...sidebarProps} />
        </div>
        {sidebarOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed bottom-0 left-0 top-14 z-50 w-[min(88vw,17rem)] border-r border-line bg-paper-2 shadow-2xl sm:top-16 lg:hidden">
              <AgentSidebar {...sidebarProps} onCloseMobile={() => setSidebarOpen(false)} />
            </div>
          </>
        )}
        <div className="grid-paper flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </AgentShellContext.Provider>
  );
}
