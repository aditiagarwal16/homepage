import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './PricingPlans.css';

const PricingPlans = () => {
  const navigate = useNavigate();

  const handlePremiumClick = () => {
    navigate('/payment'); // Redirect to payment page
  };

  const handleFreeClick = () => {
    navigate('/'); // Redirect to the home page (or any desired page)
  };

  return (
    <div className="pricing-container">
      <h1 className="pricing-header">Pricing Plans</h1>
      <div className="plans-wrapper">
        <div className="plan free-plan" onClick={handleFreeClick}>
          <h2>Free Plan</h2>
          <p>Basic features including articles, search, etc.</p>
        </div>
        <div className="plan premium-plan">
          <h2>Premium Plan</h2>
          <p>Customization, analytics, and additional support.</p>
          <button className="premium-button" onClick={handlePremiumClick}>
            Go Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
