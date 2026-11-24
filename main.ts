import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Draft 11: phone's own physical sensation (dimming screen, Venmo loading) ending on the $38 calamari punchline
const LAST_TEXT =
  "My screen's dimming at 1%. Held on since appetizers just to die before Venmo loads—you didn't even touch the $38 calamari.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, `${LAST_TEXT}\n`, "utf8");
