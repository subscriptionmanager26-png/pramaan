"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

import { PostHogIdentify } from "@/components/analytics/PostHogIdentify";
import { BOTTOM_NAV_PAD, BottomNav } from "@/components/shell/BottomNav";
import { PRODUCT_RAIL_WIDTH, ProductRail } from "@/components/shell/ProductRail";
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
      <div className={`flex min-h-0 flex-1 ${agentArea ? "overflow-hidden" : ""}`}>
        <Suspense
          fallback={
            <aside
              className={`sticky top-14 hidden h-[calc(100dvh-3.5rem)] self-start border-r border-line bg-paper-2 lg:block ${PRODUCT_RAIL_WIDTH}`}
              aria-hidden
            />
          }
        >
          <ProductRail />
        </Suspense>
        <div className={`flex min-h-0 min-w-0 flex-1 flex-col ${agentArea ? "overflow-hidden" : ""}`}>
          <main
            className={
              agentArea
                ? `flex min-h-0 flex-1 flex-col overflow-hidden ${BOTTOM_NAV_PAD}`
                : `flex-1 ${BOTTOM_NAV_PAD}`
            }
          >
            {children}
          </main>
          {agentArea ? null : <SiteFooter />}
        </div>
      </div>
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
