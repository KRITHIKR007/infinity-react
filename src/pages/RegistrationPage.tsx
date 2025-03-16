import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    events: [] as string[],
    teamName: '',
    teamSize: '',
    teamMembers: [''], // At least one member (the lead)
    paymentMethod: 'qrcode' // Default payment method
  });
  const [submitted, setSubmitted] = useState(false);
  const [showTeamFields, setShowTeamFields] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [eventType, setEventType] = useState<'technical' | 'cultural' | ''>('');
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [step, setStep] = useState(1); // Track current step in registration process
  const [selectedEventType, setSelectedEventType] = useState<'none' | 'technical' | 'cultural'>('none');

  // Events from Infinity 2K25
  const technicalEvents = [
    "PITCH4SUSTAIN (Sustainability Hackathon)", 
    "CTRL+Z – UNDO THE CHAOS", 
    "SYNTAX SCRAMBLE", 
    "PHANTOM HUNT", 
    "INNOVATHON", 
    "MODEL BLITZ", 
    "DRONEXTREME"
  ];
  
  const culturalEvents = [
    "STEP SYNC (Solo Dance)", 
    "NRITYA VEDIKA (Group Dance)", 
    "ECHOES & STRINGS (Solo Singing)", 
    "RESONANCE (Music – Duet & Group)", 
    "COSMIC DRIFT (Fashion Show)", 
    "EKPHRASTIC POETRY", 
    "TALE REWIND (Story Writing)", 
    "JUST A MINUTE (JAM)", 
    "WAVE YOUR STORY (Speech Recital)", 
    "SHORT FILM MAKING"
  ];

  // Team event detection
  const teamEvents = [
    "PITCH4SUSTAIN (Sustainability Hackathon)", 
    "CTRL+Z – UNDO THE CHAOS", 
    "PHANTOM HUNT", 
    "INNOVATHON", 
    "DRONEXTREME",
    "NRITYA VEDIKA (Group Dance)", 
    "RESONANCE (Music – Duet & Group)", 
    "COSMIC DRIFT (Fashion Show)",
    "SHORT FILM MAKING"
  ];

  // Team size requirements
  const getTeamSizeRequirement = (event: string) => {
    const requirements: { [key: string]: string } = {
      "PITCH4SUSTAIN (Sustainability Hackathon)": "1-5 members",
      "CTRL+Z – UNDO THE CHAOS": "3-4 members",
      "PHANTOM HUNT": "4-5 members",
      "INNOVATHON": "3-5 members",
      "DRONEXTREME": "2-3 members",
      "NRITYA VEDIKA (Group Dance)": "6-15 members",
      "RESONANCE (Music – Duet & Group)": "2+ members",
      "COSMIC DRIFT (Fashion Show)": "10-14 members",
      "SHORT FILM MAKING": "3-8 members"
    };

    return requirements[event] || "Individual";
  };

  // Get event registration fee
  const getEventFee = (event: string) => {
    const fees: { [key: string]: string } = {
      "PITCH4SUSTAIN (Sustainability Hackathon)": "₹500",
      "CTRL+Z – UNDO THE CHAOS": "₹200",
      "SYNTAX SCRAMBLE": "₹150",
      "PHANTOM HUNT": "₹500",
      "INNOVATHON": "₹300",
      "MODEL BLITZ": "₹250",
      "DRONEXTREME": "₹600",
      "STEP SYNC (Solo Dance)": "₹500",
      "NRITYA VEDIKA (Group Dance)": "₹800",
      "ECHOES & STRINGS (Solo Singing)": "₹299",
      "RESONANCE (Music – Duet & Group)": "₹399 (Duet), ₹699 (Group)",
      "COSMIC DRIFT (Fashion Show)": "₹2500",
      "EKPHRASTIC POETRY": "₹199",
      "TALE REWIND (Story Writing)": "₹199",
      "JUST A MINUTE (JAM)": "₹199",
      "WAVE YOUR STORY (Speech Recital)": "₹299",
      "SHORT FILM MAKING": "₹599"
    };

    return fees[event] || "TBD";
  };

  // Get event venue
  const getEventVenue = (event: string) => {
    const venues: { [key: string]: string } = {
      "PITCH4SUSTAIN (Sustainability Hackathon)": "002",
      "CTRL+Z – UNDO THE CHAOS": "FET",
      "SYNTAX SCRAMBLE": "FET",
      "PHANTOM HUNT": "FET",
      "INNOVATHON": "IIAME",
      "MODEL BLITZ": "FET",
      "DRONEXTREME": "IIAME",
      "STEP SYNC (Solo Dance)": "Colosseum",
      "NRITYA VEDIKA (Group Dance)": "Colosseum",
      "ECHOES & STRINGS (Solo Singing)": "FET",
      "RESONANCE (Music – Duet & Group)": "FET",
      "COSMIC DRIFT (Fashion Show)": "Colosseum",
      "EKPHRASTIC POETRY": "FET",
      "TALE REWIND (Story Writing)": "FET",
      "JUST A MINUTE (JAM)": "FET",
      "WAVE YOUR STORY (Speech Recital)": "FET",
      "SHORT FILM MAKING": "FET"
    };

    return venues[event] || "TBD";
  };

  // Check if an event requires a team
  const isTeamEvent = (event: string) => {
    return teamEvents.includes(event);
  };

  // Determine event type (technical or cultural)
  const getEventType = (event: string): 'technical' | 'cultural' => {
    return technicalEvents.includes(event) ? 'technical' : 'cultural';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      // Determine if this is a technical or cultural event
      const isTechnicalEvent = technicalEvents.includes(value);
      const eventType = isTechnicalEvent ? 'technical' : 'cultural';
      
      // If this is the first event selected or matches the current event type
      if (selectedEventType === 'none' || selectedEventType === eventType) {
        // Set the event type if this is the first selection
        if (selectedEventType === 'none') {
          setSelectedEventType(eventType);
        }
        
        // If this is the first event selected, update selected event and event type
        if (formData.events.length === 0) {
          setSelectedEvent(value);
          setEventType(getEventType(value));
          setShowTeamFields(isTeamEvent(value));
          
          // Adjust team members array based on minimum requirements
          if (isTeamEvent(value)) {
            const requirement = getTeamSizeRequirement(value);
            const minSize = parseInt(requirement.split('-')[0]) || 2;
            const teamMembers = Array(minSize).fill('');
            setFormData(prev => ({ ...prev, teamMembers }));
          }
        }
        
        // Add to events
        setFormData(prev => ({ ...prev, events: [...prev.events, value] }));
      } else {
        // Prevent selection of mixed event types
        e.target.checked = false;
        alert(`You can only select ${selectedEventType} events in a single registration. Please complete this registration first or remove your current selections.`);
      }
    } else {
      // Remove from events
      const updatedEvents = formData.events.filter(event => event !== value);
      setFormData(prev => ({ ...prev, events: updatedEvents }));
      
      // If no events remain selected, reset the event type restriction
      if (updatedEvents.length === 0) {
        setSelectedEventType('none');
      }
      
      // If the unselected event was the selected one, reset
      if (value === selectedEvent) {
        if (updatedEvents.length > 0) {
          const newSelected = updatedEvents[0];
          setSelectedEvent(newSelected);
          setEventType(getEventType(newSelected));
          setShowTeamFields(isTeamEvent(newSelected));
        } else {
          setSelectedEvent('');
          setEventType('');
          setShowTeamFields(false);
        }
      }
    }
  };

  const isEventDisabled = (eventName: string): boolean => {
    if (selectedEventType === 'none') return false;
    
    const isTechnicalEvent = technicalEvents.includes(eventName);
    return (selectedEventType === 'technical' && !isTechnicalEvent) || 
           (selectedEventType === 'cultural' && isTechnicalEvent);
  };

  const addTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, '']
    }));
  };

  const removeTeamMember = (index: number) => {
    if (index === 0) return; // Don't remove the team leader
    
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      teamMembers: newTeamMembers
    }));
  };

  const handleTeamMemberChange = (index: number, value: string) => {
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index] = value;
    
    setFormData(prev => ({
      ...prev,
      teamMembers: newTeamMembers
    }));
  };

  const handlePaymentFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPaymentScreenshot(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.events.length === 0) {
      alert("Please select at least one event.");
      return;
    }
    
    // Check that all events are of the same type
    const firstEvent = formData.events[0];
    const firstEventType = getEventType(firstEvent);
    const hasInconsistentEventTypes = formData.events.some(event => getEventType(event) !== firstEventType);
    
    if (hasInconsistentEventTypes) {
      alert("You can only register for either Technical or Cultural events in a single transaction. Please adjust your selection.");
      return;
    }
    
    if (showPaymentInfo && formData.paymentMethod === 'qrcode' && !paymentScreenshot) {
      alert("Please upload your payment screenshot.");
      return;
    }
    
    console.log("Registration submitted:", formData);
    
    try {
      // Generate unique ID for the registration
      const registrationId = Date.now();
      
      // Prepare registration data
      const registrationData: any = {
        id: registrationId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        event: formData.events[0], // Primary event
        status: formData.paymentMethod === 'venue' ? 'Pending' : 'Confirmed',
        payment: formData.paymentMethod === 'venue' ? null : `/images/payments/user-${registrationId}.jpg`,
        teamName: formData.teamName || 'N/A',
        teamMembers: formData.teamMembers.filter(member => member.trim() !== ''),
        college: formData.college,
        events: formData.events
      };
      
      // Save to localStorage - get existing registrations first
      const existingRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      existingRegistrations.push(registrationData);
      localStorage.setItem('registrations', JSON.stringify(existingRegistrations));
      
      // If payment was made via QR code, save payment data
      if (formData.paymentMethod === 'qrcode' && paymentScreenshot) {
        // Convert payment screenshot to base64 for storage
        const reader = new FileReader();
        reader.onloadend = function() {
          if (reader.result) {
            // Create payment entry
            const paymentData = {
              id: registrationId, // Use same ID for simplicity
              registrationId: registrationId,
              amount: calculateTotalFee(),
              date: new Date().toISOString().split('T')[0],
              screenshot: reader.result as string, // Store as base64
              verified: false
            };
            
            // Save to localStorage
            const existingPayments = JSON.parse(localStorage.getItem('payments') || '[]');
            existingPayments.push(paymentData);
            localStorage.setItem('payments', JSON.stringify(existingPayments));
          }
        };
        reader.readAsDataURL(paymentScreenshot);
      }
      
      // Show success message
      setSubmitted(true);
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        events: [],
        teamName: '',
        teamSize: '',
        teamMembers: [''],
        paymentMethod: 'qrcode'
      });
      
      setShowTeamFields(false);
      setSelectedEvent('');
      setEventType('');
      setShowPaymentInfo(false);
      setPaymentScreenshot(null);
    } catch (error) {
      console.error("Error saving registration:", error);
      alert("There was an error processing your registration. Please try again.");
    }
  };

  // Add QR code image error handler
  const handleQRCodeError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const publicUrl = process.env.PUBLIC_URL || '';
    e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
    e.currentTarget.classList.add('fallback-image');
    
    // Show a warning that QR codes are placeholders
    console.warn('QR code image could not be loaded, using placeholder');
    
    // Add an overlay message
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const warningDiv = document.createElement('div');
      warningDiv.className = 'qr-warning-message';
      warningDiv.textContent = 'QR Code not available';
      parent.appendChild(warningDiv);
    }
  };

  // Proceed to payment step - with improved error handling
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentInfo(true);
    setStep(4);
  };

  // Calculate total fee
  const calculateTotalFee = () => {
    return formData.events.reduce((total, event) => {
      // Extract the numeric value from the fee string (e.g., "₹500" -> 500)
      const feeString = getEventFee(event);
      const feeMatch = feeString.match(/₹(\d+)/);
      const fee = feeMatch ? parseInt(feeMatch[1]) : 0;
      return total + fee;
    }, 0);
  };

  // Helper function to determine the current step's label
  const getStepLabel = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "Personal Information";
      case 2:
        return "Event Selection";
      case 3:
        return "Team Details";
      case 4:
        return "Payment";
      default:
        return "Registration";
    }
  };

  // Handle step navigation
  const goToNextStep = () => {
    // Basic validation before proceeding
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.college) {
        alert("Please fill in all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.events.length === 0) {
        alert("Please select at least one event");
        return;
      }
      setStep(3);
    } else if (step === 3 && showTeamFields) {
      if (!formData.teamName || formData.teamMembers.some(member => !member)) {
        alert("Please provide team details");
        return;
      }
      setStep(4);
      setShowPaymentInfo(true);
    } else {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      if (step === 4) {
        setShowPaymentInfo(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="registration-success">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Registration Successful!</h2>
        <p>Thank you for registering for Infinity 2025. We've sent a confirmation email with your registration details.</p>
        <button 
          className="btn-modern"
          onClick={() => window.location.href = "/"}
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <h1>Register for Infinity 2025</h1>
      
      <div className="event-info">
        <div className="event-date">
          <i className="fas fa-calendar-alt"></i> March 28-30, 2025
        </div>
        <div className="event-location">
          <i className="fas fa-map-marker-alt"></i> Colosseum, FET, IIAME, 002
        </div>
      </div>
      
      {/* Registration progress stepper */}
      <div className="registration-stepper">
        <div className={`stepper-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Personal Details</div>
        </div>
        <div className="stepper-line"></div>
        
        <div className={`stepper-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Event Selection</div>
        </div>
        <div className="stepper-line"></div>
        
        {showTeamFields && (
          <>
            <div className={`stepper-step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Team Info</div>
            </div>
            <div className="stepper-line"></div>
          </>
        )}
        
        <div className={`stepper-step ${step >= (showTeamFields ? 4 : 3) ? 'active' : ''}`}>
          <div className="step-number">{showTeamFields ? 4 : 3}</div>
          <div className="step-label">Payment</div>
        </div>
      </div>
      
      <div className="form-container">
        <div className="form-header">
          <h2>{getStepLabel(step)}</h2>
          <p className="form-subtitle">
            {step === 1 && "Let's start with your basic information"}
            {step === 2 && "Choose the events you want to participate in"}
            {step === 3 && showTeamFields && "Add your team members"}
            {step === 4 && "Complete your registration with payment"}
          </p>
        </div>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div className="form-step">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fas fa-phone-alt"></i> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="college">
                    <i className="fas fa-university"></i> College
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    placeholder="Enter your college name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="year">
                    <i className="fas fa-graduation-cap"></i> Year of Study
                  </label>
                  <select 
                    id="year" 
                    name="year" 
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="btn-next" onClick={goToNextStep}>
                Continue <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Event Selection */}
        {step === 2 && (
          <div className="form-step">
            <div className="form-card">
              <div className="events-section">
                <div className="event-category-restriction-notice">
                  <i className="fas fa-exclamation-circle"></i>
                  <div className="restriction-info">
                    <h4>Important Registration Information</h4>
                    <p>You can only register for events from one category (Technical OR Cultural) in a single transaction. If you want to participate in both types of events, please complete separate registrations.</p>
                    {selectedEventType !== 'none' && (
                      <div className="selected-category">
                        <strong>Currently selecting:</strong> {selectedEventType === 'technical' ? 'Technical Events' : 'Cultural Events'}
                        <button 
                          className="reset-selection" 
                          onClick={() => {
                            setSelectedEventType('none');
                            setFormData(prev => ({...prev, events: []}));
                          }}
                        >
                          Reset Selection
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="event-category">
                  <div className="category-header">
                    <i className="fas fa-laptop-code"></i>
                    <h3>Technical Events</h3>
                  </div>
                  <div className="event-cards">
                    {technicalEvents.map(event => (
                      <label 
                        key={event} 
                        className={`event-card ${formData.events.includes(event) ? 'selected' : ''} 
                        ${isEventDisabled(event) ? 'disabled' : ''}`}
                      >
                        <input 
                          type="checkbox" 
                          value={event}
                          checked={formData.events.includes(event)}
                          onChange={handleCheckboxChange}
                          disabled={isEventDisabled(event)}
                        />
                        <div className="event-card-content">
                          <span className="event-name">{event}</span>
                          <div className="event-details">
                            <span className="event-fee"><i className="fas fa-rupee-sign"></i> {getEventFee(event)}</span>
                            <span className="event-venue"><i className="fas fa-map-marker-alt"></i> {getEventVenue(event)}</span>
                            <span className="event-team-size"><i className="fas fa-users"></i> {getTeamSizeRequirement(event)}</span>
                          </div>
                          <div className="event-select-indicator">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="event-category">
                  <div className="category-header">
                    <i className="fas fa-music"></i>
                    <h3>Cultural Events</h3>
                  </div>
                  <div className="event-cards">
                    {culturalEvents.map(event => (
                      <label 
                        key={event} 
                        className={`event-card ${formData.events.includes(event) ? 'selected' : ''} 
                        ${isEventDisabled(event) ? 'disabled' : ''}`}
                      >
                        <input 
                          type="checkbox" 
                          value={event}
                          checked={formData.events.includes(event)}
                          onChange={handleCheckboxChange}
                          disabled={isEventDisabled(event)}
                        />
                        <div className="event-card-content">
                          <span className="event-name">{event}</span>
                          <div className="event-details">
                            <span className="event-fee"><i className="fas fa-rupee-sign"></i> {getEventFee(event)}</span>
                            <span className="event-venue"><i className="fas fa-map-marker-alt"></i> {getEventVenue(event)}</span>
                            <span className="event-team-size"><i className="fas fa-users"></i> {getTeamSizeRequirement(event)}</span>
                          </div>
                          <div className="event-select-indicator">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="btn-back" onClick={goToPreviousStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="btn-next" onClick={goToNextStep}>
                Continue <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Team Information (if applicable) */}
        {step === 3 && showTeamFields && (
          <div className="form-step">
            <div className="form-card team-form">
              <div className="selected-event-info">
                <p><strong>Selected Event:</strong> {selectedEvent}</p>
                <p><strong>Required team size:</strong> {getTeamSizeRequirement(selectedEvent)}</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="teamName">
                  <i className="fas fa-flag"></i> Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your team name"
                />
              </div>
              
              <div className="team-members-section">
                <h4><i className="fas fa-users"></i> Team Members</h4>
                <p className="team-info-note">You (the registrant) are automatically the team leader</p>
                
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="team-member-input">
                    <div className="form-group team-member-group">
                      <label>
                        {index === 0 ? (
                          <><i className="fas fa-user-tie"></i> Team Leader</>
                        ) : (
                          <><i className="fas fa-user"></i> Member {index + 1}</>
                        )}
                      </label>
                      <div className="member-input-group">
                        <input
                          type="text"
                          value={index === 0 ? formData.name : member}
                          onChange={(e) => index === 0 ? undefined : handleTeamMemberChange(index, e.target.value)}
                          placeholder="Full Name"
                          readOnly={index === 0}
                          required
                        />
                        {index !== 0 && (
                          <button 
                            type="button" 
                            className="remove-member-btn"
                            onClick={() => removeTeamMember(index)}
                            aria-label="Remove team member"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <button 
                  type="button" 
                  className="add-member-btn" 
                  onClick={addTeamMember}
                >
                  <i className="fas fa-plus"></i> Add Team Member
                </button>
              </div>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="btn-back" onClick={goToPreviousStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="btn-next" onClick={goToNextStep}>
                Continue to Payment <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}
        
        {/* Step 4: Payment */}
        {step === 4 && (
          <div className="form-step">
            <div className="form-card payment-card">
              <div className="registration-summary">
                <h3>
                  <i className="fas fa-receipt"></i> Registration Summary {' '}
                  <span className="event-type-badge">
                    {selectedEventType === 'technical' ? 'Technical Events' : 'Cultural Events'}
                  </span>
                </h3>
                
                {/* Add clear notice about event type restriction */}
                <div className="payment-type-notice">
                  <i className="fas fa-info-circle"></i>
                  <p>You can only register for {selectedEventType} events in a single transaction. 
                  For other event types, please complete a separate registration.</p>
                </div>
                
                <div className="summary-info">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>College:</strong> {formData.college}</p>
                  <p><strong>Events:</strong> {formData.events.join(", ")}</p>
                  {showTeamFields && <p><strong>Team Name:</strong> {formData.teamName}</p>}
                </div>
                
                <div className="payment-amount">
                  <h4>Total Amount</h4>
                  <div className="amount-value">₹{calculateTotalFee()}</div>
                </div>
              </div>
              
              <div className="payment-methods">
                <h3><i className="fas fa-money-bill-wave"></i> Choose Payment Method</h3>
                
                <div className="payment-method-options">
                  <label className={`payment-method-option ${formData.paymentMethod === 'qrcode' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="qrcode"
                      checked={formData.paymentMethod === 'qrcode'}
                      onChange={handleChange}
                    />
                    <div className="payment-method-icon">
                      <i className="fas fa-qrcode"></i>
                    </div>
                    <div className="payment-method-details">
                      <h4>Pay via QR Code</h4>
                      <p>Scan QR code with any UPI app</p>
                    </div>
                  </label>
                  
                  <label className={`payment-method-option ${formData.paymentMethod === 'venue' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="venue"
                      checked={formData.paymentMethod === 'venue'}
                      onChange={handleChange}
                    />
                    <div className="payment-method-icon">
                      <i className="fas fa-money-bill"></i>
                    </div>
                    <div className="payment-method-details">
                      <h4>Pay at Venue</h4>
                      <p>Make cash payment on event day</p>
                    </div>
                  </label>
                </div>
                
                {/* QR code payment section */}
                {formData.paymentMethod === 'qrcode' && (
                  <div className="qr-payment-section">
                    <h4>
                      <i className="fas fa-info-circle"></i> 
                      Scan the {selectedEventType === 'technical' ? 'Technical' : 'Cultural'} Events QR Code
                    </h4>
                    
                    <div className="qr-container">
                      {selectedEventType === 'technical' ? (
                        <div className="qr-code-wrapper active">
                          <div className="qr-code">
                            <img 
                              src={`${process.env.PUBLIC_URL}/images/payments/tech-event-qr.png`}
                              alt="Technical Event Payment QR Code" 
                              onError={handleQRCodeError}
                            />
                            <div className="qr-badge">Technical Events Payment</div>
                          </div>
                          <div className="qr-label">Technical Events</div>
                        </div>
                      ) : (
                        <div className="qr-code-wrapper active">
                          <div className="qr-code">
                            <img 
                              src={`${process.env.PUBLIC_URL}/images/payments/cultural-event-qr.png`}
                              alt="Cultural Event Payment QR Code" 
                              onError={handleQRCodeError}
                            />
                            <div className="qr-badge">Cultural Events Payment</div>
                          </div>
                          <div className="qr-label">Cultural Events</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="payment-instructions">
                      <h4><i className="fas fa-info-circle"></i> Follow These Steps</h4>
                      <ol>
                        <li>Scan the QR code with any UPI app</li>
                        <li>Pay the exact amount: <strong>₹{calculateTotalFee()}</strong></li>
                        <li>In payment description, add your name and event name</li>
                        <li>Take a screenshot of the successful payment</li>
                        <li>Upload the screenshot below</li>
                      </ol>
                    </div>
                    
                    <div className="file-upload-section">
                      <label htmlFor="paymentScreenshot">
                        <i className="fas fa-upload"></i> Upload Payment Screenshot
                      </label>
                      <div className="upload-area" onClick={() => document.getElementById('paymentScreenshot')?.click()}>
                        <input
                          type="file"
                          id="paymentScreenshot"
                          name="paymentScreenshot"
                          accept="image/*"
                          onChange={handlePaymentFileChange}
                          required={formData.paymentMethod === 'qrcode'}
                          style={{ display: 'none' }}
                        />
                        <div className="upload-content">
                          {paymentScreenshot ? (
                            <div className="file-preview">
                              <i className="fas fa-file-image"></i>
                              <p>{paymentScreenshot.name}</p>
                              <span className="file-size">
                                {(paymentScreenshot.size / 1024).toFixed(1)} KB
                              </span>
                            </div>
                          ) : (
                            <>
                              <i className="fas fa-cloud-upload-alt"></i>
                              <p>Click to upload or drag & drop</p>
                              <span>JPG, PNG or JPEG (max 5MB)</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Venue payment section */}
                {formData.paymentMethod === 'venue' && (
                  <div className="venue-payment-section">
                    <div className="venue-payment-info">
                      <h4><i className="fas fa-info-circle"></i> Important Instructions</h4>
                      <ul>
                        <li>Arrive 30 minutes early for registration</li>
                        <li>Bring exact change if possible</li>
                        <li>Payment can be made by cash only</li>
                        <li>On-spot registration will incur an additional fee of ₹100</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="form-navigation">
              <button 
                type="button" 
                className="btn-back"
                onClick={goToPreviousStep}
              >
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="submit" className="btn-submit" onClick={handleSubmit}>
                Complete Registration <i className="fas fa-check-circle"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
