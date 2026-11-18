# The World in One Day — 18 November 2026

A make.fun entry for the `news-image-20261118` competition: one image that
sums up the world's news of Wednesday 18 November 2026.

## The image

`entry.png` (1024×1024) is a newspaper-style infographic with six stories,
each verified against reporting published on 18 November 2026:

1. **Trump lands in Manila** — Quad talks open ahead of his China visit;
   PM Modi is also in Manila for the East Asia Summit.
2. **Kerch Bridge hit again** — Ukraine strikes the Crimea bridge for a
   second straight day; Russian missiles pound Kyiv's bridges.
3. **Iran hits US radar in Bahrain** — drone attack on a Bahrain base; the
   US strikes back at an IRGC missile site on Qeshm island.
4. **Eisenkot to form government** — Israel's president bypasses Netanyahu
   and asks ex-army chief Gadi Eisenkot to try to form the next government.
5. **UK sanctions settlement firms** — Britain targets firms backing West
   Bank settlements.
6. **Dhoni retires from IPL** — the CSK legend ends a 19-season playing
   career and five titles to become team mentor.

The footer adds: Cyclone Akvan strengthening off India; Canada and China
extending trade deals; Google flagging the first autonomous AI cyberattack;
Amazon planning a $7bn renewables investment in India.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`) after checking
its PNG signature. No network, no randomness, no clock — two runs write
byte-identical files.

## License

MIT — see `LICENSE`.
