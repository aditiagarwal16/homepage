// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe-section">
        <span>SIGN UP FOR OUR DAILY INSIDER</span>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
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
