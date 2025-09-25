const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ultraLargeImages = [
  'public/images/cities/beijing.jpg',
  'public/images/cities/chengdu.jpg',
  'public/images/attractions/great-wall.jpg',
  'public/images/attractions/giant-panda-base.jpg'
];

async function compressUltra(inputPath) {
  try {
    const fullPath = path.join(__dirname, inputPath);
    const stats = fs.statSync(fullPath);
    
    console.log(`Ultra compression for ${inputPath} (${(stats.size/1024/1024).toFixed(1)}MB)...`);
    
    const image = sharp(fullPath);
    const metadata = await image.metadata();
    
    // Try different quality levels to get under 1MB
    let quality = 60;
    let compressedBuffer;
    let newSize;
    
    while (quality >= 40) {
      compressedBuffer = await image
        .jpeg({
          quality: quality,
          progressive: true,
          mozjpeg: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimiseScans: true,
          optimiseCoding: true
        })
        .toBuffer();
      
      newSize = compressedBuffer.length;
      
      if (newSize < 1024 * 1024) {
        break;
      }
      
      quality -= 5;
    }
    
    // If still over 1MB, try with resize (keeping aspect ratio)
    if (newSize > 1024 * 1024) {
      console.log(`⚠️  Still over 1MB, trying with slight resize...`);
      
      // Calculate new dimensions to reduce file size
      const maxDimension = Math.max(metadata.width, metadata.height);
      let scaleFactor = 0.9; // Start with 90% of original
      
      while (scaleFactor >= 0.5 && newSize > 1024 * 1024) {
        const newWidth = Math.round(metadata.width * scaleFactor);
        const newHeight = Math.round(metadata.height * scaleFactor);
        
        compressedBuffer = await image
          .resize(newWidth, newHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({
            quality: 65,
            progressive: true,
            mozjpeg: true
          })
          .toBuffer();
        
        newSize = compressedBuffer.length;
        scaleFactor -= 0.1;
      }
    }
    
    // Write final compressed image
    fs.writeFileSync(fullPath, compressedBuffer);
    
    const savings = ((stats.size - newSize) / stats.size * 100).toFixed(1);
    console.log(`✓ ${inputPath}: ${(stats.size/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
    
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting ultra compression for remaining large images...\n');
  
  for (const imagePath of ultraLargeImages) {
    await compressUltra(imagePath);
  }
  
  console.log('\n✅ Ultra compression completed!');
}

main().catch(console.error);