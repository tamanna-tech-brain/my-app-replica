import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");
const logos = [...new Set(
  [...html.matchAll(
    /src="(https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(png|svg)\?width=\d+&height=192)"/g
  )].map((m) => m[1].replace(/&amp;/g, "&"))
)];
console.log(logos.length);
logos.forEach((u) => console.log(u));

// svg sponsor logos
const svgLogos = [...new Set(
  [...html.matchAll(
    /src="(https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.svg\?width=\d+&height=\d+)"/g
  )].map((m) => m[1].replace(/&amp;/g, "&"))
)].filter((u) => u.includes("height=316") || u.includes("height=258") || u.includes("height=193"));
console.log("\nSVG logos:", svgLogos);
