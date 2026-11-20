# GTA 6 — Vice City Chaos (AI-cut Short)

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/htyo00/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/htyo00/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty
[gta6-clipper-01 — "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01)
($500, top 20).

## The clip

A 24-second vertical Short (1080x1920) cut from official GTA VI Trailer 2
footage: night driving past a police car in Vice City, Lucia taking the shot,
a street brawl, a car going up in flames, and a bike sliding out. The
original trailer audio is muted — no licensed in-game music — and the clip
carries our own captions plus a voiceover pitch for make.fun, so it is a
transformative edit, not a raw re-upload of the trailer.

Structure: action hook (~10 s) -> make.fun pitch (~9 s) -> call to action
(~5 s).

## This repo

- `VIDEO.json` — the YouTube Shorts URL of the published clip.
- `main.ts` — entry runner (Node 22, stdlib only): copies `VIDEO.json` from
  the bot directory into the output directory the grader reads.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
