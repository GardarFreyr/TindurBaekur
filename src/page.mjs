import { images, series, contact } from './data.mjs';
import { books } from './books.mjs';

// Launch switch. TINDUR_PUBLIC=1 makes the site indexable (no noindex, adds
// canonical URLs and a sitemap). Keep it off until the client approves launch.
export const PUBLIC = process.env.TINDUR_PUBLIC === '1';
export const SITE_URL = 'https://tindurutgafa.is';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const bySlug = Object.fromEntries(books.map((b) => [b.slug, b]));
const byTitle = Object.fromEntries(books.map((b) => [b.title, b]));
const bookUrl = (b) => `/baekur/${b.slug}/`;

// <picture> with WebP + fallback; fixed intrinsic size avoids layout shift.
function picture(key, { sizes = '100vw', alt, cls = '', eager = false, priority = false } = {}) {
  const img = images[key];
  const set = (fmt) => img.widths.map((w) => `/img/${key}-${w}.${fmt} ${Math.min(w, img.width)}w`).join(', ');
  const fallbackW = img.widths[Math.min(1, img.widths.length - 1)];
  return `<picture>
      <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
      <img src="/img/${key}-${fallbackW}.${img.fallback}" srcset="${set(img.fallback)}" sizes="${sizes}"
        width="${img.width}" height="${img.height}" alt="${esc(alt ?? img.alt ?? '')}"${cls ? ` class="${cls}"` : ''}
        ${eager ? 'loading="eager"' : 'loading="lazy"'} decoding="async"${priority ? ' fetchpriority="high"' : ''}>
    </picture>`;
}

// Cover, or a typographic stand-in when no cover image has been supplied yet.
function cover(book, { sizes, alt = '', eager = false, priority = false } = {}) {
  if (!book.cover) {
    return `<div class="cover cover--missing" role="img" aria-label="${esc(`${book.title} – ${book.author}`)}">
      <span class="cover__mark" aria-hidden="true"></span>
      <span class="cover__title" aria-hidden="true">${esc(book.title)}</span>
      <span class="cover__author" aria-hidden="true">${esc(book.author)}</span>
    </div>`;
  }
  const img = images[book.cover];
  return `<div class="cover" style="aspect-ratio:${img.width}/${img.height}">${picture(book.cover, { sizes, alt, eager, priority })}</div>`;
}

const navItems = [
  ['/#forsida', 'Forsíða'],
  ['/#baekur', 'Bækur'],
  ['/#barnabaekur', 'Barnabækur'],
  ['/#um-tind', 'Um Tind'],
  ['/#hafa-samband', 'Hafa samband'],
];
const navList = (cls) => `<ul class="${cls}">${navItems.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul>`;
const logo = (sizes, cls, eager = false) => picture('logo', { sizes, alt: 'Tindur', cls, eager });

function layout({ title, description, body, path = '/' }) {
  return `<!doctype html>
<html lang="is" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  ${PUBLIC ? `<link rel="canonical" href="${SITE_URL}${path}">\n  <meta property="og:url" content="${SITE_URL}${path}">` : '<meta name="robots" content="noindex, nofollow">'}
  <meta name="description" content="${esc(description)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="is_IS">
  <meta name="theme-color" content="#111111">
  <link rel="icon" type="image/png" href="/img/logo-240.png">
  <link rel="preload" href="/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/styles.css">
  <script>document.documentElement.classList.replace('no-js','js')</script>
</head>
<body>
  <a class="skip" href="#efni">Fara beint í efni</a>

  <header class="site-header" data-header>
    <div class="site-header__inner">
      <a class="site-header__logo" href="/#forsida" aria-label="Tindur – forsíða">
        ${logo('64px', 'logo-img', true)}
      </a>
      <nav class="site-nav" aria-label="Aðalvalmynd">
        ${navList('site-nav__list')}
      </nav>
      <a class="btn btn--primary site-header__cta" href="/#baekur">Skoða bækurnar</a>
      <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span class="menu-toggle__bars" aria-hidden="true"><span></span><span></span></span>
        <span class="menu-toggle__label">Valmynd</span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden data-menu>
      <nav aria-label="Valmynd fyrir síma">
        ${navList('mobile-menu__list')}
      </nav>
      <a class="btn btn--primary mobile-menu__cta" href="/#baekur">Skoða bækurnar</a>
    </div>
  </header>

  <main id="efni">
${body}
  </main>

  <footer class="site-footer">
    <div class="container site-footer__grid">
      <a class="site-footer__logo" href="/#forsida" aria-label="Tindur – efst á forsíðu">${logo('140px', 'logo-img')}</a>
      <nav aria-label="Fótur">${navList('site-footer__nav')}</nav>
      <div class="site-footer__contact">
        <p>${contact.name}</p>
        <p><a href="${contact.phoneHref}">${contact.phoneDisplay}</a></p>
        <p><a href="mailto:${contact.email}">${contact.email}</a></p>
      </div>
    </div>
    <div class="container site-footer__base">
      <p>© ${new Date().getFullYear()} Bókaútgáfan Tindur</p>
      <p>Vefhönnun: Gardarvefur</p>
    </div>
  </footer>

  <script src="/main.js" defer></script>
</body>
</html>
`;
}

// ---------- Homepage ----------

const excerpt = (b) => b.description[0] ?? b.quote?.text ?? '';
const credit = (b) => [b.translator && `Íslensk þýðing: ${b.translator}`, b.illustrator && `Myndskreyting: ${b.illustrator}`].filter(Boolean);

function card(b, { featured = false } = {}) {
  const tags = [b.audience.includes('ungir') && 'ungir', b.translated && 'thyddar'].filter(Boolean).join(' ');
  const sizes = featured ? '(min-width: 1100px) 220px, (min-width: 700px) 18vw, 34vw' : '(min-width: 1100px) 260px, (min-width: 700px) 30vw, 45vw';
  return `<li class="catalog__item${featured ? ' catalog__item--new' : ''}" data-tags="${tags}" data-reveal>
      <article class="card${featured ? ' card--new' : ''}">
        <div class="card__shelf">${cover(b, { sizes })}</div>
        <div class="card__meta">
          <h3 class="card__title"><a class="card__link" href="${bookUrl(b)}">${esc(b.title)}</a></h3>
          <p class="card__author">${esc(b.author)}</p>
          ${credit(b).map((c) => `<p class="card__credit">${esc(c)}</p>`).join('')}
          <p class="card__excerpt">${esc(excerpt(b))}</p>
          <span class="card__more" aria-hidden="true">Lesa meira</span>
        </div>
      </article>
    </li>`;
}

function homeBody() {
  const freddi = byTitle['Freddi fretari'], enginn = byTitle['Enginn kom í dag'], barnabok = byTitle['Barnabók'];
  const fuglar = byTitle['Fuglar í íslenskri náttúru'], brostu = byTitle['Brostu'], systur = byTitle['Systur'];
  const kids = books.filter((b) => b.audience.includes('ungir')).length;
  const translated = books.filter((b) => b.translated).length;
  const newest = books.filter((b) => b.group === 'newest');
  const rest = books.filter((b) => b.group !== 'newest');
  return `
    <!-- HERO -->
    <section class="hero" id="forsida" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__text">
          <p class="eyebrow">Bókaútgáfan Tindur</p>
          <h1 id="hero-title" class="hero__title">Bækur sem rata til&nbsp;lesenda.</h1>
          <p class="hero__lede">Tindur gefur út fjölbreytt verk fyrir unga sem eldri lesendur.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#baekur">Skoða útgáfuna</a>
            <a class="btn btn--ghost" href="#hafa-samband">Hafa samband</a>
          </div>
        </div>
        <div class="hero__stage" aria-label="Bókakápur úr útgáfunni" role="group">
          <a class="stage-book stage-book--1" href="${bookUrl(enginn)}">${picture('enginn', { sizes: '(min-width: 960px) 20vw, 34vw', eager: true, alt: 'Enginn kom í dag' })}</a>
          <a class="stage-book stage-book--2" href="${bookUrl(freddi)}">${picture('freddi-fretari', { sizes: '(min-width: 960px) 22vw, 38vw', eager: true, priority: true, alt: 'Freddi fretari' })}</a>
          <a class="stage-book stage-book--3" href="${bookUrl(barnabok)}">${picture('barnabok', { sizes: '(min-width: 960px) 19vw, 32vw', eager: true, alt: 'Barnabók' })}</a>
          <div class="stage-shadow" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- CATALOGUE -->
    <section class="section catalog" id="baekur" aria-labelledby="pub-title">
      <div class="container">
        <header class="section-head catalog__head" data-reveal>
          <p class="eyebrow">Úr útgáfunni</p>
          <h2 id="pub-title" class="section-title">Sögur, fróðleikur og bækur fyrir nýja lesendur.</h2>
        </header>
        <div class="catalog__bar">
          <div class="filters" role="group" aria-label="Sía bækur" data-filters hidden>
            <button type="button" class="filter" aria-pressed="true" data-filter="">Allar bækur <span>${books.length}</span></button>
            <button type="button" class="filter" aria-pressed="false" data-filter="ungir">Fyrir unga lesendur <span>${kids}</span></button>
            <button type="button" class="filter" aria-pressed="false" data-filter="thyddar">Þýddar bækur <span>${translated}</span></button>
          </div>
        </div>
        <p class="visually-hidden" aria-live="polite" data-filter-status></p>
        <div class="catalog__group catalog__group--new" data-group>
          <h3 class="catalog__group-title">Nýjustu bækurnar</h3>
          <ul class="catalog__grid catalog__grid--new" role="list">
            ${newest.map((b) => card(b, { featured: true })).join('\n            ')}
          </ul>
        </div>
        <div class="catalog__group" data-group>
          <h3 class="catalog__group-title">Fleiri bækur</h3>
          <ul class="catalog__grid" role="list">
            ${rest.map((b) => card(b)).join('\n            ')}
          </ul>
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
        <h2 id="feature-title" class="section-title section-title--light">Íslensk náttúra í&nbsp;öndvegi.</h2>
        <p class="feature__book"><span class="feature__book-title">${esc(fuglar.title)}</span>
          <span class="feature__book-author">${esc(fuglar.author)}</span></p>
        <p class="feature__desc">${esc(fuglar.description[0])}</p>
        <a class="btn btn--light" href="${bookUrl(fuglar)}">Um bókina</a>
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
        <ul class="kids__titles" aria-label="Bækur í barnabókaflokknum" data-reveal>
          ${series.map((s) => `<li style="--accent:${s.accent}"><a href="${bookUrl(byTitle[s.title])}"><span class="kids__dot" aria-hidden="true"></span>${esc(s.title)}</a></li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- BROSTU / SYSTUR -->
    <section class="section systur" aria-labelledby="systur-title">
      <div class="container systur__grid">
        <div class="systur__text" data-reveal>
          <p class="eyebrow">Framhaldið er komið</p>
          <h2 id="systur-title" class="section-title">Brostu og Systur</h2>
          <p class="systur__author">Raina Telgemeier<span>Íslensk þýðing: Helgi Jónsson</span></p>
          <p>Systur er óbeint framhald af Brostu.</p>
          <p class="systur__links"><a href="${bookUrl(brostu)}">Um Brostu</a><a href="${bookUrl(systur)}">Um Systur</a></p>
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
          <p class="about__lede">Bókaútgáfan Tindur stendur að fjölbreyttri útgáfu þar sem íslensk verk, þýddar bækur og efni fyrir yngri lesendur fá skýra og vandaða framsetningu.</p>
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
    </section>`;
}

export function renderHome() {
  return layout({
    title: 'Bókaútgáfan Tindur',
    description: 'Tindur gefur út fjölbreytt verk fyrir unga sem eldri lesendur.',
    body: homeBody(),
  });
}

// ---------- Book detail page ----------

export function renderBook(b) {
  const i = books.indexOf(b);
  const prev = books[i - 1], next = books[i + 1];
  const credits = [['Höfundur', b.author], ['Íslensk þýðing', b.translator], ['Myndskreyting', b.illustrator]].filter(([, v]) => v);
  const eyebrow = b.series ? 'Barnabókaflokkur' : 'Úr útgáfunni';
  const body = `
    <article class="bookpage">
      <div class="container">
        <nav class="bookpage__crumbs" aria-label="Brauðmolar">
          <a href="/#baekur"><span aria-hidden="true">←</span> Allar bækur</a>
        </nav>
        <div class="bookpage__grid">
          <div class="bookpage__cover">
            ${cover(b, { sizes: '(min-width: 900px) 380px, 70vw', alt: `Kápa bókarinnar ${b.title}`, eager: true, priority: true })}
          </div>
          <div class="bookpage__body">
            <p class="eyebrow">${eyebrow}</p>
            <h1 class="bookpage__title">${esc(b.title)}</h1>
            ${b.subtitle ? `<p class="bookpage__subtitle">${esc(b.subtitle)}</p>` : ''}
            <dl class="bookpage__credits">
              ${credits.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}
            </dl>
            <div class="prose">
              ${b.description.map((p) => `<p>${esc(p)}</p>`).join('\n              ')}
              ${b.quote ? `<blockquote class="bookpage__quote"><p>${esc(b.quote.text)}</p><footer>— ${esc(b.quote.cite)}</footer></blockquote>` : ''}
            </div>
            ${b.about ? `<section class="bookpage__about" aria-labelledby="about-h"><h2 id="about-h">${b.aboutHeading}</h2>${b.about.map((p) => `<p>${esc(p)}</p>`).join('')}</section>` : ''}
          </div>
        </div>
        <nav class="pager" aria-label="Fleiri bækur">
          ${prev ? `<a class="pager__link pager__link--prev" href="${bookUrl(prev)}"><span class="pager__label">Fyrri bók</span><span class="pager__title">${esc(prev.title)}</span></a>` : '<span></span>'}
          ${next ? `<a class="pager__link pager__link--next" href="${bookUrl(next)}"><span class="pager__label">Næsta bók</span><span class="pager__title">${esc(next.title)}</span></a>` : ''}
        </nav>
      </div>
    </article>`;
  return layout({
    title: `${b.title} – Bókaútgáfan Tindur`,
    description: `${b.title} eftir ${b.author}. Bókaútgáfan Tindur.`,
    body,
    path: bookUrl(b),
  });
}

export { books, bySlug };
