import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 7: vulnerable dying phone at 1% with a sudden panic twist and mid-word flatline
const LAST_TEXT =
  "1%, screen's dimming, I'm scared. Hold me—no, not over the toilet, please, NOT OVER THE TOI—";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
