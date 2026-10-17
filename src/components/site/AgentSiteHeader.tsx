"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/Logo";
import { SiteAccountMenu } from "@/components/site/SiteAccountMenu";

const deskLinks = [
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Portfolio" },
] as const;

export function AgentSiteHeader() {
  const pathname = usePathname();
  const onConnections = pathname === "/ai/connections";

  return (
    <header className="flex h-12 shrink-0 items-center gap-3 border-b border-line bg-white px-3 sm:px-4">
      <Link href="/" className="shrink-0" aria-label="PocketEdge home">
        <Logo />
      </Link>
      <span className="hidden h-5 w-px bg-line sm:block" aria-hidden />
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-meta text-ink-3">PocketEdge</span>
        <span className="mark text-sm font-bold tracking-tight text-ink">AI</span>
      </div>

      <nav className="ml-auto hidden items-center gap-1 md:flex md:mr-2" aria-label="Desk">
        {deskLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/ai/connections"
          className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
            onConnections ? "bg-accent-2 text-accent" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
          }`}
        >
          Connections
        </Link>
      </nav>

      <div className="ml-auto shrink-0">
        <SiteAccountMenu />
      </div>
    </header>
  );
}
