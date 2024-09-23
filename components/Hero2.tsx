import React, { useEffect } from 'react'
import Image from 'next/image'
import { PopupButton } from "react-calendly";
import Search from '../public/assets/Group 14.svg'
import stars from '../public/assets/Group 17.svg'
import LinkedIn from '../public/assets/Group 16.svg'
import Hubspot from '../public/assets/hubspotlogo-web-white 1.svg'
import Google from '../public/assets/google-white-logo-1 1.svg'

const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/d/cpjz-pkk-k6k"
      rootElement={document.getElementById("__next")}
      text="Book A Free Consultation Call"
      className="bg-transparent border-2 border-blue-500 text-white rounded-full px-4 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
    />
  );
};

const Hero2: React.FC = () => {
  return (
    <div className=" mx-auto bg-[#25282C] text-white min-h-fit flex justify-center py-4 sm:py-8 max-w-6xl items-center">
      <div className="relative z-10 mx-auto items-center w-full px-2 sm:px-4 md:px-8 max-w-6xl">
        <div className="flex justify-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#55575A] pt-4 sm:pt-8 mb-4 sm:mb-8 opacity-[.2]">
          <h2 className="text-center">SHAHID SHAHMIRI</h2>
        </div>

        <div className=" flex flex-col lg:flex-row items-center lg:mx-4 xl:mx-16">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-48 sm:w-64 md:w-80 lg:w-auto">
              <Image src={Search} width={600} height={600} alt="Search" />
            </div>

            <div className='text-[#C0C0C0] mt-4 sm:mt-8 lg:mt-16 mb-4 flex flex-col lg:flex-row items-center'>
              <p className='mr-0 lg:mr-8 mt-2 text-sm sm:text-base'>Certified SEO by</p>
              <div className='flex align-middle content-center mt-2 lg:mt-0'>
                <Image src={Hubspot} width={80} height={80} alt="Hubspot" className='mr-4' />
                <Image src={Google} width={80} height={80} alt="Google" />
              </div>
            </div>
          </div>

          <div className="max-w-xl text-left mt-4 ml-0 lg:ml-4 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl mb-2 sm:mb-4">
              I Am Shahid{' '}
              <span className="font-bold text-white">
                Expert SEO Consultant From India
              </span>
            </h2>
            <p className="mb-4 sm:mb-8 text-sm sm:text-base">
              The fact that you have landed here is a testament to the
              effectiveness of my optimization strategies.
            </p>
            <div>
              <CalendlyPopupButton />
            </div>
  
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-4">
              <a
                href='https://www.linkedin.com/in/shahidshahmiri/details/recommendations/?detailScreenTabIndex=0'
                className="mr-0 sm:mr-2 mb-2 sm:mb-0 text-sm sm:text-base"
              >
                Based on LinkedIn Reviews
              </a>
              <div className="flex">
                <Image
                  src={stars}
                  width={80}
                  height={80}
                  alt='stars'
                />
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start py-2">
              <Image
                src={LinkedIn}
                width={160}
                height={160}
                alt='Linkedin'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2