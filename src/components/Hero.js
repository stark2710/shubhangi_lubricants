import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const imageGalleryRef = useRef(null);

  // Dynamically import all images from the directory
  const importAll = (requireContext) => requireContext.keys().map(requireContext);
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|gif)$/));

  useEffect(() => {
    const imageGallery = imageGalleryRef.current;

    // Auto-scroll functionality
    let scrollAmount = 0;
    const scrollStep = 1; // Pixels to scroll per interval
    const scrollInterval = 20; // Interval in milliseconds

    const autoScroll = () => {
      scrollAmount += scrollStep;
      imageGallery.scrollLeft = scrollAmount;

      // Reset scroll position to create a seamless loop
      if (scrollAmount >= imageGallery.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const intervalId = setInterval(autoScroll, scrollInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <h1>Quality Oils, Batteries & Auto Parts</h1>
      <div className="image-gallery" ref={imageGalleryRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="gallery-image"
          />
        ))}
        {/* Clone images for seamless looping */}
        {images.map((image, index) => (
          <img
            key={`clone-${index}`}
            src={image}
            alt={`Slide Clone ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;