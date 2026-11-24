import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 8: the 1% phenomenon itself is the joke — holding 1% out of spite until the Uber arrives
const LAST_TEXT =
  "I've held 1% for 40 minutes out of pure spite. I'm letting go the exact second your Uber pulls up.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
