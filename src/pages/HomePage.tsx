import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import HeroBackground from '../components/HeroBackground';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  
  // Update button glow position based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!primaryBtnRef.current) return;
    
    const rect = primaryBtnRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    primaryBtnRef.current.style.setProperty('--x', `${x}%`);
    primaryBtnRef.current.style.setProperty('--y', `${y}%`);
  };
  
  // Add scroll reveal animation for elements
  useEffect(() => {
    // Mark component as loaded after a short delay for entrance animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on load
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className="home-page">
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-background">
          <HeroBackground />
        </div>
        
        <div className="hero-content">
          <div className="hero-logo animated fadeIn">
            <img 
              src="/images/INFINITY GOLD LOGO 24.png" 
              alt="Infinity Logo" 
              className="infinity-main-logo"
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.jpg';
                e.currentTarget.classList.add('fallback-image');
              }}
            />
          </div>
          
          <h1 className="hero-title glitch-text" data-text="INFINITY 2025">INFINITY 2025</h1>
          
          <div className="hero-tagline animated fadeInUp delay-1">
            <span className="tech-tag">TECHNICAL</span>
            <span className="separator">×</span>
            <span className="cult-tag">CULTURAL</span>
            <span className="separator">×</span>
            <span className="fest-tag">FEST</span>
          </div>
          
          <p className="hero-subtitle animated fadeInUp delay-1">
            The Ultimate College Fest Experience
            <br />
            <span className="event-date">March 27-28, 2025</span>
          </p>
          
          <div className="hero-buttons animated fadeInUp delay-2">
            <Link 
              to="/register" 
              className="btn-modern hero-button primary"
              ref={primaryBtnRef}
              onMouseMove={handleMouseMove}
            >
              <span className="btn-text">Register Now</span>
              <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
              <span className="btn-glow"></span>
            </Link>
            <Link to="/technical-events" className="btn-modern hero-button secondary">
              <span className="btn-text">Explore Events</span>
              <span className="btn-icon"><i className="fas fa-compass"></i></span>
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">19+</div>
              <div className="stat-label">Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹2L+</div>
              <div className="stat-label">Prize Pool</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Days</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator animated fadeIn delay-3">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </section>

      <section className="about-section">
        <div className="content-container">
          <h2 className="section-title">About Infinity 2025</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Infinity 2025 is the premier annual technical and cultural festival that brings together
                the brightest minds and most creative talents from colleges across the nation.
              </p>
              <p>
                With a perfect blend of technical competitions, cultural performances, workshops, and
                inspiring talks, Infinity offers a platform for students to showcase their skills and
                expand their horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="content-container">
          <h2 className="section-title">Festival Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Technical Events</h3>
              <p>Hackathons, coding contests, robotics, and more to challenge your technical prowess</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Cultural Shows</h3>
              <p>Music, dance, drama performances that showcase artistic talents and creativity</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Workshops</h3>
              <p>Learn from industry experts through hands-on workshops and enriching sessions</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Competitions</h3>
              <p>Participate in various competitions with exciting prizes worth over ₹5 Lakhs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-container">
          <h2>Ready to be Part of Infinity 2025?</h2>
          <p>Don't miss this opportunity to participate in the biggest techno-cultural fest of the year!</p>
          <Link to="/register" className="btn-modern cta-button">Register Now</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
