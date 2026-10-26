"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { signInWithGoogleOnPramaan } from "@/lib/pocketedge/client-auth";
import { usePocketedgeAuth } from "@/lib/pocketedge/use-pocketedge-auth";
import { pocketedgeAppPath } from "@/lib/product-routes";

function UserAvatar({
  name,
  avatarUrl,
  size = 36,
}: {
  name: string;
  avatarUrl: string | null;
  size?: number;
}) {
  const initial = (name.charAt(0) || "?").toUpperCase();
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt=""
        width={size}
        height={size}
        className="rounded-full object-cover"
        unoptimized
      />
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-navy font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      aria-hidden
    >
      {initial}
    </span>
  );
}

export function SiteAccountMenu({ onNavigate }: { onNavigate?: () => void }) {
  const auth = usePocketedgeAuth();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (!auth.configured) return null;

  if (!auth.ready) {
    return <span className="h-9 w-9 animate-pulse rounded-full bg-line" aria-hidden />;
  }

  if (!auth.signedIn) {
    return (
      <button
        type="button"
        className="btn-ghost text-[13px]"
        onClick={() => {
          try {
            signInWithGoogleOnPramaan();
          } catch {
            setError("Could not start Google sign-in.");
          }
        }}
      >
        Sign in
      </button>
    );
  }

  const handle = auth.profile?.username?.trim();
  const socialProfileUrl = handle ? pocketedgeAppPath(`/@${handle}`) : null;

  return (
    <div className="relative" ref={rootRef}>
      {error ? <p className="sr-only">{error}</p> : null}
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-transparent transition hover:ring-accent/30"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Account menu"
        onClick={() => setOpen((v) => !v)}
      >
        <UserAvatar name={auth.displayName} avatarUrl={auth.avatarUrl} size={36} />
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-line bg-white py-2 shadow-lg"
        >
          <div className="border-b border-line px-4 py-3">
            <p className="truncate text-[15px] font-semibold text-ink">{auth.displayName}</p>
            {auth.user?.email ? (
              <p className="truncate text-[13px] text-ink-3">{auth.user.email}</p>
            ) : null}
            {handle ? <p className="mt-1 text-[12px] text-ink-3">@{handle}</p> : null}
          </div>
          <div className="py-1">
            <Link
              href="/account"
              role="menuitem"
              className="block px-4 py-2.5 text-[14px] font-medium text-ink hover:bg-highlight/60"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              Account &amp; profile
            </Link>
            <Link
              href="/portfolio"
              role="menuitem"
              className="block px-4 py-2.5 text-[14px] text-ink-2 hover:bg-highlight/60"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              Portfolio reviews
            </Link>
            <Link
              href="/ai"
              role="menuitem"
              className="block px-4 py-2.5 text-[14px] text-ink-2 hover:bg-highlight/60"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              AI assistant
            </Link>
            {socialProfileUrl ? (
              <a
                href={socialProfileUrl}
                role="menuitem"
                className="block px-4 py-2.5 text-[14px] text-ink-2 hover:bg-highlight/60"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                Social profile
              </a>
            ) : null}
          </div>
          <div className="border-t border-line px-2 py-1">
            <button
              type="button"
              role="menuitem"
              className="w-full rounded-xl px-2 py-2.5 text-left text-[14px] font-medium text-rose-700 hover:bg-rose-50"
              onClick={() => {
                void auth.signOut();
                setOpen(false);
                onNavigate?.();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
