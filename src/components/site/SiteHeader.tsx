"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/Logo";

const nav = [
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/advisors", label: "Advisors" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/ai", label: "AI" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const mobileMenu =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[200] lg:hidden" role="dialog" aria-modal="true" aria-label="Main menu">
            <button
              type="button"
              className="absolute inset-0 bg-ink/60"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div
              className="absolute inset-y-0 left-0 flex w-[min(86vw,20rem)] flex-col bg-white shadow-2xl"
              style={{ isolation: "isolate" }}
            >
              <div className="flex items-center justify-between border-b border-line bg-white px-4 py-4">
                <Logo />
                <button
                  type="button"
                  className="text-[13px] font-medium text-ink-3"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto bg-white p-3"
                onClick={() => setOpen(false)}
              >
                {nav.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl px-3 py-3 text-[15px] ${
                        active ? "bg-accent-2 font-semibold text-accent" : "font-medium text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto border-t border-line bg-white p-4">
                <Link href="/ai" className="btn-primary w-full" onClick={() => setOpen(false)}>
                  Ask Pramaan AI
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line ${
        open ? "bg-white" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:h-16 sm:px-6">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-1 justify-center lg:flex-none lg:justify-start">
          <Logo />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[14px] transition-colors ${
                  active ? "bg-accent-2 font-semibold text-accent" : "font-medium text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/ai" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M8 2.5v2M8 11.5v2M2.5 8h2M11.5 8h2M4.2 4.2l1.4 1.4M10.4 10.4l1.4 1.4M4.2 11.8l1.4-1.4M10.4 5.6l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Ask AI
          </Link>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
