"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/**
 * Soft-nav from `/news/[slug]` or `/research/[slug]` into the parent index
 * currently 500s in the App Router flight (hard refresh of the same URL works).
 * Force a full document navigation for those transitions only.
 */
function needsDocumentNav(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href !== "/news" && href !== "/research") return false;
  return (
    pathname.startsWith("/news/") || pathname.startsWith("/research/")
  );
}

export function AppNavLink({ href, className, children, ...rest }: Props) {
  const pathname = usePathname();
  if (needsDocumentNav(pathname, href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
