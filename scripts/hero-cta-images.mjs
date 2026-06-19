import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

// Find hero main portrait - search for 6eViTgGs or portrait in Hero Frame
const heroFrame = html.indexOf("data-framer-name=\"Hero Frame\"");
if (heroFrame > 0) {
  const c = html.slice(heroFrame, heroFrame + 15000);
  const imgs = [...new Set(
    [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log("Hero Frame images:");
  imgs.forEach((u) => console.log(u));
}

// Preview/stack images - Top Image
const topImg = html.indexOf("data-framer-name=\"Top Image\"");
if (topImg > 0) {
  const c = html.slice(topImg, topImg + 8000);
  const imgs = [...new Set(
    [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log("\nTop Image (preview stack):");
  imgs.forEach((u) => console.log(u));
}

// CTA - Brand Section
const brand = html.indexOf("data-framer-name=\"Brand Section\"");
if (brand > 0) {
  const c = html.slice(brand, brand + 10000);
  const imgs = [...new Set(
    [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log("\nBrand/CTA images:");
  imgs.forEach((u) => console.log(u));
}
