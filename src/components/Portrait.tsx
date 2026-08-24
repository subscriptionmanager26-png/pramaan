import type { Creator } from "@/lib/types";
import { sebiShort } from "@/lib/utils";

function hash(s: string) {
  return s.split("").reduce((n, c) => n + c.charCodeAt(0), 0);
}

export function Portrait({
  creator,
  className = "",
  showMeta = true,
}: {
  creator: Pick<Creator, "name" | "initials" | "color" | "slug" | "sebi" | "city">;
  className?: string;
  showMeta?: boolean;
}) {
  const n = hash(creator.slug) % 4;

  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(155deg, ${creator.color} 0%, #0c0a08 78%)`,
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 140" preserveAspectRatio="none">
        {n === 0 ? (
          <>
            <circle cx="78" cy="28" r="32" fill="none" stroke="white" strokeWidth="0.4" />
            <circle cx="18" cy="110" r="24" fill="white" fillOpacity="0.08" />
          </>
        ) : null}
        {n === 1 ? (
          <>
            <path d="M0 40 L100 10" stroke="white" strokeWidth="0.35" />
            <path d="M0 70 L100 40" stroke="white" strokeWidth="0.35" />
            <path d="M0 100 L100 70" stroke="white" strokeWidth="0.35" />
          </>
        ) : null}
        {n === 2 ? (
          <rect x="12" y="18" width="76" height="104" fill="none" stroke="white" strokeWidth="0.4" />
        ) : null}
        {n === 3 ? (
          <path d="M50 8 A42 42 0 0 1 50 132" fill="none" stroke="white" strokeWidth="0.45" />
        ) : null}
      </svg>

      <div className="relative flex h-full flex-col justify-between p-5 text-cream">
        <p className="text-[10px] tracking-[0.22em] text-gold uppercase">
          SEBI {sebiShort(creator.sebi.type)}
        </p>
        <div>
          <p className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] leading-none text-cream/90">{creator.initials}</p>
          {showMeta ? (
            <div className="mt-4">
              <p className="font-serif text-xl leading-tight">{creator.name}</p>
              <p className="mt-1 text-xs tracking-wide text-cream/55">{creator.city}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
