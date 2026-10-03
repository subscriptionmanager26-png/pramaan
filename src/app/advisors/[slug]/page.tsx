import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Page } from "@/components/shell/Page";
import { advisors, getAdvisor } from "@/lib/site";

export function generateStaticParams() {
  return advisors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const advisor = getAdvisor(slug);
  return { title: advisor?.name ?? "Advisor" };
}

export default async function AdvisorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const advisor = getAdvisor(slug);
  if (!advisor) notFound();

  return (
    <Page width="content">
      <Link href="/advisors" className="text-[12px] font-medium text-accent hover:underline">
        All advisors
      </Link>
      <h1 className="text-display mt-4 text-ink">{advisor.name}</h1>

      <dl className="mt-8 space-y-5">
        <div>
          <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">License</dt>
          <dd className="mt-1.5 text-[15px] text-ink">{advisor.license}</dd>
        </div>
        <div>
          <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">Started in</dt>
          <dd className="mt-1.5 text-[15px] text-ink">{advisor.startedIn}</dd>
        </div>
        <div>
          <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3">
            Social media
          </dt>
          <dd className="mt-2 flex flex-wrap gap-3">
            {advisor.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-3 py-1.5 text-[13px] font-medium text-ink hover:border-accent/40 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </Page>
  );
}
