"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  AgentShellContext,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
import { AGENT_OPEN_SIDEBAR_EVENT } from "@/lib/agent/open-sidebar";
import { mergeThreadLists, prunePendingThreads } from "@/lib/agent/threads-from-messages";
import { newThreadId } from "@/lib/agent/thread-id";
import {
  hydratePocketedgeSessionFromCookie,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

async function authHeaders() {
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  return { Authorization: `Bearer ${token}` };
}

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
  const activeThreadId = searchParams.get("t") || "main";
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
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
      const headers = await authHeaders();
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

  const refreshSession = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    const ok = Boolean(user);
    setSignedIn(ok);
    if (!ok) {
      setServerThreads([]);
      setPendingThreads([]);
      setThreadsError(null);
    }
    setReady(true);
    if (!ok) return;
    try {
      const headers = await authHeaders();
      await fetch("/api/agent/sync", { method: "POST", headers });
      await loadThreads();
    } catch {
      /* sync errors are non-fatal; thread load surfaces its own error */
    }
  }, [loadThreads]);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) return;
    let cancelled = false;
    (async () => {
      await hydratePocketedgeSessionFromCookie();
      if (!cancelled) await refreshSession();
    })();
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      refreshSession();
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, [refreshSession]);

  const anyWorking = useMemo(() => threads.some((t) => t.working), [threads]);
  useEffect(() => {
    if (!signedIn) return;
    void loadThreads();
    const id = window.setInterval(() => void loadThreads(), anyWorking ? 3000 : 20000);
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
      filesOpen,
      setFilesOpen,
      sidebarOpen,
      setSidebarOpen,
    }),
    [threads, loadThreads, upsertThread, filesOpen, sidebarOpen],
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
