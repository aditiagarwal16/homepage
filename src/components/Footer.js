import React, { useState } from 'react';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      // Send email to the backend
      const response = await axios.post('http://localhost:5002/subscribe', { email });

      if (response.status === 200) {
        setMessage('Subscription successful! Check your inbox for the welcome email.');
        setEmail(''); // Clear the input after success
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again later.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="footer">
      <div className="subscribe-section">
        <span>SIGN UP FOR OUR DAILY INSIDER</span>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state
        />
        <button onClick={handleSubscribe}>Subscribe</button>
        {message && <p>{message}</p>} {/* Display messages to the user */}
      </div>

      {/* Rest of the footer content */}
      <div className="footer-links">
        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="stay-connected">
          <h4>Stay connected</h4>
          <ul>
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>DEV@Deakin 2022</span>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
