import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: ''
  });
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [paymentMode, setPaymentMode] = useState<'upi' | 'cash'>('upi');
  const [eventType, setEventType] = useState<'technical' | 'cultural'>('technical');
  
  // Load selected events from session storage
  useEffect(() => {
    const storedEvents = sessionStorage.getItem('selectedEvents');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      setSelectedEvents(parsedEvents);
      
      // Determine event type based on the first selected event
      if (parsedEvents.length > 0) {
        const firstEvent = parsedEvents[0];
        // Check if it's a technical event
        const isTechnical = [
          "PITCH4SUSTAIN (Sustainability Hackathon)", 
          "CTRL+Z – UNDO THE CHAOS", 
          "SYNTAX SCRAMBLE", 
          "PHANTOM HUNT", 
          "INNOVATHON", 
          "MODEL BLITZ", 
          "DRONEXTREME"
        ].includes(firstEvent);
        
        setEventType(isTechnical ? 'technical' : 'cultural');
      }
    } else {
      // Redirect back to registration if no events selected
      navigate('/register');
    }
  }, [navigate]);

  // Technical and cultural events with fees
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
      { name: "SHORT FILM MAKING", fee: 599, venue: "FET", teamSize: "3-8 members" }
    ]
  };

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Calculate total fee
  const calculateTotalFee = () => {
    let total = 0;
    
    // Add up fees for all selected events
    selectedEvents.forEach(eventName => {
      const techEvent = events.technical.find(e => e.name === eventName);
      const cultEvent = events.cultural.find(e => e.name === eventName);
      
      if (techEvent) {
        total += techEvent.fee;
      } else if (cultEvent) {
        total += cultEvent.fee;
      }
    });
    
    return total;
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle payment mode selection
  const handlePaymentModeChange = (mode: 'upi' | 'cash') => {
    setPaymentMode(mode);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      alert('Please fill in all required personal details.');
      return;
    }
    
    if (selectedEvents.length === 0) {
      alert('Please select at least one event.');
      return;
    }
    
    // Only require screenshot and transaction ID for UPI payments
    if (paymentMode === 'upi') {
      if (!uploadedImage) {
        alert('Please upload your payment screenshot.');
        return;
      }
      
      if (!transactionId) {
        alert('Please provide the UPI transaction ID.');
        return;
      }
    }
    
    // Here you would typically send the data to your server
    console.log('Submitting payment information:', {
      ...formData,
      selectedEvents,
      paymentMode,
      transactionId: paymentMode === 'upi' ? transactionId : 'Pay at venue',
      totalAmount: calculateTotalFee()
    });
    
    // Redirect to confirmation page
    navigate('/registration-success');
  };

  // Get event details
  const getEventDetails = (eventName: string) => {
    const techEvent = events.technical.find(e => e.name === eventName);
    const cultEvent = events.cultural.find(e => e.name === eventName);
    
    return techEvent || cultEvent;
  };

  // Get appropriate QR code path based on event type
  const getQrCodePath = () => {
    return eventType === 'technical' 
      ? '/images/IMG_1787.PNG' 
      : '/images/GooglePay_QR (2).png';
  };

  // Get UPI ID based on event type
  const getUpiId = () => {
    return eventType === 'technical' 
      ? 'kjdhrub@oksbi' 
      : 'rohankrishnablr2004@okicici';
  };

  return (
    <div className="payment-page">
      <div className="payment-header">
        <h1>Complete Your Registration</h1>
        <p>Provide your details and payment information to finalize registration</p>
      </div>

      <div className="payment-progress">
        <div className="progress-step completed">
          <div className="step-icon"><i className="fas fa-check"></i></div>
          <div className="step-label">Select Events</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step active">
          <div className="step-icon">2</div>
          <div className="step-label">Payment</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step">
          <div className="step-icon">3</div>
          <div className="step-label">Confirmation</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="payment-container">
          <div className="payment-form-section">
            <h2>Personal Details</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-control" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-control" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="college">College/University</label>
              <input 
                type="text" 
                id="college" 
                name="college" 
                className="form-control" 
                value={formData.college}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="payment-options">
              <h2>Payment Method</h2>
              
              <div className="payment-toggle">
                <button 
                  type="button"
                  className={`payment-toggle-btn ${paymentMode === 'upi' ? 'active' : ''}`}
                  onClick={() => handlePaymentModeChange('upi')}
                >
                  <i className="fas fa-mobile-alt"></i> UPI Payment
                </button>
                <button 
                  type="button"
                  className={`payment-toggle-btn ${paymentMode === 'cash' ? 'active' : ''}`}
                  onClick={() => handlePaymentModeChange('cash')}
                >
                  <i className="fas fa-money-bill-wave"></i> Pay at Venue
                </button>
              </div>

              {paymentMode === 'upi' && (
                <div className="upi-payment-section">
                  <div className="qr-event-type">
                    <p>Scan {eventType === 'technical' ? 'Technical' : 'Cultural'} Events QR Code:</p>
                  </div>
                  
                  <div className="upi-id-display">
                    <span>UPI ID:</span> 
                    <strong>{getUpiId()}</strong>
                    <button 
                      type="button" 
                      className="copy-upi-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(getUpiId());
                        alert("UPI ID copied to clipboard!");
                      }}
                    >
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                  
                  <div className="qr-code">
                    <img 
                      src={getQrCodePath()} 
                      alt={`${eventType === 'technical' ? 'Technical' : 'Cultural'} Events QR Code`} 
                      onError={(e) => (e.target as HTMLImageElement).src = '/images/placeholder.jpg'} 
                    />
                  </div>
                  
                  <div className="payment-instructions">
                    <p>
                      <i className="fas fa-info-circle"></i>
                      Please make the payment to the UPI ID shown above or scan the QR code.
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="transactionId">UPI Transaction ID / Reference Number</label>
                    <input 
                      type="text" 
                      id="transactionId" 
                      name="transactionId" 
                      className="form-control" 
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      required={paymentMode === 'upi'}
                    />
                  </div>
                  
                  <div className="upload-section">
                    <p>Upload payment screenshot for verification:</p>
                    
                    <label className="file-upload">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        required={paymentMode === 'upi'} 
                      />
                      <i className="fas fa-cloud-upload-alt"></i>
                      <div className="file-upload-text">
                        <p>Drag & Drop or Click to Upload</p>
                        <span>Supported formats: JPG, PNG</span>
                      </div>
                    </label>
                    
                    {previewSrc && (
                      <div className="preview-image">
                        <img src={previewSrc} alt="Payment Screenshot" />
                        <button 
                          type="button" 
                          className="remove-preview"
                          onClick={() => {
                            setPreviewSrc('');
                            setUploadedImage(null);
                          }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {paymentMode === 'cash' && (
                <div className="cash-payment-section">
                  <div className="cash-payment-notice">
                    <i className="fas fa-info-circle"></i>
                    <div>
                      <h4>Pay at Venue Information</h4>
                      <p>You've selected to pay at the venue. Please note:</p>
                      <ul>
                        <li>An additional ₹100 per event will be charged for on-site payment</li>
                        <li>Your total payment at the venue will be <strong>₹{calculateTotalFee() + (selectedEvents.length * 100)}</strong></li>
                        <li>Bring exact change if possible</li>
                        <li>Only cash payments are accepted at the venue</li>
                        <li>Your registration is not confirmed until payment is made</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="payment-details-section">
            <h2>Your Selected Events</h2>
            
            <div className="registration-summary">
              {selectedEvents.length > 0 ? (
                <>
                  {selectedEvents.map(eventName => {
                    const eventDetails = getEventDetails(eventName);
                    return (
                      <div key={eventName} className="summary-item">
                        <div className="summary-label">{eventName}</div>
                        <div className="summary-value">₹{eventDetails?.fee}</div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="no-events-selected">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>No events selected</p>
                </div>
              )}
            </div>
            
            <div className="total-amount">
              <div className="summary-label">Total Amount</div>
              <div className="summary-value">₹{calculateTotalFee()}</div>
            </div>

            {paymentMode === 'cash' && (
              <div className="total-amount venue-total">
                <div className="summary-label">Total at Venue (+₹100/event)</div>
                <div className="summary-value">₹{calculateTotalFee() + (selectedEvents.length * 100)}</div>
              </div>
            )}
            
            <div className="payment-note">
              <p>
                <i className="fas fa-info-circle"></i> 
                On-site registration will have an additional fee of ₹100 per event.
              </p>
            </div>
            
            <div className="action-buttons">
              <button type="submit" className="btn-payment btn-primary" disabled={selectedEvents.length === 0}>
                Complete Registration
              </button>
              <button 
                type="button" 
                onClick={() => navigate('/register')} 
                className="btn-payment btn-secondary"
              >
                Back to Events
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
