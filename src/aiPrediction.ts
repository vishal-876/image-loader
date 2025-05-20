// aiPrediction.js
export const predictImagePriority = (imageData: any, viewportData: any) => {
    // Simple heuristic AI model based on viewport and image distance
    const { imageTop, imageBottom, imageId } = imageData;
    const { viewportTop, viewportBottom, scrollPosition } = viewportData;
    
    // Calculate how close the image is to the viewport
    const distanceFromViewport = Math.min(
      Math.abs(viewportTop - imageBottom),
      Math.abs(viewportBottom - imageTop)
    );
  
    // AI-based logic to prioritize images closer to viewport and in user’s scroll path
    let priority = 0;
    
    if (distanceFromViewport < 300) {
      priority = 3; // High priority: likely to be visible soon
    } else if (distanceFromViewport < 600) {
      priority = 2; // Medium priority
    } else {
      priority = 1; // Low priority
    }
  
    // Return prediction with priority
    return { imageId, priority };
  };
  