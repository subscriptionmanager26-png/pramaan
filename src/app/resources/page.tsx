import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/shell/Page";
import { formatRelative } from "@/lib/utils";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and tools for investing from India — explainers, screeners, and live data.",
};

export default function ResourcesPage() {
  const explainers = guides.filter((g) => g.kind === "guide");
  const tools = guides.filter((g) => g.kind === "tool");

  return (
    <Page>
      <PageHeader
        title="Resources"
        description="Guides and tools in one place — plain-language explainers plus live screeners and trackers."
      />

      <section id="guides" className="mt-12 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-headline text-ink">Guides</h2>
            <p className="mt-1 text-[14px] text-ink-2">
              Investing from India — global markets, LRS, costs, and tax basics.
            </p>
          </div>
          <a href="#tools" className="text-[13px] font-semibold text-accent hover:underline">
            Jump to tools →
          </a>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {explainers.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block overflow-hidden rounded-2xl border border-line bg-white"
            >
              <div className="aspect-[16/9] overflow-hidden bg-paper-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={guide.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                {guide.topic ? (
                  <p className="text-meta uppercase tracking-[0.12em] text-accent">{guide.topic}</p>
                ) : null}
                <h3 className="text-headline mt-1 text-ink group-hover:text-accent">{guide.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{guide.summary}</p>
                <p className="text-meta mt-3">
                  {guide.readMinutes ? `${guide.readMinutes} min · ` : null}
                  {formatRelative(guide.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="tools" className="mt-16 scroll-mt-24 border-t border-line pt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-headline text-ink">Tools</h2>
            <p className="mt-1 text-[14px] text-ink-2">
              Live data and screeners — ETF iNAV, gold, mutual funds, and more.
            </p>
          </div>
          <a href="#guides" className="text-[13px] font-semibold text-accent hover:underline">
            Jump to guides →
          </a>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {tools.map((tool) => {
            const cardHref =
              tool.toolUrl?.startsWith("http")
                ? tool.toolUrl
                : tool.toolUrl?.startsWith("/")
                  ? tool.toolUrl
                  : `/guides/${tool.slug}`;
            const external = cardHref.startsWith("http");

            const cardClass =
              "group block overflow-hidden rounded-2xl border border-line bg-highlight/40 transition-transform hover:-translate-y-0.5";

            const cardInner = (
              <>
                <div className="aspect-[2/1] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.image} alt="" className="h-full w-full object-cover opacity-90" />
                </div>
                <div className="p-5">
                  <p className="text-meta uppercase tracking-[0.12em] text-ink">{tool.topic ?? "Tool"}</p>
                  <h3 className="mt-2 text-headline text-ink group-hover:text-accent">{tool.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-ink-2">{tool.summary}</p>
                  <p className="mt-3 text-[13px] font-semibold text-accent">
                    {external ? "Open tool →" : "Open →"}
                  </p>
                </div>
              </>
            );

            if (external) {
              return (
                <a
                  key={tool.slug}
                  href={cardHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {cardInner}
                </a>
              );
            }

            return (
              <Link key={tool.slug} href={cardHref} className={cardClass}>
                {cardInner}
              </Link>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
