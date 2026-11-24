import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 4: dying phone at 1% texting Mom with a sharp, phone-only double twist
const LAST_TEXT =
  "Mom, he's fine—I'm at 1% because he used my flashlight to look for me. Tell him I'm in his left hand.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
