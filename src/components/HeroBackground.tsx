import React, { useEffect, useState } from 'react';
import './HeroBackground.css';

// Fallback image data URL for when the image can't be loaded
const fallbackImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2Q3TiiwAAAABJRU5ErkJggg==';

interface HeroBackgroundProps {
  opacity?: number;
  imageUrl?: string;
  starsCount?: number;
}

interface StarProps {
  top: string;
  left: string;
  size?: number;
  delay?: number;
}

const Star: React.FC<StarProps> = ({ top, left, size = 2, delay = 0 }) => {
  return (
    <div
      className="star"
      style={{
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  opacity = 0.85,
  imageUrl = '/images/hero-bg.png',
  starsCount = 100
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [fetLogoLoaded, setFetLogoLoaded] = useState(false);
  const [infinityLogoLoaded, setInfinityLogoLoaded] = useState(false);
  const [stars, setStars] = useState<StarProps[]>([]);
  const publicUrl = process.env.PUBLIC_URL || '';
  const fullImageUrl = publicUrl + imageUrl;
  
  // Preload the image for smooth display
  useEffect(() => {
    const img = new Image();
    img.src = fullImageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load image: ${fullImageUrl}`);
      setImageError(true);
    };
  }, [fullImageUrl]);

  // Add festival logos preload
  useEffect(() => {
    // Preload FET logo
    const fetLogo = new Image();
    fetLogo.src = publicUrl + '/images/FET-logoWhite.png';
    fetLogo.onload = () => setFetLogoLoaded(true);

    // Preload Infinity logo
    const infinityLogo = new Image();
    infinityLogo.src = publicUrl + '/images/INFINITY GOLD LOGO 24.png';
    infinityLogo.onload = () => setInfinityLogoLoaded(true);
  }, [publicUrl]);

  // Generate random stars
  useEffect(() => {
    const newStars: StarProps[] = [];
    
    for (let i = 0; i < starsCount; i++) {
      newStars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 3) + 1,
        delay: Math.random() * 5
      });
    }
    
    setStars(newStars);
  }, [starsCount]);

  return (
    <div className="hero-background">
      <div className="background-gradient">
        <div 
          className={`hero-bg ${imageLoaded || imageError ? 'loaded' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${imageError ? fallbackImageUrl : fullImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: imageLoaded || imageError ? opacity : 0,
            transition: 'opacity 1s ease',
            zIndex: -2,
            filter: 'blur(3px)' // Lighter blur for better text readability while seeing background
          }}
        />
        
        {/* FET Logo in Hero Section - positioned mid-right and not blurred */}
        {fetLogoLoaded && (
          <div className="hero-logo-container fet-logo" style={{
            position: 'absolute',
            top: '50%',
            right: '5%', // Positioned to mid-right
            transform: 'translateY(-50%)',
            zIndex: 1,
            maxWidth: '300px', // Increased size for better visibility
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' // Add shadow instead of blur
          }}>
            <img 
              src={`${publicUrl}/images/FET-logoWhite.png`}
              alt="FET Logo"
              className="hero-logo fade-in"
              style={{
                maxWidth: '100%',
                height: 'auto',
                filter: 'none' // Ensure no blur on the logo itself
              }}
            />
          </div>
        )}
        
        {/* Infinity Gold Logo - positioned mid-left with rotation animation */}
        {infinityLogoLoaded && (
          <div className="hero-logo-container infinity-logo" style={{
            position: 'absolute',
            top: '50%',
            left: '5%', // Positioned to mid-left (opposite of FET logo)
            transform: 'translateY(-50%)',
            zIndex: 1,
            maxWidth: '250px', // Good size for visibility
            filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))' // Gold-tinted shadow
          }}>
            <img 
              src={`${publicUrl}/images/INFINITY GOLD LOGO 24.png`}
              alt="Infinity Logo"
              className="hero-logo infinity-rotate fade-in"
              style={{
                maxWidth: '100%',
                height: 'auto',
                filter: 'none' // Ensure no blur on the logo itself
              }}
            />
          </div>
        )}
        
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      {/* Animated orbs */}
      <div className="background-orb orb-1"></div>
      <div className="background-orb orb-2"></div>
      <div className="background-orb orb-3"></div>
      <div className="background-orb orb-4"></div>
      
      {/* Grid overlay */}
      <div className="grid-overlay"></div>
      
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
      
      {/* Stars */}
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
};

export default HeroBackground;
