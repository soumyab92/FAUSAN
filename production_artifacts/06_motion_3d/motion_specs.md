# Production Artifact: 06_motion_3d / Motion & 3D Specifications

## WebGL & Kinematic Engines

### 1. Three.js Gown Shader Engine
- **Geometry**: Procedural `THREE.LatheGeometry` deformed along sinusoidal vertex waves.
- **Material**: `THREE.MeshPhysicalMaterial` with clearcoat `0.9` and roughness `0.25`.
- **Atmosphere**: 220 additive golden floating dust particles (`THREE.Points`).

### 2. Scroll-Controlled 3D Model Runner
- **Pin Duration**: `end: "+=3200"`.
- **Damping**: 60FPS RAF lerp `currentProgress += (targetProgress - currentProgress) * 0.09`.
- **Perspective**: Depth scale `1.0 -> 1.32`, lateral step sway `12px`, step bounce `-8px`.
