// Import image and export it as a module
// The image should be in either public/images or src/images
// Here we'll try to import from both locations to handle either case
let heroBackground: string;

try {
  // Try to import from src/images if it exists
  heroBackground = require('../images/hero-bg.png').default;
} catch (e) {
  // Fall back to using public path
  heroBackground = process.env.PUBLIC_URL + '/images/hero-bg.png';
}

export default heroBackground;
