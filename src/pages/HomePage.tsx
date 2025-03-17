import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Event posters for infinite scroll
  const eventPosters = [
    "/images/posters/pitch4sustain.jpg",
    "/images/posters/phnatum hunt.jpg",
    "/images/posters/dron etream.jpg",
    "/images/posters/stepsynk.jpg",
    "/images/posters/cosmic drift.jpg",
    "/images/posters/ather frames.jpg",
    "/images/posters/innovathon.jpg",
    "/images/posters/model blitz.jpg",
    "/images/posters/syntax scramble.jpg",
    "/images/posters/resonance.jpg"
  ];

  useEffect(() => {
    // Add loaded class to trigger animation
    setIsLoaded(true);
  }, []);

  return (
    <div className="home-page simple">
      {/* Simple Hero Section */}
      <section className={`simple-hero ${isLoaded ? 'loaded' : ''}`}>
        {/* FET Logo on the left side */}
        <div className="hero-logo fet-logo">
          <img 
            src="/images/FET-logoWhite.png" 
            alt="FET Logo" 
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
              console.log("Failed to load FET logo");
            }}
          />
        </div>
        
        {/* Cultural Logo on the right side */}
        <div className="hero-logo cultural-logo">
          <img 
            src="/images/cultural logo.png" 
            alt="Cultural Logo" 
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
              console.log("Failed to load Cultural logo");
            }}
          />
        </div>
        
        <div className="hero-content">
          <h1 className="main-title">INFINITY-2K25</h1>
          <div className="tagline">A Journey from Past to Future</div>
          
          <div className="event-highlights">
            <div className="event-detail">
              <i className="fas fa-calendar-alt"></i>
              <span>27th - 28th March, 2025</span>
            </div>
            <div className="event-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jain Deemed-to-be University</span>
            </div>
            <div className="registration-status">
              <i className="fas fa-ticket-alt"></i>
              <span>Registration Open Now!</span>
            </div>
          </div>

          <Link to="/register" className="register-now-btn">
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="simple-content">
        <div className="content-container">
          <div className="about-section">
            <h2>About INFINITY-2K25</h2>
            <p>
              INFINITY-2K25 is more than just a fest—it's a <strong>time-traveling experience!</strong> 
              This year's theme, <strong>"Past to Future,"</strong> bridges history and innovation, 
              celebrating evolution in culture, technology, and creativity. Whether you're reviving 
              ancient traditions or crafting futuristic marvels, <strong>this is your platform to 
              showcase talent, innovation, and imagination.</strong>
            </p>
          </div>

          <div className="expectations-section">
            <h2>What to Expect?</h2>
            <div className="expectation-items">
              <div className="expectation-item">
                <i className="fas fa-fire"></i>
                <h3>Cultural Extravaganza</h3>
                <p>Dance, Music, Fashion, Theatre, and Art reflecting the past and the future.</p>
              </div>
              <div className="expectation-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Technical Showdown</h3>
                <p>Hackathons, Coding Challenges, AI Battles, and Drone Races.</p>
              </div>
              <div className="expectation-item">
                <i className="fas fa-theater-masks"></i>
                <h3>Engaging Competitions</h3>
                <p>From storytelling to poetry, from photography to filmmaking.</p>
              </div>
              <div className="expectation-item">
                <i className="fas fa-trophy"></i>
                <h3>Exciting Prizes</h3>
                <p>Stand a chance to win big while making unforgettable memories!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - New Addition */}
      <Gallery />

      {/* Poster Scroll Section (keeping this as requested) */}
      <section className="poster-scroll-section">
        <div className="poster-scroll-container">
          <div className="poster-scroll">
            {/* First set of posters */}
            {eventPosters.map((poster, index) => (
              <div className="poster-item" key={`first-${index}`}>
                <img 
                  src={poster} 
                  alt={`Event poster ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                    e.currentTarget.classList.add("fallback-image");
                  }}
                />
              </div>
            ))}
            {/* Duplicate posters for seamless loop */}
            {eventPosters.map((poster, index) => (
              <div className="poster-item" key={`second-${index}`}>
                <img 
                  src={poster} 
                  alt={`Event poster ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                    e.currentTarget.classList.add("fallback-image");
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="simple-cta">
        <div className="content-container">
          <h2>Register Now & Be Part of the Future!</h2>
          <div className="cta-buttons">
            <Link to="/register" className="cta-button">
              Register Now <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone-alt"></i>
            <span>Contact Us: Event Coordinator - 8296019911 (Dhrub Kumar Jha)</span>
          </div>
          <div className="tagline-bottom">
            Join us for an electrifying fest where <strong>yesterday meets tomorrow!</strong> 🚀🔥
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
