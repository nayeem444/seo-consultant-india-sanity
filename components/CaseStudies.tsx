import React from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'Prospeo',
    description: 'Prospeo is the most accurate email finder. Find emails from everywhere on the internet with our toolbox. Try it for free now.',
    imageSrc: 'https://blog.shahidshahmiri.com/wp-content/uploads/2024/07/Screenshot-2024-07-19-at-4.03.59 PM.png',
    link: '/case-study/prospeo'
  },
  {
    title: 'LeadGen',
    description: 'Since October 2020, we have boosted LeadGenApp search traffic from 677K to 1.2M per month ',
    imageSrc: 'https://blog.shahidshahmiri.com/wp-content/uploads/2024/07/Screenshot-2024-07-19-at-4.05.23 PM.png',
    link: '/case-study/leadgen'
  },
  {
    title: 'Apexure',
    description: 'Apexure online presence has soared with our successful link building campaign. We achieved a DR 48 Domain Rating ',
    imageSrc: 'https://blog.shahidshahmiri.com/wp-content/uploads/2024/07/Screenshot-2024-07-19-at-3.59.27 PM.png',
    link: '/case-study/apexure'
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-[#25282C]">
      <div className="flex justify-center relative">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          CASE STUDY
        </h2>
      </div>
      <h2 className="text-white text-3xl text-center mb-8 pt-24">Case Study</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-24">
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
  );
};

export default CaseStudies;

const CaseStudy = ({ title, description, imageSrc, link }) => {
  return (
    <div className="p-4">
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
        <h3 className="text-lg font-semibold text-left text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2 mb-2">{description}</p>
        <div className="text-left">
          <a
            href={link}
            className="inline-block bg-transparent border-[1px] border-blue-500 text-white rounded-full px-6 py-[4px] hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-8"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
