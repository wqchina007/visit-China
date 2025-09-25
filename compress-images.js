const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagePaths = [
  'public/images/hero.jpg',
  'public/images/cities/shanghai.jpg',
  'public/images/cities/hangzhou.jpg',
  'public/images/cities/chengdu.jpg',
  'public/images/cities/beijing.jpg',
  'public/images/attractions/west-lake.jpg',
  'public/images/attractions/the-bund.jpg',
  'public/images/attractions/lingyin-temple.jpg',
  'public/images/attractions/leifeng-pagoda2.jpg',
  'public/images/attractions/leifeng-pagoda.jpg',
  'public/images/attractions/jinli-street.jpg',
  'public/images/attractions/great-wall.jpg',
  'public/images/attractions/forbidden-city.jpg',
  'public/images/attractions/giant-panda-base.jpg'
];

async function compressImage(inputPath) {
  try {
    const fullPath = path.join(__dirname, inputPath);
    const backupPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.backup.$1');
    
    // Create backup
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
    }
    
    const image = sharp(fullPath);
    const metadata = await image.metadata();
    
    console.log(`Compressing ${inputPath} (${metadata.width}x${metadata.height})...`);
    
    let compressedBuffer;
    
    if (metadata.format === 'jpeg') {
      compressedBuffer = await image
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toBuffer();
    } else if (metadata.format === 'png') {
      compressedBuffer = await image
        .png({
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: false
        })
        .toBuffer();
    } else {
      console.log(`Skipping ${inputPath} - unsupported format`);
      return;
    }
    
    // Write compressed image
    fs.writeFileSync(fullPath, compressedBuffer);
    
    const originalSize = fs.statSync(backupPath).size;
    const newSize = fs.statSync(fullPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${inputPath}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${savings}% reduction)`);
    
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image compression...\n');
  
  for (const imagePath of imagePaths) {
    await compressImage(imagePath);
  }
  
  console.log('\n✅ Image compression completed!');
  console.log('💡 Original images backed up with .backup extension');
}

main().catch(console.error);