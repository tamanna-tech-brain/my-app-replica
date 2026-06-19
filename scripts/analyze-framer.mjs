import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

// Find all 224x224 speaker portrait images in order
const speakerImgs = [...html.matchAll(
  /framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.png\?width=224&amp;height=224/g
)].map((m) => `https://framerusercontent.com/images/${m[1]}.png?width=448&height=448`);

console.log("224x224 portraits:", speakerImgs.length);
speakerImgs.forEach((u, i) => console.log(i, u));

// Hero portrait images (vertical)
const portraits = [...html.matchAll(
  /framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.jpg\?width=2731&amp;height=4096/g
)].map((m) => `https://framerusercontent.com/images/${m[1]}.jpg?width=800&height=1000`);

console.log("\nPortrait jpg:", portraits);

// Gallery landscape images
const landscapes = [...html.matchAll(
  /framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.jpg\?width=4096&amp;height=27/g
)].map((m) => m[0].replace(/&amp;/g, "&"));

console.log("\nLandscape count:", landscapes.length);
console.log(landscapes.slice(0, 10));

// Sponsor logos (192 height)
const sponsors = [...html.matchAll(
  /framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.(png|svg)\?[^"']*height=192/g
)].map((m) => m[0].replace(/&amp;/g, "&"));

console.log("\nSponsor logos:", sponsors.length);
sponsors.forEach((s) => console.log(s));

// CSS tokens
const tokens = [...html.matchAll(/--token-[a-f0-9-]+:\s*[^;]+/g)].slice(0, 30);
console.log("\nTokens sample:");
tokens.forEach((t) => console.log(t[0]));
