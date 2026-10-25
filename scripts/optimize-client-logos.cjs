const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logosDir = path.resolve(__dirname, '../public/images/clients logo/clean');
const contactDir = path.resolve(__dirname, '../public/images/contact');

async function optimizeLogos() {
  console.log('🔄 Optimizing Client Logos in:', logosDir);
  const files = fs.readdirSync(logosDir).filter(f => f.endsWith('.png'));

  let totalOriginal = 0;
  let totalOptimizedPng = 0;
  let totalOptimizedWebp = 0;

  for (const file of files) {
    const filePath = path.join(logosDir, file);
    const origStats = fs.statSync(filePath);
    totalOriginal += origStats.size;

    const baseName = path.parse(file).name;
    const webpPath = path.join(logosDir, `${baseName}.webp`);

    // 1. Generate WebP (300x100 fit inside)
    await sharp(filePath)
      .resize({ width: 300, height: 100, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    const webpStats = fs.statSync(webpPath);
    totalOptimizedWebp += webpStats.size;

    // 2. Overwrite PNG with compressed resized version
    const tempPngPath = path.join(logosDir, `${baseName}.temp.png`);
    await sharp(filePath)
      .resize({ width: 300, height: 100, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 85 })
      .toFile(tempPngPath);
    fs.renameSync(tempPngPath, filePath);
    const newPngStats = fs.statSync(filePath);
    totalOptimizedPng += newPngStats.size;

    console.log(`  ✓ ${file}: ${(origStats.size / 1024).toFixed(1)} KB -> PNG: ${(newPngStats.size / 1024).toFixed(1)} KB | WebP: ${(webpStats.size / 1024).toFixed(1)} KB`);
  }

  console.log('\n📊 CLIENT LOGOS SUMMARY:');
  console.log(`  Original Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Optimized PNG Total: ${(totalOptimizedPng / 1024).toFixed(1)} KB (${((1 - totalOptimizedPng / totalOriginal) * 100).toFixed(1)}% savings)`);
  console.log(`  Optimized WebP Total: ${(totalOptimizedWebp / 1024).toFixed(1)} KB (${((1 - totalOptimizedWebp / totalOriginal) * 100).toFixed(1)}% savings)`);
}

async function optimizeContactBadges() {
  if (!fs.existsSync(contactDir)) return;
  console.log('\n🔄 Optimizing Contact Badges in:', contactDir);
  const files = fs.readdirSync(contactDir).filter(f => f.endsWith('.png'));

  for (const file of files) {
    const filePath = path.join(contactDir, file);
    const origStats = fs.statSync(filePath);
    const baseName = path.parse(file).name;
    const webpPath = path.join(contactDir, `${baseName}.webp`);

    await sharp(filePath)
      .resize({ width: 400, height: 400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const tempPngPath = path.join(contactDir, `${baseName}.temp.png`);
    await sharp(filePath)
      .resize({ width: 400, height: 400, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 85 })
      .toFile(tempPngPath);
    fs.renameSync(tempPngPath, filePath);

    const newPngStats = fs.statSync(filePath);
    console.log(`  ✓ ${file}: ${(origStats.size / 1024).toFixed(1)} KB -> ${(newPngStats.size / 1024).toFixed(1)} KB`);
  }
}

async function run() {
  await optimizeLogos();
  await optimizeContactBadges();
  console.log('\n🚀 ALL IMAGES OPTIMIZED SUCCESSFULLY!\n');
}

run().catch(console.error);
