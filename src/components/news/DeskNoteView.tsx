import Link from "next/link";
import { isDeskSectionHeader } from "@/lib/desk-notes";
import type { ResearchArticle } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export function DeskNoteView({
  note,
  otherNotes,
}: {
  note: ResearchArticle;
  otherNotes: ResearchArticle[];
}) {
  return (
    <>
      <Link href="/news" className="text-[13px] font-semibold text-accent hover:underline">
        ← All news
      </Link>

      <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
        Desk note · {note.category} · {note.companyOrSector}
      </p>
      <h1 className="text-section mt-2 text-ink">{note.title}</h1>
      <p className="mt-3 text-[17px] leading-7 text-ink-2">{note.summary}</p>
      <p className="text-meta mt-3">
        {formatDate(note.publishedAt)} · {note.readMinutes} min read
      </p>

      <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-line bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={note.image} alt="" className="aspect-[16/9] w-full object-cover" />
      </div>

      {note.keyTakeaways?.length ? (
        <div className="mt-8 rounded-2xl border border-line bg-accent-2/50 p-5">
          <p className="text-meta uppercase tracking-[0.14em] text-accent">Key takeaways</p>
          <ul className="mt-3 space-y-2">
            {note.keyTakeaways.map((t) => (
              <li key={t.slice(0, 48)} className="text-[15px] leading-6 text-ink">
                <span className="mr-2 text-accent">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-ink">
        {note.body.map((para, i) =>
          isDeskSectionHeader(para) ? (
            <h2
              key={`h-${i}-${para}`}
              className="pt-2 text-[13px] font-bold uppercase tracking-[0.08em] text-accent"
            >
              {para}
            </h2>
          ) : (
            <p key={`p-${i}-${para.slice(0, 40)}`}>{para}</p>
          ),
        )}
      </div>

      {note.sourceNote ? (
        <p className="mt-8 max-w-2xl text-[13px] leading-6 text-ink-3">{note.sourceNote}</p>
      ) : null}

      {otherNotes.length ? (
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="text-[1.1rem] font-black italic tracking-tight text-ink">More desk notes</h2>
          <div className="mt-4 divide-y divide-line border-t border-line">
            {otherNotes.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group block border-b border-line py-5 last:border-0"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                  {a.companyOrSector}
                </p>
                <h3 className="text-headline mt-2 text-ink transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2 line-clamp-2">{a.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 rounded-2xl border border-line bg-paper-2 p-5">
        <p className="text-meta uppercase tracking-[0.14em]">Disclaimer</p>
        <p className="mt-2 text-[14px] leading-6 text-ink-2">
          For informational purposes only. Not investment advice. Verify with filings and a licensed
          adviser.
        </p>
      </div>
    </>
  );
}
