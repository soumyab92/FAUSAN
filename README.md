# FAUSAN HAUTE COUTURE — Digital Experience Platform

> A luxury 3D fashion commerce application engineered with Three.js, GSAP ScrollTrigger, and spatial storytelling.

---

## 🌟 Overview
**FAUSAN** is a premier digital atelier platform merging haute couture tailoring with interactive WebGL rendering, 3D scroll kinematics, and Web3 garment provenance.

- **Brand Aesthetic**: Obsidian Black (`#060608`), 24K Liquid Gold (`#D4AF37`), Alabaster (`#F4F1EA`).
- **Core Experience**: 9-chapter interactive fashion journey with real-time 3D gown visualization and scroll-controlled model runner kinematics.
- **Architecture**: Single-bundle high-performance frontend with zero-build runtime execution.

---

## 🏗️ Architecture & Directory Structure

```text
fashion-commerce/
├── README.md                               # Project documentation & overview
├── AGENTS.md                               # Codex durable repo guidance
├── .agents/                                # Antigravity native agent configuration
│   ├── agents.md                           # Agent personas & roles
│   ├── skills/                             # Workflow capability guides
│   │   ├── project_management.md
│   │   ├── ux_research.md
│   │   ├── brand_strategy.md
│   │   ├── ui_design.md
│   │   ├── ecommerce_architecture.md
│   │   ├── image_generation.md
│   │   ├── parallax_spec.md
│   │   ├── frontend_gsap.md
│   │   └── qa_release.md
│   └── workflows/                          # Standard operating procedures
│       ├── startfashion.md
│       ├── designreview.md
│       └── releasecheck.md
├── production_artifacts/                   # Engineering & design deliverables
│   ├── 00_project/                         # Charters & milestones
│   ├── 01_research/                        # Market & user research
│   ├── 02_brand/                           # Design tokens & typography
│   ├── 03_ux_ui/                           # Wireframes & components
│   ├── 04_commerce/                        # SKUs & pricing matrices
│   ├── 05_visual_assets/                   # Image & video manifests
│   ├── 06_motion_3d/                       # Three.js & RAF kinematic specs
│   ├── 07_engineering/                     # System architecture & bundling
│   └── 08_qa/                              # Test reports & validation
├── tools/                                  # Pipeline automation utilities
│   ├── generate-fashion-asset.mjs
│   ├── imagegen_openai.mjs
│   ├── imagegen_gemini.mjs
│   └── optimize_assets.mjs
├── docs/                                   # Project governance
│   ├── Decision_Log.md                     # Architectural Decision Records
│   ├── Risk_Register.md                    # Risk management matrix
│   └── Release_Checklist.md                # Production readiness checklist
└── app/                                    # Production application build
    └── index.html
```

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
node server.js
```
Navigate to: **[http://localhost:3000/](http://localhost:3000/)**

### 2. Run Asset Pipeline
```bash
node tools/optimize_assets.mjs
```

---

## 🛠️ Technology Stack
- **3D Graphics Engine**: Three.js (Procedural lathe geometry, ACESFilmic tone mapping, MeshPhysicalMaterial).
- **Animation Orchestrator**: GSAP 3 + ScrollTrigger (Pinned scrubbing, damped lerp loops).
- **Typography**: Playfair Display, Cinzel, Montserrat, Plus Jakarta Sans.
- **Web3 Integration**: ERC-721 tokenized garment provenance indicators.

---

## 📜 License
Private Atelier License © 2026 FAUSAN Haute Couture. All rights reserved.
