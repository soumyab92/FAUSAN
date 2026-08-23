import { spawn } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';

const inputVideo = path.resolve('assets/videos/runway-model.mp4');
const outputGifMobile = path.resolve('assets/images/hero-model-runway-mobile.gif');

// Create ultra-fast 480px mobile GIF (~3.5MB)
const args = [
  '-i', inputVideo,
  '-t', '5',
  '-vf', 'fps=12,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=64[p];[s1][p]paletteuse=dither=bayer',
  '-y',
  outputGifMobile
];

const proc = spawn(ffmpegPath, args);
proc.on('close', () => {
  console.log('Mobile GIF generated successfully');
});
