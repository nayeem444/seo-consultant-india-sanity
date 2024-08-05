import React from 'react'
import Image from 'next/image'
import Img1 from '../../public/assets/caseStudy/analytics.png'
import Clients from 'components/Clients'
import Banner from './Banner'
import Navbar from 'components/Navbar2'
import Footer2 from 'components/Footer2'

const Hero = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-[#25282C] min-h-screen text-white pt-12">
        <div className="flex justify-center align-middle px-4 md:px-0">
          <h1 className="absolute lg:mt-24 text-4xl md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
            CASE STUDIES
          </h1>
          <p className="mt-36 text-xl md:text-4xl mx-4 md:mx-48 font-bold leading-snug md:leading-[50px]">
            Success Stories with DR Growth from 0 to 70 and Lead Increase Up to
            90% - Results Speak for Themselves
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='mx-4 md:mx-48 mt-12 mb-12'>
            <Image
              src={Img1}
              width={700}
              height={500}
              className='rounded-xl'
            />
          </div>
        </div>
        <div>
          <Clients/>
        </div>
        <div className='flex justify-center flex-col bg-[#25282C] py-12'>
          <h1 className='flex justify-center text-4xl py-12'>
            My Work
          </h1>
          <CaseStudies/>
        </div>
        <Banner/>
        <Footer2/>
      </div>
    </>
  )
}

export default Hero

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-24">
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

const CaseStudy = ({ title, description, imageSrc, link }) => {
  return (
    <div className="bg-[#25282C] p-4">
      <div className="bg-[#3b3b3b] p-6 rounded-3xl shadow-lg">
        <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <Image 
            src={imageSrc} 
            alt={title} 
            layout="fill" 
            objectFit="contain" 
            className="rounded-3xl" 
          />
        </div>
        <h3 className="text-lg font-semibold text-left">{title}</h3>
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
