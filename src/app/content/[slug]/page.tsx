import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { content, getContent } from "@/lib/data";
import { previewHeadline } from "@/lib/utils";

export function generateStaticParams() {
  return content.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent(slug);
  if (!item) return { title: "Open original" };
  return {
    title: previewHeadline(item.title, item.summary),
    description: `Opens on the original host. Pramaan does not host this work.`,
  };
}

/** Pramaan never hosts the piece — deep links bounce straight to the original. */
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getContent(slug);
  if (!item) redirect("/");
  redirect(item.url);
}
