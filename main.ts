// One-star review of an everyday essential.
//
// The entry is a single deadpan line: a genuine complaint filed in
// earnest against sleep, a thing everyone relies on and nobody can fix.
// The program prints that line to stdout and also writes it (with no
// trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default
// /output/entry.txt), because the sealed scorer reads that file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. Sleep charges eight hours a night, every night, and the only refund it offers is a dream about being late for work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review);

console.log(review);
