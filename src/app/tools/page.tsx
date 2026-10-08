import type { Metadata } from "next";
import Link from "next/link";
import { PocketEdgeLogo } from "@/components/PocketEdgeLogo";
import { Page } from "@/components/shell/Page";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Tools",
};

export default function ToolsPage() {
  const tools = guides.filter((g) => g.kind === "tool");

  return (
    <Page>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <PocketEdgeLogo />
          <h1 className="text-section mt-6 text-ink">Tools</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-6 text-ink-2">
            Live data and screeners — ETF iNAV, gold, mutual funds, markets, and more. Each card
            opens on pocketedge.in.
          </p>
        </div>
        <Link href="/guides" className="text-[13px] font-semibold text-accent hover:underline">
          Looking for guides? →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {tools.map((tool) => {
          const cardHref = tool.toolUrl?.startsWith("http") ? tool.toolUrl : `/guides/${tool.slug}`;
          const external = cardHref.startsWith("http");

          return (
            <a
              key={tool.slug}
              href={cardHref}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group block overflow-hidden rounded-2xl border border-line bg-highlight/40 transition-transform hover:-translate-y-0.5"
            >
              <div className="aspect-[2/1] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.image} alt="" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="p-5">
                <p className="text-meta uppercase tracking-[0.12em] text-ink">{tool.topic ?? "Tool"}</p>
                <h3 className="mt-2 text-headline text-ink group-hover:text-accent">{tool.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{tool.summary}</p>
                {external ? (
                  <p className="mt-3 text-[13px] font-semibold text-accent">Open tool →</p>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
    </Page>
  );
}
