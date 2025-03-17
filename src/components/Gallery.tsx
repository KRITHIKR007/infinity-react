import React, { useEffect, useState } from 'react';
import './Gallery.css';

interface GalleryProps {
  images?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  // Default images if none are provided
  const defaultImages = [
    '/images/gallery/image1.jpg',
    '/images/gallery/image2.jpg',
    '/images/gallery/image3.jpg',
    '/images/gallery/image4.jpg',
    '/images/gallery/image5.jpg',
    '/images/gallery/image6.jpg',
    '/images/gallery/image7.jpg',
    '/images/gallery/image8.jpg',
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;
  
  // Duplicate images for the illusion of infinite scroll
  const allImages = [...galleryImages, ...galleryImages];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Event Gallery</h2>
      <div className="gallery-container">
        <div className="infinite-scroll-gallery">
          {allImages.map((img, index) => (
            <div className="gallery-frame" key={index}>
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                  e.currentTarget.classList.add("error-image");
                }}
              />
              <div className="frame-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
