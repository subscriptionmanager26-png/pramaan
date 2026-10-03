"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

export function TopBar({ onMenu }: { onMenu?: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="flex h-14 items-center gap-3 px-4 lg:h-16 lg:px-6">
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper-2 lg:hidden"
          onClick={onMenu}
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <Link href="/news" className="text-base text-ink lg:hidden">
          <Logo />
        </Link>

        <div className="ml-auto hidden flex-1 lg:block">
          <div className="relative max-w-xl">
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-ink-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              readOnly
              placeholder="Search news, research, advisors, guides…"
              className="w-full rounded-lg border border-line bg-paper-2 py-2.5 pr-4 pl-10 text-[13.5px] outline-none placeholder:text-ink-3"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
