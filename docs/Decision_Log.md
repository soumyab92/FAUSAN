# Architectural Decision Log (ADR)

## ADR-001: Zero-Build Standalone Single-File Distribution
- **Date**: 2026-08-24
- **Status**: **ACCEPTED**
- **Context**: The platform requires frictionless portability and zero build tooling lock-in while preserving ultra-high-end visual fidelity.
- **Decision**: Deliver the core client application via `index.html` with inlined CSS design system and JavaScript engines, loading Three.js and GSAP via high-speed CDNs.
- **Consequences**: Instantaneous cold start, zero build dependencies, 100% portable.

## ADR-002: RAF Interpolated Video Scrubbing vs. Direct Seek
- **Date**: 2026-08-24
- **Status**: **ACCEPTED**
- **Context**: Direct `video.currentTime = X` on wheel events caused browser decoder jitter.
- **Decision**: Implement continuous 60 FPS `requestAnimationFrame` lerp loop `currentProgress += (targetProgress - currentProgress) * 0.09` with dynamic 3D depth zoom.
- **Consequences**: Buttery smooth 60 FPS runway video movement.

## ADR-003: Haute Couture Liquid Gold Light-Sheen Title Animation
- **Date**: 2026-08-24
- **Status**: **ACCEPTED**
- **Context**: Artificial character clipping caused layout shifts and reflow.
- **Decision**: Use continuous liquid 24K gold metallic gradient sweep (`luxuryGoldSweep`) with weightless floating breath (`titleFloat`).
- **Consequences**: Zero layout reflow, award-winning luxury aesthetic.
