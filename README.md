# Build with Harsh

A responsive one-page developer portfolio for **harshverse.me**, built with plain HTML, CSS, and JavaScript. It has no build step, database, login, backend, or paid service dependency.

## Included

- Home, About, Skills, Education, Featured Projects, GitHub, and Contact content
- Responsive desktop and mobile navigation
- Keyboard-friendly controls, visible focus styles, skip navigation, and reduced-motion support
- SEO metadata, structured data, `robots.txt`, sitemap, web manifest, and placeholder favicon
- GitHub Pages files: `.nojekyll` and `CNAME`
- Public contact link configured for `admin@harshverse.me`

## Preview locally

From this folder, start any static web server. With Python installed:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a GitHub repository for the site.
2. Add every file in this folder to the root of the repository and push them to the `main` branch.
3. Open the repository on GitHub and go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)` folder, then choose **Save**.
6. Wait for GitHub to show the first published Pages URL.

There is no build command. GitHub serves `index.html` directly from the repository root.

Official guide: [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Connect harshverse.me

GitHub recommends adding and verifying the custom domain in GitHub before changing DNS records.

1. In **GitHub repository → Settings → Pages**, enter `harshverse.me` under **Custom domain** and save it. The included `CNAME` file must remain in the repository root.
2. In Namecheap, open **Domain List → Manage → Advanced DNS**.
3. Remove only parking or redirect records for `@` or `www` that conflict with the records below. Do not remove unrelated email/MX records.
4. Add these four `A Record` entries:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

5. Add a `CNAME Record` with host `www` and value `harshmukhija699-hash.github.io`; do not include the repository name.
6. Allow DNS changes to propagate. GitHub notes this can take up to 24 hours.
7. Return to **Settings → Pages**. When the certificate is ready, enable **Enforce HTTPS**.

Avoid wildcard DNS records such as `*.harshverse.me`; GitHub warns that they create a domain-takeover risk.

Official guides:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Details to replace before the final public launch

The site is deployable now, but these factual details were not supplied and are deliberately not invented:

- Replace the formal education placeholder in `index.html` with the verified qualification, institution, and dates.
- Add the correct public GitHub repository links to the project cards.
- Replace the single `GitHub links coming soon` status with the correct public GitHub profile link.

## File map

- `index.html` — content and SEO metadata
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation, section highlighting, and subtle reveal effects
- `favicon.svg` — temporary `BH` favicon
- `site.webmanifest`, `robots.txt`, `sitemap.xml` — browser and search metadata
- `CNAME` — GitHub Pages custom domain
- `.nojekyll` — serves the static files without Jekyll processing
