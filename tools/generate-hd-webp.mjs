import { spawn } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';

const inputVideo = path.resolve('assets/videos/Full_body_front_facing_camera.mp4');
const outputWebp = path.resolve('assets/images/hero-model-runway.webp');

console.log('✨ [FAUSAN HD TrueColor Animated WebP Generator] Starting...');

// Generate 24-bit TrueColor High-Definition Animated WebP (1080p, 24fps, pristine quality)
const args = [
  '-i', inputVideo,
  '-t', '6',
  '-vf', 'fps=24,scale=1080:-1:flags=lanczos',
  '-vcodec', 'libwebp',
  '-lossless', '0',
  '-qscale', '85',
  '-preset', 'picture',
  '-loop', '0',
  '-an',
  '-vsync', '0',
  '-y',
  outputWebp
];

const proc = spawn(ffmpegPath, args);
proc.stderr.on('data', d => console.log(d.toString()));
proc.on('close', code => {
  if (code === 0) {
    console.log(`✅ Pristine HD Animated WebP created at: ${outputWebp}`);
  } else {
    console.error(`❌ Exited with code ${code}`);
  }
});
