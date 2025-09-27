const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'public/images/attractions/xian-city-wall.jpg',
  'public/images/attractions/victoria-peak.jpg',
  'public/images/attractions/terracotta-army.jpg',
  'public/images/attractions/temple-street.jpg',
  'public/images/attractions/tian-tan-buddha.jpg',
  'public/images/cities/hongkong.jpg',
  'public/images/cities/xian.jpg'
];

async function compressImages() {
  console.log('Starting compression for Xi\'an and Hong Kong images...\n');
  
  let totalOriginal = 0;
  let totalCompressed = 0;
  
  for (const imagePath of images) {
    try {
      const fullPath = path.join(__dirname, imagePath);
      const stats = fs.statSync(fullPath);
      const originalSize = stats.size;
      totalOriginal += originalSize;
      
      console.log(`Processing ${imagePath}...`);
      console.log(`Original: ${(originalSize/1024/1024).toFixed(1)}MB`);
      
      // Create backup
      const backupPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.backup.$1');
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(fullPath, backupPath);
      }
      
      const image = sharp(fullPath);
      const metadata = await image.metadata();
      
      let compressedBuffer;
      
      if (metadata.format === 'jpeg') {
        compressedBuffer = await image
          .jpeg({
            quality: 75,
            progressive: true,
            mozjpeg: true,
            trellisQuantisation: true,
            overshootDeringing: true,
            optimiseScans: true,
            optimiseCoding: true
          })
          .toBuffer();
      } else if (metadata.format === 'png') {
        compressedBuffer = await image
          .png({
            quality: 75,
            compressionLevel: 9,
            adaptiveFiltering: false,
            effort: 10
          })
          .toBuffer();
      } else {
        console.log(`Skipping ${imagePath} - unsupported format`);
        continue;
      }
      
      fs.writeFileSync(fullPath, compressedBuffer);
      const newSize = fs.statSync(fullPath).size;
      totalCompressed += newSize;
      
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      console.log(`✓ ${imagePath}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
      
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error.message);
    }
  }
  
  const totalSavings = ((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1);
  console.log(`\n✅ Total compression: ${(totalOriginal/1024/1024).toFixed(1)}MB → ${(totalCompressed/1024/1024).toFixed(1)}MB (${totalSavings}% reduction)`);
}

compressImages().catch(console.error);