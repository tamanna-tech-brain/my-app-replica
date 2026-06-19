import fs from "fs";

const html = fs.readFileSync("framer-blog.html", "utf8");

const posts = [
  "The Future of AI Starts Now",
  "From Vision to Bold Creative Solutions",
  "Building Human Centered AI",
  "The Age of Autonomous Tech",
];

for (const t of posts) {
  const i = html.indexOf(t);
  if (i < 0) {
    console.log(t, "NOT FOUND");
    continue;
  }
  const c = html.slice(Math.max(0, i - 4000), i + 500);
  const imgs = [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  );
  console.log(t, "\n ", imgs[imgs.length - 1] || "none");
}

// all unique blog card images
const cardImgs = [...new Set(
  [...html.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+\.(jpg|png)[^"]*)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&")
  )
)];
console.log("\nAll blog jpg/png:", cardImgs);
