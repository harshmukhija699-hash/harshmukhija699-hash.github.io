# Build with Harsh

The source for [harshverse.me](https://harshverse.me), the developer portfolio of Harsh Mukhija. The site is built with plain HTML, CSS, and JavaScript and is deployed directly through GitHub Pages.

## Live deployment

- Website: [https://harshverse.me](https://harshverse.me)
- GitHub repository: [harshmukhija699-hash/harshmukhija699-hash.github.io](https://github.com/harshmukhija699-hash/harshmukhija699-hash.github.io)
- Public contact: [admin@harshverse.me](mailto:admin@harshverse.me)
- Publishing source: `main` branch, repository root
- Custom domain and HTTPS: active

There is no build command, database, login, backend, analytics dependency, or paid service. GitHub Pages serves `index.html` directly.

## Features

- Responsive one-page portfolio covering About, Skills, Learning, Projects, GitHub, and Contact
- Keyboard-accessible mobile navigation, skip link, visible focus states, and reduced-motion support
- Semantic HTML, responsive CSS, and dependency-free JavaScript
- Canonical, Open Graph, Twitter, and JSON-LD metadata
- Branded 1200×630 social-sharing card and install icons
- Sitemap, robots directives, web manifest, `CNAME`, and `.nojekyll`
- Verified links to the public GitHub profile, NetHunter kernel, and portfolio source

## Preview locally

From this folder, start any static web server. With Python installed:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish updates

Commit changes to the `main` branch of the live repository and push them to GitHub. GitHub Pages will publish the repository root automatically.

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

After the Pages workflow completes, verify the homepage, stylesheet, script, manifest, and social card at `https://harshverse.me`.

## Domain configuration

The repository-root `CNAME` file must contain only:

```text
harshverse.me
```

The active Namecheap DNS configuration uses GitHub Pages’ four apex addresses plus a `www` CNAME:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `harshmukhija699-hash.github.io` |

Do not remove unrelated email or MX records when editing DNS. Avoid wildcard records such as `*.harshverse.me`.

Official GitHub documentation:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Project map

- `index.html` — page content, social metadata, and structured data
- `styles.css` — responsive visual system and interaction states
- `script.js` — navigation, current-section highlighting, and reveal effects
- `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — site and install icons
- `og-card.png` — social-sharing preview
- `site.webmanifest`, `robots.txt`, `sitemap.xml` — browser and search metadata
- `CNAME`, `.nojekyll` — GitHub Pages configuration
