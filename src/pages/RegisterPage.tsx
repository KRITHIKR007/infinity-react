import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  
  // Technical and cultural events with details
  const events = {
    technical: [
      { name: "PITCH4SUSTAIN (Sustainability Hackathon)", fee: 500, venue: "002", teamSize: "1-5 members" },
      { name: "CTRL+Z – UNDO THE CHAOS", fee: 200, venue: "FET", teamSize: "3-4 members" },
      { name: "SYNTAX SCRAMBLE", fee: 150, venue: "FET", teamSize: "Individual" },
      { name: "PHANTOM HUNT", fee: 500, venue: "FET", teamSize: "4-5 members" },
      { name: "INNOVATHON", fee: 300, venue: "IIAME", teamSize: "3-5 members" },
      { name: "MODEL BLITZ", fee: 250, venue: "FET", teamSize: "Individual" },
      { name: "DRONEXTREME", fee: 600, venue: "IIAME", teamSize: "2-3 members" }
    ],
    cultural: [
      { name: "STEP SYNC (Solo Dance)", fee: 500, venue: "Colosseum", teamSize: "Individual" },
      { name: "NRITYA VEDIKA (Group Dance)", fee: 800, venue: "Colosseum", teamSize: "6-15 members" },
      { name: "ECHOES & STRINGS (Solo Singing)", fee: 299, venue: "FET", teamSize: "Individual" },
      { name: "RESONANCE (Music – Duet & Group)", fee: 399, venue: "FET", teamSize: "2+ members" },
      { name: "COSMIC DRIFT (Fashion Show)", fee: 2500, venue: "Colosseum", teamSize: "10-14 members" },
      { name: "EKPHRASTIC POETRY", fee: 199, venue: "FET", teamSize: "Individual" },
      { name: "TALE REWIND (Story Writing)", fee: 199, venue: "FET", teamSize: "Individual" },
      { name: "JUST A MINUTE (JAM)", fee: 199, venue: "FET", teamSize: "Individual" },
      { name: "WAVE YOUR STORY (Speech Recital)", fee: 299, venue: "FET", teamSize: "Individual" },
      { name: "SHORT FILM MAKING", fee: 599, venue: "FET", teamSize: "3-8 members" },
      { name: "CAPTURE THE MOMENT (Photography)", fee: 249, venue: "FET", teamSize: "Individual" },
      { name: "MOTION FUSION (Videography)", fee: 399, venue: "FET", teamSize: "Individual or Duo" }
    ]
  };

  // Handle event selection/deselection
  const handleEventSelection = (eventName: string) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter(e => e !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  // Handle continue to registration form
  const handleContinue = () => {
    if (selectedEvents.length === 0) {
      alert("Please select at least one event to continue.");
      return;
    }
    
    // Determine event type based on the first selected event
    let eventType = 'technical';
    const firstEvent = selectedEvents[0];
    const isTechnical = events.technical.some(e => e.name === firstEvent);
    if (!isTechnical) {
      eventType = 'cultural';
    }
    
    // Store selected events in session storage to pass to registration page
    sessionStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
    sessionStorage.setItem('eventType', eventType);
    navigate('/payment');
  };

  // Calculate total fee for selected events
  const calculateTotalFee = () => {
    let total = 0;
    events.technical.forEach(event => {
      if (selectedEvents.includes(event.name)) {
        total += event.fee;
      }
    });
    events.cultural.forEach(event => {
      if (selectedEvents.includes(event.name)) {
        total += event.fee;
      }
    });
    return total;
  };

  return (
    <div className="register-page">
      <div className="register-header">
        <h1>Select Events to Register</h1>
        <p>Choose the events you want to participate in for Infinity 2025</p>
        <div className="register-instructions">
          <div className="instruction-card">
            <div className="instruction-icon"><i className="fas fa-mouse-pointer"></i></div>
            <p>Select your events</p>
          </div>
          <div className="instruction-arrow"><i className="fas fa-arrow-right"></i></div>
          <div className="instruction-card">
            <div className="instruction-icon"><i className="fas fa-credit-card"></i></div>
            <p>Make payment</p>
          </div>
          <div className="instruction-arrow"><i className="fas fa-arrow-right"></i></div>
          <div className="instruction-card">
            <div className="instruction-icon"><i className="fas fa-check-circle"></i></div>
            <p>Confirm registration</p>
          </div>
        </div>
      </div>

      <div className="events-selection-container">
        <div className="event-category-section">
          <h2>
            <i className="fas fa-laptop-code"></i> Technical Events
          </h2>
          <div className="events-grid">
            {events.technical.map(event => (
              <div 
                key={event.name}
                className={`event-selection-card ${selectedEvents.includes(event.name) ? 'selected' : ''}`}
                onClick={() => handleEventSelection(event.name)}
              >
                <div className="event-selection-checkbox">
                  <input 
                    type="checkbox" 
                    checked={selectedEvents.includes(event.name)} 
                    onChange={() => {}} 
                    readOnly 
                  />
                  <span className="checkbox-custom"></span>
                </div>
                <div className="event-selection-info">
                  <h3>{event.name}</h3>
                  <div className="event-selection-meta">
                    <span><i className="fas fa-rupee-sign"></i> {event.fee}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {event.venue}</span>
                    <span><i className="fas fa-users"></i> {event.teamSize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="event-category-section">
          <h2>
            <i className="fas fa-music"></i> Cultural Events
          </h2>
          <div className="events-grid">
            {events.cultural.map(event => (
              <div 
                key={event.name}
                className={`event-selection-card ${selectedEvents.includes(event.name) ? 'selected' : ''}`}
                onClick={() => handleEventSelection(event.name)}
              >
                <div className="event-selection-checkbox">
                  <input 
                    type="checkbox" 
                    checked={selectedEvents.includes(event.name)} 
                    onChange={() => {}} 
                    readOnly 
                  />
                  <span className="checkbox-custom"></span>
                </div>
                <div className="event-selection-info">
                  <h3>{event.name}</h3>
                  <div className="event-selection-meta">
                    <span><i className="fas fa-rupee-sign"></i> {event.fee}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {event.venue}</span>
                    <span><i className="fas fa-users"></i> {event.teamSize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="registration-summary">
        <div className="summary-content">
          <div className="summary-text">
            <h3>Your Selection</h3>
            <p>{selectedEvents.length} events selected</p>
          </div>
          <div className="summary-total">
            <span>Total Fee:</span>
            <span className="total-fee">₹{calculateTotalFee()}</span>
          </div>
        </div>
        <button 
          className="btn-continue" 
          onClick={handleContinue}
          disabled={selectedEvents.length === 0}
        >
          Continue to Payment <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
