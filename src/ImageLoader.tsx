import React, { useState, useEffect } from 'react';
import { predictImagePriority } from './aiPrediction';
import { throttle } from './utils'; // Throttling scroll events

const ImageLoader = ({ src, alt, imageId, threshold = 300 }) => {
  const [loading, setLoading] = useState(false);
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    const handleScroll = throttle(() => {
      // Get viewport data
      const viewportData = {
        viewportTop: window.scrollY,
        viewportBottom: window.scrollY + window.innerHeight,
        scrollPosition: window.scrollY,
      };

      // Get image data
      const image = document.getElementById(imageId);
      const imageData = {
        imageTop: image.offsetTop,
        imageBottom: image.offsetTop + image.clientHeight,
        imageId: imageId,
      };

      // AI prediction
      const { priority: predictedPriority } = predictImagePriority(imageData, viewportData);
      setPriority(predictedPriority);

      // Load the image if priority is high enough
      if (predictedPriority >= 2 && !loading) {
        setLoading(true);
      }
    }, 200); // Throttle the scroll event

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, imageId]);

  return (
    <div id={imageId}>
      {loading ? <img src={src} alt={alt} /> : <div>Loading...</div>}
    </div>
  );
};

export default ImageLoader;
