"use client";

import { useEffect, useRef } from "react";

export function ScrollAnchor({ version }: { version: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [version]);
  return <div ref={ref} className="h-px w-full shrink-0" aria-hidden />;
}
