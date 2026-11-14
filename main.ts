// food-picture-01 entry (Node 22, standard library only).
//
// The picture lives in this repository as entry.png. It is JPEG bytes under
// a .png name, which the gate allows: the format is told from the first
// bytes, not the name. The program's only job is to place those exact bytes
// at <output>/entry.png, so the judge sees the picture exactly as it was made.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR outside the grader;
// inside the grader's container, /output is the writable directory:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const picture = readFileSync(join(here, 'entry.png'));

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), picture);
