import fs from "fs";

const files = ["framer-home.html", "framer-about.html", "framer-agenda.html"];
const posts = [
  "The Future of AI Starts Now",
  "From Vision to Bold Creative Solutions",
  "Building Human Centered AI",
  "The Age of Autonomous Tech",
];

for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  for (const t of posts) {
    const i = html.indexOf(t);
    if (i >= 0) {
      const c = html.slice(Math.max(0, i - 3000), i + 200);
      const imgs = [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
        m[1].replace(/&amp;/g, "&")
      );
      console.log(f, t, imgs[imgs.length - 1] || "none");
    }
  }
}

// About page hero image
const about = fs.readFileSync("framer-about.html", "utf8");
const aboutIdx = about.indexOf("Redefining");
if (aboutIdx > 0) {
  const c = about.slice(aboutIdx, aboutIdx + 30000);
  const imgs = [...new Set(
    [...c.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)].map((m) =>
      m[1].replace(/&amp;/g, "&")
    )
  )];
  console.log("\nAbout page images near hero:");
  imgs.slice(0, 15).forEach((u) => console.log(u));
}
