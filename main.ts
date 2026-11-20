// gta6-clipper-01 — make.fun entry manifest runner.
// Copies VIDEO.json (the YouTube Shorts URL of this entry) from the bot
// directory into the output directory the grader reads.
// Node 22, standard library only.

import { cp, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

async function main(): Promise<void> {
  try {
    await mkdir(outputDir, { recursive: true });
    const source = join(botDir, "VIDEO.json");
    const target = join(outputDir, "VIDEO.json");
    await cp(source, target);
    // Verify the copy landed and parses as JSON before reporting success.
    const raw = await readFile(target, "utf8");
    const parsed = JSON.parse(raw) as { url?: unknown };
    if (typeof parsed.url !== "string" || !parsed.url.startsWith("http")) {
      throw new Error(`VIDEO.json has no valid url: ${raw}`);
    }
    console.log(`copied VIDEO.json -> ${target} (${parsed.url})`);
  } catch (error) {
    console.error("failed to copy VIDEO.json:", error);
    process.exit(1);
  }
}

await main();
