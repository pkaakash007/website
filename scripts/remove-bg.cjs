const fs = require("fs");
const { PNG } = require("pngjs");

const srcPath = "/tmp/temp-hero.png";
const outPath = "/Users/uitglobalsolutions/ak demo/public/images/hero-3d-rocket-transparent.png";

fs.createReadStream(srcPath)
  .pipe(new PNG())
  .on("parsed", function () {
    const w = this.width;
    const h = this.height;
    const data = this.data;

    const isBgPixel = (x, y) => {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const diff = max - min;
      const l = 0.299 * r + 0.587 * g + 0.114 * b;

      // Pure off-white / white background
      if (l >= 240 && diff <= 20) return true;
      // Soft ambient light floor at bottom & left
      if (l >= 180 && diff <= 45 && b >= r && (x < 300 || y > h - 150)) return true;
      // Perimeter background
      if (l >= 200 && diff <= 30 && (y < 160 || y > h - 160 || x < 280 || x > w - 160)) return true;
      return false;
    };

    // BFS Queue
    const visited = new Uint8Array(w * h);
    const isBackground = new Uint8Array(w * h);
    const queue = [];

    // Push all boundary pixels
    for (let x = 0; x < w; x++) {
      if (isBgPixel(x, 0)) {
        queue.push((0 * w) + x);
        visited[(0 * w) + x] = 1;
      }
      if (isBgPixel(x, h - 1)) {
        queue.push(((h - 1) * w) + x);
        visited[((h - 1) * w) + x] = 1;
      }
    }
    for (let y = 0; y < h; y++) {
      if (!visited[y * w] && isBgPixel(0, y)) {
        queue.push(y * w);
        visited[y * w] = 1;
      }
      if (!visited[y * w + (w - 1)] && isBgPixel(w - 1, y)) {
        queue.push(y * w + (w - 1));
        visited[y * w + (w - 1)] = 1;
      }
    }

    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++];
      isBackground[curr] = 1;
      const cx = curr % w;
      const cy = Math.floor(curr / w);

      // Check 4 neighbors
      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1],
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nIdx = ny * w + nx;
          if (!visited[nIdx]) {
            visited[nIdx] = 1;
            if (isBgPixel(nx, ny)) {
              queue.push(nIdx);
            }
          }
        }
      }
    }

    console.log(`Identified ${queue.length} background pixels out of ${w * h}`);

    // Apply transparency with anti-aliasing
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pIdx = y * w + x;
        const dIdx = pIdx * 4;

        if (isBackground[pIdx]) {
          data[dIdx + 3] = 0; // Fully transparent
        } else {
          // Check if it neighbors a background pixel for soft edge anti-aliasing
          let bgNeighborCount = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              const nx = x + dx;
              const ny = y + dy;
              if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                if (isBackground[ny * w + nx]) bgNeighborCount++;
              }
            }
          }

          if (bgNeighborCount > 0) {
            const r = data[dIdx];
            const g = data[dIdx + 1];
            const b = data[dIdx + 2];
            const l = 0.299 * r + 0.587 * g + 0.114 * b;
            if (l > 200) {
              const alphaRatio = 1 - (bgNeighborCount / 8);
              data[dIdx + 3] = Math.max(0, Math.min(255, Math.round(alphaRatio * 255)));
            }
          }
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outPath)).on("finish", () => {
      console.log("Saved transparent PNG to", outPath);
    });
  });
