# SHCC 2026 — Swiss Health Coaching Conference

Multilingual landing page for the **Swiss Health Coaching Conference 2026**, held in Neuchâtel on **24 June 2026**. Built as a static, single-page site with React (via Babel standalone) — no build step required.

🔗 **Registration (Weezevent):** <https://my.weezevent.com/conference-coaching-de-sante>

---

## Highlights

- **Clinical Swiss-modern aesthetic** — deep midnight navy with a single mint/teal accent
- **Four-language toggle** — EN · DE · FR · IT, all content fully translated
- **Weezevent CTAs** at the very top banner, in the sticky nav, in the hero, in a final block, and in the footer
- **Three pricing tiers** — Early-bird CHF 90 · Regular CHF 120 · Online (TBA)
- **Capacity** — limited to 110 participants
- **No build step** — open `index.html` and it runs

---

## Stack

| Layer        | Choice                                                |
|--------------|-------------------------------------------------------|
| Markup       | Static HTML5                                          |
| Styling      | Hand-written CSS, design tokens via `:root` variables |
| Behaviour    | React 18 + JSX, transpiled in-browser by Babel        |
| Type         | Inter, JetBrains Mono, Fraunces (Google Fonts)        |
| Build        | None                                                  |

---

## Project structure

```
.
├── index.html              # Page shell — fonts, stylesheets, scripts
├── styles.css              # Design tokens + base components
├── conference-styles.css   # Page-specific styles for this landing
├── conf-translations.js    # i18n dictionary (en / de / fr / it)
└── conf-app.jsx            # Top-level React app (all sections inline)
```

---

## Local development

```bash
git clone <repo-url> shcc-2026
cd shcc-2026

# 1. Open directly
open index.html

# 2. Or serve over localhost (recommended in some browsers)
python3 -m http.server 8000
# → http://localhost:8000
```

### Editing content

- **Copy & translations** live in [`conf-translations.js`](./conf-translations.js).
  Each locale (`en`, `de`, `fr`, `it`) is a parallel object — edit the matching key in all four to keep parity.
- **Pricing tiers** live under `price.tiers` for each locale. Set `featured: true` on the tier you want highlighted.
- **Visual tokens** (colours, type scale, radii, spacing) live at the top of [`styles.css`](./styles.css) under `:root`.
- **Page sections** live in [`conf-app.jsx`](./conf-app.jsx) — top-to-bottom: banner, nav, hero, audience, program, speakers, venue, pricing, final CTA, footer.

### Changing the registration URL

The Weezevent URL is centralised in `conf-app.jsx`:

```js
const WEEZEVENT_URL = "https://my.weezevent.com/conference-coaching-de-sante";
```

Edit that constant; every CTA on the page will follow.

---

## Imagery

All photographs are intentionally rendered as labelled placeholders (`venue photograph · aula exterior`, speaker portraits as striped circles). Replace them with real assets when ready.

---

## Browser support

Tested in current Chrome, Safari, Firefox. Uses `oklch()` colours and modern CSS grid.

---

## Deployment

This is a fully static site — drop the contents of the repo on any static host:

- **GitHub Pages** — push to `main`, enable Pages from the repo Settings.
- **Netlify / Vercel / Cloudflare Pages** — point at the repo, no build command, publish directory `/`.

---

## License

Source code: MIT — see [`LICENSE`](./LICENSE).
Brand name, logo and editorial copy are the property of Health Coaching Switzerland.
