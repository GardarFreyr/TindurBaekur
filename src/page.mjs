import { images, books, series, contact } from './data.mjs';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// <picture> with WebP + fallback, fixed intrinsic size to avoid layout shift.
function picture(key, { sizes = '100vw', alt, cls = '', eager = false, priority = false } = {}) {
  const img = images[key];
  const set = (fmt) => img.widths.map((w) => `img/${key}-${w}.${fmt} ${Math.min(w, img.width)}w`).join(', ');
  const fallbackW = img.widths[Math.min(1, img.widths.length - 1)];
  return `<picture>
      <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
      <img src="img/${key}-${fallbackW}.${img.fallback}" srcset="${set(img.fallback)}" sizes="${sizes}"
        width="${img.width}" height="${img.height}" alt="${esc(alt ?? img.alt ?? '')}"${cls ? ` class="${cls}"` : ''}
        ${eager ? 'loading="eager"' : 'loading="lazy"'} decoding="async"${priority ? ' fetchpriority="high"' : ''}>
    </picture>`;
}

const navItems = [
  ['#forsida', 'Forsíða'],
  ['#baekur', 'Bækur'],
  ['#barnabaekur', 'Barnabækur'],
  ['#um-tind', 'Um Tind'],
  ['#hafa-samband', 'Hafa samband'],
];
const navList = (cls) => `<ul class="${cls}">${navItems.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul>`;

const logo = (sizes, cls, eager = false) =>
  picture('logo', { sizes, alt: 'Tindur', cls, eager });

function bookCard(book, variant) {
  const img = images[book.asset];
  return `<article class="book book--${variant}" data-reveal>
    <div class="book__cover" style="aspect-ratio:${img.width}/${img.height}">
      ${picture(book.asset, { sizes: variant === 'wide' ? '(min-width: 960px) 58vw, 100vw' : '(min-width: 960px) 30vw, 40vw' })}
    </div>
    <div class="book__meta">
      <h3 class="book__title">${esc(book.title)}</h3>
      ${book.subtitle ? `<p class="book__subtitle">${esc(book.subtitle)}</p>` : ''}
      <p class="book__author">${esc(book.author)}</p>
      ${book.illustrator ? `<p class="book__credit">Myndskreyting: ${esc(book.illustrator)}</p>` : ''}
      <button type="button" class="book__more" data-book="${book.id}" aria-haspopup="dialog">Um bókina<span class="visually-hidden">: ${esc(book.title)}</span></button>
    </div>
  </article>`;
}

const byId = Object.fromEntries(books.map((b) => [b.id, b]));
const dialogData = Object.fromEntries(books.map((b) => [b.id, {
  title: b.title, subtitle: b.subtitle ?? null, author: b.author, illustrator: b.illustrator,
  img: `img/${b.asset}-${images[b.asset].widths.find((w) => w >= 480)}.webp`, w: images[b.asset].width, h: images[b.asset].height,
}]));

export function renderPage() {
  return `<!doctype html>
<html lang="is" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tindur – forsíðusýnidæmi (ekki til birtingar)</title>
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="Óskuldbindandi sýnidæmi að forsíðu fyrir Bókaútgáfuna Tind. Ekki fullbúinn vefur.">
  <meta property="og:title" content="Tindur – sýnidæmi að forsíðu">
  <meta property="og:description" content="Óskuldbindandi sýnidæmi. Ekki til birtingar.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="is_IS">
  <meta name="theme-color" content="#111111">
  <link rel="icon" type="image/png" href="img/logo-240.png">
  <link rel="preload" href="fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="styles.css">
  <script>document.documentElement.classList.replace('no-js','js')</script>
</head>
<body>
  <a class="skip" href="#efni">Fara beint í efni</a>

  <div class="demo-strip" role="note">
    <p>Óskuldbindandi forsíðusýnidæmi · Ekki fullbúin vefverslun</p>
    <button type="button" class="demo-strip__toggle" aria-pressed="false" data-proposed-toggle>Merkja tillögur að texta</button>
  </div>

  <header class="site-header" data-header>
    <div class="site-header__inner">
      <a class="site-header__logo" href="#forsida" aria-label="Tindur – forsíða">
        ${logo('64px', 'logo-img', true)}
      </a>
      <nav class="site-nav" aria-label="Aðalvalmynd">
        ${navList('site-nav__list')}
      </nav>
      <a class="btn btn--primary site-header__cta" href="#baekur">Skoða bækurnar</a>
      <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span class="menu-toggle__bars" aria-hidden="true"><span></span><span></span></span>
        <span class="menu-toggle__label">Valmynd</span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden data-menu>
      <nav aria-label="Valmynd fyrir síma">
        ${navList('mobile-menu__list')}
      </nav>
      <a class="btn btn--primary mobile-menu__cta" href="#baekur">Skoða bækurnar</a>
    </div>
  </header>

  <main id="efni">
    <!-- HERO -->
    <section class="hero" id="forsida" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__text">
          <p class="eyebrow">Bókaútgáfan Tindur</p>
          <h1 id="hero-title" class="hero__title" data-proposed>Bækur sem rata til&nbsp;lesenda.</h1>
          <p class="hero__lede" data-proposed>Tindur gefur út fjölbreytt verk fyrir unga sem eldri lesendur.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#baekur">Skoða útgáfuna</a>
            <a class="btn btn--ghost" href="#hafa-samband">Hafa samband</a>
          </div>
        </div>
        <div class="hero__stage" aria-label="Bókakápur úr útgáfunni" role="group">
          <div class="stage-book stage-book--1">${picture('enginn', { sizes: '(min-width: 960px) 20vw, 34vw', eager: true })}</div>
          <div class="stage-book stage-book--2">${picture('freddi', { sizes: '(min-width: 960px) 22vw, 38vw', eager: true, priority: true })}</div>
          <div class="stage-book stage-book--3">${picture('barnabok', { sizes: '(min-width: 960px) 19vw, 32vw', eager: true })}</div>
          <div class="stage-shadow" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- SELECTED PUBLICATIONS -->
    <section class="section publications" id="baekur" aria-labelledby="pub-title">
      <div class="container">
        <header class="section-head" data-reveal>
          <p class="eyebrow">Úr útgáfunni</p>
          <h2 id="pub-title" class="section-title">Sögur, fróðleikur og bækur fyrir nýja lesendur.</h2>
        </header>
        <div class="pub-grid">
          ${bookCard(byId.fuglar, 'wide')}
          ${bookCard(byId.enginn, 'tall')}
          ${bookCard(byId.barnabok, 'tall')}
          ${bookCard(byId.freddi, 'tall')}
        </div>
      </div>
    </section>

    <!-- FUGLAR FEATURE -->
    <section class="feature" aria-labelledby="feature-title">
      <div class="feature__media" data-reveal>
        ${picture('fuglar', { sizes: '(min-width: 1100px) 66vw, 100vw' })}
      </div>
      <div class="feature__text" data-reveal>
        <p class="eyebrow eyebrow--light">Í brennidepli</p>
        <h2 id="feature-title" class="section-title section-title--light" data-proposed>Íslensk náttúra í&nbsp;öndvegi.</h2>
        <p class="feature__book"><span class="feature__book-title">Fuglar í íslenskri náttúru</span>
          <span class="feature__book-author">María Björg Gunnarsdóttir</span></p>
        <button type="button" class="btn btn--light" data-book="fuglar" aria-haspopup="dialog">Um bókina</button>
      </div>
    </section>

    <!-- CHILDREN'S SERIES -->
    <section class="section kids" id="barnabaekur" aria-labelledby="kids-title">
      <div class="container kids__grid">
        <header class="kids__head" data-reveal>
          <p class="eyebrow">Barnabækur</p>
          <h2 id="kids-title" class="section-title">Líflegar bækur fyrir yngri lesendur</h2>
          <p class="kids__credit">Eftir Helga Jónsson<br>Myndskreyting: Hrannar Atli Hauksson</p>
        </header>
        <figure class="kids__figure" data-reveal>
          <div class="kids__frame">${picture('skyggna', { sizes: '(min-width: 960px) 62vw, 100vw' })}</div>
        </figure>
        <ul class="kids__titles" aria-label="Titlar á kynningarmyndinni" data-reveal>
          ${series.map((s) => `<li style="--accent:${s.accent}"><span class="kids__dot" aria-hidden="true"></span>${esc(s.title)}</li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- BROSTU / SYSTUR -->
    <section class="section systur" aria-labelledby="systur-title">
      <div class="container systur__grid">
        <div class="systur__text" data-reveal>
          <p class="eyebrow">Framhaldið er komið</p>
          <h2 id="systur-title" class="section-title">Brostu og Systur</h2>
          <p class="systur__author">Raina Telgemeier</p>
          <p>Systur er framhald bókarinnar Brostu.</p>
        </div>
        <figure class="systur__banner" data-reveal>
          ${picture('systur', { sizes: '(min-width: 1100px) 760px, 100vw' })}
        </figure>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="um-tind" aria-labelledby="about-title">
      <div class="container about__grid">
        <div class="about__logo" data-reveal>${logo('(min-width: 900px) 420px, 60vw', 'about__logo-img')}</div>
        <div class="about__text" data-reveal>
          <p class="eyebrow eyebrow--light">Um Tind</p>
          <h2 id="about-title" class="section-title section-title--light">Tindur</h2>
          <p class="about__lede" data-proposed>Bókaútgáfan Tindur stendur að fjölbreyttri útgáfu þar sem íslensk verk, þýddar bækur og efni fyrir yngri lesendur fá skýra og vandaða framsetningu.</p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact" id="hafa-samband" aria-labelledby="contact-title">
      <div class="container contact__grid">
        <div data-reveal>
          <p class="eyebrow">Hafa samband</p>
          <h2 id="contact-title" class="section-title">Hafðu samband við Tind</h2>
          <p class="contact__lede">Fyrir fyrirspurnir um bækur og útgáfu er hægt að hafa samband við Helga Jónsson.</p>
        </div>
        <address class="contact__card" data-reveal>
          <p class="contact__name">${contact.name}</p>
          <a class="contact__link" href="${contact.phoneHref}"><span class="contact__label">Sími</span>${contact.phoneDisplay}</a>
          <a class="contact__link" href="mailto:${contact.email}"><span class="contact__label">Netfang</span><span class="contact__email">${contact.email}</span></a>
        </address>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__grid">
      <a class="site-footer__logo" href="#forsida" aria-label="Tindur – efst á síðu">${logo('140px', 'logo-img')}</a>
      <nav aria-label="Fótur">${navList('site-footer__nav')}</nav>
      <div class="site-footer__contact">
        <p>${contact.name}</p>
        <p><a href="${contact.phoneHref}">${contact.phoneDisplay}</a></p>
        <p><a href="mailto:${contact.email}">${contact.email}</a></p>
      </div>
    </div>
    <div class="container site-footer__base">
      <p>Sýnidæmi hannað af Gardarvef</p>
      <p>© Tindur — ártal og lagalegur texti staðfestist fyrir birtingu</p>
    </div>
  </footer>

  <dialog class="book-dialog" id="book-dialog" aria-labelledby="dialog-title">
    <div class="book-dialog__inner">
      <button type="button" class="book-dialog__close" data-dialog-close aria-label="Loka">×</button>
      <div class="book-dialog__cover"><img alt="" data-dialog-img width="1" height="1"></div>
      <div class="book-dialog__body">
        <p class="eyebrow">Um bókina</p>
        <h2 id="dialog-title" class="book-dialog__title" data-dialog-title></h2>
        <p class="book-dialog__subtitle" data-dialog-subtitle></p>
        <dl class="book-dialog__facts">
          <div><dt>Höfundur</dt><dd data-dialog-author></dd></div>
          <div data-dialog-ill-row><dt>Myndskreyting</dt><dd data-dialog-ill></dd></div>
        </dl>
        <p class="book-dialog__note">Nánari bókarupplýsingar verða settar inn í samráði við útgefanda.</p>
      </div>
    </div>
  </dialog>

  <script type="application/json" id="book-data">${JSON.stringify(dialogData)}</script>
  <script src="main.js" defer></script>
</body>
</html>
`;
}
