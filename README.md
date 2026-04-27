# HCS — Health Coaching Switzerland · Conference 2026

A high-fidelity, multilingual landing page for the Swiss Health Coaching Conference 2026.
Built as a static, single-page site with React (via Babel standalone) — no build step required.

**Live page:** open `index.html` in any modern browser.

---

## Highlights

- **Clinical, Swiss-modern aesthetic** — deep midnight navy with a single mint/teal accent
- **Four-language toggle** — EN · DE · FR · IT, all content fully translated
- **Component-split React** — small, readable JSX files, no bundler
- **Accessible** — semantic landmarks, focus-visible rings, ARIA on toggles
- **Zero dependencies at runtime** beyond React + Babel CDN

---

## Stack

| Layer        | Choice                                                |
|--------------|-------------------------------------------------------|
| Markup       | Static HTML5                                          |
| Styling      | Hand-written CSS, design tokens via `:root` variables |
| Behaviour    | React 18 + JSX, transpiled in-browser by Babel        |
| Type         | Inter, JetBrains Mono, Fraunces (Google Fonts)        |
| Build        | None — open the file and it runs                      |

---

## Project structure

```
.
├── index.html            # Page shell, font + script loading
├── styles.css            # Design tokens + all component styles
├── translations.js       # i18n dictionary (en / de / fr / it)
├── icons.jsx             # Inline SVG icon set
├── nav.jsx               # Sticky top navigation + language pill
├── hero.jsx              # Hero section with summary card
├── sections.jsx          # About, Program, Speakers, Venue, Sponsors,
│                         # Association, Resources, Registration, Footer
└── app.jsx               # Top-level App component, language state
```

---

## Local development

No tooling required. Either:

```bash
# 1. Open directly
open index.html

# 2. Or serve over localhost (recommended for some browsers)
python3 -m http.server 8000
# → http://localhost:8000
```

### Editing content

- **Copy & translations** live in [`translations.js`](./translations.js).
  Each locale is a parallel object — edit the matching key in all four to keep parity.
- **Visual tokens** (colours, type scale, radii, spacing) live at the top of
  [`styles.css`](./styles.css) under `:root`.
- **Layout / structure** is split by component file; each `.jsx` file exports its
  component to `window.HCS*` so it can be referenced from `app.jsx`.

### Adding a section

1. Add the copy block (in all four languages) to `translations.js`.
2. Add a new component to `sections.jsx` (or its own file) and attach it to `window`.
3. Reference it in the render tree of `app.jsx`.
4. Add a corresponding `<a href="#new-id">` to the `links` array in `nav.jsx`.

---

## Design tokens

Everything visual is controlled from `styles.css :root`. A few of the most
relevant tokens:

| Token              | Purpose                                  |
|--------------------|------------------------------------------|
| `--bg-0..3`        | Background surface scale (deepest → highest) |
| `--fg-0..3`        | Text scale (primary → hairline)          |
| `--accent`         | Mint/teal primary accent                 |
| `--rule`, `--rule-soft` | Hairlines and dividers              |
| `--font-sans`      | Inter — UI / body                        |
| `--font-mono`      | JetBrains Mono — metadata, eyebrows      |
| `--font-display`   | Inter (weight contrast does the work)    |

---

## Imagery

All photographs and logos are intentionally rendered as labelled placeholders —
clearly marked `portrait`, `venue photograph`, `logo · 01`, etc.
Replace them with real assets in the corresponding component files when ready.

---

## Browser support

Tested in current Chrome, Safari, Firefox.
Uses `oklch()` colour and modern CSS grid — no IE / legacy support.

---

## License

© 2026 Health Coaching Switzerland.
Source code: MIT — see [`LICENSE`](./LICENSE).
Brand name, logo and editorial copy are the property of Health Coaching Switzerland.
