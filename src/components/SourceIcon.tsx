import type { SourceKind } from "@/lib/types";

export function SourceIcon({
  kind,
  className = "h-3.5 w-3.5",
}: {
  kind: SourceKind;
  className?: string;
}) {
  if (kind === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z"
        />
      </svg>
    );
  }
  if (kind === "twitter") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.7-6.2L5 22H2.2l7-8L2 2h7l4.2 5.6L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z"
        />
      </svg>
    );
  }
  if (kind === "substack") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="currentColor" d="M3 3h18v3.2H3V3zm0 5.4h18V22l-9-6.3L3 22V8.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 3h14a2 2 0 0 1 2 2v14l-4-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5v6l5-3-5-3z"
      />
    </svg>
  );
}
