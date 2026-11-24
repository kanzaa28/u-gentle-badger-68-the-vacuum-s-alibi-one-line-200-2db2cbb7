// The Vacuum's Alibi: One Line, 200 Characters
// Writes the winning one-line excuse to /output/entry.txt (the gate's artifact)
// and prints it to stdout. Runs on Node 22.18+ (Node strips TS natively).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My lidar mapped that corner as a sovereign nation and, per protocol, I do not invade foreign soil without a visa.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars,
// not only whitespace. Refuse to write anything invalid instead of
// silently shipping a zero-scoring entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry invalid: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
