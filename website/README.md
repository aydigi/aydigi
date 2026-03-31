# Aydigi — Organization Website

A clean, dark-themed website for **Aydigi**, an open-source organization that designs and develops software projects.

## Structure

```
website/
├── index.html    # Main page
├── styles.css    # All styling (dark theme, responsive)
└── script.js     # Interactions (nav, counters, form)
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Tagline, CTA buttons, animated code snippet card |
| **About** | Organization overview with animated stat counters |
| **Projects** | Card grid showcasing 6 featured projects |
| **Team** | Member cards with avatars |
| **Contact** | Contact form with success feedback |
| **Footer** | Links to GitHub, Twitter, Discord |

## Features

- Fully responsive (mobile hamburger menu)
- Smooth-scroll navigation
- Animated number counters (Intersection Observer)
- Contact form with client-side feedback
- Dark glassmorphism navbar with scroll shadow
- No external dependencies (plain HTML + CSS + JS)

## Getting Started

Just open `index.html` in your browser — no build step needed.

```bash
open website/index.html
```

## Customization

- **Colors** — edit CSS variables in `:root` inside `styles.css`
- **Projects** — add/remove `.project-card` blocks in `index.html`
- **Team** — update `.team-card` entries and avatar initials/colors
- **Stats** — change `data-target` values on `.counter` elements

## License

MIT © 2026 Aydigi Organization
