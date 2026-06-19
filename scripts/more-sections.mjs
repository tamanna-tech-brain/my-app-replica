import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

const start = html.indexOf("data-framer-name=\"Speakrs Section\"");
const end = html.indexOf("data-framer-name=\"Gallary Section\"");
const chunk = html.slice(start, end);

const imgs = [...new Set(
  [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];

console.log("Speaker section images:", imgs.length);
imgs.forEach((u) => console.log(u));

// Hero bottom - stacked preview images
const heroStart = html.indexOf("data-framer-name=\"Hero Bottom\"");
const heroEnd = html.indexOf("data-framer-name=\"About Section\"");
const heroChunk = html.slice(heroStart, heroEnd);
const heroImgs = [...new Set(
  [...heroChunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];
console.log("\nHero Bottom images:", heroImgs.length);
heroImgs.forEach((u) => console.log(u));

// Main hero portrait
const heroTopStart = html.indexOf("data-framer-name=\"Hero Top\"");
const heroTopChunk = html.slice(heroTopStart, heroStart);
const topImgs = [...new Set(
  [...heroTopChunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];
console.log("\nHero Top images:", topImgs.length);
topImgs.forEach((u) => console.log(u));

// Blog images from framer-about or search all jpg for blog
const blogPosts = [
  "The Future of AI Starts Now",
  "From Vision to Bold",
  "Building Human",
  "The Age of Autonomous",
];
for (const t of blogPosts) {
  const i = html.indexOf(t);
  console.log(t, i >= 0 ? "found" : "not in home");
}

// Check framer-about for blog images
const aboutHtml = fs.readFileSync("framer-about.html", "utf8");
for (const t of blogPosts) {
  const i = aboutHtml.indexOf(t);
  if (i >= 0) {
    const c = aboutHtml.slice(Math.max(0, i - 2000), i + 500);
    const bi = [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    );
    console.log(t, bi[bi.length - 1] || "no img");
  }
}
