import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

// Extract mobile-only hero images (hidden on desktop 72rtr7 and tablet oayej4)
const parts = html.split("ssr-variant");
for (const p of parts) {
  if (p.includes("hidden-72rtr7") && p.includes("hidden-oayej4") && p.includes("Hero")) {
    const imgs = [...new Set(
      [...p.slice(0, 20000).matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
        m[1].replace(/&amp;/g, "&")
      )
    )];
    if (imgs.length) {
      console.log("Mobile hero variant imgs:");
      imgs.forEach((u) => console.log(u));
    }
  }
}

// Desktop only (hidden-1fdtjkp hidden-oayej4) - typically desktop
for (const p of parts) {
  if (p.includes("hidden-1fdtjkp") && p.includes("hidden-oayej4") && p.includes("Hero Image")) {
    const imgs = [...new Set(
      [...p.slice(0, 8000).matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
        m[1].replace(/&amp;/g, "&")
      )
    )];
    if (imgs.length) {
      console.log("\nDesktop hero image variant:");
      imgs.forEach((u) => console.log(u));
    }
  }
}

// Preview stack - search for UyTFKLi or portrait jpg in first 100k
const hero = html.slice(html.indexOf("Hero Section"), html.indexOf("About Section"));
const portraitJpg = [...hero.matchAll(/framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.jpg/g)].map((m) => m[0]);
console.log("\nAll jpg in hero section:", [...new Set(portraitJpg)]);

const portraitPng = [...hero.matchAll(/framerusercontent\.com\/images\/([a-zA-Z0-9_-]+)\.png/g)].map((m) => m[0]);
console.log("\nAll png in hero section:", [...new Set(portraitPng)].slice(0, 15));
