"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  AgentShellContext,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
import { mergeThreadLists } from "@/lib/agent/threads-from-messages";
import { newThreadId } from "@/lib/agent/thread-id";
import {
  hydratePocketedgeSessionFromCookie,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

const LOCAL_KEY = "pe-agent-threads";

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

function loadLocalThreads(userId: string): AgentThreadSummary[] {
  try {
    const raw = sessionStorage.getItem(`${LOCAL_KEY}:${userId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as AgentThreadSummary[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLocalThreads(userId: string, threads: AgentThreadSummary[]) {
  try {
    sessionStorage.setItem(`${LOCAL_KEY}:${userId}`, JSON.stringify(threads.slice(0, 60)));
  } catch {
    /* ignore */
  }
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
        {!threads.length ? (
          <p className="px-2 py-6 text-sm leading-relaxed text-ink-3">
            Start a conversation — it will show up here.
          </p>
        ) : (
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
        )}
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
  const [userId, setUserId] = useState<string | null>(null);
  const [serverThreads, setServerThreads] = useState<AgentThreadSummary[]>([]);
  const [localThreads, setLocalThreads] = useState<AgentThreadSummary[]>([]);
  const [filesOpen, setFilesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const threads = useMemo(
    () => mergeThreadLists(serverThreads, localThreads),
    [serverThreads, localThreads],
  );

  const upsertThread = useCallback(
    (thread: AgentThreadSummary) => {
      if (!userId) return;
      setLocalThreads((prev) => {
        const next = mergeThreadLists(prev, [thread]);
        saveLocalThreads(userId, next);
        return next;
      });
    },
    [userId],
  );

  const loadThreads = useCallback(async () => {
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/threads", { headers, cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      setServerThreads(json.threads ?? []);
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
    const user = data.session?.user;
    const ok = Boolean(user);
    setSignedIn(ok);
    if (user) {
      setUserId(user.id);
      setLocalThreads(loadLocalThreads(user.id));
    }
    setReady(true);
    if (!ok) return;
    try {
      const headers = await authHeaders();
      await fetch("/api/agent/sync", { method: "POST", headers });
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
    const id = window.setInterval(() => void loadThreads(), anyWorking ? 3000 : 20000);
    return () => window.clearInterval(id);
  }, [signedIn, anyWorking, loadThreads]);

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
    upsertThread({ id, title: "New chat", updatedAt: new Date().toISOString(), working: false });
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
            Same Google account as Pocketedge. Chats, files, and broker connections stay yours alone.
          </p>
          <button type="button" className="btn-primary mt-8" onClick={() => signInWithGoogleOnPramaan()}>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <AgentShellContext.Provider value={shellValue}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden h-full w-[min(100%,15.5rem)] shrink-0 border-r border-line lg:block xl:w-64">
          <AgentSidebar threads={threads} activeThreadId={activeThreadId} onNewChat={startNewChat} />
        </div>
        {sidebarOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-12 left-0 z-50 w-[min(88vw,17rem)] border-r border-line shadow-2xl lg:hidden">
              <AgentSidebar
                threads={threads}
                activeThreadId={activeThreadId}
                onNewChat={startNewChat}
                onCloseMobile={() => setSidebarOpen(false)}
              />
            </div>
          </>
        )}
        <div className="grid-paper flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2 border-b border-line/80 bg-white/80 px-3 py-2 backdrop-blur-sm lg:hidden">
            <button
              type="button"
              className="btn-ghost px-3 py-1.5 text-xs"
              onClick={() => setSidebarOpen(true)}
            >
              Chats
            </button>
          </div>
          {children}
        </div>
      </div>
    </AgentShellContext.Provider>
  );
}
