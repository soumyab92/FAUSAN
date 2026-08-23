# Skill: 3D Parallax & Spatial Kinematics Specification

## 🎯 Goal
Define stereoscopic camera tracking matrices, cursor parallax physics, and perspective math.

## 📐 Kinematics Formulations
1. **Mouse Tilt Formula**:
   ```javascript
   const xRot = (e.clientY / window.innerHeight - 0.5) * -8;
   const yRot = (e.clientX / window.innerWidth - 0.5) * 10;
   element.style.transform = `perspective(1400px) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
   ```
2. **Runway Stride Kinematics**:
   - Depth zoom: `1.0 + progress * 0.32`
   - Hip sway: `Math.sin(progress * 36) * 12px`
   - Vertical step bounce: `-Math.abs(Math.sin(progress * 36)) * 8px`
