import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskNoteView } from "@/components/news/DeskNoteView";
import { JsonLd } from "@/components/seo/JsonLd";
import { Page } from "@/components/shell/Page";
import { deskNotes, getDeskNote } from "@/lib/desk-notes";
import { newsArticleJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return deskNotes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getDeskNote(slug);
  if (!note) return { title: "News" };
  const path = `/news/${slug}`;
  return pageMetadata({
    path,
    title: note.title,
    description: note.summary,
    openGraph: {
      type: "article",
      publishedTime: note.publishedAt,
      images: note.image ? [note.image] : undefined,
    },
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getDeskNote(slug);
  if (!note) notFound();

  const otherNotes = deskNotes.filter((a) => a.slug !== note.slug).slice(0, 4);

  const path = `/news/${note.slug}`;

  return (
    <Page width="content">
      <JsonLd
        data={newsArticleJsonLd({
          headline: note.title,
          description: note.summary,
          path,
          datePublished: note.publishedAt,
          image: note.image,
        })}
      />
      <DeskNoteView note={note} otherNotes={otherNotes} />
    </Page>
  );
}
