import React ,{useEffect}  from 'react'
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
        url="https://calendly.com/shahmirishahid/seo-consultation"
        rootElement={document.getElementById("__next")}
        text="Book A Free Consultation Call"
        className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
      />
    );
  };

const Hero2: React.FC = () => {
  return (
    <div className="bg-[#25282C] text-white min-h-fit flex justify-center py-8">
      {/* Background Text */}
      {/* <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[20vw] font-bold opacity-5 text-gray-700">
          SHAHIDSHAHMIR
        </span>
      </div> */}

      {/* Content */}
      <div className="relative z-10 mx-auto items-center w-full px-4 md:px-8">
        {/* Title */}
        <div className="flex justify-center text-4xl md:text-9xl font-bold text-[#55575A] pt-8 mb-8 opacity-[.2]">
          <h2>SHAHID SHAHMIRI</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:mx-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-64 md:w-auto">
              <Image src={Search} width={600} height={600} alt="Search" />
            </div>

            <div className='text-[#C0C0C0] mt-8 md:mt-24 mb-4 flex flex-col md:flex-row items-center'>
              <p className='mr-0 md:mr-12 mt-2'>Certified SEO by</p>
              <div className='flex align-middle content-center'>
                <Image src={Hubspot} width={100} height={100} alt="Hubspot" className='mr-4' />
                <Image src={Google} width={100} height={100} alt="Google" />
              </div>
            </div>
          </div>

          <div className="max-w-xl text-left mt-12 ml-0 md:ml-4 text-center md:text-left">
            <h2 className="text-xl font-light mb-4">Hi,</h2>
            <h2 className="text-xl mb-4">
              I Am Shahid{' '}
              <span className="font-bold text-white">
                Expert SEO Consultant From India
              </span>
            </h2>
            <p className="mb-8">
              The fact that you have landed here is a testament to the
              effectiveness of my optimization strategies.
            </p>
            <div>
             <CalendlyPopupButton/>
            </div>
  
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4">
              <a
              href='https://www.linkedin.com/in/shahidshahmiri/details/recommendations/?detailScreenTabIndex=0'
              className="mr-0 md:mr-2 mb-2 md:mb-0">Based on LinkedIn Reviews</a>
              <div className="flex">
                <Image
                  src={stars}
                  width={100}
                  height={100}
                  alt='stars'
                />
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start py-2">
              <Image
                src={LinkedIn}
                width={200}
                height={200}
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





