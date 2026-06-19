import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

function sectionImages(name, len = 12000) {
  const idx = html.indexOf(`data-framer-name="${name}"`);
  if (idx < 0) {
    console.log(`\n=== ${name}: NOT FOUND ===`);
    return;
  }
  const chunk = html.slice(idx, idx + len);
  const imgs = [...new Set(
    [...chunk.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log(`\n=== ${name} (${imgs.length} images) ===`);
  imgs.forEach((u) => console.log(u));
}

sectionImages("Hero Section", 80000);
sectionImages("Speakrs Section", 25000);
sectionImages("Gallary Section", 20000);
sectionImages("Pricing Section", 15000);
sectionImages("Schedule Section", 15000);
sectionImages("FAQ Section", 10000);
sectionImages("Hero Image", 3000);
