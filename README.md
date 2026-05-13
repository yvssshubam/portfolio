# Portfolio — Engineering Log

A premium, original portfolio for ML + Backend engineers. 

## Aesthetic

Editorial-terminal: oversized serif display, mono labels, hairline rules,
asymmetric grid. Dark canvas with a quiet emerald accent. Subtle grain +
gradient atmosphere. Motion is restrained — staggered reveals, no parallax
circus.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- Two web fonts only: **Fraunces** (display) + **JetBrains Mono** (UI/labels)
- Zero icon libraries — inline SVG icons

## Structure

```
.
├── index.html              # SEO, OG, JSON-LD, favicon (inline)
├── src/
│   ├── main.jsx            # entry
│   ├── App.jsx             # all sections, single-file composition
│   ├── data/
│   │   └── content.jsx     # ALL COPY lives here — edit this to make it yours
│   └── styles/
│       └── index.css       # Tailwind + global type setup
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Sections

1. **Hero** — positioning statement + live status panel + rotating "currently" line
2. **§01 Systems** — what I can build (not a skill cloud)
3. **§02 Proof of Work** — case studies in modal: Problem · Approach · Tech · Impact
4. **§03 Timeline** — focused on what shipped, not titles
5. **§04 Technical Depth** — architecture sketch, challenges, real code snippet
6. **§05 Contact** — direct, no form theatrics

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Make it yours

Edit `src/data/content.jsx`. Everything is there: name, links, case studies,
timeline, depth notes. The visual layer reads from these exports — you do not
need to touch `App.jsx` to ship.

## Build

```bash
npm run build
npm run preview
```

Output ships to `dist/` — drop on Vercel, Netlify, Cloudflare Pages, or any
static host.

## Performance & SEO notes

- Single web font family loaded with `display=swap` and preconnect hints.
- No client-side routing, no heavy state — first paint is text.
- JSON-LD `Person` schema in `index.html`.
- Open Graph + Twitter card metadata included; replace `og.png` with a 1200x630.
- `prefers-reduced-motion` is honored globally in `index.css`.
