/**
 * Merge primary X (and Substack URL) from `src/data/sebi-registered-entities.csv`
 * into `src/data/sebi-advisors.json` by SEBI registration number.
 *
 *   npx tsx scripts/af-merge-social-from-csv.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  loadSebiEntitiesCsv,
  primaryTwitterUrlFromParts,
} from "../src/lib/af/sebi-entities-csv";
import { canonicalSubstackUrl } from "../src/lib/af/urls";

type AdvisorRow = {
  registration: string;
  twitter: string | null;
  substack: string | null;
};

function main() {
  const advisorsPath = join(process.cwd(), "src/data/sebi-advisors.json");
  const advisors = JSON.parse(readFileSync(advisorsPath, "utf8")) as AdvisorRow[];

  const byReg = new Map<string, ReturnType<typeof loadSebiEntitiesCsv>[number]>();
  for (const row of loadSebiEntitiesCsv()) {
    if (!row.registration) continue;
    byReg.set(row.registration.toUpperCase(), row);
  }

  let twitterUpdated = 0;
  let substackUpdated = 0;

  for (const advisor of advisors) {
    const reg = advisor.registration?.trim();
    if (!reg) continue;
    const csv = byReg.get(reg.toUpperCase());
    if (!csv) continue;

    const twitter = primaryTwitterUrlFromParts(csv.twitterUrl, csv.twitterHandle);
    if (twitter && advisor.twitter !== twitter) {
      advisor.twitter = twitter;
      twitterUpdated += 1;
    }

    const substackRaw = csv.substackUrl?.trim();
    if (substackRaw) {
      try {
        const substack = canonicalSubstackUrl(substackRaw);
        if (substack.toLowerCase().includes("substack.com") && advisor.substack !== substack) {
          advisor.substack = substack;
          substackUpdated += 1;
        }
      } catch {
        // skip invalid
      }
    }
  }

  writeFileSync(advisorsPath, `${JSON.stringify(advisors)}\n`, "utf8");

  console.log(
    JSON.stringify(
      {
        advisors: advisors.length,
        csvRegistrations: byReg.size,
        twitterUpdated,
        substackUpdated,
        advisorsWithTwitter: advisors.filter((a) => a.twitter).length,
        advisorsWithSubstack: advisors.filter((a) => a.substack).length,
      },
      null,
      2,
    ),
  );
}

main();
