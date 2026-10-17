"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signInWithGoogleOnPramaan } from "@/lib/pocketedge/client-auth";
import { usePocketedgeAuth } from "@/lib/pocketedge/use-pocketedge-auth";
import { pocketedgeAppPath } from "@/lib/product-routes";

export default function AccountPage() {
  const auth = usePocketedgeAuth();
  const router = useRouter();

  if (!auth.configured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center text-ink-2">
        Account sign-in is not configured on this deployment.
      </div>
    );
  }

  if (!auth.ready) {
    return <p className="py-16 text-center text-ink-2">Loading…</p>;
  }

  if (!auth.signedIn) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-section text-ink">Your account</h1>
        <p className="mt-3 text-[15px] leading-6 text-ink-2">
          Sign in with Google to use AI, portfolio reviews, and your Pocketedge profile on www.
        </p>
        <button
          type="button"
          className="btn-primary mt-8"
          onClick={() => signInWithGoogleOnPramaan().catch(() => undefined)}
        >
          Continue with Google
        </button>
        <p className="mt-6 text-[13px] text-ink-3">
          Same account as{" "}
          <a href={pocketedgeAppPath("/feed")} className="text-accent hover:underline">the main app</a>.
        </p>
      </div>
    );
  }

  const handle = auth.profile?.username?.trim();

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-section text-ink">Your account</h1>
      <div className="mt-8 flex items-start gap-4 rounded-2xl border border-line bg-white p-6">
        {auth.avatarUrl ? (
          <Image
            src={auth.avatarUrl}
            alt=""
            width={64}
            height={64}
            className="rounded-full object-cover"
            unoptimized
          />
        ) : (
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-semibold text-white"
            aria-hidden
          >
            {auth.displayName.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[18px] font-semibold text-ink">{auth.displayName}</p>
          {auth.user?.email ? <p className="mt-1 text-[14px] text-ink-2">{auth.user.email}</p> : null}
          {handle ? <p className="mt-1 text-[13px] text-ink-3">@{handle}</p> : null}
        </div>
      </div>

      <dl className="mt-6 space-y-4 rounded-2xl border border-line bg-highlight/20 px-5 py-4 text-[14px]">
        <div>
          <dt className="text-ink-3">User ID</dt>
          <dd className="mt-0.5 break-all font-mono text-[12px] text-ink-2">{auth.user?.id}</dd>
        </div>
        {auth.profile?.bio ? (
          <div>
            <dt className="text-ink-3">Bio</dt>
            <dd className="mt-0.5 text-ink">{auth.profile.bio}</dd>
          </div>
        ) : null}
        {auth.profile?.created_at ? (
          <div>
            <dt className="text-ink-3">Member since</dt>
            <dd className="mt-0.5 text-ink">
              {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(
                new Date(auth.profile.created_at),
              )}
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/ai" className="btn-primary text-center">Open AI assistant</Link>
        <Link href="/portfolio" className="btn-secondary text-center">Portfolio reviews</Link>
      </div>
      {handle ? (
        <a href={pocketedgeAppPath(`/@${handle}`)} className="btn-ghost mt-3 w-full sm:w-auto">
          View social profile →
        </a>
      ) : null}

      <button
        type="button"
        className="mt-10 w-full rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] font-medium text-rose-800 hover:bg-rose-100"
        onClick={() => {
          void auth.signOut().then(() => router.push("/"));
        }}
      >
        Sign out
      </button>
    </div>
  );
}
