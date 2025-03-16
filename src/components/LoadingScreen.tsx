import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h1 className="loading-title">INFINITY 2025</h1>
        <p className="loading-subtitle">Loading the future of tech...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
