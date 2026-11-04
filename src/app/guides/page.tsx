import { redirect } from "next/navigation";

/** Guides live under Resources; keep this URL for old links. */
export default function GuidesIndexRedirect() {
  redirect("/resources#guides");
}
