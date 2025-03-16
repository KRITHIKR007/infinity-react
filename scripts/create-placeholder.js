const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create an SVG for the hero pattern
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <defs>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#9d4edd" stroke-width="0.5" opacity="0.2"/>
    </pattern>
  </defs>
  <rect width="300" height="300" fill="#10002b"/>
  <rect width="300" height="300" fill="url(#grid)"/>
</svg>
`;

fs.writeFileSync(path.join(imagesDir, 'hero-pattern.svg'), svgContent);
console.log('Hero pattern SVG created successfully!');
console.log('Please convert this to PNG and place it at public/images/hero-pattern.png');
