import fs from "fs";

const html = fs.readFileSync("framer-home.html", "utf8");

const names = [...html.matchAll(/data-framer-name="([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(names)].sort();
console.log(unique.join("\n"));
