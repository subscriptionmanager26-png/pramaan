import type { ReactNode } from "react";

export function Disclaimer({ children }: { children?: ReactNode }) {
  return (
    <p className="text-xs leading-5 text-ink-3">
      {children ??
        "Pramaan does not host this work. It aggregates public Twitter, Substack, YouTube, and podcasts from SEBI-registered entities. Events are listed here; sign-up happens with the host. Not investment advice. Verify registration on the SEBI website."}
    </p>
  );
}
