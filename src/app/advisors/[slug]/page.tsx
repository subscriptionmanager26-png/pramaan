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
      <Link href="/advisors" className="text-[13px] font-semibold text-accent hover:underline">
        ← All advisors
      </Link>
      <h1 className="text-section mt-5 text-ink">{advisor.name}</h1>

      <dl className="mt-8 space-y-6 rounded-2xl border border-line bg-white p-6">
        <div>
          <dt className="text-meta uppercase tracking-[0.12em]">License</dt>
          <dd className="mt-1.5 text-[16px] font-medium text-ink">{advisor.license}</dd>
        </div>
        <div>
          <dt className="text-meta uppercase tracking-[0.12em]">Started in</dt>
          <dd className="mt-1.5 text-[16px] font-medium text-ink">{advisor.startedIn}</dd>
        </div>
        <div>
          <dt className="text-meta uppercase tracking-[0.12em]">Social media</dt>
          <dd className="mt-3 flex flex-wrap gap-3">
            {advisor.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
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
