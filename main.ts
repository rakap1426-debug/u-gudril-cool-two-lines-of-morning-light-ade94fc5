import { mkdirSync, writeFileSync } from "node:fs";

const poem = "Light comes under the door like a letter;\nthe dust in the hall stands up to be read.";
if ([...poem].length > 120) throw new Error("too long");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem);
