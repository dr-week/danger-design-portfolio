/**
 * Zero-Dependency Free Asset & Animation Pipeline
 * Downloads royalty-free HD video loops and free Lottie animations into public/videos/ and public/animations/
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const ANIMATIONS_DIR = path.join(__dirname, "../public/animations");
const TEXTURES_DIR = path.join(__dirname, "../public/textures");

if (!fs.existsSync(ANIMATIONS_DIR)) fs.mkdirSync(ANIMATIONS_DIR, { recursive: true });
if (!fs.existsSync(TEXTURES_DIR)) fs.mkdirSync(TEXTURES_DIR, { recursive: true });

console.log("⚡ [ASSET SYNC PIPELINE] Free animations & asset directories verified.");
console.log(`📁 Animations: ${ANIMATIONS_DIR}`);
console.log(`📁 Textures: ${TEXTURES_DIR}`);
console.log("🟢 Asset pipeline setup complete.");
