"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { PRODUCT_RAIL_WIDTH } from "@/components/shell/ProductRail";
import { SiteAccountMenu } from "@/components/site/SiteAccountMenu";

function sectionTitle(pathname: string | null) {
  if (!pathname || pathname === "/") return "Home";
  if (pathname.startsWith("/ai")) return "Ask AI";
  if (pathname.startsWith("/news")) return "News";
  if (pathname.startsWith("/research") || pathname.startsWith("/content")) return "Research";
  if (pathname.startsWith("/portfolio")) return "Portfolio";
  if (pathname.startsWith("/advisors") || pathname.startsWith("/for-advisors")) return "Advisors";
  if (
    pathname.startsWith("/resources") ||
    pathname.startsWith("/guides") ||
    pathname.startsWith("/tools") ||
    pathname.startsWith("/gold-tracker") ||
    pathname.startsWith("/etf-tracker") ||
    pathname.startsWith("/market-holidays")
  ) {
    return "Resources";
  }
  if (pathname.startsWith("/account")) return "Account";
  if (pathname.startsWith("/search")) return "Search";
  if (pathname.startsWith("/discover")) return "Discover";
  if (pathname.startsWith("/events")) return "Events";
  if (pathname.startsWith("/creators")) return "Creators";
  if (pathname.startsWith("/topics")) return "Topics";
  if (pathname.startsWith("/disclosures")) return "Legal";
  return "PocketEdge";
}

/**
 * Same bar on every page: logo in the product-rail column, section title, account.
 * Destinations live in the left rail (desktop) and BottomNav (mobile).
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-white/95 backdrop-blur-md">
      <div className="flex h-14 w-full items-center">
        <div
          className={`hidden h-full shrink-0 items-center border-r border-line bg-paper-2 px-4 lg:flex ${PRODUCT_RAIL_WIDTH}`}
        >
          <Logo />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 lg:px-5">
          <div className="min-w-0 lg:hidden">
            <Logo />
          </div>
          <p className="hidden text-[14px] font-semibold tracking-tight text-ink lg:block">
            {sectionTitle(pathname)}
          </p>
          <div className="ml-auto flex shrink-0 items-center">
            <SiteAccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
