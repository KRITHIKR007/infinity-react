import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    categories: false,
    featured: false,
    timeline: false,
    stats: false,
  });
  
  const [activeTab, setActiveTab] = useState('technical');
  
  // Add countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const observerRefs = {
    about: useRef(null),
    categories: useRef(null),
    featured: useRef(null),
    timeline: useRef(null),
    stats: useRef(null),
  };

  // Set up intersection observer for animation on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.entries(observerRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(prev => ({ ...prev, [key]: true }));
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
  
  // Calculate countdown timer
  useEffect(() => {
    // Set the event date (March 28, 2025)
    const eventDate = new Date('March 28, 2025 09:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Handle tab switching for featured events
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const featuredTechnicalEvents = [
    {
      title: "PITCH4SUSTAIN",
      description: "Tackle real-world sustainability challenges with innovative solutions.",
      image: "/images/posters/pitch4sustain.jpg",
      link: "/technical-events"
    },
    {
      title: "PHANTOM HUNT",
      description: "Cybersecurity challenge featuring cryptography, steganography, and network security.",
      image: "/images/posters/phnatum hunt.jpg",
      link: "/technical-events"
    },
    {
      title: "DRONEXTREME",
      description: "Drone Payload Deployment Challenge testing precision and control.",
      image: "/images/posters/dron etream.jpg",
      link: "/technical-events"
    }
  ];

  const featuredCulturalEvents = [
    {
      title: "STEP SYNC",
      description: "Solo dance competition showcasing various dance forms and individual talent.",
      image: "/images/posters/stepsynk.jpg",
      link: "/cultural-events"
    },
    {
      title: "COSMIC DRIFT",
      description: "Fashion show with a sci-fi theme showcasing futuristic designs.",
      image: "/images/posters/cosmic drift.jpg",
      link: "/cultural-events"
    },
    {
      title: "SHORT FILM MAKING",
      description: "Filmmaking competition showcasing storytelling and cinematography skills.",
      image: "/images/posters/ather frames.jpg",
      link: "/cultural-events"
    }
  ];

  const stats = [
    { value: '25+', label: 'Events' },
    { value: '₹1.5L+', label: 'Prize Pool' },
    { value: '3', label: 'Days' },
    { value: '5000+', label: 'Participants' }
  ];

  const timeline = [
    { date: 'March 28', events: ['Opening Ceremony', 'PITCH4SUSTAIN Prelims', 'STEP SYNC'] },
    { date: 'March 29', events: ['PHANTOM HUNT', 'COSMIC DRIFT', 'RESONANCE', 'Networking Events'] },
    { date: 'March 30', events: ['INNOVATHON', 'SHORT FILM Screening', 'Award Ceremony', 'Closing Party'] }
  ];

  return (
    <div className="home-page">
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="hero-section parallax-hero">
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`hero-particle particle-${i+1}`}></div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tagline">
              <span className="tech-tag">Technical</span>
              <span className="separator">•</span>
              <span className="cult-tag">Cultural</span>
              <span className="separator">•</span>
              <span className="fest-tag">Fest</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-text">INFINITY</span>
              <span className="hero-title-year glitch-text" data-text="2025">2025</span>
            </h1>
            <p className="hero-subtitle">Where Innovation Meets Creativity</p>
            <p className="hero-dates"><i className="fas fa-calendar-alt"></i> March 28-30, 2025 | <i className="fas fa-map-marker-alt"></i> IIAME Campus</p>
            
            {/* Add countdown timer */}
            <div className="countdown-container">
              <div className="countdown-item">
                <div className="countdown-value">{timeLeft.days}</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{timeLeft.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{timeLeft.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{timeLeft.seconds}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
            
            <div className="hero-cta">
              <Link to="/register" className="cta-primary">Register Now</Link>
              <a href="#event-categories" className="cta-secondary">
                <span>Explore Events</span>
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-artwork">
            <img 
              src="/images/hero-graphic.png" 
              alt="Infinity 2025" 
              className="hero-image floating"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg";
                e.currentTarget.classList.add("fallback-image");
              }}
            />
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <a href="#about-section" aria-label="Scroll down">
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className={`about-section ${isVisible.about ? 'visible' : ''}`} ref={observerRefs.about}>
        <div className="content-container">
          <div className="section-header">
            <span className="section-subtitle">About The Event</span>
            <h2>Infinity 2025: Unleash Your Potential</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                <strong>Infinity 2025</strong> is IIAME's flagship annual fest bringing together the brightest minds and most creative talents. This three-day extravaganza features cutting-edge technical competitions, mesmerizing cultural performances, and unparalleled opportunities to collaborate, create, and celebrate.
              </p>
              
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Technical Innovation</h3>
                    <p>Hackathons, coding battles, and engineering challenges that push boundaries.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-music"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Cultural Expression</h3>
                    <p>Dance, music, theatre and art showcases to celebrate diverse talents.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Networking</h3>
                    <p>Connect with industry experts, mentors and fellow innovators.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image-container">
              <img 
                src="/images/about-infinity.jpg" 
                alt="Infinity event glimpse" 
                className="about-image"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                  e.currentTarget.classList.add("fallback-image");
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories - Using cards with hover effect */}
      <section id="event-categories" className={`categories-section ${isVisible.categories ? 'visible' : ''}`} ref={observerRefs.categories}>
        <div className="content-container">
          <div className="section-header">
            <span className="section-subtitle">Explore</span>
            <h2>Event Categories</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="categories-container">
            <div className="category-card technical">
              <div className="category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Technical Events</h3>
              <p>Push boundaries with coding battles, hackathons, and engineering challenges.</p>
              <ul className="event-highlights">
                <li><i className="fas fa-check-circle"></i> Coding Competitions</li>
                <li><i className="fas fa-check-circle"></i> Hackathons</li>
                <li><i className="fas fa-check-circle"></i> Robotics Challenges</li>
              </ul>
              <Link to="/technical-events" className="btn-modern">
                Explore Technical <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="category-card cultural">
              <div className="category-icon">
                <i className="fas fa-theater-masks"></i>
              </div>
              <h3>Cultural Events</h3>
              <p>Express yourself through dance, music, art, and theatrical performances.</p>
              <ul className="event-highlights">
                <li><i className="fas fa-check-circle"></i> Dance Competitions</li>
                <li><i className="fas fa-check-circle"></i> Musical Performances</li>
                <li><i className="fas fa-check-circle"></i> Literary Arts</li>
              </ul>
              <Link to="/cultural-events" className="btn-modern">
                Explore Cultural <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events - With improved tab interaction */}
      <section id="featured-events" className={`featured-section ${isVisible.featured ? 'visible' : ''}`} ref={observerRefs.featured}>
        <div className="content-container">
          <div className="section-header">
            <span className="section-subtitle">Highlights</span>
            <h2>Featured Events</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="featured-tabs">
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'technical' ? 'active' : ''}`} 
                onClick={() => handleTabChange('technical')}
              >
                <i className="fas fa-laptop-code"></i> Technical Events
              </button>
              <button 
                className={`tab-button ${activeTab === 'cultural' ? 'active' : ''}`}
                onClick={() => handleTabChange('cultural')}
              >
                <i className="fas fa-music"></i> Cultural Events
              </button>
            </div>
            
            <div className="tab-content">
              <div className={`tab-pane ${activeTab === 'technical' ? 'active' : ''}`} id="technical-pane">
                <div className="featured-events-grid">
                  {featuredTechnicalEvents.map((event, index) => (
                    <div className="featured-event-card" key={index}>
                      <div className="featured-event-image">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.jpg";
                            e.currentTarget.classList.add("fallback-image");
                          }}
                        />
                        <div className="event-overlay">
                          <Link to={event.link} className="event-details-btn">
                            View Details
                          </Link>
                        </div>
                      </div>
                      <div className="featured-event-content">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="view-all-link">
                  <Link to="/technical-events">View All Technical Events <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
              
              <div className={`tab-pane ${activeTab === 'cultural' ? 'active' : ''}`} id="cultural-pane">
                <div className="featured-events-grid">
                  {featuredCulturalEvents.map((event, index) => (
                    <div className="featured-event-card" key={index}>
                      <div className="featured-event-image">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.jpg";
                            e.currentTarget.classList.add("fallback-image");
                          }}
                        />
                        <div className="event-overlay">
                          <Link to={event.link} className="event-details-btn">
                            View Details
                          </Link>
                        </div>
                      </div>
                      <div className="featured-event-content">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="view-all-link">
                  <Link to="/cultural-events">View All Cultural Events <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline - Enhanced with animation */}
      <section id="event-timeline" className={`timeline-section ${isVisible.timeline ? 'visible' : ''}`} ref={observerRefs.timeline}>
        <div className="content-container">
          <div className="section-header">
            <span className="section-subtitle">Schedule</span>
            <h2>Event Timeline</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="timeline">
            {timeline.map((day, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-badge">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-date">{day.date}</div>
                  <div className="timeline-events">
                    {day.events.map((event, i) => (
                      <div className="timeline-event" key={i}>
                        <i className="fas fa-circle"></i>
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - With animated counters */}
      <section id="statistics" className={`stats-section ${isVisible.stats ? 'visible' : ''}`} ref={observerRefs.stats}>
        <div className="content-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-value counter">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - With enhanced styling */}
      <section className="cta-section">
        <div className="content-container">
          <div className="cta-content">
            <h2>Ready to be part of Infinity 2025?</h2>
            <p>Experience three days of innovation, competitions, and unforgettable memories</p>
            <Link to="/register" className="cta-button pulse-glow">
              Register Now
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
