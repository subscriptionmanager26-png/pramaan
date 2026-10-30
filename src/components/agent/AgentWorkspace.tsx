"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  AgentShellContext,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
import { AGENT_OPEN_SIDEBAR_EVENT } from "@/lib/agent/open-sidebar";
import { clearThreadsCache, readThreadsCache, writeThreadsCache } from "@/lib/agent/threads-cache";
import { mergeThreadLists, prunePendingThreads } from "@/lib/agent/threads-from-messages";
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

async function syncAgentInBackground() {
  try {
    const headers = await pocketedgeAuthHeaders();
    await fetch("/api/agent/sync", { method: "POST", headers, cache: "no-store" });
  } catch {
    // non-blocking
  }
}

export function AgentWorkspace({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const threadFromUrl = searchParams.get("t") || "";
  const activeThreadId = threadFromUrl;
  const authError = searchParams.get("auth_error");
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [serverThreads, setServerThreads] = useState<AgentThreadSummary[]>([]);
  const [pendingThreads, setPendingThreads] = useState<AgentThreadSummary[]>([]);
  const [threadsReady, setThreadsReady] = useState(false);
  const [threadsError, setThreadsError] = useState<string | null>(null);
  const threadsEtagRef = useRef<string | null>(null);
  const [draftNonce, setDraftNonce] = useState(0);
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
      if (threadsEtagRef.current) headers["If-None-Match"] = threadsEtagRef.current;
      const t0 =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const res = await fetch("/api/agent/threads", { headers, cache: "no-store" });
      const timing = res.headers.get("server-timing");
      if (timing && typeof console !== "undefined") {
        console.debug(
          `[agent-threads] ${res.status} ${Math.round((typeof performance !== "undefined" ? performance.now() : Date.now()) - t0)}ms`,
          timing,
        );
      }

      if (res.status === 304) {
        setThreadsError(null);
        setThreadsReady(true);
        return;
      }

      if (!res.ok) {
        // Keep any cached sidebar visible; only surface error if we have nothing.
        const body = await res.json().catch(() => ({}));
        const msg =
          (body as { error?: { message?: string } }).error?.message ||
          (body as { error?: string }).error ||
          `Could not load chats (${res.status})`;
        setThreadsError(msg);
        setThreadsReady(true);
        return;
      }
      const json = await res.json();
      const next = (json.threads as AgentThreadSummary[]) ?? [];
      const etag = res.headers.get("etag");
      setServerThreads(next);
      setPendingThreads((pending) => prunePendingThreads(next, pending));
      threadsEtagRef.current = etag;
      setThreadsError(null);
      setThreadsReady(true);
      if (userId) writeThreadsCache(userId, next, etag);
    } catch {
      setThreadsError("Could not load chats. Check your connection and try again.");
      setThreadsReady(true);
    }
  }, [userId]);

  const upsertThread = useCallback((thread: AgentThreadSummary) => {
    setPendingThreads((prev) => mergeThreadLists(prev, [thread]));
    // Optimistic only — avoid an immediate full refetch; stream/settle refresh covers it.
  }, []);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    (async () => {
      await hydratePocketedgeSessionFromCookie();
      const supabase = getPocketedgeSupabase();
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      const ok = Boolean(user);
      setSignedIn(ok);
      setUserId(user?.id ?? null);
      if (!ok) {
        setServerThreads([]);
        setPendingThreads([]);
        setThreadsReady(false);
        setThreadsError(null);
        threadsEtagRef.current = null;
        clearThreadsCache();
      } else if (user?.id) {
        const cached = readThreadsCache(user.id);
        if (cached) {
          // Instant paint from cache (including empty list); network revalidates after.
          setServerThreads(cached.threads);
          threadsEtagRef.current = cached.etag;
          setThreadsReady(true);
        }
      }
      setReady(true);
    })();
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED") return;
      if (event === "SIGNED_OUT") {
        setSignedIn(false);
        setUserId(null);
        setServerThreads([]);
        setPendingThreads([]);
        setThreadsReady(false);
        threadsEtagRef.current = null;
        clearThreadsCache();
        return;
      }
      if (event === "SIGNED_IN") {
        setSignedIn(true);
        setUserId(session?.user?.id ?? null);
      }
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!signedIn) return;
    // Sync is not on the critical path for sidebar paint.
    void syncAgentInBackground();
    void loadThreads();
  }, [signedIn, loadThreads]);

  const anyWorking = useMemo(() => threads.some((t) => t.working), [threads]);
  useEffect(() => {
    if (!signedIn || anyWorking) return;
    const id = window.setInterval(() => void loadThreads(), 120_000);
    return () => window.clearInterval(id);
  }, [signedIn, anyWorking, loadThreads]);

  useEffect(() => {
    if (!signedIn) return;
    let last = 0;
    const refresh = () => {
      const now = Date.now();
      if (now - last < 30_000) return;
      last = now;
      void loadThreads();
    };
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

  const startNewChat = useCallback(() => {
    // Draft only — no sidebar row and no server thread until the first message.
    setDraftNonce((n) => n + 1);
    router.push("/ai");
    setSidebarOpen(false);
  }, [router]);

  const shellValue = useMemo(
    () => ({
      threads,
      threadsReady,
      refreshThreads: loadThreads,
      upsertThread,
      draftNonce,
      filesOpen,
      setFilesOpen,
      sidebarOpen,
      setSidebarOpen,
      startNewChat,
    }),
    [threads, threadsReady, loadThreads, upsertThread, draftNonce, filesOpen, sidebarOpen, startNewChat],
  );

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
            <div className="fixed inset-y-0 left-0 z-50 w-[min(88vw,17rem)] border-r border-line bg-paper-2 shadow-2xl lg:hidden">
              <AgentSidebar {...sidebarProps} onCloseMobile={() => setSidebarOpen(false)} />
            </div>
          </>
        )}
        <div className="grid-paper flex min-h-0 min-w-0 flex-1 flex-col">
          {/* Mobile chat chrome lives in the chat screen — not the site header */}
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-line bg-white px-3 lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink"
              aria-label="Open chats"
              onClick={() => setSidebarOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="4" width="7" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <rect x="14" y="4" width="7" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1 rounded-full border border-line px-3 text-[13px] font-semibold text-ink"
              onClick={startNewChat}
            >
              New Chat <span aria-hidden>+</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </AgentShellContext.Provider>
  );
}
