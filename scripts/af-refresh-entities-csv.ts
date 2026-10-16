/**
 * Refresh social columns in `src/data/sebi-registered-entities.csv` from sebi-advisors.json.
 *
 *   npx tsx scripts/af-refresh-entities-csv.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  defaultSebiEntitiesCsvPath,
  formatCsvTable,
  parseCsvTable,
  refreshSebiEntitiesCsvFromAdvisors,
} from "../src/lib/af/sebi-entities-csv";

function main() {
  const csvPath = defaultSebiEntitiesCsvPath();
  const advisorsPath = join(process.cwd(), "src/data/sebi-advisors.json");
  const advisors = JSON.parse(readFileSync(advisorsPath, "utf8")) as {
    registration: string;
    twitter: string | null;
    substack: string | null;
  }[];

  const table = parseCsvTable(readFileSync(csvPath, "utf8"));
  const { table: next, twitterCellsUpdated, substackCellsUpdated } =
    refreshSebiEntitiesCsvFromAdvisors(table, advisors);

  writeFileSync(csvPath, formatCsvTable(next), "utf8");

  console.log(
    JSON.stringify(
      {
        csvPath,
        dataRows: next.length - 1,
        twitterCellsUpdated,
        substackCellsUpdated,
      },
      null,
      2,
    ),
  );
}

main();
