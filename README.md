# Hal Amano professional website

A responsive, bilingual static website. No dependencies, build step, external fonts, analytics, or JavaScript.

## Publish on GitHub Pages

1. Create a public repository named `hfavisado.github.io` under your GitHub account. If it already exists, preserve its existing contents before replacing files.
2. Upload the contents of this folder to the repository root, including `.nojekyll`. Do not upload the enclosing folder or ZIP file.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**, and save.
4. Your website will be available at https://hfavisado.github.io/ after GitHub finishes publishing.

You can also use another repository name. All asset and language links are relative, so the site supports project Pages URLs.

## Edit

- `index.html`: English content.
- `ja.html`: Japanese content.
- `styles.css`: shared design and responsive layout.
- `favicon.svg`: initials favicon.
- `content.json`: reference career content used to produce the pages. Editing this file alone will not update the HTML. Edit both HTML pages when changing experience.

The dates and experience counts reflect October 2026. Update them when appropriate. Japanese text is an editorial translation of the supplied English profile. No employer logos or unsupported project claims are included.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
