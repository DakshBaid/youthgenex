import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const galleryDir = path.join(process.cwd(), 'public', 'gallery');
const files = fs.readdirSync(galleryDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

async function compress() {
  for (const file of files) {
    const filePath = path.join(galleryDir, file);
    const tempPath = path.join(galleryDir, 'temp_' + file);
    
    console.log(`Compressing ${file}...`);
    try {
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 75 })
        .toFile(tempPath);
      
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    } catch (e) {
      console.error(`Error compressing ${file}:`, e);
    }
  }
  console.log('Compression complete!');
}

compress();
