# willieching.com

Personal portfolio site — static HTML/CSS/JS, deployed to GitHub Pages.

## Local preview

Open `index.html` in a browser, or serve via XAMPP:

```
http://localhost/willieching/
```

## Project layout

```
.
├── index.html              # Single-page portfolio
├── css/style.css           # Styles (Bootstrap 4 from CDN + custom)
├── js/main.js              # Hamburger + project hover
├── images/
│   ├── hero.png            # 350x350 portrait (drop in to replace placeholder)
│   ├── WillieChingResume.pdf
│   ├── placeholder.svg     # Fallback for missing project screenshots
│   ├── hero-placeholder.svg
│   └── projects/           # One image per project (see filenames in index.html)
├── CNAME                   # willieching.com → tells GitHub Pages to use this domain
└── .gitignore
```

Missing project / hero images fall back automatically to `placeholder.svg` /
`hero-placeholder.svg` thanks to `onerror` attributes on the `<img>` tags. To
replace a placeholder, drop a file at the exact path listed in `index.html`.

## Deploying to GitHub Pages

See `DEPLOY.md`.
