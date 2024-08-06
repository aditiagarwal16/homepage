// src/components/ImagePlaceholder.js
import React from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = () => {
  return (
    <div className="image-placeholder">
      <div className="image-box">
        <img src="https://picsum.photos/1600/400" alt="Placeholder" />
      </div>
    </div>
  );
};

export default ImagePlaceholder;
