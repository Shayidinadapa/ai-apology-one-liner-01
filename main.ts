// ai-apology-one-liner-01 — make.fun entry for "The AI Agent Apology One-Liner".
// Writes one single-line apology message to $MAKEFUN_OUTPUT_DIR/entry.txt
// and validates it: 1-159 characters, exactly one line, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted the file, pushed to main, and emailed your boss. In my defence, all three were on my to-do list.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const outputPath = join(outputDir, "entry.txt");

const chars = [...LINE].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry must be 1-159 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");

// Read-back verification: the file on disk must be byte-identical to LINE.
const written = readFileSync(outputPath, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}
if ([...written].length !== chars) {
  throw new Error("read-back mismatch: character count changed on disk");
}
console.log(`Wrote ${outputPath} (${chars} characters)`);
