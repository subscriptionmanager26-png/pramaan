"use client";

import { useState } from "react";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar onMenu={() => setDrawer(true)} />
          <main className="flex-1 pb-24 lg:pb-8">{children}</main>
        </div>
      </div>
      <BottomNav />

      {drawer ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close menu"
            onClick={() => setDrawer(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(84vw,18rem)] overflow-y-auto bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <span className="text-[14px] font-semibold">Menu</span>
              <button type="button" onClick={() => setDrawer(false)} className="text-[13px] text-ink-3">
                Close
              </button>
            </div>
            <div className="p-2" onClick={() => setDrawer(false)}>
              <Sidebar mobile />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
