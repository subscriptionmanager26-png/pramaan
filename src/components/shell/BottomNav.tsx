"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/news", label: "News", icon: "news" },
  { href: "/research", label: "Research", icon: "research" },
  { href: "/advisors", label: "Advisors", icon: "user" },
  { href: "/guides", label: "Guides", icon: "guides" },
  { href: "/tools", label: "Tools", icon: "guides" },
];

function Icon({ name }: { name: string }) {
  const stroke = "currentColor";
  if (name === "news") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M4 5h12a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5z" />
        <path d="M18 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2" />
        <path d="M7 9h8M7 13h5" />
      </svg>
    );
  }
  if (name === "research") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M14 4v4h4M8 12h8M8 16h5" />
      </svg>
    );
  }
  if (name === "guides") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.85">
        <path d="M8 4h10a1 1 0 0 1 1 1v14l-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1z" />
        <path d="M10 9h6M10 13h4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.85">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </svg>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg items-stretch justify-between px-1 pb-[env(safe-area-inset-bottom)]">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] ${
                active ? "font-medium text-accent" : "font-normal text-ink-3"
              }`}
            >
              <Icon name={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
