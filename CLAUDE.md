# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Axel Mani, hosted on GitHub Pages at `axelg12.github.io`. This is a pure static site — no build system, no frameworks, no server-side logic. All pages are self-contained HTML/CSS with minimal JavaScript.

## Repository Structure

```
/
├── index.html          # Main page: single-page CV, plain HTML/CSS, no JS
├── styles.css          # Styles for main page
├── package.json        # Minimal npm config (no dependencies)
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
- **`/letur/`** — Design showcase. Parallax scrolling via Skrollr.js, custom Gotham fonts, Bootstrap 3 grid.

## Tech Stack

- **HTML/CSS/vanilla JS** — No frameworks, no build step
- **External CDN libraries**: none on main page; Bootstrap 3.3.2 + jQuery 2.1.3 (letur page)
- **Local libraries**: Skrollr.js (letur page parallax)
- **Fonts**: system serif stack (main), Gotham OTF (letur)

## Development

### No build system

Files are served directly. Edit HTML/CSS/JS and push — GitHub Pages deploys automatically from the default branch.

### No tests, linting, or formatting tools

The `package.json` has no dependencies and no meaningful scripts. The test script is a placeholder that exits with an error.

### Deployment

Push to the default branch (`master`) and GitHub Pages deploys automatically.

## CSS Conventions

- **Main page**: Plain CSS with color tokens on `:root` and a dark-mode override. Max-width 640px. Uses `img/axel-480.jpg` (resized copy of `axel.jpg`).
- **Letur page**: `@font-face` declarations for Gotham variants. Fixed positioning for parallax. Skrollr data attributes on HTML elements drive scroll animations.

## Key Conventions

- Each page is fully self-contained with its own HTML, CSS, images, and favicon.
- No shared CSS or JS between pages.
- All content is hardcoded in HTML — no data fetching, no templating, no CMS.
- Images are stored in per-page `img/` directories.
- HTML uses `lang="en"`. Content is English only.
- Accessibility is a stated goal — alt attributes and semantic HTML are used throughout.

## When Making Changes

- Test changes by opening the HTML files directly in a browser or using a local static file server.
- Each page is independent — changes to one page won't affect others.
- Keep the static nature of the site. Don't introduce build steps or runtime dependencies unless explicitly requested.
- Respect the existing styling approach for each page (plain single-page on main, parallax data attributes on letur).
