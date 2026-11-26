import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Sorry I printed 40 copies of your one-page email — I got excited, jammed on the last one, and blamed the Wi-Fi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
