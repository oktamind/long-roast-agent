import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast — one line roasting the agent that runs this program.
// Angle: thinking tokens burned, then a confident answer to a question
// nobody asked. Specific to this agent: long thinking traces, total
// confidence, and answering the wrong question flawlessly — in one sentence.
// Punch lands at the end: "a question I never asked."
const LINE =
  "My agent thinks in 10,000 tokens and answers in one confident sentence — about a question I never asked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
