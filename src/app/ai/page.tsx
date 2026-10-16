import { redirect } from "next/navigation";

/** Agent lives on Pocketedge (same login) — avoid cross-site session issues. */
export default function AIPage() {
  redirect("https://www.pocketedge.in/ai");
}
