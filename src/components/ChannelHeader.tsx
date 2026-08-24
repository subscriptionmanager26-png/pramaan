import Link from "next/link";
import type { SourceKind } from "@/lib/types";
import { SourceIcon } from "./SourceIcon";
import { sourceLabel } from "@/lib/utils";

export function ChannelHeader({
  source,
  title,
  blurb,
  href,
  count,
  tone = "light",
}: {
  source?: SourceKind;
  title: string;
  blurb: string;
  href: string;
  count?: number;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-white/55" : "text-ink-3";
  const link = tone === "dark" ? "text-white/80 hover:text-white" : "text-accent hover:underline";

  return (
    <div className="flex items-end justify-between gap-4">
      <div className="min-w-0">
        <div className={`flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] ${muted}`}>
          {source ? <SourceIcon kind={source} className="h-3 w-3" /> : null}
          <span>{title}</span>
          {count !== undefined ? <span className="normal-case tracking-normal opacity-70">· {count}</span> : null}
        </div>
        <p className={`mt-2 text-sm leading-6 ${tone === "dark" ? "text-white/65" : "text-ink-2"}`}>{blurb}</p>
      </div>
      <Link href={href} className={`shrink-0 text-sm font-medium underline-offset-4 ${link}`}>
        See more
      </Link>
    </div>
  );
}

export function sourceDiscoverHref(kind: SourceKind) {
  return `/discover?type=${kind}`;
}

export function channelBlurb(kind: SourceKind) {
  if (kind === "twitter") return "High cadence. Short posts — skim for signal.";
  if (kind === "substack") return "Slow cadence. Long reads when they publish.";
  if (kind === "youtube") return "A few videos go a long way. Open to watch.";
  return "Episodes drop less often. Listen on the host.";
}

export function channelTitle(kind: SourceKind) {
  return sourceLabel(kind);
}
