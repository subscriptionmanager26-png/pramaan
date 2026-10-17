"use client";

import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";

import { hydratePocketedgeSessionFromCookie } from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

export type SocialProfileRow = {
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string | null;
};

export function displayNameFromUser(user: User | null, profile: SocialProfileRow | null) {
  if (profile?.display_name?.trim()) return profile.display_name.trim();
  if (profile?.username?.trim()) return profile.username.trim();
  const meta = user?.user_metadata as Record<string, unknown> | undefined;
  const full = typeof meta?.full_name === "string" ? meta.full_name : typeof meta?.name === "string" ? meta.name : "";
  if (full.trim()) return full.trim();
  if (user?.email) return user.email.split("@")[0] ?? "Account";
  return "Account";
}

export function avatarUrlFromUser(user: User | null, profile: SocialProfileRow | null) {
  if (profile?.avatar_url) return profile.avatar_url;
  const meta = user?.user_metadata as Record<string, unknown> | undefined;
  if (typeof meta?.avatar_url === "string") return meta.avatar_url;
  if (typeof meta?.picture === "string") return meta.picture;
  return null;
}

export function usePocketedgeAuth() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<SocialProfileRow | null>(null);

  const loadProfile = useCallback(async (uid: string) => {
    try {
      const supabase = getPocketedgeSupabase();
      const { data } = await supabase
        .from("social_profiles")
        .select("username, display_name, avatar_url, bio, created_at")
        .eq("user_id", uid)
        .maybeSingle();
      setProfile(data as SocialProfileRow | null);
    } catch {
      setProfile(null);
    }
  }, []);

  const refresh = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setUser(null);
      setProfile(null);
      setReady(true);
      return;
    }
    await hydratePocketedgeSessionFromCookie();
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getUser();
    const u = data.user ?? null;
    setUser(u);
    if (u) await loadProfile(u.id);
    else setProfile(null);
    setReady(true);
  }, [loadProfile]);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    void refresh();
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      void refresh();
    });
    return () => sub.subscription.unsubscribe();
  }, [refresh]);

  const signOut = useCallback(async () => {
    const supabase = getPocketedgeSupabase();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }, []);

  return {
    ready,
    configured: pocketedgeAuthConfigured(),
    signedIn: Boolean(user),
    user,
    profile,
    displayName: displayNameFromUser(user, profile),
    avatarUrl: avatarUrlFromUser(user, profile),
    refresh,
    signOut,
  };
}
