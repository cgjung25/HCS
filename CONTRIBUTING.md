# Contributing

Thanks for your interest in the HCS conference site.

## Quick start

```bash
git clone <repo-url> hcs-conference-2026
cd hcs-conference-2026
python3 -m http.server 8000
# open http://localhost:8000
```

No build step. Edit a file, refresh the browser.

## Conventions

- **One component per file** when it makes sense; keep files under ~300 lines.
- **Translations parity:** every key added to one locale in `translations.js`
  must be added to all four (`en`, `de`, `fr`, `it`).
- **Tokens, not hex codes:** new colours go in `:root`, not inline.
- **Imagery is placeholder by default** — never commit speculative photos.

## Pull requests

1. Branch from `main`: `feat/short-description` or `fix/short-description`.
2. Keep PRs focused — one concern at a time.
3. Include before/after screenshots for visual changes.
