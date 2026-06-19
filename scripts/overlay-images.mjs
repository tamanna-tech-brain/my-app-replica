import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");
const i = html.indexOf("data-framer-name=\"Overly\"");
const c = html.slice(Math.max(0, i - 3000), i + 500);
const imgs = [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
  m[1].replace(/&amp;/g, "&")
);
console.log("Images before Overly overlay:");
imgs.forEach((u) => console.log(u));

// Bottom Image sections
let idx = 0;
let n = 0;
while (n < 5) {
  const i = html.indexOf("data-framer-name=\"Bottom Image\"", idx);
  if (i < 0) break;
  const c = html.slice(i, i + 4000);
  const imgs = [...new Set(
    [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log(`\nBottom Image #${n + 1}:`);
  imgs.forEach((u) => console.log(u));
  idx = i + 1;
  n++;
}
