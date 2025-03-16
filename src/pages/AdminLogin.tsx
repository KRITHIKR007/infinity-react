import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  // Check if already authenticated
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/admin-dashboard');
    }
  }, [navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation - in real app, this would be server-side
      if (credentials.username === 'admin' && credentials.password === 'infinity2025') {
        console.log("Login successful");
        
        // Set authentication state immediately
        localStorage.setItem('isAuthenticated', 'true');
        
        // Force a small delay to ensure state is updated
        setTimeout(() => {
          navigate('/admin-dashboard');
        }, 50);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1 className="login-title">Admin Login</h1>
          <p className="login-subtitle">Infinity 2025 Event Management</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          {error && <div className="login-error">{error}</div>}
          
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? (
              <span className="login-loading"></span>
            ) : (
              <>
                <i className="fas fa-lock"></i> Login
              </>
            )}
          </button>
          
          <div className="login-options">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="/">Back to Website</a>
          </div>
        </form>
        
        <div className="login-footer">
          &copy; {new Date().getFullYear()} Infinity 2025. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
