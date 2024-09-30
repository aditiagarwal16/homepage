import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Custom Header Component
import ImagePlaceholder from './components/ImagePlaceholder'; // Placeholder image for the main page
import FeaturedArticles from './components/FeaturedArticles'; // Component to show Featured Articles
import FeaturedTutorials from './components/FeaturedTutorials'; // Component to show Featured Tutorials
import Footer from './components/Footer'; // Footer Component
import PricingPlans from './components/PricingPlans'; // Pricing component
import Payment from './components/Payment'; // Payment component
import Post from './components/Post'; // Post component
import Premium from './components/Premium'; // Premium content component
import Messaging from './components/Messaging'; // Messaging Component
import Chatbot from './components/Chatbot'; // Chatbot Component
import Login from './components/Login'; // Login Component
import SignUp from './components/SignUp'; // SignUp Component
import OTPVerification from './components/OTPVerification'; // OTP Verification Component
import Tutorial from './components/Tutorial'; // Import Tutorial Component
import './App.css'; // Importing styles

const App = () => {
  const [isPremium, setIsPremium] = useState(false); // State to manage Premium access

  // Callback for payment success to enable premium access
  const handlePaymentSuccess = () => {
    setIsPremium(true); // Set user as premium
  };

  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Header /> {/* Navigation Bar */}
          <Routes>
            {/* Main Homepage Route */}
            <Route path="/" element={
              <>
                <ImagePlaceholder />
                <FeaturedArticles isPremium={isPremium} /> {/* Show Premium Content if applicable */}
                <FeaturedTutorials isPremium={isPremium} /> {/* Show Premium Content if applicable */}
              </>
            } />
            {/* Pricing Page Route */}
            <Route path="/pricing" element={<PricingPlans />} />
            {/* Payment Page Route with Callback for Premium Status */}
            <Route path="/payment" element={<Payment onPaymentSuccess={handlePaymentSuccess} />} />
            {/* Post a Question Route */}
            <Route path="/post" element={<Post />} />
            {/* Premium Content Route */}
            <Route path="/premium" element={<Premium />} />
            {/* Messaging Route */}
            <Route path="/messaging" element={<Messaging />} />
            {/* Chatbot Route */}
            <Route path="/chatbot" element={<Chatbot />} />
            {/* Login Page Route */}
            <Route path="/login" element={<Login />} />
            {/* SignUp Page Route */}
            <Route path="/signup" element={<SignUp />} />
            {/* OTP Verification Route */}
            <Route path="/otp-verification" element={<OTPVerification />} />
            {/* Tutorial Page Route */}
            <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
          <Footer /> {/* Footer Component */}
        </div>
      </div>
    </Router>
  );
};

export default App;
