import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 12: 100% phone-only betrayal — unplugged at 4% for a vape, dying at 1% watching it hit 100%
const LAST_TEXT =
  "You unplugged me at 4% to charge your vape. Now I'm dying at 1% while a mango-flavored USB-C stick hits 100%.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
