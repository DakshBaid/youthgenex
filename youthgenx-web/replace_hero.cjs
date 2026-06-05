const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\daksh\\Downloads\\IMG\\ADI_9170.JPG';
const outputPath = path.join(__dirname, 'public', 'hero.jpeg');

async function processHero() {
  try {
    console.log('Processing new hero image...');
    await sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true }) // standard 1080p width for hero
      .jpeg({ quality: 75, progressive: true, mozjpeg: true })
      .toFile(outputPath);
    console.log('Hero image successfully replaced and compressed!');
  } catch (err) {
    console.error('Error processing hero image:', err);
  }
}

processHero();
