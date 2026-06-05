const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processImages(fullPath);
    } else if (entry.isFile() && fullPath.match(/\.(jpg|jpeg|png|webp)$/i)) {
      try {
        const buffer = fs.readFileSync(fullPath);
        
        // compress and overwrite
        await sharp(buffer)
          .resize({ width: 800, withoutEnlargement: true }) // resize to 800px max
          .jpeg({ quality: 60, progressive: true, mozjpeg: true }) // extremely optimized mozjpeg
          .toFile(fullPath);
          
        console.log(`Recompressed ${entry.name}`);
      } catch (e) {
        console.error(`Failed to process ${fullPath}:`, e);
      }
    }
  }
}

console.log('Starting deep recompression...');
processImages(path.join(__dirname, 'public', 'gallery')).then(() => console.log('Compression complete!'));
