"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type UnderlineTab = {
  id: string;
  label: string;
  count?: number;
};

export function UnderlineTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: UnderlineTab[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-line scrollbar-none">
      {tabs.map((tab) => {
        const selected = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative shrink-0 px-3 py-3 text-[13.5px] whitespace-nowrap ${
              selected ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
            }`}
          >
            {tab.label}
            {tab.count !== undefined ? (
              <span className="ml-1 text-xs font-normal text-ink-3"> {tab.count}</span>
            ) : null}
            {selected ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
          </button>
        );
      })}
    </div>
  );
}

export function UnderlineLinkTabs({
  tabs,
}: {
  tabs: { id: string; label: string; href: string; active: boolean }[];
}) {
  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-line scrollbar-none">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`relative shrink-0 px-3 py-3 text-[13.5px] whitespace-nowrap ${
            tab.active ? "font-semibold text-ink" : "font-medium text-ink-3 hover:text-ink"
          }`}
        >
          {tab.label}
          {tab.active ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent" /> : null}
        </Link>
      ))}
    </nav>
  );
}

export function FilterChipRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
        active
          ? "border-accent/30 bg-accent-2 font-medium text-accent"
          : "border-line bg-white text-ink-2 hover:bg-paper-2 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
