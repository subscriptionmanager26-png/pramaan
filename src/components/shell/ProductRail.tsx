"use client";

import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Newspaper, ScanSearch, Users } from "lucide-react";

import { AskAiIcon } from "@/components/icons/AskAiIcon";
import { AppNavLink } from "@/components/shell/AppNavLink";

/** Same destinations as the AI rail. Width must match the header logo column. */
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

export function ProductNav({ aiHref }: { aiHref?: string }) {
  const pathname = usePathname();
  const navBtn =
    "flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left text-[13px] font-medium transition-colors";

  return (
    <nav className="space-y-1 px-2.5 pt-3" aria-label="Product">
      {PRODUCT_NAV.map((item) => {
        const active = productNavActive(pathname, item.href);
        const href = item.href === "/ai" && aiHref ? aiHref : item.href;
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

/** Desktop product rail used on every page except /ai, which adds the agent roster under the same nav. */
export function ProductRail() {
  return (
    <aside
      className={`hidden shrink-0 flex-col border-r border-line bg-paper-2 lg:flex ${PRODUCT_RAIL_WIDTH}`}
    >
      <ProductNav />
    </aside>
  );
}
