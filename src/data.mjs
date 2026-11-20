// Site content for Bókaútgáfan Tindur.
// Rule: only facts visible in the supplied artwork or given in the brief.
// Unknown fields stay null and are listed in `needsConfirmation`.

export const contact = {
  name: 'Helgi Jónsson',
  phoneDisplay: '777 2777',
  phoneHref: 'tel:+3547772777',
  email: 'helgihjojonsson@gmail.com',
};

// Image sources. `file` is the untouched original in /originals.
import { coverImages } from './books.mjs';

export const images = {
  logo: {
    file: 'Tindur-logo-á-dökt.png',
    width: 2000, height: 1692,
    widths: [240, 480, 960],
    fallback: 'png',
  },
  fuglar: {
    file: 'Fuglar.webp',
    width: 2000, height: 1553,
    widths: [640, 1000, 1400, 2000],
    fallback: 'jpg',
    alt: 'Kápa: brandugla situr á tréstaur í grænu grasi',
  },
  enginn: {
    file: 'Enginn-netið nýrri.webp',
    width: 1080, height: 1693,
    widths: [320, 480, 720, 1080],
    fallback: 'jpg',
    alt: 'Kápa: eldri maður skrifar í opna bók við skrifborð',
  },
  barnabok: {
    file: 'BarnabokSER_kapaNY.webp',
    width: 1080, height: 1627,
    widths: [320, 480, 720, 1080],
    fallback: 'jpg',
    alt: 'Kápa: svarthvít ljósmynd af ungum dreng á þríhjóli á gulum grunni',
  },
  systur: {
    file: 'Tindur_SYSTUR_1095x386p.png',
    width: 1095, height: 386,
    widths: [600, 1095],
    fallback: 'jpg',
    alt: 'Kynningarborði fyrir bækurnar Brostu og Systur eftir Raina Telgemeier. Á borðanum stendur: Fyrst var það Brostu. Nú er framhaldið komið. Systur – skemmtileg stelpubók.',
  },
  skyggna: {
    file: 'Tindur_skyggna-barnabækur.webp',
    width: 1920, height: 1080,
    widths: [800, 1280, 1920],
    fallback: 'jpg',
    alt: 'Kynningarmynd með fjórum bókakápum úr barnabókaflokki Helga Jónssonar. Á myndinni stendur: Tvær nýjar í þessum barnabókaflokki. Líflegar bækur fyrir yngri lesendur.',
  },
};

// Supplied covers (originals/kapur/).
const STEPS = [360, 540, 720, 960];
for (const [key, [width, height, ext = 'jpg']] of Object.entries(coverImages)) {
  images[key] = {
    file: `kapur/${key}.${ext}`, width, height,
    widths: [...STEPS.filter((w) => w < width - 40), width],
    fallback: 'jpg',
  };
}
images.enginn.widths = [360, 540, 720, 1080];
images.barnabok.widths = [360, 540, 720, 1080];

// Titles as printed on the children's-series montage, left to right.
// The brief listed "Inga syngur"; artwork, cover and Word document all say "Inga slynga".
export const series = [
  { title: 'Freddi fretari', accent: '#2b8f83' },
  { title: 'Inga slynga', accent: '#c9452c' },
  { title: 'Dóri stóri', accent: '#d2a43b' },
  { title: 'Sibba subb', accent: '#e07a2e' },
];
