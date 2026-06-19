import fs from "fs";

const html = fs.readFileSync("framer-about.html", "utf8");
const idx = html.indexOf("Redefining");
const chunk = html.slice(idx, idx + 50000);
const imgs = [...new Set(
  [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];
console.log("About hero area images:");
imgs.forEach((u) => console.log(u));

// Pre-register section
const preIdx = html.indexOf("Pre-Register");
if (preIdx > 0) {
  const c = html.slice(preIdx, preIdx + 5000);
  console.log("\nPre-register found");
}
