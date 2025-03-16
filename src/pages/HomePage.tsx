import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Countdown timer calculation
const calculateTimeLeft = () => {
  // March 28, 2025
  const difference = new Date('2025-03-28T00:00:00').getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">INFINITY 2025</h1>
          <h2 className="hero-subtitle">Annual College Technical & Cultural Fest</h2>
          <p>March 28, 2025 • Venues: Colosseum, FET, IIAME, 002</p>
          <div className="hero-cta">
            <Link to="/register" className="cta-button">Register Now</Link>
            <Link to="/technical-events" className="btn-modern">Explore Events</Link>
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <div className="container">
          <h2>Event Countdown</h2>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Infinity 2025</h2>
          <p>
            Infinity 2025 is the annual cultural and technical extravaganza that brings together
            students from across the country to showcase their talents, creativity, and technical expertise.
            Join us for an exciting day of events, workshops, competitions, and unforgettable memories.
          </p>
          <p>
            With a wide range of technical and cultural competitions, Infinity 2025 offers
            platforms for innovation, creativity, and performance. Hundreds of participants from
            various colleges are expected to participate in this grand festival.
          </p>
        </div>
      </section>

      <section className="events-preview">
        <div className="container">
          <h2>Event Categories</h2>
          <div className="events-container">
            <div className="event-category">
              <h3>Technical Events</h3>
              <p>
                Featuring PITCH4SUSTAIN (Sustainability Hackathon), PHANTOM HUNT (Cybersecurity Challenge),
                SYNTAX SCRAMBLE (Coding Competition), and more exciting technical events.
              </p>
              <ul className="event-highlights">
                <li><i className="fas fa-laptop-code"></i> Hackathons & Coding Challenges</li>
                <li><i className="fas fa-shield-alt"></i> Cybersecurity CTF Competitions</li>
                <li><i className="fas fa-robot"></i> Innovation & Product Design</li>
                <li><i className="fas fa-drone"></i> Drone Racing & Payload Challenges</li>
              </ul>
              <Link to="/technical-events" className="btn-modern">Explore Technical Events</Link>
            </div>
            <div className="event-category">
              <h3>Cultural Events</h3>
              <p>
                Experience STEP SYNC (Solo Dance), NRITYA VEDIKA (Group Dance), COSMIC DRIFT (Fashion Show),
                and many more cultural events to showcase your creative talents.
              </p>
              <ul className="event-highlights">
                <li><i className="fas fa-music"></i> Music & Dance Competitions</li>
                <li><i className="fas fa-theater-masks"></i> Theater & Performance Arts</li>
                <li><i className="fas fa-pen-fancy"></i> Literary & Creative Writing</li>
                <li><i className="fas fa-film"></i> Short Film Making</li>
              </ul>
              <Link to="/cultural-events" className="btn-modern">Explore Cultural Events</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <h2>Event Schedule</h2>
          <div className="schedule-days">
            <div className="schedule-day">
              <h3>March 28, 2025</h3>
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="fas fa-flag"></i></div>
                  <div className="timeline-content">
                    <h4>09:00 AM - Opening Ceremony</h4>
                    <p>Inauguration of Infinity 2025</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="fas fa-code"></i></div>
                  <div className="timeline-content">
                    <h4>10:00 AM - All Events Begin</h4>
                    <p>Technical & Cultural events start across all venues</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="fas fa-microphone"></i></div>
                  <div className="timeline-content">
                    <h4>02:00 PM - Keynote Speaker</h4>
                    <p>Special guest talk on innovation and technology</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="fas fa-music"></i></div>
                  <div className="timeline-content">
                    <h4>04:00 PM - Main Stage Performances</h4>
                    <p>Cultural showcases at Colosseum</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-badge"><i className="fas fa-trophy"></i></div>
                  <div className="timeline-content">
                    <h4>07:00 PM - Prize Distribution & Closing</h4>
                    <p>Ceremony and celebrations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="venues-section">
        <div className="container">
          <h2>Event Venues</h2>
          <div className="venues-grid">
            <div className="venue-card">
              <h3>Colosseum</h3>
              <div className="venue-details">
                <i className="fas fa-map-marker-alt"></i>
                <p>Main stage for cultural performances and fashion show</p>
              </div>
            </div>
            <div className="venue-card">
              <h3>FET</h3>
              <div className="venue-details">
                <i className="fas fa-map-marker-alt"></i>
                <p>Technical competitions, coding challenges, and literary events</p>
              </div>
            </div>
            <div className="venue-card">
              <h3>IIAME</h3>
              <div className="venue-details">
                <i className="fas fa-map-marker-alt"></i>
                <p>Drone competitions and engineering challenges</p>
              </div>
            </div>
            <div className="venue-card">
              <h3>002</h3>
              <div className="venue-details">
                <i className="fas fa-map-marker-alt"></i>
                <p>Sustainability hackathon and workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-highlight">
        <div className="container">
          <h2>Contact Information</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-music"></i></div>
              <h3>Music & Dance</h3>
              <p>Varshini: 9493681014</p>
              <p>Sathya: 8197400217</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-theater-masks"></i></div>
              <h3>Theater & Literature</h3>
              <p>Anushree Panatula: 6360393131</p>
              <p>Samarth Khanadale: 9611744161</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Technical Events</h3>
              <p>See specific club coordinators</p>
              <Link to="/contact" className="contact-link">View All Contacts</Link>
            </div>
          </div>
          <div className="cta-container">
            <Link to="/register" className="cta-button large">Register Now</Link>
          </div>
        </div>
      </section>

      <div style={{margin: "20px", textAlign: "center"}}>
        <Link to="/admin-login" style={{padding: "10px", background: "rgba(255,255,255,0.1)", borderRadius: "5px"}}>
          Admin Login (Test)
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
