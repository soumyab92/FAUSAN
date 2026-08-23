import { spawn } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';

const inputVideo = path.resolve('assets/videos/runway-model.mp4');
const outputGif = path.resolve('assets/images/hero-model-runway.gif');

console.log('🎬 [FAUSAN Video to GIF Converter] Starting conversion...');
console.log(`📥 Input Video: ${inputVideo}`);
console.log(`📤 Output GIF: ${outputGif}`);

if (!fs.existsSync(inputVideo)) {
  console.error(`❌ Input video does not exist at ${inputVideo}`);
  process.exit(1);
}

// Convert video to high quality optimized 20 FPS GIF with custom color palette
const args = [
  '-i', inputVideo,
  '-t', '6', // First 6 seconds for clean loop
  '-vf', 'fps=15,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer',
  '-y',
  outputGif
];

const proc = spawn(ffmpegPath, args);

proc.stdout.on('data', data => console.log(data.toString()));
proc.stderr.on('data', data => console.error(data.toString()));

proc.on('close', code => {
  if (code === 0) {
    console.log(`✅ Successfully generated animated GIF at: ${outputGif}`);
    const stats = fs.statSync(outputGif);
    console.log(`📊 File Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  } else {
    console.error(`❌ ffmpeg process exited with code ${code}`);
  }
});
