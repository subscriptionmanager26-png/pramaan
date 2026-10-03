"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const nav = [
  { href: "/news", label: "News", icon: "news" },
  { href: "/research", label: "Research", icon: "research" },
  { href: "/advisors", label: "Advisors", icon: "user" },
  { href: "/guides", label: "Guides", icon: "guides" },
];

function NavIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const stroke = "currentColor";
  if (name === "news") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M4 5h12a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5z" />
        <path d="M18 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2" />
        <path d="M7 9h8M7 13h5" />
      </svg>
    );
  }
  if (name === "research") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M14 4v4h4M8 12h8M8 16h5" />
      </svg>
    );
  }
  if (name === "guides") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M8 4h10a1 1 0 0 1 1 1v14l-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1z" />
        <path d="M10 9h6M10 13h4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.85">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </svg>
  );
}

export function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  function itemClass(active: boolean) {
    return `flex items-center gap-3 rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
      active ? "font-medium text-accent" : "font-normal text-ink-2 hover:text-ink"
    }`;
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <aside
      className={
        mobile
          ? "flex h-full w-full flex-col bg-white px-3 py-2"
          : "sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-line bg-white px-3 py-5 lg:flex"
      }
    >
      {mobile ? null : (
        <NextLink href="/news" className="px-3 text-[17px] text-ink">
          <Logo />
        </NextLink>
      )}

      <nav className={`flex flex-1 flex-col gap-0.5 overflow-y-auto ${mobile ? "mt-2" : "mt-8"}`}>
        {nav.map((item) => {
          const active = isActive(item.href);
          return (
            <NextLink key={item.href} href={item.href} className={itemClass(active)}>
              <NavIcon name={item.icon} className={`h-4 w-4 ${active ? "text-accent" : ""}`} />
              {item.label}
            </NextLink>
          );
        })}
      </nav>
    </aside>
  );
}
