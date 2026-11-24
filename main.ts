import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 13 (Final): raw, urgent 1% dying-phone parting shot — unplugged for a vape before a 6am flight
const LAST_TEXT =
  "1%. you unplugged me for your vape—hope it wakes you up for your 6am flight";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
