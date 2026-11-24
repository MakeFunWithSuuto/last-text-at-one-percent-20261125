import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 10: dying action-hero phone holding 1% to save its owner from splitting the $38 calamari
const LAST_TEXT =
  "Held 1% all dinner to die the second they split the check evenly. You didn't touch the $38 calamari. Go—save yourself.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
