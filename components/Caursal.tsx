import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const logos = [
    '<svg><!-- Logo 1 SVG code --></svg>',
    '<svg><!-- Logo 2 SVG code --></svg>',
    '<svg><!-- Logo 3 SVG code --></svg>',
    '<svg><!-- Logo 4 SVG code --></svg>',
    '<svg><!-- Logo 5 SVG code --></svg>',
    '<svg><!-- Logo 6 SVG code --></svg>',
    '<svg><!-- Logo 7 SVG code --></svg>',
    '<svg><!-- Logo 8 SVG code --></svg>',
    '<svg><!-- Logo 9 SVG code --></svg>',
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        {isMobile ? (
          <div className="flex-none w-full">
            <div dangerouslySetInnerHTML={{ __html: logos[currentIndex] }} />
          </div>
        ) : (
          logos.map((logo, index) => (
            <div
              key={index}
              className={`flex-none w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 ${
                index === currentIndex ? 'opacity-100' : 'opacity-50'
              }`}
              dangerouslySetInnerHTML={{ __html: logo }}
            />
          ))
        )}
      </div>
      {isMobile && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={prevLogo}
            className="px-4 py-2 bg-gray-200 rounded-l hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextLogo}
            className="px-4 py-2 bg-gray-200 rounded-r hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;






