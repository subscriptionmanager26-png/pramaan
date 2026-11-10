"use client";

import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Newspaper, ScanSearch } from "lucide-react";

import { AskAiIcon } from "@/components/icons/AskAiIcon";
import { AppNavLink } from "@/components/shell/AppNavLink";

/** Primary mobile destinations — Ask AI centered (old Pocketedge Shell sizing). */
const tabs = [
  { href: "/news", label: "News", kind: "lucide" as const, Icon: Newspaper },
  { href: "/research", label: "Research", kind: "lucide" as const, Icon: ScanSearch },
  { href: "/ai", label: "Ask AI", kind: "askAi" as const },
  { href: "/portfolio", label: "Portfolio", kind: "lucide" as const, Icon: Briefcase },
  { href: "/resources", label: "Resources", kind: "lucide" as const, Icon: BookOpen },
] as const;

function tabActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/ai") return pathname.startsWith("/ai");
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

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-lg items-center justify-around px-1">
        {tabs.map((tab) => {
          const { href, label } = tab;
          const active = tabActive(pathname, href);
          return (
            <AppNavLink
              key={href}
              href={href}
              className={`relative flex h-full min-w-[4.25rem] flex-1 flex-col items-center justify-center gap-0.5 text-[12px] font-medium transition-colors ${
                active ? "text-accent" : "text-ink-3"
              }`}
            >
              {tab.kind === "askAi" ? (
                <AskAiIcon className="h-6 w-6" />
              ) : (
                <tab.Icon className="h-6 w-6" strokeWidth={active ? 2.25 : 2} aria-hidden />
              )}
              {label}
            </AppNavLink>
          );
        })}
      </div>
    </nav>
  );
}

/** Space reserved for BottomNav + iOS home indicator (old Pocketedge Shell main pb). */
export const BOTTOM_NAV_PAD =
  "pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0";
