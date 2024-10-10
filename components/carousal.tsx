import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(1); // Start at 1 to accommodate cloning for infinite sliding
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = 3; // Number of actual slides (without cloning)
  const slides = [0, 1, 2]; // Slide identifiers (replace these with actual slide data)
  const totalSlides = length + 2; // Adding 2 to account for cloned first and last slides
  const slideWidth = 100; // In percentage
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Move to the next slide with transition
  const moveToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  // Move to the previous slide with transition
  const moveToPreviousSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  // Handle infinite looping by "resetting" the index when transitioning beyond limits
  useEffect(() => {
    if (isTransitioning) {
      timeoutRef.current = setTimeout(() => {
        if (index === totalSlides - 1) {
          setIndex(1); // Reset to the first "real" slide after the last cloned slide
          setIsTransitioning(false);
        } else if (index === 0) {
          setIndex(length); // Reset to the last "real" slide after the first cloned slide
          setIsTransitioning(false);
        } else {
          setIsTransitioning(false);
        }
      }, 500); // Delay to match the transition duration
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isTransitioning]);

  // Auto slide every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      moveToNextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${(index * slideWidth) / totalSlides}%)`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            width: `${totalSlides * 100}%`,
          }}
        >
          {/* Clone last slide for smooth infinite sliding */}
          <div className="carousel-slide">Slide {slides[length - 1]}</div>

          {/* Actual slides */}
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">Slide {slide}</div>
          ))}

          {/* Clone first slide for smooth infinite sliding */}
          <div className="carousel-slide">Slide {slides[0]}</div>
        </div>
      </div>

      {/* Controls */}
      <button onClick={moveToPreviousSlide}>Previous</button>
      <button onClick={moveToNextSlide}>Next</button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === (index - 1) % length ? 'active' : ''}`}
            onClick={() => setIndex(i + 1)}
          />
        ))}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          min-width: 100%;
          flex-shrink: 0;
          height: 300px; /* Adjust based on content */
          background-color: lightgray;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .dots {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .dot {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background-color: #333;
        }

        /* Responsive styles */
        @media (min-width: 768px) {
          .carousel-slide {
            min-width: 33.33%; /* Show 3 slides for larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
