import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'Aegis Softtech',
    description: 'We have a team of developers, consultants, and testers that will allow businesses to design, develop, and deploy high-quality web, mobile, desktop, and cloud',
    imageSrc: '/ages/Java.png',
    link: '/case-study/',
  },
  {
    title: 'Prospeo',
    description: 'Prospeo is the most accurate email finder. Find emails from everywhere on the internet with our toolbox. Try it for free now.',
    imageSrc: '/assets/caseStudy/prospeo.png',
    link: '/case-study/prospeo',
  },
  {
    title: 'LeadGen',
    description: 'Since October 2020, we have boosted LeadGenApp search traffic from 677K to 1.2M per month',
    imageSrc: '/assets/caseStudy/leadgen.png',
    link: '/case-study/leadgen',
  },
  {
    title: 'Apexure',
    description: 'Apexure online presence has soared with our successful link building campaign. We achieved a DR 48 Domain Rating',
    imageSrc: '/assets/caseStudy/apexure.png',
    link: '/case-study/apexure',
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, itemsPerPage]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(caseStudies.length / itemsPerPage));
  };

  const goToPreviousSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(caseStudies.length / itemsPerPage)) % Math.ceil(caseStudies.length / itemsPerPage));
  };

  return (
    <div className="mx-auto bg-[#25282C] max-w-8xl relative overflow-hidden px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex justify-center relative">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          CASE STUDY
        </h2>
      </div>
      <h2 className="text-white text-4xl text-center mb-8 pt-24 font-semibold">Case Study</h2>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <CaseStudy
                title={caseStudy.title}
                description={caseStudy.description}
                imageSrc={caseStudy.imageSrc}
                link={caseStudy.link}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(caseStudies.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          onClick={goToPreviousSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          onClick={goToNextSlide}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

const CaseStudy = ({ title, description, imageSrc, link }) => {
  return (
    <div className="p-4">
      <div className="bg-[#3b3b3b] p-6 rounded-3xl shadow-lg max-w-7xl h-full flex flex-col">
        <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
        <h3 className="text-lg font-semibold text-center md:text-left text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2 mb-4 text-center md:text-left flex-grow">{description}</p>
        <div className="text-center md:text-left">
          <a
            href={link}
            className="inline-block bg-transparent border-[1px] border-blue-500 text-white rounded-full px-6 py-[4px] hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;