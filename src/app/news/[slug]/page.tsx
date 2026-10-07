import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskNoteView } from "@/components/news/DeskNoteView";
import { Page } from "@/components/shell/Page";
import { deskNotes, getDeskNote } from "@/lib/desk-notes";

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
  return { title: note?.title ?? "News" };
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

  return (
    <Page width="content">
      <DeskNoteView note={note} otherNotes={otherNotes} />
    </Page>
  );
}
