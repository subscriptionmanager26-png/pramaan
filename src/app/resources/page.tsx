import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Wrench } from "lucide-react";
import { Page, PageHeader } from "@/components/shell/Page";
import { guides, type Guide } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Resources",
  description: "Tools and guides for investing from India.",
};

function resourceHref(item: Guide) {
  if (item.kind === "tool") {
    if (item.toolUrl?.startsWith("http") || item.toolUrl?.startsWith("/")) return item.toolUrl;
  }
  return `/guides/${item.slug}`;
}

function ResourceCard({ item }: { item: Guide }) {
  const href = resourceHref(item);
  const external = href.startsWith("http");
  const Icon = item.kind === "tool" ? Wrench : BookOpen;

  const card = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-ink shadow-sm backdrop-blur-sm">
          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
        </span>
      </div>
      <div className="p-4 sm:p-5">
        {item.topic ? (
          <p className="text-meta uppercase tracking-[0.12em] text-ink-3">{item.topic}</p>
        ) : null}
        <h3 className={`text-headline text-ink group-hover:text-accent ${item.topic ? "mt-1" : ""}`}>
          {item.title}
        </h3>
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-ink/25";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {card}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {card}
    </Link>
  );
}

export default function ResourcesPage() {
  const tools = guides.filter((g) => g.kind === "tool");
  const explainers = guides.filter((g) => g.kind === "guide");

  return (
    <Page>
      <PageHeader title="Resources" />

      <section id="tools" className="mt-10 scroll-mt-24">
        <h2 className="text-headline text-ink">Tools</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ResourceCard key={tool.slug} item={tool} />
          ))}
        </div>
      </section>

      <section id="guides" className="mt-14 scroll-mt-24">
        <h2 className="text-headline text-ink">Guides</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explainers.map((guide) => (
            <ResourceCard key={guide.slug} item={guide} />
          ))}
        </div>
      </section>
    </Page>
  );
}
