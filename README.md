# N Vijay — Personal Portfolio

This is a small, personal portfolio site built with plain HTML, CSS and JavaScript.

## What's included

- `src/` — source files (HTML, CSS, JS)
  - `src/index.html` — main page
  - `src/css/style.css` — styles
  - `src/js/script.js` — theme toggle and small UI behavior
  - `src/assets/images/` — images (move your profile image(s) here)
- `docs/` — documentation and contribution notes

## Project goals

- Clean, accessible portfolio showcasing projects and contact details
- Simple, dependency-free structure for easy hosting (GitHub Pages, Netlify, etc.)

## Local workflow & suggested Git commits

If `git` is available locally, here's a suggested sequence to create a clear history (run from project root):

1. Create directories and move files

```bash
# create folders
mkdir -p src/css src/js src/assets/images docs

# move files into structure
git mv index.html src/index.html
git mv style.css src/css/style.css
git mv script.js src/js/script.js
git mv *.jpeg src/assets/images/ || true

# commit
git add -A
git commit -m "chore: reorganize project into src/ and assets"
```

2. Update HTML for new paths & small improvements

```bash
# update index.html (already prepared in repo)
# commit changes
git add src/index.html
git commit -m "feat(html): update asset paths and add meta description"
```

3. Documentation

```bash
# add README and docs
git add README.md docs/
git commit -m "docs: add README and contribution notes"
```
