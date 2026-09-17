# Analiza filmului Globisens Labdisc

Aplicație web statică (HTML/CSS/JS, fără build) care prezintă analiza filmului
de prezentare Globisens Labdisc: un rezumat, ideile principale și o cronologie
pe care poți s-o apeși ca să sari direct la momentul respectiv din video.

## Structură

```
index.html
styles.css
script.js
video/globisens-stem-solution.mp4   ← videoul (comprimat, ~12 MB)
```

Video-ul inclus e o versiune comprimată (1280px, ~12 MB) a fișierului
original, pentru că GitHub refuză fișierele de peste 100 MB fără Git LFS —
originalul avea ~160 MB. Calitatea rămâne bună pentru redare pe web.

Dacă vrei să folosești alt fișier video, pune-l în folderul `video/` cu
numele `globisens-stem-solution.mp4`, sau schimbă numele din `index.html`
(caută linia cu `<source src="video/...">`).

## Cum îl urci pe GitHub

```bash
git init
git add .
git commit -m "Analiza video Globisens Labdisc"
git branch -M main
git remote add origin https://github.com/<user-ul-tau>/<numele-repo>.git
git push -u origin main
```

## Cum îl publici gratuit (GitHub Pages)

1. Pe pagina repo-ului: **Settings → Pages**.
2. La **Source**, alege branch-ul `main` și folderul `/ (root)`.
3. Salvează — în 1-2 minute, pagina apare la
   `https://<user-ul-tau>.github.io/<numele-repo>/`.

## Personalizare

- **Cronologia** e în `index.html`, în secțiunea `<ol class="timeline">` —
  fiecare `<li>` are `data-time="secunde"` și un text descriptiv.
- **Ideile principale** sunt în secțiunea `<div class="idea-grid">`.
- **Culori și fonturi** sunt în `styles.css`, la începutul fișierului
  (variabilele din `:root`).
