const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'gallery');
const files = fs.readdirSync(dir);

(async () => {
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i) && !file.startsWith('temp_')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      console.log('Compressing', file);
      
      try {
        await sharp(filePath)
          .rotate() // Auto-rotates based on EXIF orientation!
          .resize({ width: 800, withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(tempPath);
          
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
      } catch (e) {
        console.error('Failed on', file, e);
      }
    }
  }
  
  // Write JSON
  const finalFiles = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'gallery-images.json'), JSON.stringify(finalFiles, null, 2));
  
  console.log('Done compressing');
})();
