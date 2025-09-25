const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const largeImages = [
  'public/images/hero.jpg',
  'public/images/cities/shanghai.jpg',
  'public/images/cities/chengdu.jpg',
  'public/images/cities/beijing.jpg',
  'public/images/attractions/forbidden-city.jpg',
  'public/images/attractions/great-wall.jpg',
  'public/images/attractions/giant-panda-base.jpg',
  'public/images/attractions/the-bund.jpg'
];

async function compressLargeImage(inputPath) {
  try {
    const fullPath = path.join(__dirname, inputPath);
    
    // Check if file is still larger than 1MB
    const stats = fs.statSync(fullPath);
    if (stats.size < 1024 * 1024) {
      console.log(`Skipping ${inputPath} - already under 1MB`);
      return;
    }
    
    const image = sharp(fullPath);
    const metadata = await image.metadata();
    
    console.log(`Compressing large image ${inputPath} (${metadata.width}x${metadata.height}, ${(stats.size/1024/1024).toFixed(1)}MB)...`);
    
    let compressedBuffer;
    
    if (metadata.format === 'jpeg') {
      // More aggressive JPEG compression
      compressedBuffer = await image
        .jpeg({
          quality: 70, // Lower quality for more compression
          progressive: true,
          mozjpeg: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimiseScans: true,
          optimiseCoding: true
        })
        .toBuffer();
    } else if (metadata.format === 'png') {
      // More aggressive PNG compression
      compressedBuffer = await image
        .png({
          quality: 70,
          compressionLevel: 9,
          adaptiveFiltering: false,
          effort: 10,
          palette: true // Use palette for better compression
        })
        .toBuffer();
    } else {
      console.log(`Skipping ${inputPath} - unsupported format`);
      return;
    }
    
    // Write compressed image
    fs.writeFileSync(fullPath, compressedBuffer);
    
    const newSize = fs.statSync(fullPath).size;
    const savings = ((stats.size - newSize) / stats.size * 100).toFixed(1);
    
    console.log(`✓ ${inputPath}: ${(stats.size/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
    
    // Check if still over 1MB and warn
    if (newSize > 1024 * 1024) {
      console.log(`⚠️  ${inputPath} is still ${(newSize/1024/1024).toFixed(1)}MB - consider reducing quality further`);
    }
    
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting aggressive compression for large images...\n');
  
  for (const imagePath of largeImages) {
    await compressLargeImage(imagePath);
  }
  
  console.log('\n✅ Large image compression completed!');
}

main().catch(console.error);