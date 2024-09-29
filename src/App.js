// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImagePlaceholder from './components/ImagePlaceholder';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import PricingPlans from './components/PricingPlans';
import Payment from './components/Payment';
import Post from './components/Post';
import Premium from './components/Premium';
import './App.css';

const App = () => {
  const [isPremium, setIsPremium] = useState(false); // Manage premium status

  const handlePaymentSuccess = () => {
    setIsPremium(true); // Set premium status after successful payment
  };

  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <ImagePlaceholder />
                <FeaturedArticles isPremium={isPremium} /> {/* Pass premium status */}
                <FeaturedTutorials isPremium={isPremium} /> {/* Pass premium status */}
              </>
            } />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/payment" element={<Payment onPaymentSuccess={handlePaymentSuccess} />} /> 
            <Route path="/post" element={<Post />} />
            <Route path="/premium" element={<Premium />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
