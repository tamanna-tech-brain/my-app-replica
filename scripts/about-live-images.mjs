import fs from "fs";

const html = fs.readFileSync("framer-about-live.html", "utf8");
const imgs = [...new Set(
  [...html.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];
console.log("Total imgs:", imgs.length);
imgs.filter((u) => u.match(/\.(jpg|png)/)).forEach((u) => console.log(u));
