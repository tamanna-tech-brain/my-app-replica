import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

const markers = [
  "data-framer-name=\"Video\"",
  "data-framer-name=\"Image Wrapper\"",
  "data-framer-name=\"Bottom Image\"",
  "data-framer-name=\"Pricing Image\"",
];

for (const m of markers) {
  let idx = 0;
  let count = 0;
  while (count < 3) {
    const i = html.indexOf(m, idx);
    if (i < 0) break;
    const c = html.slice(i, i + 5000);
    const imgs = [...new Set(
      [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((x) =>
        x[1].replace(/&amp;/g, "&")
      )
    )];
    if (imgs.length) {
      console.log(m, `#${count + 1}:`);
      imgs.forEach((u) => console.log(" ", u));
    }
    idx = i + 1;
    count++;
  }
}

// Sponsor logos unique
const sponsorSection = html.indexOf("data-framer-name=\"Brand Section\"");
if (sponsorSection < 0) {
  // find sponsor grid logos order
  const logos = [...html.matchAll(
    /src="(https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.png\?width=\d+&height=192)"/g
  )].map((m) => m[1].replace(/&amp;/g, "&"));
  const unique = [...new Set(logos)];
  console.log("\nUnique sponsor logos:", unique.length);
  unique.forEach((u) => console.log(u));
}
