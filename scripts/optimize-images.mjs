import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('public/images/hero-3d-rocket-transparent.png');
const outputDir = path.resolve('public/images/hero');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const inputStats = fs.statSync(inputPath);
console.log(`Original image size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB (${inputStats.size} bytes)`);

const targets = [
  { width: 480, name: 'hero-rocket-480' },
  { width: 768, name: 'hero-rocket-768' },
  { width: 1200, name: 'hero-rocket-1200' },
];

async function generate() {
  for (const target of targets) {
    // Generate WebP
    const webpPath = path.join(outputDir, `${target.name}.webp`);
    await sharp(inputPath)
      .resize({ width: target.width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    const webpStats = fs.statSync(webpPath);
    console.log(`Generated ${target.name}.webp: ${(webpStats.size / 1024).toFixed(1)} KB (${webpStats.size} bytes)`);

    // Generate AVIF
    const avifPath = path.join(outputDir, `${target.name}.avif`);
    await sharp(inputPath)
      .resize({ width: target.width, withoutEnlargement: true })
      .avif({ quality: 55, effort: 6 })
      .toFile(avifPath);
    const avifStats = fs.statSync(avifPath);
    console.log(`Generated ${target.name}.avif: ${(avifStats.size / 1024).toFixed(1)} KB (${avifStats.size} bytes)`);
  }
}

generate().catch(console.error);
