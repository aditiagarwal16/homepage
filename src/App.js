// src/App.js
import React from 'react';
import Header from './components/Header';
import ImagePlaceholder from './components/ImagePlaceholder';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <ImagePlaceholder />
        <FeaturedArticles />
        <FeaturedTutorials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
