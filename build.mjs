// Static build: makes image derivatives, copies fonts, renders dist/index.html.
// Originals in /originals are only read, never written.
import sharp from 'sharp';
import { mkdir, copyFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { images } from './src/data.mjs';
import { renderPage } from './src/page.mjs';

const DIST = 'dist';
const FONTS = [
  ['@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2', 'fraunces.woff2'],
  ['@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2', 'fraunces-italic.woff2'],
  ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter.woff2'],
];

await rm(DIST, { recursive: true, force: true });
await mkdir(`${DIST}/img`, { recursive: true });
await mkdir(`${DIST}/fonts`, { recursive: true });

for (const [from, to] of FONTS) await copyFile(`node_modules/${from}`, `${DIST}/fonts/${to}`);

const cache = '.cache/img';
await mkdir(cache, { recursive: true });

for (const [key, img] of Object.entries(images)) {
  const input = `originals/${img.file}`;
  for (const w of img.widths) {
    const width = Math.min(w, img.width);
    for (const fmt of ['webp', img.fallback]) {
      const name = `${key}-${w}.${fmt}`;
      const cached = `${cache}/${name}`;
      if (!existsSync(cached)) {
        let p = sharp(input).resize({ width, withoutEnlargement: true });
        if (fmt === 'webp') p = p.webp({ quality: 84, alphaQuality: 100 });
        if (fmt === 'jpg') p = p.flatten({ background: '#ffffff' }).jpeg({ quality: 84, mozjpeg: true });
        if (fmt === 'png') p = p.png({ compressionLevel: 9 });
        await p.toFile(cached);
      }
      await copyFile(cached, `${DIST}/img/${name}`);
    }
  }
}

for (const f of ['styles.css', 'main.js']) await copyFile(`src/${f}`, `${DIST}/${f}`);
await writeFile(`${DIST}/robots.txt`, '# Sýnidæmi – ekki til birtingar\nUser-agent: *\nDisallow: /\n');
await writeFile(`${DIST}/index.html`, renderPage());
console.log('Built dist/');
