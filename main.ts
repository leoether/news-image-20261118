// news-image-20261118 — "The World in One Day: Wednesday, 18 November 2026"
// A Node 22, standard-library-only program that copies the entry image this
// repository ships to /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png).
// No network, no randomness, no clock: two runs write byte-identical files.
//
// The six stories (each verified against reporting published 18 Nov 2026):
//   1. Trump lands in Manila for Quad talks ahead of his China visit;
//      PM Modi is also in Manila for the East Asia Summit.
//   2. Ukraine strikes the Kerch Bridge to Crimea for a second straight
//      day; Russian missiles pound Kyiv's bridges over the Dnipro.
//   3. Iran hits a US military radar system in Bahrain with drones;
//      the US strikes back at an IRGC missile site on Qeshm island.
//   4. Israel's president asks ex-army chief Gadi Eisenkot to form the
//      next government, bypassing PM Benjamin Netanyahu.
//   5. Britain sanctions Israeli settlement firms over West Bank expansion.
//   6. MS Dhoni retires from the IPL after 19 seasons and five titles
//      with Chennai Super Kings, becoming the team's mentor.
// Footer: Cyclone Akvan strengthens off India; Canada and China extend
// trade deals; Google flags the first autonomous AI cyberattack; Amazon
// plans a $7bn renewables investment in India.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');

// The image this repository ships is a complete PNG: check its signature
// before copying so a damaged file fails loudly instead of silently.
const bytes = readFileSync(src);
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_SIG)) throw new Error('entry.png is not a PNG file');
// The competition caps the entry at 1 MiB; refuse to emit an oversize file.
if (bytes.length > 1048576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
