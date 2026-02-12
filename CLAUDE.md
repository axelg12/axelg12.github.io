# CLAUDE.md

## Project Overview

Personal portfolio website for Axel Mani, hosted on GitHub Pages at `axelg12.github.io`. This is a pure static site — no build system, no frameworks, no server-side logic. All pages are self-contained HTML/CSS with minimal JavaScript.

## Repository Structure

```
/
├── index.html          # Main portfolio page (Windows 98 theme using 98.css)
├── styles.css          # Styles for main page
├── package.json        # Minimal npm config (no dependencies)
├── CNAME               # GitHub Pages custom domain config
├── favicon.png         # Site favicon
├── img/                # Main page images (profile photos)
├── resume/             # Timeline-based resume page
│   ├── index.html
│   ├── styles.css
│   ├── favicon.png
│   └── img/            # Company/institution logos
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

- **`/`** — Main portfolio. Uses [98.css](https://jdan.github.io/98.css/) for a Windows 98 aesthetic. Sections: About, Career, Education, Projects, Technologies, Contact, Recommendations.
- **`/resume/`** — Timeline resume. Custom CSS with a vertical timeline layout. Responsive with breakpoints at 960px and 1600px.
- **`/letur/`** — Design showcase. Parallax scrolling via Skrollr.js, custom Gotham fonts, Bootstrap 3 grid.

## Tech Stack

- **HTML/CSS/vanilla JS** — No frameworks, no build step
- **External CDN libraries**: 98.css (main page), Bootstrap 3.3.2 + jQuery 2.1.3 (letur page)
- **Local libraries**: Skrollr.js (letur page parallax)
- **Fonts**: MS Sans Serif (main), system fonts (resume), Gotham OTF (letur)

## Development

### No build system

Files are served directly. Edit HTML/CSS/JS and push — GitHub Pages deploys automatically from the default branch.

### No tests, linting, or formatting tools

The `package.json` has no dependencies and no meaningful scripts. The test script is a placeholder that exits with an error.

### Deployment

Push to the default branch and GitHub Pages picks it up. The CNAME file configures custom domain routing.

## CSS Conventions

- **Main page**: Custom styles layered on 98.css. Background `#c0c0c0`, blue links, max-width 900px container.
- **Resume page**: BEM-like naming (`.Resume__header`, `.Resume__event`, `.Resume__Timeline`). Mobile-first with `min-width` media queries.
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
- Respect the existing styling approach for each page (98.css theme on main, BEM-like classes on resume, parallax data attributes on letur).
