const fs = require('fs');
const path = require('path');

console.log('Preparing for Vercel deployment...');

// Create directories if they don't exist
const paymentsDir = path.join(__dirname, '../public/images/payments');
if (!fs.existsSync(paymentsDir)) {
  fs.mkdirSync(paymentsDir, { recursive: true });
}

// Ensure placeholder image exists
const placeholderPath = path.join(__dirname, '../public/images/placeholder.jpg');
if (!fs.existsSync(placeholderPath)) {
  console.log('Creating placeholder image...');
  
  // Create a simple placeholder
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="#10002b"/>
    <text x="150" y="150" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Placeholder Image</text>
  </svg>`;
  
  fs.writeFileSync(path.join(__dirname, '../public/images/placeholder.svg'), svgContent);
  
  try {
    // Try to copy as placeholder.jpg
    fs.copyFileSync(
      path.join(__dirname, '../public/images/placeholder.svg'),
      placeholderPath
    );
  } catch (err) {
    console.error('Error creating placeholder.jpg, but continuing deployment:', err.message);
  }
}

// Copy QR code images to their standard names if the originals exist
const sourcePaths = {
  'IMG_1787.PNG': path.join(__dirname, '../public/images/IMG_1787.PNG'),
  'GooglePay_QR (2).png': path.join(__dirname, '../public/images/GooglePay_QR (2).png')
};

const destinationPaths = {
  'IMG_1787.PNG': path.join(paymentsDir, 'tech-event-qr.png'),
  'GooglePay_QR (2).png': path.join(paymentsDir, 'cultural-event-qr.png')
};

Object.entries(sourcePaths).forEach(([key, sourcePath]) => {
  if (fs.existsSync(sourcePath)) {
    try {
      console.log(`Copying ${key} to payments directory...`);
      fs.copyFileSync(sourcePath, destinationPaths[key]);
    } catch (err) {
      console.error(`Error copying ${key}, but continuing deployment:`, err.message);
    }
  } else {
    console.log(`QR code ${key} not found, using placeholder...`);
    try {
      fs.copyFileSync(placeholderPath, destinationPaths[key]);
    } catch (err) {
      console.error(`Error creating placeholder for ${key}:`, err.message);
    }
  }
});

console.log('Deployment preparation complete!');
