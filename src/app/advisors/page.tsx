import { redirect } from "next/navigation";

/** Advisor directory lives under Resources. */
export default function AdvisorsPage() {
  redirect("/resources#advisors");
}