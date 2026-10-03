import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/shell/Page";
import { formatDate } from "@/lib/utils";
import { getGuide, guides } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide?.title ?? "Guide" };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <Page width="content">
      <Link href="/guides" className="text-[12px] font-medium text-accent hover:underline">
        All guides
      </Link>
      <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">
        {guide.kind === "tool" ? "Tool" : "Guide"}
      </p>
      <h1 className="text-display mt-2 text-ink">{guide.title}</h1>
      <p className="mt-3 text-[13px] text-ink-3">
        {formatDate(guide.publishedAt)}
        {guide.readMinutes ? ` · ${guide.readMinutes} min read` : null}
      </p>
      <p className="mt-6 max-w-2xl text-[16px] leading-7 text-ink-2">{guide.summary}</p>

      {guide.kind === "tool" ? (
        <ol className="mt-8 max-w-2xl list-decimal space-y-3 pl-5 text-[15px] leading-7 text-ink">
          {guide.body.map((step) => (
            <li key={step.slice(0, 24)}>{step}</li>
          ))}
        </ol>
      ) : (
        <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink">
          {guide.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      )}
    </Page>
  );
}
