import { redirect } from "next/navigation";

/** Tools live under Resources; keep this URL for old links. */
export default function ToolsIndexRedirect() {
  redirect("/resources#tools");
}
