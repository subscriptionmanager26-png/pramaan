"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  AgentShellContext,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
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
  onNewChat,
  onCloseMobile,
}: {
  threads: AgentThreadSummary[];
  activeThreadId: string;
  onNewChat: () => void;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();
  const onConnections = pathname === "/ai/connections";

  return (
    <aside className="flex h-full w-full flex-col border-r border-line bg-paper-2">
      <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
        <p className="text-headline text-base">Agent</p>
        {onCloseMobile && (
          <button type="button" className="text-sm text-ink-3 lg:hidden" onClick={onCloseMobile}>
            Close
          </button>
        )}
      </div>
      <nav className="flex flex-col gap-0.5 p-2">
        <Link
          href="/ai"
          onClick={onCloseMobile}
          className={`rounded-xl px-3 py-2.5 text-sm font-medium ${
            !onConnections ? "bg-white text-accent shadow-sm ring-1 ring-line" : "text-ink hover:bg-white/70"
          }`}
        >
          Chats
        </Link>
        <Link
          href="/ai/connections"
          onClick={onCloseMobile}
          className={`rounded-xl px-3 py-2.5 text-sm font-medium ${
            onConnections ? "bg-white text-accent shadow-sm ring-1 ring-line" : "text-ink hover:bg-white/70"
          }`}
        >
          Connections
        </Link>
      </nav>
      <div className="px-3 pb-2">
        <button type="button" className="btn-secondary w-full text-sm" onClick={onNewChat}>
          New chat
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        <p className="px-2 py-1 text-meta uppercase tracking-wide">Recent</p>
        {!threads.length ? (
          <p className="px-2 py-4 text-sm text-ink-3">No conversations yet.</p>
        ) : (
          <ul className="space-y-0.5">
            {threads.map((t) => {
              const active = !onConnections && t.id === activeThreadId;
              return (
                <li key={t.id}>
                  <Link
                    href={`/ai?t=${encodeURIComponent(t.id)}`}
                    onClick={onCloseMobile}
                    className={`block rounded-xl px-3 py-2.5 text-left transition-colors ${
                      active ? "bg-accent-2 text-accent" : "text-ink hover:bg-white/80"
                    }`}
                  >
                    <p className="truncate text-sm font-medium">{t.title}</p>
                    <p className="mt-0.5 flex items-center gap-2 text-xs text-ink-3">
                      {formatThreadWhen(t.updatedAt)}
                      {t.working && (
                        <span className="inline-flex items-center gap-1 text-accent">
                          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                          Working
                        </span>
                      )}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <p className="border-t border-line px-4 py-3 text-[11px] leading-relaxed text-ink-3">
        Not investment advice. Trades need your confirmation.
      </p>
    </aside>
  );
}

export function AgentWorkspace({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const activeThreadId = searchParams.get("t") || "main";
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [threads, setThreads] = useState<AgentThreadSummary[]>([]);
  const [filesOpen, setFilesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadThreads = useCallback(async () => {
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/threads", { headers });
      if (!res.ok) return;
      const json = await res.json();
      setThreads(json.threads ?? []);
    } catch {
      /* ignore */
    }
  }, []);

  const refreshSession = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getSession();
    const ok = Boolean(data.session?.user);
    setSignedIn(ok);
    setReady(true);
    if (!ok) return;
    try {
      const headers = await authHeaders();
      const sync = await fetch("/api/agent/sync", { method: "POST", headers });
      await sync.json();
      await loadThreads();
    } catch {
      /* ignore */
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
    const id = window.setInterval(() => void loadThreads(), anyWorking ? 4000 : 30000);
    return () => window.clearInterval(id);
  }, [signedIn, anyWorking, loadThreads]);

  const shellValue = useMemo(
    () => ({
      threads,
      refreshThreads: loadThreads,
      filesOpen,
      setFilesOpen,
      sidebarOpen,
      setSidebarOpen,
    }),
    [threads, loadThreads, filesOpen, sidebarOpen],
  );

  function startNewChat() {
    window.location.href = `/ai?t=${newThreadId()}`;
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
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-md rounded-2xl border border-line bg-white px-6 py-10 text-center shadow-sm">
          <p className="text-headline">Sign in to your agent</p>
          <p className="mt-2 text-sm text-ink-2">
            Use the same Google account as Pocketedge. Your chats and connections stay private to you.
          </p>
          <button type="button" className="btn-primary mt-6" onClick={() => signInWithGoogleOnPramaan()}>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <AgentShellContext.Provider value={shellValue}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden h-full w-[min(100%,17.5rem)] shrink-0 lg:block">
          <AgentSidebar threads={threads} activeThreadId={activeThreadId} onNewChat={startNewChat} />
        </div>
        {sidebarOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-ink/50 lg:hidden"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 z-50 w-[min(88vw,18rem)] shadow-2xl lg:hidden">
              <AgentSidebar
                threads={threads}
                activeThreadId={activeThreadId}
                onNewChat={startNewChat}
                onCloseMobile={() => setSidebarOpen(false)}
              />
            </div>
          </>
        )}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2 lg:hidden">
            <button
              type="button"
              className="btn-ghost px-3 py-1.5 text-xs"
              onClick={() => setSidebarOpen(true)}
            >
              Menu
            </button>
          </div>
          {children}
        </div>
      </div>
    </AgentShellContext.Provider>
  );
}
