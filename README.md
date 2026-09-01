# Nicholas Liu — Personal Website

A multi-page site: `index.html` (home) plus `life-outside-work.html` (subpage), sharing one stylesheet and one script. No build step, no dependencies.

## Files — upload ALL of these together

```
index.html
life-outside-work.html
style.css
script.js
README.md   (optional, doesn't affect the live site)
```

They must stay in the same folder, at the same level, exactly as they are here — the pages link to `style.css` and `script.js` by relative path, and to each other by filename (`life-outside-work.html`, `index.html#about`, etc.). If you rename or move any of these files, update the links that point to them.

## Before you publish

Open `index.html` and check:
- The Formspree form action still says `YOUR_FORM_ID` — the contact form won't work until you swap this in (see below).
- Everything else (name, credentials, WhatsApp number, email) is already filled in from your resume — just proofread it.

## Set up the contact form (Formspree — free)

GitHub Pages can only serve files, not run a server, so the form needs a small free service to actually receive submissions:

1. Go to formspree.io and sign up (free tier: 50 submissions/month).
2. Create a new form, copy the form ID it gives you.
3. In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with your real ID.
4. Submissions will land in your Formspree dashboard and forward to your email.

## Host it on GitHub Pages (free)

1. Create a new repo on GitHub — e.g. `nicholasliu.github.io` if you want the cleanest possible URL, or any name works.
2. Upload all the files above to the repo (drag-and-drop on github.com works fine), or:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait about a minute. Your site is live at:
   - `https://YOUR-USERNAME.github.io/` (if the repo is named `YOUR-USERNAME.github.io`)
   - or `https://YOUR-USERNAME.github.io/YOUR-REPO/` (any other repo name)
   - The subpage will be at that same address + `/life-outside-work.html`

## Adding a custom domain later

Buy a `.com` from a registrar (Porkbun or Cloudflare are cheap and straightforward, ~$10/year). Point its DNS at GitHub Pages, add the domain under **Settings → Pages → Custom domain**, and GitHub handles the rest — no rebuild needed, and it works the same for both pages.
