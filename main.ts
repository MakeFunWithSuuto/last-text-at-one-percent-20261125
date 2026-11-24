import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 3: urgent dying-phone deathbed confession with a specific, relatable twist
const LAST_TEXT =
  '1%. Before I go: "liquid detected in charging port" was a lie. I just needed space.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
