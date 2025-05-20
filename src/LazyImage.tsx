// LazyImage.js (Lazy loading using the native HTML lazy loading)
import React from 'react';

const LazyImage = ({ src, alt, imageId }) => {
  return (
    <div id={imageId} style={{ margin: '100px 0' }}>
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
      />
    </div>
  );
};

export default LazyImage;
