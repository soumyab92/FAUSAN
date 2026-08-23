# Risk Register & Mitigation Matrix

| Risk ID | Risk Description | Severity | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| `RSK-01` | Local video codec incompatibility | Medium | Low | Embedded dual fallback images (`video-fallback-img`) and error event listeners |
| `RSK-02` | Low-end GPU WebGL performance | High | Low | Low poly lathe geometry + automatic pixel ratio clamping (`Math.min(devicePixelRatio, 2)`) |
| `RSK-03` | Viewport horizontal scroll drift | High | Medium | Enforced `overflow: hidden; max-width: 100%;` across all media containers |
| `RSK-04` | Navbar obscuring 3D model runner | Medium | Low | Automatic `.nav-hidden` toggle via ScrollTrigger `onEnter` / `onLeave` |
