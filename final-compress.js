const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const finalImages = [
  'public/images/cities/beijing.jpg',
  'public/images/attractions/giant-panda-base.jpg'
];

async function finalCompress() {
  for (const imgPath of finalImages) {
    const fullPath = path.join(__dirname, imgPath);
    const stats = fs.statSync(fullPath);
    
    console.log(`Final compression: ${imgPath} (${(stats.size/1024/1024).toFixed(1)}MB)`);
    
    const buffer = await sharp(fullPath)
      .jpeg({ quality: 55, mozjpeg: true })
      .toBuffer();
    
    fs.writeFileSync(fullPath, buffer);
    const newSize = fs.statSync(fullPath).size;
    console.log(`→ ${(newSize/1024/1024).toFixed(1)}MB`);
  }
}

finalCompress().catch(console.error);