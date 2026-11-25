import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Monday morning is just Sunday night's hangover wearing a lanyard and asking for a quick sync.";
const expected = `${line}\n`;
const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);

const characterCount = Array.from(line).length;
if (characterCount < 1 || characterCount > 200 || /[\r\n]/.test(line)) {
  throw new Error("Entry must be a single line of 1 to 200 characters");
}

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, expected, "utf8");
if (!readFileSync(outputFile).equals(Buffer.from(expected, "utf8"))) {
  throw new Error("Written entry does not match expected bytes");
}
