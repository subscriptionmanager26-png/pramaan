"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/news", label: "News" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="text-[17px] font-semibold text-navy" aria-label="Pramaan home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  active ? "font-medium text-navy" : "text-ink-3 hover:text-ink"
                }`}
              >
                {item.label}
                {active ? <span className="mt-1 block h-px w-full bg-navy" /> : <span className="mt-1 block h-px w-full bg-transparent" />}
              </Link>
            );
          })}
        </nav>
        <form onSubmit={onSearch} className="ml-auto hidden max-w-[14rem] flex-1 lg:block">
          <label className="sr-only" htmlFor="site-search">
            Search
          </label>
          <input
            id="site-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
            className="w-full border-b border-line bg-transparent px-0 py-1.5 text-sm outline-none placeholder:text-ink-3 focus:border-navy"
          />
        </form>
        <div className="ml-auto flex items-center gap-2 md:ml-0 lg:ml-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-paper px-4 py-3 md:hidden">
          <form onSubmit={onSearch} className="mb-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search…"
              className="w-full border border-line bg-white px-3.5 py-2 text-sm outline-none"
            />
          </form>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-1 py-2.5 text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
