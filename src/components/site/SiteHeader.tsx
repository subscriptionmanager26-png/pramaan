"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AskAiIcon } from "@/components/icons/AskAiIcon";
import { Logo } from "@/components/Logo";
import { SiteAccountMenu } from "@/components/site/SiteAccountMenu";

const nav = [
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/advisors", label: "Advisors" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
] as const;

/**
 * Desktop: logo + center links + account + Ask AI.
 * Mobile: logo left + account right (tabs live in BottomNav — old Pocketedge Shell pattern).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const onAi = pathname?.startsWith("/ai") ?? false;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <div className="flex min-w-0 shrink-0 items-center justify-self-start">
          <Logo />
        </div>

        <nav
          className="hidden w-full items-center justify-center gap-1 lg:flex"
          aria-label="Main"
        >
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  active ? "bg-accent-2 text-accent" : "text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-2 justify-self-end lg:ml-0 lg:min-w-[10.5rem]">
          <SiteAccountMenu />
          {/* Desktop only — mobile uses centered Ask AI in BottomNav (btn-ghost would override `hidden`) */}
          <div className="hidden lg:block">
            <Link
              href="/ai"
              className={`btn-ghost shrink-0 ${onAi ? "pointer-events-none invisible" : ""}`}
              aria-hidden={onAi}
              tabIndex={onAi ? -1 : undefined}
            >
              <AskAiIcon className="h-3.5 w-3.5" />
              Ask AI
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
