import React from 'react';
import Image from 'next/image';
import Img1 from '../../public/assets/caseStudy/analytics.png';
import Clients from 'components/Clients';
import Banner from './Banner';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

// Import CSS for react-slick (uncomment these imports)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#25282C] min-h-screen text-white pt-12 max-w-8xl mx-auto">
        <div className="flex justify-center align-middle px-4 md:px-0 relative">
          <h1 className="absolute lg:mt-24 text-4xl md:text-[120px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
            CASE STUDIES
          </h1>
          <p className="mt-36 text-xl md:text-4xl mx-4 md:mx-48 font-bold leading-snug md:leading-[50px] text-center">
            Success Stories with DR Growth from 0 to 70 and Lead Increase Up to 90% - Results Speak for Themselves
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='mx-4 md:mx-48 mt-12 mb-12'>
            <Image
              src={Img1}
              width={700}
              height={500}
              alt="Case Study Analytics"
              className='rounded-xl'
            />
          </div>
        </div>
        <Clients />
        <div className='flex justify-center flex-col bg-[#25282C] py-12'>
          <h1 className='flex justify-center text-4xl py-12'>My Work</h1>
          <CaseStudies />
        </div>
        <Banner />
        <Footer2 />
      </div>
    </>
  );
};

export default Hero;


const caseStudies = [
  {
    title: 'Aegis Softtech',
    description: 'Offshore Software Development Company',
    imageSrc: '/assets/Agaes.png',
    link: '/case-study/aegissofttech'
  },
  {
    title: 'Prospeo',
    description: 'Prospeo is the most accurate email finder. Find emails from everywhere on the internet with our toolbox. Try it for free now.',
    imageSrc: '/assets/caseStudy/prospeo.png',
    link: '/case-study/prospeo'
  },
  {
    title: 'LeadGen App',
    description: 'Since October 2020, we have boosted LeadGenApp search traffic from 677K to 1.2M per month',
    imageSrc: '/assets/caseStudy/leadgen.png',
    link: '/case-study/leadgen'
  },
  {
    title: 'Apexure',
    description: 'Apexure online presence has soared with our successful link building campaign. We achieved a DR 48 Domain Rating',
    imageSrc: '/assets/caseStudy/apexure.png',
    link: '/case-study/apexure'
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="bg-[#25282C] relative overflow-hidden">
      <div className="flex justify-center relative">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          CASE STUDY
        </h2>
      </div>
      <h2 className="text-white text-4xl text-center mb-8 pt-24 font-semibold">Case Study</h2>

      {/* Carousel Container */}
      <div className="flex justify-center items-center relative">
        <button
          className="absolute left-0 text-white text-2xl md:text-4xl px-4 focus:outline-none"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="w-full px-4 md:px-24">
          <div
            className="flex transition-transform ease-in-out duration-500 lg:w-1/3"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((caseStudy, index) => (
              <CaseStudy
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                imageSrc={caseStudy.imageSrc}
                link={caseStudy.link}
              />
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 text-white text-2xl md:text-4xl px-4 focus:outline-none"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

const CaseStudy = ({ title, description, imageSrc, link }) => {
  return (
    <div className="flex-shrink-0 w-full px-4">
      <div className="bg-[#3b3b3b] p-6 rounded-3xl shadow-lg">
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
        <p className="text-sm text-gray-300 mt-2 mb-2 text-center md:text-left">{description}</p>
        <div className="text-center md:text-left">
          <a
            href={link}
            className="inline-block bg-transparent border border-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};


