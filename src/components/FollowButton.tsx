"use client";

import { useState } from "react";

export function FollowButton() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={
        on
          ? "rounded-lg border border-line bg-paper-2 px-4 py-2 text-[13px] font-medium text-ink-2"
          : "rounded-lg bg-accent px-4 py-2 text-[13px] font-medium text-white hover:opacity-90"
      }
      aria-pressed={on}
    >
      {on ? "Following" : "Follow"}
    </button>
  );
}
