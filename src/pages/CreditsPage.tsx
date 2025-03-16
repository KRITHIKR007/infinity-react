import React from 'react';
import './CreditsPage.css';

// Try using a direct error handler function instead of importing
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
  e.currentTarget.classList.add('fallback-image');
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  }
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, image, social }) => {
  return (
    <div className="team-member-card">
      <div className="member-image">
        <img 
          src={image} 
          alt={name}
          onError={handleImageError}
        />
      </div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {/* Social links */}
    </div>
  );
};

const CreditsPage = () => {
  const organizingTeam = [
    {
      name: "Alex Johnson",
      role: "Event Coordinator",
      image: "/images/team/alex.jpg",
      social: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        instagram: "https://instagram.com/alexj"
      }
    },
    {
      name: "Priya Sharma",
      role: "Technical Lead",
      image: "/images/team/priya.jpg",
      social: {
        linkedin: "https://linkedin.com/in/priyasharma",
        github: "https://github.com/priyasharma"
      }
    },
    {
      name: "Michael Chen",
      role: "Cultural Lead",
      image: "/images/team/michael.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelc"
      }
    },
    // Add more team members as needed
  ];

  const technicalTeam = [
    {
      name: "Sarah Wilson",
      role: "Web Developer",
      image: "/images/team/sarah.jpg",
      social: {
        github: "https://github.com/sarahwilson",
        linkedin: "https://linkedin.com/in/sarahwilson"
      }
    },
    {
      name: "Raj Patel",
      role: "UI/UX Designer",
      image: "/images/team/raj.jpg",
      social: {
        linkedin: "https://linkedin.com/in/rajpatel",
        instagram: "https://instagram.com/rajpdesigns"
      }
    }
    // Add more team members as needed
  ];

  const sponsors = [
    { name: "TechCorp", logo: "/images/sponsors/techcorp.png", website: "https://techcorp.com" },
    { name: "Design Studio", logo: "/images/sponsors/designstudio.png", website: "https://designstudio.com" },
    { name: "Innovation Labs", logo: "/images/sponsors/innovationlabs.png", website: "https://innovationlabs.com" },
    { name: "Creative Solutions", logo: "/images/sponsors/creativesol.png", website: "https://creativesolutions.com" }
  ];

  return (
    <div className="credits-page">
      <div className="credits-header">
        <h1 className="credits-title">The Team Behind Infinity 2025</h1>
        <p className="credits-subtitle">Meet the dedicated individuals who've worked tirelessly to bring this event to life.</p>
      </div>
      
      <div className="team-category">
        <h2 className="team-category-title">Core Committee</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Faculty Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Dr. Faculty Name</h3>
              <p className="team-member-role">Faculty Coordinator</p>
              <p className="team-member-bio">Department of Computer Science</p>
              <div className="team-social">
                <a href="#" className="team-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="team-social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Student Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Student Name</h3>
              <p className="team-member-role">Student Coordinator</p>
              <p className="team-member-bio">Final Year, Computer Science</p>
              <div className="team-social">
                <a href="#" className="team-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="team-social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Technical Head" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Technical Lead</h3>
              <p className="team-member-role">Technical Head</p>
              <p className="team-member-bio">Third Year, Information Technology</p>
              <div className="team-social">
                <a href="#" className="team-social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="team-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="team-category">
        <h2 className="team-category-title">Technical Events Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Technical Events Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Tech Events Lead</h3>
              <p className="team-member-role">Technical Events Coordinator</p>
              <p className="team-member-bio">Organizing PITCH4SUSTAIN and CTRL+Z events</p>
            </div>
          </div>
          
          {/* Add more team members here */}
        </div>
      </div>
      
      <div className="team-category">
        <h2 className="team-category-title">Cultural Events Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Cultural Events Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Varshini</h3>
              <p className="team-member-role">Dance Events Coordinator</p>
              <p className="team-member-bio">Organizing STEP SYNC and NRITYA VEDIKA</p>
            </div>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Cultural Events Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Sathya</h3>
              <p className="team-member-role">Music Events Coordinator</p>
              <p className="team-member-bio">Organizing ECHOES & STRINGS and RESONANCE</p>
            </div>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/team/placeholder.jpg" alt="Literary Events Coordinator" />
            </div>
            <div className="team-member-content">
              <h3 className="team-member-name">Anushree Panatula</h3>
              <p className="team-member-role">Literary Events Coordinator</p>
              <p className="team-member-bio">Organizing EKPHRASTIC POETRY and JAM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contributors-section">
        <h2 className="contributors-title">Contributors</h2>
        <div className="contributors-list">
          <span className="contributor">Web Development Team</span>
          <span className="contributor">Design Team</span>
          <span className="contributor">Marketing Team</span>
          <span className="contributor">Logistics Team</span>
          <span className="contributor">Sponsorship Team</span>
          <span className="contributor">Content Team</span>
        </div>
      </div>
      
      <div className="special-thanks">
        <h2 className="special-thanks-title">Special Thanks</h2>
        <p className="special-thanks-list">
          We extend our heartfelt gratitude to the college management, faculty advisors, sponsors, volunteers,
          and everyone who contributed to making Infinity 2025 a success.
        </p>
      </div>
    </div>
  );
};

export default CreditsPage;
