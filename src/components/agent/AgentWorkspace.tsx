"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ArrowLeft, FolderOpen, Lock, Settings } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { AdvisorAvatar } from "@/components/agent/AdvisorAvatar";
import {
  AgentShellContext,
  type AgentThreadSummary,
} from "@/components/agent/agent-shell-context";
import { RequestAgentSheet } from "@/components/agent/RequestAgentSheet";
import { PRODUCT_RAIL_WIDTH, ProductNav } from "@/components/shell/ProductRail";
import {
  getAdvisorActivity,
  latestThreadForAdvisor,
  markAdvisorRead,
  type AdvisorActivityState,
} from "@/lib/agent/advisor-activity";
import {
  ADVISORS,
  advisorIdFromThread,
  aiHref,
  DEFAULT_ADVISOR_ID,
  durableAdvisorThreadId,
  getAdvisor,
  isAdvisorId,
  type AdvisorId,
} from "@/lib/agent/advisors";
import { aiTeamPreviewEnabled } from "@/lib/agent/ai-team-preview";
import { AGENT_OPEN_SIDEBAR_EVENT } from "@/lib/agent/open-sidebar";
import { clearThreadsCache, readThreadsCache, writeThreadsCache } from "@/lib/agent/threads-cache";
import { mergeThreadLists, prunePendingThreads } from "@/lib/agent/threads-from-messages";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";
import {
  hydratePocketedgeSessionFromCookie,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

function formatWhen(iso: string) {
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

function ActivityMark({ state }: { state: AdvisorActivityState }) {
  if (state === "in_progress") {
    return <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-accent" title="In progress" />;
  }
  if (state === "unread") {
    return <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-label="Unread" />;
  }
  if (state === "locked" || state === "soon") {
    return <Lock className="h-3 w-3 shrink-0 text-ink-3" strokeWidth={2} aria-hidden />;
  }
  return null;
}

/**
 * Desktop AI shell left rail: product destinations first (News, Research, …),
 * then the agent roster. Not Cursor utility chrome — PocketEdge is a multi-surface product.
 */
function ProductLeftSidebar({
  threads,
  activeAdvisorId,
  onSelectAdvisor,
  onRequestAgent,
}: {
  threads: AgentThreadSummary[];
  activeAdvisorId: AdvisorId | null;
  onSelectAdvisor: (id: AdvisorId) => void;
  onRequestAgent: () => void;
}) {
  const pathname = usePathname();
  const onConnections = pathname === "/ai/connections";

  return (
    <aside className={`flex h-full shrink-0 flex-col border-r border-line bg-paper-2 ${PRODUCT_RAIL_WIDTH}`}>
      <ProductNav aiHref={aiHref({ agent: activeAdvisorId ?? DEFAULT_ADVISOR_ID })} />

      <div className="mt-5 px-4">
        <p className="text-meta uppercase tracking-[0.14em]">Agents</p>
      </div>

      <ul className="mt-2 min-h-0 flex-1 space-y-1.5 overflow-y-auto px-2.5 pb-3">
        {ADVISORS.map((advisor) => {
          const active = !onConnections && advisor.id === activeAdvisorId;
          const activity = getAdvisorActivity(advisor, threads);
          const locked = advisor.status !== "unlocked";
          return (
            <li key={advisor.id}>
              <button
                type="button"
                aria-current={active ? "page" : undefined}
                onClick={() => onSelectAdvisor(advisor.id)}
                className={`group flex w-full items-center gap-2.5 rounded-2xl border px-2.5 py-2 text-left transition-colors ${
                  active
                    ? "border-line bg-white text-ink shadow-[3px_3px_0_rgba(11,11,11,0.08)]"
                    : "border-transparent text-ink-2 hover:border-line hover:bg-white hover:text-ink"
                }`}
              >
                <AdvisorAvatar advisor={advisor} size="sm" dimmed={locked} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`truncate text-[13px] leading-snug ${
                        activity.state === "unread" ? "font-bold text-ink" : "font-semibold"
                      }`}
                    >
                      {advisor.shortName}
                    </span>
                    <ActivityMark state={activity.state} />
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-ink-3">
                    {activity.state === "in_progress"
                      ? activity.preview
                      : activity.state === "empty"
                        ? "No messages yet"
                        : activity.preview}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto space-y-2 border-t border-line px-2.5 py-3">
        <Link
          href="/ai/connections"
          className="flex w-full items-center gap-2.5 rounded-full border border-line bg-white px-3 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-ink/30 hover:text-ink"
        >
          <Settings className="h-4 w-4 shrink-0" strokeWidth={2} />
          Connections
        </Link>
        <button
          type="button"
          onClick={onRequestAgent}
          className="w-full px-3 text-left text-[12px] font-semibold text-accent hover:underline"
        >
          Request an agent →
        </button>
      </div>
    </aside>
  );
}

/** Mobile: agent inbox only — product tabs stay in BottomNav. */
function AgentInbox({
  threads,
  onSelectAdvisor,
  onRequestAgent,
}: {
  threads: AgentThreadSummary[];
  onSelectAdvisor: (id: AdvisorId) => void;
  onRequestAgent: () => void;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-paper-2 lg:hidden">
      <div className="flex h-12 shrink-0 items-center border-b border-line bg-white px-4">
        <p className="text-[15px] font-semibold tracking-tight text-ink">Agents</p>
      </div>
      <ul className="min-h-0 flex-1 divide-y divide-line overflow-y-auto bg-white">
        {ADVISORS.map((advisor) => {
          const activity = getAdvisorActivity(advisor, threads);
          const locked = advisor.status !== "unlocked";
          return (
            <li key={advisor.id}>
              <button
                type="button"
                onClick={() => onSelectAdvisor(advisor.id)}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-paper-2"
              >
                <span className="relative shrink-0">
                  <AdvisorAvatar advisor={advisor} size="md" dimmed={locked} />
                  {activity.state === "unread" ? (
                    <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-accent ring-2 ring-white" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className={`truncate text-[15px] tracking-tight ${
                        activity.state === "unread" ? "font-bold text-ink" : "font-semibold text-ink"
                      }`}
                    >
                      {advisor.name}
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5">
                      <ActivityMark state={activity.state} />
                      {activity.updatedAt && activity.state !== "empty" ? (
                        <span className="text-meta">{formatWhen(activity.updatedAt)}</span>
                      ) : null}
                    </span>
                  </span>
                  <span
                    className={`mt-1 block truncate text-[13px] ${
                      activity.state === "in_progress" ? "font-medium text-accent" : "text-ink-2"
                    }`}
                  >
                    {activity.preview}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="shrink-0 border-t border-line bg-white px-4 py-3 text-center">
        <button
          type="button"
          onClick={onRequestAgent}
          className="text-[13px] font-semibold text-accent hover:underline"
        >
          Request an agent →
        </button>
      </div>
    </div>
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
  const pathname = usePathname();
  const threadFromUrl = searchParams.get("t") || "";
  const agentParam = searchParams.get("agent");
  const onConnections = pathname === "/ai/connections";

  const activeAdvisorId: AdvisorId | null = isAdvisorId(agentParam)
    ? agentParam
    : threadFromUrl
      ? advisorIdFromThread(threadFromUrl)
      : null;

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
  const [filesOpen, setFilesOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [activityTick, setActivityTick] = useState(0);

  useEffect(() => {
    const open = () => setSidebarOpen(true);
    window.addEventListener(AGENT_OPEN_SIDEBAR_EVENT, open);
    return () => window.removeEventListener(AGENT_OPEN_SIDEBAR_EVENT, open);
  }, []);

  // Desktop: default into General when landing on bare /ai.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (onConnections) return;
    if (agentParam || threadFromUrl) return;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (wide) router.replace(aiHref({ agent: DEFAULT_ADVISOR_ID }));
  }, [agentParam, threadFromUrl, onConnections, router]);

  // Desktop: keep right context rail open by default; mobile starts closed.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setFilesOpen(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!ready || !signedIn || !activeAdvisorId) return;
    markAdvisorRead(activeAdvisorId);
    setActivityTick((n) => n + 1);
  }, [ready, signedIn, activeAdvisorId]);

  const threads = useMemo(
    () => mergeThreadLists(serverThreads, pendingThreads),
    [serverThreads, pendingThreads],
  );

  const loadThreads = useCallback(async () => {
    try {
      const headers = await pocketedgeAuthHeaders();
      if (threadsEtagRef.current) headers["If-None-Match"] = threadsEtagRef.current;
      const res = await fetch("/api/agent/threads", { headers, cache: "no-store" });
      if (res.status === 304) {
        setThreadsError(null);
        setThreadsReady(true);
        return;
      }
      if (!res.ok) {
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
  }, []);

  useEffect(() => {
    if (aiTeamPreviewEnabled()) {
      setSignedIn(true);
      setUserId("preview-local");
      const now = Date.now();
      setServerThreads([
        {
          id: durableAdvisorThreadId("general"),
          title: "Summarized your watchlist for the week",
          updatedAt: new Date(now - 12 * 60_000).toISOString(),
          working: false,
        },
        {
          id: durableAdvisorThreadId("mf"),
          title: "Comparing SIP options in large-cap funds…",
          updatedAt: new Date(now - 2 * 60_000).toISOString(),
          working: true,
        },
        {
          id: durableAdvisorThreadId("trader"),
          title: "Nifty futures setup for tomorrow open",
          updatedAt: new Date(now - 3 * 3600_000).toISOString(),
          working: false,
        },
      ]);
      try {
        const map = {
          mf: new Date(now).toISOString(),
          general: new Date(now - 60_000).toISOString(),
        };
        localStorage.setItem("pe_advisor_last_read_v1", JSON.stringify(map));
      } catch {
        // ignore
      }
      setPendingThreads([]);
      setThreadsReady(true);
      setThreadsError(null);
      setReady(true);
      return;
    }
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
    if (!signedIn || aiTeamPreviewEnabled()) return;
    void syncAgentInBackground();
    void loadThreads();
  }, [signedIn, loadThreads]);

  const anyWorking = useMemo(() => threads.some((t) => t.working), [threads]);
  useEffect(() => {
    if (!signedIn || anyWorking || aiTeamPreviewEnabled()) return;
    const id = window.setInterval(() => void loadThreads(), 120_000);
    return () => window.clearInterval(id);
  }, [signedIn, anyWorking, loadThreads]);

  useEffect(() => {
    if (!signedIn || aiTeamPreviewEnabled()) return;
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

  const setActiveAdvisor = useCallback(
    (id: AdvisorId) => {
      markAdvisorRead(id);
      setActivityTick((n) => n + 1);
      setDraftNonce((n) => n + 1);
      const latest = latestThreadForAdvisor(threads, id);
      router.push(
        aiHref({
          agent: id,
          threadId: latest?.id && latest.id !== durableAdvisorThreadId(id) ? latest.id : undefined,
        }),
      );
      setSidebarOpen(false);
    },
    [router, threads],
  );

  const showAgentInbox = useCallback(() => {
    setDraftNonce((n) => n + 1);
    router.push("/ai");
    setSidebarOpen(false);
  }, [router]);

  const openRequestAgent = useCallback(() => setRequestOpen(true), []);

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
      openRequestAgent,
      activeAdvisorId,
      setActiveAdvisor,
      showAgentInbox,
    }),
    [
      threads,
      threadsReady,
      loadThreads,
      upsertThread,
      draftNonce,
      filesOpen,
      sidebarOpen,
      openRequestAgent,
      activeAdvisorId,
      setActiveAdvisor,
      showAgentInbox,
    ],
  );

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <p className="text-ink-2">Loading…</p>
      </div>
    );
  }

  if (!pocketedgeAuthConfigured() && !aiTeamPreviewEnabled()) {
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
            Your <span className="mark">private</span> AI team
          </p>
          <p className="mt-3 text-sm text-ink-2">
            Specialist agents for funds, trading, stocks — plus a general co-pilot. Same Google account as
            Pocketedge.
          </p>
          <button type="button" className="btn-primary mt-8" onClick={() => void signInWithGoogleOnPramaan()}>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  const mobileInbox = !onConnections && !activeAdvisorId;
  const mobileChat = !onConnections && Boolean(activeAdvisorId);
  const advisor = activeAdvisorId ? getAdvisor(activeAdvisorId) : null;
  void activityTick;

  return (
    <AgentShellContext.Provider value={shellValue}>
      <div className="flex min-h-0 flex-1 overflow-hidden bg-white" data-activity={activityTick}>
        <div className="hidden lg:flex">
          <ProductLeftSidebar
            threads={threads}
            activeAdvisorId={activeAdvisorId}
            onSelectAdvisor={setActiveAdvisor}
            onRequestAgent={openRequestAgent}
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
          {mobileInbox ? (
            <AgentInbox
              threads={threads}
              onSelectAdvisor={setActiveAdvisor}
              onRequestAgent={openRequestAgent}
            />
          ) : null}

          {mobileChat || onConnections || activeAdvisorId ? (
            <>
              {mobileChat && advisor ? (
                <div className="flex h-12 shrink-0 items-center gap-2 border-b border-line bg-white px-2 lg:hidden">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-paper-2"
                    aria-label="Back to agents"
                    onClick={showAgentInbox}
                  >
                    <ArrowLeft className="h-5 w-5" strokeWidth={2} />
                  </button>
                  <AdvisorAvatar advisor={advisor} size="sm" />
                  <p className="min-w-0 flex-1 truncate text-[14px] font-bold tracking-tight text-ink">
                    {advisor.name}
                  </p>
                  <button
                    type="button"
                    className="btn-ghost !px-2.5 !py-1.5"
                    aria-label="Files"
                    onClick={() => setFilesOpen(!filesOpen)}
                  >
                    <FolderOpen className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              ) : null}

              <div className={mobileInbox ? "hidden" : "flex min-h-0 flex-1 flex-col"}>
                {threadsError && !aiTeamPreviewEnabled() ? (
                  <p className="sr-only">{threadsError}</p>
                ) : null}
                {children}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <RequestAgentSheet open={requestOpen} onClose={() => setRequestOpen(false)} />
      {sidebarOpen ? null : null}
    </AgentShellContext.Provider>
  );
}
