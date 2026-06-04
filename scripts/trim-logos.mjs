import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC_FULL = "../PVP_Logo_with_Text-removebg-preview.png"; // transparent lockup
const SRC_MARK = "../PVP_Logo-removebg-preview.png"; // transparent pinwheel mark

await mkdir("public", { recursive: true });
await mkdir("app", { recursive: true });

// 1) Tight transparent lockup -> header
await sharp(SRC_FULL).trim({ threshold: 10 }).toFile("public/logo-full.png");

// 2) Tight TRANSPARENT pinwheel mark -> orbit centers + footer chip
await sharp(SRC_MARK).trim({ threshold: 10 }).toFile("public/logo.png");

// 3) Favicon (square, transparent) from the mark
await sharp(SRC_MARK)
  .trim({ threshold: 10 })
  .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("app/icon.png");

const a = await sharp("public/logo-full.png").metadata();
const b = await sharp("public/logo.png").metadata();
console.log(`logo-full: ${a.width}x${a.height}`);
console.log(`logo (mark): ${b.width}x${b.height}`);
console.log("done");
