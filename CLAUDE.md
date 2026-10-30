# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Axel Mani, hosted on GitHub Pages at `axelg12.github.io`. This is a pure static site — no build system, no frameworks, no server-side logic. All pages are static HTML/CSS with minimal JavaScript.

## Repository Structure

```
/
├── index.html          # Main page: single-page CV, plain HTML/CSS + inline theme-toggle script
├── projects.html       # Projects page, same style and theme toggle as index.html
├── styles.css          # Styles shared by index.html and projects.html
├── CNAME               # GitHub Pages custom domain config
├── favicon.png         # Site favicon
├── img/                # Main page images (profile photos)
└── letur/              # Graphic design portfolio page (parallax scrolling)
    ├── index.html
    ├── style.css
    ├── main.js         # Scroll animation logic
    ├── favicon.png
    ├── Gotham-*.otf    # Custom font files (6 variants)
    ├── img/            # SVG/PNG design assets
    └── js/skrollr/     # Local copy of Skrollr parallax library
```

## Pages

- **`/`** — Main page. One column of plain text: intro, Work, Education, On the side, Worth reading. Short, first-person copy; no stats, chips or tool lists.
- **`/projects.html`** — Everything Axel has worked on, at Dohop and on the side. Same layout as the main page, linked from it.
- **`/letur/`** — Design showcase. Parallax scrolling via Skrollr.js, custom Gotham fonts, Bootstrap 3 grid.

## Tech Stack

- **HTML/CSS/vanilla JS** — No frameworks, no build step
- **External CDN libraries**: none on main and projects pages; Bootstrap 3.3.2 + jQuery 2.1.3 (letur page)
- **Local libraries**: Skrollr.js (letur page parallax)
- **Fonts**: system serif stack (main), Gotham OTF (letur)

## Development

### No build system

Files are served directly. Edit HTML/CSS/JS and push — GitHub Pages deploys automatically from the default branch.

### No tests, linting, or formatting tools

There is no `package.json` and nothing to install or run.

### Deployment

Push to the default branch (`master`) and GitHub Pages deploys automatically.

## CSS Conventions

- **Main and projects pages**: Plain CSS in `styles.css`. Color tokens on `:root` use `light-dark()`. The "Switch here" button sets `data-theme` on `<html>` and saves it in `localStorage`. Max-width 640px. Uses `img/axel-480.jpg` (480px profile photo).
- **Letur page**: `@font-face` declarations for Gotham variants. Fixed positioning for parallax. Skrollr data attributes on HTML elements drive scroll animations.

## Key Conventions

- `index.html` and `projects.html` share `styles.css`, `img/` and `favicon.png`. Each page has its own inline copy of the theme-toggle script.
- `letur/` is self-contained and shares nothing with the other pages.
- All content is hardcoded in HTML — no data fetching, no templating, no CMS.
- Images are stored in per-page `img/` directories.
- HTML uses `lang="en"`. Content is English only.
- Accessibility is a stated goal — alt attributes and semantic HTML are used throughout.

## When Making Changes

- Test changes by opening the HTML files directly in a browser or using a local static file server.
- Changes to `styles.css` affect both `index.html` and `projects.html`. Changes to the theme-toggle script must be made in both files. `letur/` is independent.
- Keep the static nature of the site. Don't introduce build steps or runtime dependencies unless explicitly requested.
- Respect the existing styling approach for each page (plain single column on main and projects, parallax data attributes on letur).
