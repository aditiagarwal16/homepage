// src/components/Premium.js
import React, { useState } from 'react';
import './Premium.css';

const Premium = () => {
  const [themeColor, setThemeColor] = useState('#007bff'); // Default theme color
  const [bannerMessage, setBannerMessage] = useState('Welcome to your personalized premium experience!');

  const handleThemeChange = (event) => {
    setThemeColor(event.target.value);
  };

  const handleBannerChange = (event) => {
    setBannerMessage(event.target.value);
  };

  return (
    <div className="premium-container">
      <h1 style={{ color: themeColor }}>Welcome to the Premium Plan</h1>
      <p>Enjoy access to all premium features such as customization, themes, and more!</p>

      <section className="feature">
        <h2 style={{ color: themeColor }}>Customization Features</h2>
        <p>Personalize your experience with banners and themes.</p>
        
        {/* Banner customization */}
        <div className="customization-option">
          <label>Banner Message:</label>
          <input
            type="text"
            value={bannerMessage}
            onChange={handleBannerChange}
            className="input-banner"
          />
        </div>
        <p className="banner-message">{bannerMessage}</p>

        {/* Theme color customization */}
        <div className="customization-option">
          <label>Theme Color:</label>
          <input
            type="color"
            value={themeColor}
            onChange={handleThemeChange}
            className="color-picker"
          />
        </div>
      </section>

      <section className="feature">
        <h2 style={{ color: themeColor }}>Analytics Dashboard</h2>
        <p>Advanced analytics for better decision-making.</p>
        <div className="dashboard">
          <div className="stat">
            <h3>Total Views</h3>
            <p>1,324</p>
          </div>
          <div className="stat">
            <h3>Unique Visitors</h3>
            <p>567</p>
          </div>
          <div className="stat">
            <h3>Engagement Rate</h3>
            <p>76%</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;
