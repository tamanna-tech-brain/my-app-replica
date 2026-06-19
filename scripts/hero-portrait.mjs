import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");
const id = "6eViTgGsC4i8cmIlKaUHpDJIm1o";
const i = html.indexOf(id);
console.log("index:", i);
if (i > 0) {
  const c = html.slice(Math.max(0, i - 800), i + 400);
  // find nearest data-framer-name before
  const before = c.slice(0, c.indexOf(id));
  const names = [...before.matchAll(/data-framer-name="([^"]+)"/g)];
  console.log("nearest names:", names.slice(-3).map((m) => m[1]));
  console.log(c.slice(0, 200));
}

// background-image urls in hero section
const heroStart = html.indexOf("data-framer-name=\"Hero Section\"");
const heroEnd = html.indexOf("data-framer-name=\"About Section\"");
const hero = html.slice(heroStart, heroEnd);
const bgs = [...hero.matchAll(/url\((https:\/\/framerusercontent\.com\/images\/[^)]+)\)/g)].map((m) =>
  m[1].replace(/&amp;/g, "&")
);
console.log("\nbackground-image in hero:", [...new Set(bgs)]);

// search GhldPHgKP context
const id2 = "GhldPHgKP4dJ3cYyZxY1EeG1rBs";
const i2 = html.indexOf(id2);
const c2 = html.slice(Math.max(0, i2 - 600), i2 + 200);
const names2 = [...c2.matchAll(/data-framer-name="([^"]+)"/g)];
console.log("\nGhld nearest names:", names2.slice(-3).map((m) => m[1]));
