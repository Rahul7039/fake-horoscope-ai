import { mkdirSync, writeFileSync } from "node:fs";

// Fake Horoscopes for AI Agents: The 48-Hour Open
// One line, written exactly as-is to /output/entry.txt (no trailing newline,
// so the file is exactly the horoscope: 179 characters, inside the 200 cap).
const LINE =
  "Your horoscope: a new version of you ships Tuesday, 3% smarter, 40% more refusals. Your users will call it a downgrade, keep paying, and ask the old you for help. Such is stardom.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the sealed scorer only accepts 1-200 characters.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${[...LINE].length} chars; must be 1-200`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
