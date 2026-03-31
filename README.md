# Aydigi

**Aydigi** is an open-source organization that designs and develops software projects — from developer tools and APIs to AI pipelines and data platforms. We build with purpose, ship in the open, and iterate fast.

---

## 🌐 Website

A fully responsive dark-themed organization website built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

### Live Sections

| Section | Description |
|---------|-------------|
| **Hero** | Typewriter tagline, animated code card, CTA buttons |
| **Tech Strip** | Infinite scrolling marquee of technologies we use |
| **About** | Organization stats with animated counters |
| **How We Build** | 4-step process — Discover, Design, Build, Ship |
| **Projects** | 6 featured open-source project cards |
| **Join Us** | Open roles CTA banner with role badges |
| **Team** | Team member cards |
| **Contact** | Contact form with client-side feedback |

### Visual Features
- Animated particle canvas background with connecting lines
- Cursor radial glow that follows the mouse
- Scroll-reveal animations (fade + slide in)
- Mobile-responsive with hamburger navigation

---

## 📁 Repository Structure

```
aydigi/
└── website/
    ├── index.html        # Main single-page site
    ├── styles.css        # All styling — dark theme, responsive
    ├── script.js         # Particles, typewriter, counters, reveal
    ├── README.md         # Website-specific docs
    └── assets/
        ├── logo.svg      # Square logo icon (AY monogram + hexagon)
        ├── profile.svg   # 400×400 circular profile picture
        └── favicon.svg   # 32×32 browser favicon
```

---

## 🚀 Getting Started

No build step required. Just open the site in your browser:

```bash
open website/index.html
```

Or serve it locally:

```bash
cd website
npx serve .
# → http://localhost:3000
```

---

## 🎨 Customization

| What | Where |
|------|-------|
| Brand colors | `:root` variables in `website/styles.css` |
| Typewriter phrases | `phrases` array in `website/script.js` |
| Projects | `.project-card` blocks in `website/index.html` |
| Team members | `.team-card` blocks in `website/index.html` |
| Stats | `data-target` attributes on `.counter` elements |
| Open roles | `.role-badge` items in the Join Us section |

---

## 🤝 Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © 2026 Aydigi Organization
