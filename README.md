
# The Argosy — Hewo + Eleventy + Decap CMS Starter

## Quickstart
1. `npm install` (Eleventy is installed as a dev dep)
2. `npm run start` (local dev) or push to Netlify with:
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Enable Identity + Git Gateway to log in at `/admin/`

## Writing
- Visit `/admin/` to create posts (Markdown).
- Set **Publish Date** for backdating (e.g., 2023).
- Posts render with the theme's *single* page layout.
- Homepage shows **Latest** using `/posts.json` (no template rewrite).

## Files
- `src/_includes/article.njk` — generated from `single.html`, now templated.
- `src/posts/*.md` — your articles.
- `src/admin/config.yml` — Decap CMS config.

No existing Hewo HTML/CSS/JS was modified, except:
- `src/index.html` has a small "Latest Posts" section injected before `</body>`.
