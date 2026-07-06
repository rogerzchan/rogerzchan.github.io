# rogerchan.dev

My personal site — built with Astro, deployed to GitHub Pages.

Live at → **[rogerchan.dev](https://rogerchan.dev)** (or [rogerzchan.github.io](https://rogerzchan.github.io))

## 🧭 What's here

- **About** — who I am, what I do, and where I've worked
- **Projects** — a rotating selection of things I've built and analyzed
- **Contact** — the fastest way to reach me

## 🛠 Stack

- **[Astro](https://astro.build)** — static site framework
- Vanilla CSS (design tokens, no framework)
- Deployed via GitHub Actions → GitHub Pages

## 🚀 Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## 📁 Layout

```
src/
├── components/   # Icon, Flag — small SVG helpers
├── layouts/      # base HTML shell
├── pages/        # index.astro (everything lives here)
└── styles/       # global.css — design tokens + all component styles
public/
└── img/          # portrait + static assets
```

## 📦 Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

---

© Roger Chan
