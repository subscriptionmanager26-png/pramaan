"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const main = [{ href: "/", label: "Home", icon: "home" }];

const discover = [
  { href: "/discover", label: "Explore", icon: "compass" },
  { href: "/creators", label: "People", icon: "user" },
];

function NavIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
      </svg>
    );
  }
  if (name === "compass") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
      </svg>
    );
  }
  if (name === "bookmark") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3.5L6 20V5a1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </svg>
  );
}

export function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  function itemClass(active: boolean) {
    return `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
      active ? "bg-accent-2 font-medium text-accent" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
    }`;
  }

  const bookmarksActive = pathname === "/portfolio" || pathname.startsWith("/portfolio/");

  return (
    <aside
      className={
        mobile
          ? "flex h-full w-full flex-col bg-white px-3 py-2"
          : "sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-white px-3 py-5 lg:flex"
      }
    >
      {mobile ? null : (
        <NextLink href="/" className="px-3 text-lg text-ink">
          <Logo />
        </NextLink>
      )}

      <nav className={`flex flex-1 flex-col gap-6 overflow-y-auto ${mobile ? "mt-2" : "mt-8"}`}>
        <div className="space-y-1">
          {main.map((item) => {
            const active = pathname === "/";
            return (
              <NextLink key={item.label} href={item.href} className={itemClass(active)}>
                <NavIcon name={item.icon} className={`h-4 w-4 ${active ? "text-accent" : ""}`} />
                {item.label}
              </NextLink>
            );
          })}
        </div>

        <div>
          <p className="px-3 text-[10px] font-semibold tracking-[0.16em] text-ink-3">DISCOVER</p>
          <div className="mt-2 space-y-1">
            {discover.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <NextLink key={item.href} href={item.href} className={itemClass(active)}>
                  <NavIcon name={item.icon} />
                  {item.label}
                </NextLink>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-3 text-[10px] font-semibold tracking-[0.16em] text-ink-3">MY SPACE</p>
          <div className="mt-2 space-y-1">
            <NextLink href="/portfolio" className={`${itemClass(bookmarksActive)} justify-between`}>
              <span className="inline-flex items-center gap-3">
                <NavIcon name="bookmark" className={bookmarksActive ? "text-accent" : ""} />
                Bookmarks
              </span>
              <span className="text-xs text-ink-3">32</span>
            </NextLink>
          </div>
        </div>
      </nav>

      <NextLink href="/for-advisors" className={`${itemClass(pathname === "/for-advisors")} mt-3`}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
        Settings
      </NextLink>
    </aside>
  );
}
