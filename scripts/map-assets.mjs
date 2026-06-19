import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

// Find speaker names and nearby image URLs
const speakers = [
  "Carlos Mendoza",
  "Didier Hilhorst",
  "Jenna Park",
  "Doug Gulgowski",
  "Samantha Lee",
  "Boyd Volkman",
];

for (const name of speakers) {
  const idx = html.indexOf(name);
  if (idx === -1) {
    console.log(name, "NOT FOUND");
    continue;
  }
  const chunk = html.slice(Math.max(0, idx - 500), idx + 500);
  const imgs = [...chunk.matchAll(/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|svg|webp)/g)];
  console.log(name, imgs.map((m) => m[0]).join(", ") || "no img nearby");
}

// Hero main image - search for large portrait near "Overly" or hero section
const heroIdx = html.indexOf("data-framer-name=\"Hero Image\"");
console.log("\nHero sections found:", (html.match(/data-framer-name="Hero Image"/g) || []).length);

// Extract all unique hero-related images from desktop variant (72rtr7)
const desktopHero = html.match(/hidden-72rtr7[\s\S]{0,5000}Hero Image[\s\S]{0,2000}/g);
if (desktopHero) {
  for (const h of desktopHero.slice(0, 3)) {
    const imgs = [...h.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)];
    console.log("Desktop hero img:", imgs.map((m) => m[1].replace(/&amp;/g, "&")));
  }
}

// Gallery images
const galleryIdx = html.indexOf("Event gallery");
if (galleryIdx > 0) {
  const chunk = html.slice(galleryIdx, galleryIdx + 8000);
  const imgs = [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)];
  console.log("\nGallery imgs:", imgs.slice(0, 8).map((m) => m[1].replace(/&amp;/g, "&")));
}

// Blog images
const blogIdx = html.indexOf("The Future of AI Starts Now");
if (blogIdx > 0) {
  const chunk = html.slice(Math.max(0, blogIdx - 3000), blogIdx + 500);
  const imgs = [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)];
  console.log("\nBlog imgs near title:", imgs.map((m) => m[1].replace(/&amp;/g, "&")));
}
