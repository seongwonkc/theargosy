# Argosy 11ty + Netlify Starter

A clean Eleventy (11ty) starter tailored for a growing news/magazine with hundreds of Markdown articles.

## Quickstart

```bash
npm i
npm run dev   # http://localhost:8080
npm run build
```

Deploy on Netlify with:

- **Publish directory**: `_site`
- **Build command**: `npm run build`
- **Node version**: 20 (set in `netlify.toml`)

## Content

Add articles in `src/articles/` using this front matter:

```yaml
---
title: "Your Title"
date: "2025-08-15"
author: "Your Name"
section: "Politics" # or Business, Tech, Culture, etc.
summary: "One-sentence dek."
image: "/assets/images/your-image.jpg"
layout: "layouts/article-layout.njk"
tags: ["articles"]
---
```

## Sections

Section pages live under `/section/<name>/` and paginate automatically (10 per page).
Add/edit top nav in `src/_data/site.json`.

## Top Story + Latest

The homepage shows the newest article as the “Top Story” and the next 12 items as “Latest”.

## Customize

- Global layout: `src/_includes/layouts/base.njk`
- Article layout: `src/_includes/layouts/article-layout.njk`
- Home: `src/index.njk`
- Section template: `src/section.njk`

Enjoy!

## CMS (Decap / Netlify CMS)
- Files added in `src/admin/`:
  - `index.html` (loads Decap CMS via CDN)
  - `config.yml` (Git Gateway + Identity)
- Enable **Identity** and **Git Gateway** in Netlify, then visit `/admin/` to log in and create/edit articles.

