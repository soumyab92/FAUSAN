# Skill: QA & Production Release Validation

## 🎯 Goal
Define pre-flight test procedures for validating cross-browser stability, mobile performance, and zero-layout-shift compliance.

## ✅ Verification Checklist
1. **Zero Layout Shifts**: Validate that typography animations and video loading cause zero Cumulative Layout Shift (CLS < 0.05).
2. **Video Fallback Handling**: Verify that if any local video fails to load, `img.video-fallback-img` gracefully displays without empty boxes.
3. **Mobile Resilience**: Verify that `@media (max-width: 768px)` cleanly converts all grids into single-column cards with touch support.
