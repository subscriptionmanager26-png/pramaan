"use client";

import { usePathname } from "next/navigation";

import { PostHogIdentify } from "@/components/analytics/PostHogIdentify";
import { BOTTOM_NAV_PAD, BottomNav } from "@/components/shell/BottomNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

function AppShellChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const agentArea = pathname?.startsWith("/ai") ?? false;

  // /ai is one product surface inside the site — keep SiteHeader + BottomNav always.
  // Do not strip chrome for “immersive” chat; News / Research / Portfolio must stay reachable.
  return (
    <div
      className={`flex flex-col bg-paper text-ink ${agentArea ? "h-dvh max-h-dvh min-h-0" : "min-h-screen"}`}
    >
      <SiteHeader />
      <main
        className={
          agentArea
            ? `flex min-h-0 flex-1 flex-col overflow-hidden ${BOTTOM_NAV_PAD}`
            : `flex-1 ${BOTTOM_NAV_PAD}`
        }
      >
        {children}
      </main>
      {!agentArea ? <SiteFooter /> : null}
      <BottomNav />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PostHogIdentify />
      <AppShellChrome>{children}</AppShellChrome>
    </>
  );
}
