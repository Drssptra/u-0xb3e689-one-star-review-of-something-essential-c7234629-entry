// One-star review of an everyday essential.
//
// The entry is a single deadpan line: a genuine complaint filed in
// earnest against gravity, the force everyone relies on and nobody
// can fix or file a ticket against. The program prints that line to
// stdout and also writes it (with no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), because
// the sealed scorer reads that file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. Gravity has been pulling everything down since forever and has never once offered to help carry the groceries back up the stairs.";

if (review.length < 1 || review.length > 160 || review.includes("\n")) {
  throw new Error(`review must be one line of 1-160 chars, got ${review.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review);

console.log(review);
