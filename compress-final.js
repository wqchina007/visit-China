const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const largeImages = [
  'public/images/attractions/terracotta-army.jpg',
  'public/images/cities/xian.jpg'
];

async function compressFinal() {
  console.log('Final compression for remaining large images...\n');
  
  for (const imagePath of largeImages) {
    try {
      const fullPath = path.join(__dirname, imagePath);
      const stats = fs.statSync(fullPath);
      
      console.log(`Processing ${imagePath}...`);
      console.log(`Original: ${(stats.size/1024/1024).toFixed(1)}MB`);
      
      const image = sharp(fullPath);
      
      // Ultra aggressive compression
      const compressedBuffer = await image
        .jpeg({
          quality: 35,
          progressive: true,
          mozjpeg: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimiseScans: true,
          optimiseCoding: true
        })
        .toBuffer();
      
      fs.writeFileSync(fullPath, compressedBuffer);
      const newSize = compressedBuffer.length;
      
      const savings = ((stats.size - newSize) / stats.size * 100).toFixed(1);
      console.log(`✓ ${imagePath}: ${(stats.size/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
      
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error.message);
    }
  }
}

compressFinal().catch(console.error);