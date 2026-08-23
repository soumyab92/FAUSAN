# Skill: GSAP & Three.js Runtime Integration

## 🎯 Goal
Provide standards for GSAP ScrollTrigger timeline management, RAF video scrubbing loops, and Three.js camera transitions.

## 🛠️ Implementation Rules
1. **ScrollTrigger Pinning**: Always set `pin: true, pinSpacing: true` when scrubbing full-screen narrative chapters.
2. **RAF Damped Seeking**: Never assign raw `video.currentTime = scrollPos` on wheel events. Always damp via `currentProgress += (targetProgress - currentProgress) * 0.09` within `requestAnimationFrame`.
3. **Three.js Tone Mapping**: Always configure `renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.25;`.
