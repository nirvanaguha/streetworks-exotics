const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create output directory if it doesn't exist
const outputPath = './public/sequence/';
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

// Generate 150 frames
async function generateFrames() {
    for (let i = 1; i <= 150; i++) {
        // Format frame number with leading zeros
        const frameNumber = i.toString().padStart(4, '0');

        // Create SVG content with dark grey background and white frame number
        const svgContent = `
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#1a1a1a"/>
        <text x="50%" y="50%" 
              fill="white" 
              font-size="200" 
              font-family="Arial, sans-serif"
              text-anchor="middle" 
              dominant-baseline="middle">
          ${frameNumber}
        </text>
      </svg>
    `;

        // Use sharp to composite the SVG and save as WebP
        const outputFilePath = path.join(outputPath, `frame_${frameNumber}.webp`);

        try {
            await sharp(Buffer.from(svgContent))
                .resize(1920, 1080)
                .webp({ quality: 100 })
                .toFile(outputFilePath);

            console.log(`Generated frame_${frameNumber}.webp`);
        } catch (error) {
            console.error(`Error generating frame_${frameNumber}.webp:`, error);
        }
    }

    console.log('All 150 frames generated successfully!');
}

// Run the generation
generateFrames();