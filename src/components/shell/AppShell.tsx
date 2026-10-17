"use client";

import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const agentArea = pathname?.startsWith("/ai");

  return (
    <div
      className={`flex flex-col bg-paper text-ink ${agentArea ? "h-dvh max-h-dvh min-h-0" : "min-h-screen"}`}
    >
      <SiteHeader />
      <main className={agentArea ? "flex min-h-0 flex-1 flex-col overflow-hidden" : "flex-1"}>{children}</main>
      {!agentArea && <SiteFooter />}
    </div>
  );
}
