"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AskAiIcon } from "@/components/icons/AskAiIcon";
import { Logo } from "@/components/Logo";
import { AppNavLink } from "@/components/shell/AppNavLink";
import { SiteAccountMenu } from "@/components/site/SiteAccountMenu";

const nav = [
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/advisors", label: "Advisors" },
  { href: "/resources", label: "Resources" },
] as const;

function navItemActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/resources") {
    return (
      pathname === "/resources" ||
      pathname.startsWith("/resources/") ||
      pathname === "/guides" ||
      pathname.startsWith("/guides/") ||
      pathname === "/tools" ||
      pathname.startsWith("/tools/")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Desktop (site pages): logo + center links + account + Ask AI.
 * Desktop (/ai): full-bleed bar — logo over the rail, Ask AI label, account. Destinations live in the left rail.
 * Mobile: logo left + account right (tabs live in BottomNav).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const onAi = pathname?.startsWith("/ai") ?? false;

  if (onAi) {
    return (
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
        <div className="flex h-14 w-full items-center">
          {/* Same width/bg as the AI left rail so logo sits on the product column */}
          <div className="hidden h-full w-[16rem] shrink-0 items-center border-r border-line bg-paper-2 px-4 lg:flex">
            <Logo />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-3 px-4 lg:px-5">
            <div className="min-w-0 lg:hidden">
              <Logo />
            </div>
            <p className="hidden text-[14px] font-semibold tracking-tight text-ink lg:block">
              Ask AI
            </p>
            <div className="ml-auto flex shrink-0 items-center">
              <SiteAccountMenu />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <div className="flex min-w-0 shrink-0 items-center justify-self-start">
          <Logo />
        </div>

        <nav className="hidden w-full items-center justify-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = navItemActive(pathname, item.href);
            return (
              <AppNavLink
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  active ? "bg-accent-2 text-accent" : "text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </AppNavLink>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-2 justify-self-end lg:ml-0 lg:min-w-[10.5rem]">
          <SiteAccountMenu />
          <div className="hidden lg:block">
            <Link href="/ai" className="btn-ghost shrink-0">
              <AskAiIcon className="h-3.5 w-3.5" />
              Ask AI
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
