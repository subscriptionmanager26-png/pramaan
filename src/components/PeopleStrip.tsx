import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { creators } from "@/lib/data";

export function PeopleStrip() {
  return (
    <section>
      <div className="flex items-end justify-between">
        <h2 className="text-sm font-semibold text-navy">Voices</h2>
        <Link href="/creators" className="text-xs font-medium text-accent hover:underline">
          All
        </Link>
      </div>
      <div className="mt-4 flex gap-5 overflow-x-auto pb-1">
        {creators.map((creator) => (
          <Link
            key={creator.slug}
            href={`/creators/${creator.slug}`}
            className="flex w-[72px] shrink-0 flex-col items-center gap-2 text-center"
          >
            <Avatar creator={creator} size="lg" />
            <span className="w-full truncate text-xs font-medium text-ink">{creator.name.split(" ")[0]}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
