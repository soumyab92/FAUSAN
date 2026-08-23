# AGENTS.md — Codex Durable Repository Guidance

## 🎯 Repository Purpose
This repository hosts the **FAUSAN Haute Couture** 3D web platform. All code, design tokens, visual assets, and automation scripts must adhere strictly to luxury atelier brand standards and single-file zero-runtime-build constraints.

---

## 🧭 Principles for AI Agents

### 1. Visual & Aesthetic Standards
- **Palette Integrity**: Never introduce non-curated, vibrant primary colors (e.g., pure blue, red, green). Strictly maintain Obsidian (`#060608`), Atelier Gold (`#D4AF37`), Light Gold (`#F3E5AB`), and Silk Cream (`#F4F1EA`).
- **Typography Hierarchy**: Use `Playfair Display` for headlines, `Cinzel` for luxury badges/navigation, and `Plus Jakarta Sans` for body copy.
- **Glassmorphism Discipline**: Always combine `rgba(18, 18, 22, 0.75)` with `backdrop-filter: blur(14px)` and `1px solid var(--border-gold)`.

### 2. Engineering Directives
- **Single-Bundle Philosophy**: The core production app lives in `index.html` (and mirrored in `app/index.html`) using Vanilla HTML5, CSS3, and JavaScript with CDN-loaded Three.js and GSAP.
- **No Build Step Required**: The application runs directly in any modern browser or via a lightweight static Node server (`node server.js`).
- **Performance Budget**:
  - CSS animations must use `transform` and `opacity` only (avoiding `width`/`top`/`left` transitions that cause reflow).
  - WebGL scenes must limit geometry polycounts and utilize RAF lerp dampening to guarantee 60 FPS.

### 3. File System Governance
- **Agent Knowledge**: All skill guidelines reside under `.agents/skills/`.
- **Workflows**: Standard operating procedures live in `.agents/workflows/`.
- **Artifacts**: Phase outputs are logged chronologically under `production_artifacts/00_` through `08_`.
- **Tooling**: Node automation utilities reside in `tools/` with `.mjs` extensions.

---

## 🤖 Agent Roles
- **Lead Fashion Architect**: Coordinates storytelling chapters and 3D garment mechanics.
- **WebGL / Motion Engineer**: Calibrates Three.js lathe shaders and GSAP ScrollTrigger lerps.
- **Brand & Visual Strategist**: Enforces typography, luxury micro-interactions, and gold rim lighting.
- **QA & Release Auditor**: Validates cross-browser layout stability, video fallbacks, and mobile responsiveness.
