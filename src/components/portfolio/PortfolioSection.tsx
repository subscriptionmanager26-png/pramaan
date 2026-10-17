"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { AgentBlocks } from "@/components/agent/AgentBlocks";
import type { AgentMessage } from "@/lib/agent/types";
import { portfolioReviewsFromMessages } from "@/lib/portfolio/reviews";
import {
  hydratePocketedgeSessionFromCookie,
  openPocketedgeLogin,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";
import { pocketedgeAiUrl, pocketedgePortfolioTrackingUrl } from "@/lib/product-routes";

const AI_HREF = pocketedgeAiUrl();
const HOLDINGS_HREF = pocketedgePortfolioTrackingUrl();

function formatWhen(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function PortfolioSection() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [reviews, setReviews] = useState<AgentMessage[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadReviews = useCallback(async () => {
    setLoadError(null);
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setReviews([]);
      return;
    }
    const res = await fetch("/api/agent/messages?limit=50", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setLoadError((body as { error?: string }).error || `Could not load reviews (${res.status})`);
      setReviews([]);
      return;
    }
    const body = (await res.json()) as { messages?: AgentMessage[] };
    setReviews(portfolioReviewsFromMessages(body.messages ?? []));
  }, []);

  const refreshAuth = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    await hydratePocketedgeSessionFromCookie();
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getSession();
    const ok = Boolean(data.session?.user);
    setSignedIn(ok);
    setReady(true);
    if (ok) await loadReviews();
    else setReviews([]);
  }, [loadReviews]);

  useEffect(() => {
    void refreshAuth();
    if (!pocketedgeAuthConfigured()) return;
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      void refreshAuth();
    });
    return () => sub.subscription.unsubscribe();
  }, [refreshAuth]);

  if (!ready) {
    return <p className="text-[15px] text-ink-2">Loading…</p>;
  }

  if (!pocketedgeAuthConfigured()) {
    return (
      <p className="rounded-xl border border-line bg-highlight/40 px-4 py-3 text-[15px] text-ink-2">
        Portfolio reviews are not configured on this deployment.
      </p>
    );
  }

  if (!signedIn) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-line bg-highlight/30 p-6 text-center">
        <p className="text-[15px] leading-6 text-ink-2">
          Sign in to see portfolio reviews your AI assistant has run for you. Start in chat — upload a statement or ask
          for a review; results appear here automatically.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button type="button" className="btn-primary" onClick={() => void signInWithGoogleOnPramaan()}>
            Continue with Google
          </button>
          <button type="button" className="btn-ghost" onClick={() => openPocketedgeLogin()}>
            Sign in on Pocketedge
          </button>
        </div>
        <Link href={AI_HREF} className="mt-4 inline-block text-[13px] font-semibold text-accent hover:underline">
          Open AI assistant →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 rounded-xl border border-line bg-highlight/30 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[14px] font-medium text-ink">Live portfolio tracking</p>
          <p className="mt-1 text-[13px] text-ink-2">
            Holdings, imports, and position-level updates live on the main app until this host fully replaces it.
          </p>
        </div>
        <a href={HOLDINGS_HREF} className="btn-ghost shrink-0 text-[13px]">
          Open holdings →
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3">
        <p className="text-[14px] text-ink-2">
          AI reviews (upload CAS, Excel, or ask in chat) are saved below for later.
        </p>
        <Link href={AI_HREF} className="btn-primary shrink-0 text-[13px]">
          Ask AI
        </Link>
      </div>

      {loadError ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] text-rose-800">{loadError}</p>
      ) : null}

      {!loadError && reviews.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-highlight/20 px-6 py-12 text-center">
          <p className="text-section text-ink">No portfolio reviews yet</p>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-6 text-ink-2">
            Open the assistant and say something like &ldquo;Review my portfolio&rdquo; or upload your broker statement.
            When the analysis finishes, it will show up here.
          </p>
          <Link href={AI_HREF} className="btn-primary mt-6 inline-flex">
            Start in AI chat
          </Link>
        </div>
      ) : null}

      {reviews.map((review) => (
        <article key={review.id} className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <header className="border-b border-line pb-4">
            <time className="text-[13px] text-ink-3" dateTime={review.completedAt ?? review.createdAt}>
              {formatWhen(review.completedAt ?? review.createdAt)}
            </time>
            {review.text ? (
              <p className="mt-2 text-[15px] font-medium text-ink line-clamp-2">&ldquo;{review.text}&rdquo;</p>
            ) : null}
          </header>
          <div className="mt-5">
            <AgentBlocks blocks={review.blocks} actions={review.actions} />
          </div>
        </article>
      ))}
    </div>
  );
}
