import Link from "next/link";
import type { ReactNode } from "react";

const widths = {
  feed: "max-w-2xl",
  content: "max-w-3xl",
  dash: "max-w-6xl",
} as const;

export function Page({
  children,
  width = "dash",
  className = "",
}: {
  children: ReactNode;
  width?: keyof typeof widths;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full ${widths[width]} px-4 py-4 sm:px-6 lg:py-6 ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className={actions ? "flex items-start justify-between gap-3" : undefined}>
      <div className="min-w-0">
        <h1 className="text-display text-ink">{title}</h1>
        {description ? <p className="mt-2 max-w-xl text-[14px] leading-6 text-ink-2">{description}</p> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </header>
  );
}

export function SectionHeading({
  title,
  href,
  linkLabel = "View all",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-section text-ink">{title}</h2>
      {href ? (
        <Link href={href} className="text-[12px] font-medium text-accent hover:underline">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function SoftChip({
  children,
  href,
  active = false,
}: {
  children: ReactNode;
  href?: string;
  active?: boolean;
}) {
  const className = `inline-flex items-center rounded-lg border px-3 py-1.5 text-[13px] transition-colors ${
    active
      ? "border-accent/30 bg-accent-2 font-medium text-accent"
      : "border-line bg-white text-ink-2 hover:bg-paper-2 hover:text-ink"
  }`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
}
