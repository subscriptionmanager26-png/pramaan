import type { ReactNode } from "react";
import Link from "next/link";

const widths = {
  feed: "max-w-2xl",
  content: "max-w-3xl",
  dash: "max-w-6xl",
  wide: "max-w-6xl",
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
    <div className={`mx-auto w-full ${widths[width]} px-4 py-8 sm:px-6 sm:py-10 ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
  eyebrow,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className={actions ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" : undefined}>
      <div className="min-w-0">
        {eyebrow ? <p className="text-meta mb-2 uppercase tracking-[0.14em]">{eyebrow}</p> : null}
        <h1 className="text-section text-ink">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-[15px] leading-6 text-ink-2">{description}</p> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </header>
  );
}

export function SectionHeading({
  title,
  href,
  linkLabel = "View all",
  highlight = false,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-end justify-between gap-3">
      <h2 className={`text-section text-ink ${highlight ? "mark" : ""}`}>{title}</h2>
      {href ? (
        <Link href={href} className="text-[13px] font-semibold text-accent hover:underline">
          {linkLabel} →
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
  const className = `inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
    active
      ? "border-accent bg-accent-2 font-semibold text-accent"
      : "border-line bg-white font-medium text-ink-2 hover:border-ink/30 hover:text-ink"
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
