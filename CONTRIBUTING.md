# Contributing

Thanks for your interest in the SHCC 2026 landing.

## Quick start

```bash
git clone <repo-url> shcc-2026
cd shcc-2026
python3 -m http.server 8000
# open http://localhost:8000
```

No build step. Edit a file, refresh the browser.

## Conventions

- **Translations parity:** every key added to one locale in `conf-translations.js`
  must be added to all four (`en`, `de`, `fr`, `it`).
- **Tokens, not hex codes:** new colours go in `:root` (in `styles.css`), not inline.
- **Imagery is placeholder by default** — never commit speculative photos.
- **Weezevent URL** is centralised in `conf-app.jsx` (`WEEZEVENT_URL`).

## Pull requests

1. Branch from `main`: `feat/short-description` or `fix/short-description`.
2. Keep PRs focused — one concern at a time.
3. Include before/after screenshots for visual changes.
