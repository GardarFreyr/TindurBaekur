# Tindur – forsíðusýnidæmi (handoff)

Local, private sales demo for Bókaútgáfan Tindur. **Not deployed. Nothing emailed. No files uploaded anywhere.**

## Run it

```bash
npm install
npm run build
npm run preview
```

Open http://localhost:4321

Stack: plain static HTML/CSS/JS rendered by a small Node build script (`build.mjs`). `sharp` makes the image sizes; fonts are self-hosted (no Google Fonts call, no analytics, no external requests at all).

| Path | What it is |
|---|---|
| `src/data.mjs` | Books, images, contact. Single place to edit facts. Unknown fields are `null` + listed in `needsConfirmation`. |
| `src/page.mjs` | Page markup (components: `picture()`, `bookCard()`, nav). |
| `src/styles.css`, `src/main.js` | Styles; menu, book panel, reveal, "mark proposed copy" toggle. |
| `originals/` | Supplied files, read-only, with `CHECKSUMS.txt`. Never written by the build. |
| `dist/` | Built site. |

## Design direction

Scandinavian editorial: warm paper (#F3EEE4), ink black, Tindur orange used only for buttons, rules and focus. Fraunces (serif display) + Inter (body), both with full Icelandic glyphs. The covers are the heroes: the hero sets three real covers on a "table" with soft shadows and slight rotation; the catalogue uses an asymmetric grid; Fuglar gets a full-bleed dark feature; the children's series gets a muted-green section so it reads as playful without turning the site into a kids' template. Logo only ever on black.

Demo helpers: a discreet top strip says it's a demo, and a **"Merkja tillögur að texta"** button outlines every piece of proposed copy so Helgi can see exactly what is suggested wording.

## Asset inventory

| Original (as received) | Used in | Processing | Rights / questions |
|---|---|---|---|
| `Tindur-logo-á-dökt.png` 2000×1692 | Header, About, footer, favicon | Resized to 240/480/960 (WebP + PNG). Not altered. | Public-use permission for the logo |
| `Fuglar` 2000×1553 (brief says 2338×1816; chat upload arrived downscaled) | Catalogue card, feature section, book panel | Resized 640–2000 (WebP + JPG) | Photographer credit; cover rights. Get the full-res original before launch |
| `Freddi-kápa` 1306×1910 | Hero, catalogue, book panel | Resized 320–1000 | Cover/illustration rights (Hrannar Atli Hauksson) |
| `Enginn-netið nýrri` 1080×1693 | Hero, catalogue, book panel | Resized 320–1080 | Photo credit; person in photo not identified on purpose |
| `BarnabokSER_kapaNY` 1080×1627 | Hero, catalogue, book panel | Resized 320–1080 | Cover/photo rights |
| `Tindur_SYSTUR_1095x386p` 1095×386 | Brostu / Systur section | 600/1095 (WebP + JPG) | Translated-edition rights; Eisner badge kept only as part of the artwork |
| `Tindur_skyggna-barnabækur` 1920×1080 | Children's series section | 800/1280/1920 | Illustration rights |

All images: no crops, no filters, `width`/`height` + aspect-ratio set (no layout shift), lazy-loaded below the fold, Freddi cover gets `fetchpriority="high"`.

## Proposed copy that needs Helgi's approval

- Hero: „Bækur sem rata til lesenda." and „Tindur gefur út fjölbreytt verk fyrir unga sem eldri lesendur."
- Fuglar feature: „Íslensk náttúra í öndvegi."
- About: „Bókaútgáfan Tindur stendur að fjölbreyttri útgáfu …"
- Section headings / eyebrows: „Sögur, fróðleikur og bækur fyrir nýja lesendur.", „Í brennidepli", „Framhaldið er komið" (paraphrased from the Systur banner)
- „Systur er framhald bókarinnar Brostu." (restates the banner)

## Discrepancy to confirm

- **„Inga syngur" vs. „Inga slynga":** the brief lists *Inga syngur*, but the children's-series artwork clearly reads **INGA SLYNGA**. The page uses *Inga slynga* (what the artwork shows). Confirm with Helgi.

## Missing before a public launch

Company description · book descriptions · prices and where to buy · ISBN and publication dates · stock/availability · author and illustrator bios · translator and photographer credits · rights confirmation per asset · public-use permission for logo and covers · legal company details (kennitala, address) · privacy text / contact-form needs · domain and hosting · retailer/distributor links · full-resolution Fuglar file · which two children's books are the new ones.

## Testing

- Build: clean. No console errors (one favicon 404 + one dialog image 404 were found and fixed).
- No horizontal overflow at 320, 375, 430, 768, 1024, 1440, 1920.
- Visually checked at 1440, 1024, 768, 375, 320.
- Mobile menu: opens with focus on first link, Tab is kept inside, Escape closes and returns focus to the button, closes on link tap and when resizing to desktop.
- Book panels: open for all four books, show only title/subtitle/author/illustrator + the „Nánari bókarupplýsingar …" note; focus returns to the button on close.
- All in-page anchors resolve; `tel:+3547772777` and `mailto:helgihjojonsson@gmail.com` appear in contact + footer.
- `noindex, nofollow` meta + `robots.txt` Disallow all; no sitemap; no external requests.
- Search of the built page for prices, ISBN, dates, addresses, reviews, "kaupa"/cart: none found.
- `shasum -c originals/CHECKSUMS.txt`: all originals unchanged.
- Reduced motion: reveals, hover lifts and smooth scroll are turned off.

---

## Update 2026-11-14 – full book collection

Source: Helgi's "Tindur - textar við bækurnar.docx" (20 book texts) + 13 new cover images.

**What changed**
- `src/books.mjs` (new): all 20 books with Helgi's text, authors, translators, illustrators, author notes and a `textNotes` log of every text fix or open question. No years exist in the doc, so `year` is null for all.
- Homepage: the 4-book grid is now a full collection (4/3/2 columns) with filters (Allar / Fyrir unga lesendur / Þýddar). Every cover sits on a common baseline. Filters only use facts stated in the text.
- 20 new book pages at `/baekur/<slug>/` with the full description, credits, author note, a "details to come" note and previous/next links. These replace the old pop-up panel.
- Books without covers get a typographic "Kápa væntanleg" placeholder.
- Hero Freddi cover swapped to the newly supplied file. Hero covers, kids-series titles, Fuglar and Brostu/Systur now link to book pages.
- Fuglar feature shows Helgi's description. The Brostu/Systur copy now says "óbeint framhald" (as in Helgi's text) and credits the translation.
- Demo strip now reads "Sýnidæmi til yfirlestrar · Ekki fullbúin vefverslun" on every page.
- All asset and link paths are root-absolute (`/img/...`), which works on Netlify and on the local preview.

**Order:** Word-document order, with the four books awaiting covers moved last. This is provisional and documented in `books.mjs`. Sort by `year` once years arrive.

**New originals:** `originals/kapur/*.jpg` (13 files, read-only, checksums added). The covers came in as chat attachments without original filenames, so they're named by book. The old Freddi file (1306 px) is still in `originals/` but no longer used.

**Review sheet for Helgi (Icelandic):** `YFIRFERD-HELGA.md`.

**Tested:** build OK (21 pages). 1,334 links/images checked with 0 broken. `noindex` on every page. No horizontal overflow at 320–1920 on the homepage and a book page. Filters, menu and book pages checked on desktop and at 375. All 25 homepage images load. Not committed, pushed or deployed.
