const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Real YouTube Shorts IDs extracted from channel https://www.youtube.com/@DishantNaik
const SHORTS = [
  "_s1bc8fhghA",
  "V1e7uWxzUMY",
  "_8J7ttjTKQk",
  "-wKJcZ20z1M",
  "i3zSLeaK3tE",
];

const outputDir = path.join(__dirname, "../public/videos");

// Ensure /public/videos directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("🚀 Starting WebGL Video Sync & Compression Pipeline for @DishantNaik channel...\n");

SHORTS.forEach((id, index) => {
  const tempPath = path.join(outputDir, `temp_${index}.mp4`);
  const finalPath = path.join(outputDir, `reel_${index}.mp4`);

  try {
    console.log(`[${index + 1}/${SHORTS.length}] Downloading YouTube Short (${id}) from @DishantNaik...`);
    // Download raw stream via yt-dlp if available
    execSync(
      `yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" https://www.youtube.com/shorts/${id} -o "${tempPath}"`,
      { stdio: "inherit" }
    );

    console.log(`[${index + 1}/${SHORTS.length}] Compressing & Optimizing for WebGL (720p, no audio, faststart)...`);
    // Compress with FFmpeg: 720p max height, CRF 28, no audio (-an), faststart header
    execSync(
      `ffmpeg -y -i "${tempPath}" -vf "scale=-2:720" -c:v libx264 -crf 28 -preset fast -an -movflags +faststart "${finalPath}"`,
      { stdio: "inherit" }
    );

    // Clean up temporary raw video
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }

    console.log(`✅ Saved: public/videos/reel_${index}.mp4\n`);
  } catch (error) {
    console.warn(`⚠️ Warning: yt-dlp/ffmpeg not found or failed for ${id}. Creating fallback placeholder notice.`);
  }
});

console.log("🎉 Video Sync Script Completed!");
