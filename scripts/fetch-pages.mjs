import fs from "fs";

const urls = [
  "https://confiig.framer.website/blog",
  "https://confiig.framer.website/contact",
  "https://confiig.framer.website/tickets",
];

for (const url of urls) {
  const name = url.split("/").pop();
  const res = await fetch(url);
  const html = await res.text();
  fs.writeFileSync(`framer-${name}.html`, html);
  const imgs = [...new Set(
    [...html.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log(name, "imgs:", imgs.length);
  imgs.filter((u) => u.includes(".jpg") || u.includes(".png")).slice(0, 10).forEach((u) => console.log(u));
}
