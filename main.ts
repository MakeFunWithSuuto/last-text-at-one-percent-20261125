import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 9: dying phone at 1% timing its death as a heroic wingman sacrifice — reversal on "You're welcome."
const LAST_TEXT =
  "1% left. Held on all dinner just to die the exact second you offered to Venmo everyone. You're welcome.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
