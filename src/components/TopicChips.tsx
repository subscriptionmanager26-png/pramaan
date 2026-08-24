import Link from "next/link";
import { topics } from "@/lib/data";

export function TopicChips({ active }: { active?: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <Link
        href="/"
        className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm ${
          !active ? "border-navy bg-navy text-white" : "border-line bg-white text-ink-2 hover:border-navy/30"
        }`}
      >
        All
      </Link>
      {topics.map((t) => (
        <Link
          key={t.slug}
          href={`/topics/${t.slug}`}
          className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm ${
            active === t.slug
              ? "border-navy bg-navy text-white"
              : "border-line bg-white text-ink-2 hover:border-navy/30"
          }`}
        >
          {t.name}
        </Link>
      ))}
    </div>
  );
}
