# Production Artifact: 07_engineering / Technical Architecture

## Architecture Overview
The platform uses a zero-dependency frontend bundle strategy with external script resilience:

```text
[ Browser Client ]
   ├── HTML5 Semantic Structure
   ├── CSS3 Design System & Keyframe Animations
   ├── Vanilla JavaScript Engine
   │    ├── Three.js WebGL Gown Canvas
   │    ├── GSAP 3 + ScrollTrigger Engine
   │    ├── Video Preload & Fallback Engine
   │    └── Bespoke Modal & Whitelist Handlers
   └── Embedded Local Assets (assets/videos/)
```

## Zero-Build Deployment
- The entire application is hosted statically by `server.js` (Node HTTP module) or any production web server (Nginx, Vercel, Netlify, Cloudflare Pages) without compilation.
