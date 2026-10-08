# Rogelio Alcaraz

Personal website: who I am, the data and AI systems I build, and short notes about them. English at `/`, Spanish at `/es/`.

Live at https://rogelio-alcaraz.vercel.app. Every push to `main` redeploys on Vercel.

## Run it

```bash
npm install
npm run dev
```

## Edit

- All text, in both languages, lives in [`src/content.js`](src/content.js): intro, work history, projects, earlier work, the briefing's technical section and the notes.
- Styles: [`src/styles/site.css`](src/styles/site.css). Shared header and footer: [`src/layouts/Base.astro`](src/layouts/Base.astro).
- Page templates are in [`src/views`](src/views); the files in [`src/pages`](src/pages) only pick the language.
- A new project, note or work-history entry is a new item in its list in `content.js`; its English and Spanish pages are generated automatically.

Built with [Astro](https://astro.build). Design inspired by alejandro.gomezcerezo.com.
