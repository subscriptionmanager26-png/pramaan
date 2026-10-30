"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Newspaper, ScanSearch } from "lucide-react";

import { AskAiIcon } from "@/components/icons/AskAiIcon";

/** Primary mobile destinations — Ask AI centered (old Pocketedge Shell sizing). */
const tabs = [
  { href: "/news", label: "News", kind: "lucide" as const, Icon: Newspaper },
  { href: "/research", label: "Research", kind: "lucide" as const, Icon: ScanSearch },
  { href: "/ai", label: "Ask AI", kind: "askAi" as const },
  { href: "/portfolio", label: "Portfolio", kind: "lucide" as const, Icon: Briefcase },
  { href: "/guides", label: "Guides", kind: "lucide" as const, Icon: BookOpen },
] as const;

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
          const active =
            href === "/ai"
              ? Boolean(pathname?.startsWith("/ai"))
              : pathname === href || Boolean(pathname?.startsWith(`${href}/`));
          return (
            <Link
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/** Space reserved for BottomNav + iOS home indicator (old Pocketedge Shell main pb). */
export const BOTTOM_NAV_PAD =
  "pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0";
