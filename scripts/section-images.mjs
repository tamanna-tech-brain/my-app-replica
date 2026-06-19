import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

function imgsIn(chunk) {
  return [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  );
}

// Split by ssr-variant classes
const variants = {
  desktop: html.split("hidden-oayej4").join("").split("hidden-1fdtjkp").join(""),
};

// Find speaker section
const speakerIdx = html.indexOf("Our Speakers");
const speakerChunk = html.slice(speakerIdx, speakerIdx + 15000);
console.log("Speaker section images:");
imgsIn(speakerChunk).forEach((u) => console.log(u));

// Hero area - first 200k after Global Digital
const heroIdx = html.indexOf("Global Digital");
const heroChunk = html.slice(heroIdx, heroIdx + 50000);
console.log("\nHero area unique images:");
const heroImgs = [...new Set(imgsIn(heroChunk))];
heroImgs.forEach((u) => console.log(u));

// Gallery
const galIdx = html.indexOf("An Inspiring Event");
const galChunk = html.slice(galIdx, galIdx + 20000);
console.log("\nGallery images:");
[...new Set(imgsIn(galChunk))].forEach((u) => console.log(u));

// Blog section on home if any
const blogIdx = html.indexOf("AI News");
console.log("Blog idx:", blogIdx);

// CTA section
const ctaIdx = html.indexOf("Architecting the Intelligent");
const ctaChunk = html.slice(ctaIdx, ctaIdx + 8000);
console.log("\nCTA images:");
[...new Set(imgsIn(ctaChunk))].forEach((u) => console.log(u));

// Portrait pngs for speakers (large)
const portraitPngs = [...html.matchAll(
  /src="(https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.png\?[^"]+)"/g
)].map((m) => m[1].replace(/&amp;/g, "&"));

const largePortraits = portraitPngs.filter((u) => u.includes("width=4096") || u.includes("width=3028"));
console.log("\nLarge portrait PNGs:");
[...new Set(largePortraits)].forEach((u) => console.log(u));
