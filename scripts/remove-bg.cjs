const path = require('path');
const sharp = require('sharp');

async function removeBackground(inputFile, outputFile) {
  console.log(`Processing: ${inputFile}`);
  const image = sharp(inputFile);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  // Get raw RGBA buffer
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Sample corner background color
  let bgR = 0, bgG = 0, bgB = 0, count = 0;

  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
      const idx = (y * width + x) * 4;
      bgR += data[idx];
      bgG += data[idx + 1];
      bgB += data[idx + 2];
      count++;
    }
    for (let x = width - 20; x < width; x++) {
      const idx = (y * width + x) * 4;
      bgR += data[idx];
      bgG += data[idx + 1];
      bgB += data[idx + 2];
      count++;
    }
  }

  bgR = Math.round(bgR / count);
  bgG = Math.round(bgG / count);
  bgB = Math.round(bgB / count);

  console.log(`Sampled Background RGB: (${bgR}, ${bgG}, ${bgB})`);

  // Center of image for coin detection
  const cx = width / 2;
  const cy = height / 2;
  // Coin radius is roughly 36% of image width
  const coinRadius = width * 0.38;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const dx = x - cx;
      const dy = y - cy;
      const distFromCenter = Math.sqrt(dx * dx + dy * dy);

      // Color distance from sampled background
      const colorDist = Math.sqrt(
        (r - bgR) * (r - bgR) +
        (g - bgG) * (g - bgG) +
        (b - bgB) * (b - bgB)
      );

      // If pixel is outside the coin radius AND resembles sky blue / cyan background
      if (distFromCenter > coinRadius) {
        data[i + 3] = 0; // 100% transparent outside coin
      } else if (distFromCenter > coinRadius - 12) {
        // Soft feather edge at coin boundary
        const edgeDist = (coinRadius - distFromCenter) / 12;
        if (colorDist < 80) {
          data[i + 3] = Math.round(Math.max(0, Math.min(255, edgeDist * 255)));
        }
      } else if (colorDist < 50 && (b > 180 || g > 180)) {
        // Transparent for background color bleed inside radius
        data[i + 3] = 0;
      }
    }
  }

  // Save back as transparent PNG
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputFile);

  console.log(`Saved transparent PNG: ${outputFile}`);
}

async function run() {
  const dir = path.join(__dirname, '..', 'public', 'images', 'contact');
  await removeBackground(path.join(dir, 'badge-mail.jpg'), path.join(dir, 'badge-mail.png'));
  await removeBackground(path.join(dir, 'badge-phone.jpg'), path.join(dir, 'badge-phone.png'));
  await removeBackground(path.join(dir, 'badge-whatsapp.jpg'), path.join(dir, 'badge-whatsapp.png'));
}

run().catch(console.error);
