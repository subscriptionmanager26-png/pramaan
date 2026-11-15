"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BookOpen, Briefcase, Lock, Newspaper, ScanSearch, Settings, Users } from "lucide-react";
import Link from "next/link";

import { AdvisorAvatar } from "@/components/agent/AdvisorAvatar";
import { RequestAgentSheet } from "@/components/agent/RequestAgentSheet";
import { AskAiIcon } from "@/components/icons/AskAiIcon";
import { AppNavLink } from "@/components/shell/AppNavLink";
import {
  getAdvisorActivity,
  markAdvisorRead,
  type AdvisorActivityState,
  type AgentThreadSummary,
} from "@/lib/agent/advisor-activity";
import {
  ADVISORS,
  aiHref,
  DEFAULT_ADVISOR_ID,
  durableAdvisorThreadId,
  isAdvisorId,
  type AdvisorId,
} from "@/lib/agent/advisors";
import { aiTeamPreviewEnabled } from "@/lib/agent/ai-team-preview";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

/** Same destinations as the header logo column. */
export const PRODUCT_RAIL_WIDTH = "w-[16rem]";

const PRODUCT_NAV = [
  { href: "/news", label: "News", Icon: Newspaper },
  { href: "/research", label: "Research", Icon: ScanSearch },
  { href: "/ai", label: "Ask AI", Icon: null },
  { href: "/portfolio", label: "Portfolio", Icon: Briefcase },
  { href: "/advisors", label: "Advisors", Icon: Users },
  { href: "/resources", label: "Resources", Icon: BookOpen },
] as const;

function productNavActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/ai") return pathname.startsWith("/ai");
  if (href === "/resources") {
    return (
      pathname === "/resources" ||
      pathname.startsWith("/resources/") ||
      pathname === "/guides" ||
      pathname.startsWith("/guides/") ||
      pathname === "/tools" ||
      pathname.startsWith("/tools/") ||
      pathname.startsWith("/gold-tracker") ||
      pathname.startsWith("/etf-tracker") ||
      pathname.startsWith("/market-holidays")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
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

function previewThreads(): AgentThreadSummary[] {
  const now = Date.now();
  return [
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
  ];
}

export function ProductNav({ aiHref: askAiHref }: { aiHref?: string }) {
  const pathname = usePathname();
  const navBtn =
    "flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left text-[13px] font-medium transition-colors";

  return (
    <nav className="shrink-0 space-y-1 px-2.5 pt-3" aria-label="Product">
      {PRODUCT_NAV.map((item) => {
        const active = productNavActive(pathname, item.href);
        const href = item.href === "/ai" && askAiHref ? askAiHref : item.href;
        return (
          <AppNavLink
            key={item.href}
            href={href}
            className={`${navBtn} ${
              active
                ? "border border-accent bg-accent-2 font-semibold text-accent"
                : "border border-transparent text-ink-2 hover:border-line hover:bg-white hover:text-ink"
            }`}
          >
            {item.Icon ? (
              <item.Icon className="h-4 w-4 shrink-0" strokeWidth={active ? 2.25 : 2} aria-hidden />
            ) : (
              <AskAiIcon className="h-4 w-4 shrink-0" />
            )}
            {item.label}
          </AppNavLink>
        );
      })}
    </nav>
  );
}

/**
 * Desktop rail on every page: product links, then the agent list.
 * Stays fixed under the header while the page scrolls. Hidden on mobile.
 */
export function ProductRail() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [threads, setThreads] = useState<AgentThreadSummary[]>([]);
  const [requestOpen, setRequestOpen] = useState(false);

  const onAi = pathname?.startsWith("/ai") ?? false;
  const onConnections = pathname === "/ai/connections";
  const agentParam = searchParams.get("agent");
  const activeId: AdvisorId | null =
    onAi && !onConnections
      ? isAdvisorId(agentParam)
        ? agentParam
        : DEFAULT_ADVISOR_ID
      : null;

  useEffect(() => {
    if (aiTeamPreviewEnabled()) {
      setThreads(previewThreads());
      return;
    }
    let cancel = false;
    void (async () => {
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch("/api/agent/threads", { headers, cache: "no-store" });
        if (!res.ok || cancel) return;
        const json = (await res.json()) as { threads?: AgentThreadSummary[] };
        if (!cancel) setThreads(json.threads ?? []);
      } catch {
        // The catalog still renders if the thread list is unavailable.
      }
    })();
    return () => {
      cancel = true;
    };
  }, []);

  function openAgent(id: AdvisorId) {
    markAdvisorRead(id);
    router.push(aiHref({ agent: id }));
  }

  return (
    <>
      <aside
        className={`sticky top-14 z-30 hidden h-[calc(100dvh-3.5rem)] self-start flex-col overflow-hidden border-r border-line bg-paper-2 lg:flex ${PRODUCT_RAIL_WIDTH}`}
      >
        <ProductNav aiHref={aiHref({ agent: activeId ?? DEFAULT_ADVISOR_ID })} />

        <div className="mt-5 shrink-0 px-4">
          <p className="text-meta uppercase tracking-[0.14em]">Agents</p>
        </div>

        <ul className="mt-2 min-h-0 flex-1 space-y-1.5 overflow-y-auto px-2.5 pb-3">
          {ADVISORS.map((advisor) => {
            const active = advisor.id === activeId;
            const activity = getAdvisorActivity(advisor, threads);
            const locked = advisor.status !== "unlocked";
            return (
              <li key={advisor.id}>
                <button
                  type="button"
                  aria-current={active ? "page" : undefined}
                  onClick={() => openAgent(advisor.id)}
                  className={`flex w-full items-center gap-2.5 rounded-2xl border px-2.5 py-2 text-left transition-colors ${
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

        <div className="mt-auto shrink-0 space-y-2 border-t border-line px-2.5 py-3">
          <Link
            href="/ai/connections"
            className="flex w-full items-center gap-2.5 rounded-full border border-line bg-white px-3 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-ink/30 hover:text-ink"
          >
            <Settings className="h-4 w-4 shrink-0" strokeWidth={2} />
            Connections
          </Link>
          <button
            type="button"
            onClick={() => setRequestOpen(true)}
            className="w-full px-3 text-left text-[12px] font-semibold text-accent hover:underline"
          >
            Request an agent →
          </button>
        </div>
      </aside>
      <RequestAgentSheet open={requestOpen} onClose={() => setRequestOpen(false)} />
    </>
  );
}
