// Content for the Tindur demo homepage.
// Rule: only facts visible in the supplied artwork or given in the brief.
// Unknown fields stay null and are listed in `needsConfirmation`.

export const contact = {
  name: 'Helgi Jónsson',
  phoneDisplay: '777 2777',
  phoneHref: 'tel:+3547772777',
  email: 'helgihjojonsson@gmail.com',
};

// Image sources. `file` is the untouched original in /originals.
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
  freddi: {
    file: 'Freddi-kápa.webp',
    width: 1306, height: 1910,
    widths: [320, 480, 720, 1000],
    fallback: 'jpg',
    alt: 'Kápa: teiknaður, brosandi strákur í hettupeysu lyftir fæti',
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

// Every factual field below is visible on the supplied cover.
export const books = [
  {
    id: 'fuglar',
    title: 'Fuglar í íslenskri náttúru',
    author: 'María Björg Gunnarsdóttir',
    illustrator: null,
    asset: 'fuglar',
    category: null,
    confirmedFacts: ['Titill og höfundur sjást á kápu'],
    needsConfirmation: ['Lýsing', 'Ljósmyndari', 'Útgáfuár', 'ISBN', 'Verð', 'Blaðsíðufjöldi', 'Markhópur'],
  },
  {
    id: 'enginn',
    title: 'Enginn kom í dag',
    author: 'Helgi Jónsson',
    illustrator: null,
    asset: 'enginn',
    category: null,
    confirmedFacts: ['Titill og höfundur sjást á kápu'],
    needsConfirmation: ['Lýsing', 'Höfundur kápuljósmyndar', 'Útgáfuár', 'ISBN', 'Verð'],
  },
  {
    id: 'barnabok',
    title: 'Barnabók',
    subtitle: 'Hundrað og ein saga af Akureyri æsku minnar',
    author: 'Sigmundur Ernir Rúnarsson',
    illustrator: null,
    asset: 'barnabok',
    category: null, // Not a children's book just because of the title.
    confirmedFacts: ['Titill, undirtitill og höfundur sjást á kápu'],
    needsConfirmation: ['Lýsing', 'Bókaflokkur', 'Útgáfuár', 'ISBN', 'Verð'],
  },
  {
    id: 'freddi',
    title: 'Freddi fretari',
    author: 'Helgi Jónsson',
    illustrator: 'Hrannar Atli Hauksson',
    asset: 'freddi',
    category: 'barnabaekur',
    confirmedFacts: ['Titill, höfundur og myndskreytir sjást á kápu', 'Hluti af barnabókaflokki á kynningarmynd'],
    needsConfirmation: ['Lýsing', 'Útgáfuár', 'ISBN', 'Verð', 'Aldursviðmið'],
  },
];

// Titles as printed on the children's-series montage, left to right.
// NOTE: the brief lists "Inga syngur"; the artwork reads "Inga slynga".
export const series = [
  { title: 'Freddi fretari', accent: '#2b8f83' },
  { title: 'Inga slynga', accent: '#c9452c' },
  { title: 'Dóri stóri', accent: '#d2a43b' },
  { title: 'Sibba subb', accent: '#e07a2e' },
];
