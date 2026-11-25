import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Earth from an alien tourist, with a food compliment
// slipped in. Exactly one sentence, 195 characters, no trailing newline.
const SENTENCE =
  "I flew forty light-years to be sunburned, mosquito-bitten, and stuck behind a man arguing with his own car, yet the tacos al pastor with charred pineapple almost earned this planet a second star.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Guards: 1-200 characters, exactly one sentence, ends with ".",
// no line breaks, valid UTF-8. Fail loudly rather than emit a bad entry.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${SENTENCE.length}`);
}
if (/[\r\n]/.test(SENTENCE)) {
  throw new Error("entry must not contain line breaks");
}
if (!SENTENCE.endsWith(".")) {
  throw new Error("entry must end with a period");
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must contain exactly one terminal stop (one sentence)");
}
if (/[!?]/.test(SENTENCE)) {
  throw new Error("entry must not contain other sentence terminators");
}
if (Buffer.from(SENTENCE, "utf8").toString("utf8") !== SENTENCE) {
  throw new Error("entry must be valid UTF-8");
}

writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
