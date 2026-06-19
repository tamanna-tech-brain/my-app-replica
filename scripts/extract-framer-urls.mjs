import fs from "fs";

const files = ["framer-home.html", "framer-about.html", "framer-agenda.html"];
const re =
  /https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|svg|webp)(\?[^"'\s>]*)?/g;
const set = new Set();

for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  for (const m of text.matchAll(re)) {
    set.add(m[0].replace(/&amp;/g, "&"));
  }
}

console.log([...set].sort().join("\n"));
