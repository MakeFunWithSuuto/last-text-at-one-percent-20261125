import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 6: dying phone at 1% taking the owner's airport essentials to the grave
const LAST_TEXT =
  "1%. Going dark. Taking your boarding pass, your Uber, and your 2FA codes with me. Good luck at Gate B14.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
