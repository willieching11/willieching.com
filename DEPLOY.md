# Deploying to GitHub Pages + willieching.com

End state: visiting `https://willieching.com` serves this site from a free
GitHub Pages deployment.

## 1. Push this folder to a new GitHub repo

From inside this folder (`c:\xampp\htdocs\willieching`):

```sh
git init
git add .
git commit -m "Initial commit: static portfolio site"
git branch -M main
```

Then on github.com, create a new public repo (any name works since you'll use
a custom domain — `willieching.com` or `portfolio` are both fine). Then:

```sh
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

> Note: GitHub Pages requires the repo to be **public** unless you have a paid
> GitHub Pro account.

## 2. Turn on GitHub Pages

On the repo page:

1. Go to **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**, click **Save**

Within ~30 seconds the site will be live at
`https://<your-username>.github.io/<repo-name>/`. Open it to verify the styling
and JS work before you point the domain.

## 3. Point willieching.com at GitHub Pages

The `CNAME` file in this repo already contains `willieching.com`, so GitHub
knows which domain to expect. You also need to set up DNS at your domain
registrar.

### At your domain registrar (where you renew willieching.com)

Add these DNS records:

**Apex (`willieching.com`) — four A records pointing to GitHub Pages' IPs:**

| Type | Host | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

**Optional, for the `www` subdomain — CNAME pointing to your GitHub Pages site:**

| Type  | Host | Value                          |
|-------|------|--------------------------------|
| CNAME | www  | `<your-username>.github.io.`   |

(The trailing dot is significant in DNS but most registrars add it for you.)

DNS can take anywhere from a few minutes to a few hours to propagate.

### Back in GitHub

1. Repo **Settings** → **Pages**
2. Under "Custom domain", enter `willieching.com` and click **Save**
3. Wait for the DNS check to pass (green check next to the domain)
4. Tick **Enforce HTTPS** once available (GitHub auto-issues a free Let's
   Encrypt cert after DNS resolves)

## 4. Contact form

The contact form posts to a Formspree endpoint (form ID `mykorpew`). Formspree
will email a confirmation link to the account address the first time someone
submits the form — click it to start receiving submissions.

## 5. Assets

All site assets are in place under `images/`:

- `images/hero.png` — portrait
- `images/WillieChingResume.pdf`
- `images/projects/*.jpg` — one per project (filenames referenced in `index.html`)

After future edits, `git add images/`, commit, push — GitHub Pages redeploys
automatically on each push to `main`.

## Total ongoing cost

Domain renewal only (~$10–15/yr depending on your registrar). GitHub Pages
hosting is free for public repos.
