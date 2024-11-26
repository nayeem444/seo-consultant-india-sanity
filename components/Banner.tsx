import React, { useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Image from 'next/image';
import img from '../public/Screenshot 2023-02-17 at 5.17.46 PM.png';
import CustomButton from './CustomButton';
import { useCookies } from 'react-cookie';

const ExitPopup = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies(['exitPopupShown']);

  useEffect(() => {
    const handleMouseLeave = (evt) => {
      if (!cookies.exitPopupShown) {
        setIsOpen(true);
        setCookie('exitPopupShown', true, { path: '/', maxAge: 86400 }); // Cookie expires in 1 day (86400 seconds)
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cookies, setCookie]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-[#25282C] max-w-8xl">
     
        <div className="bg-[#25282C]">
          <div>
            <Modal open={isOpen} onClose={closeModal} center>
              <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className=" mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6   lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-row lg:flex-row">
                  <div className="sm:text-center lg:text-left">
                    <h3 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                      <span className="block xl:inline mr-2">Want to see a similar trend </span>
                      <span className="block text-blue-600 xl:inline">in your GSC ?</span>
                    </h3>
                    <p
                      className="mt-3  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Transform Your Web Presence: Advanced Techniques for Increasing Traffic, Impressions, CTR, and Domain Authority.
                    </p>
                    <Image
                      src={img}
                      width={800}
                      height={400}
                      alt='image'
                    />
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                      <div className="rounded-md shadow">
                        <div className='font-montserrat py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                          <CustomButton />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
                <div className="lg:inset-y-0  lg:w-1/2 my-4">
                </div>
              </section>
            </Modal>
          </div>
        </div>
     
    </section>
  );
};

export default ExitPopup;
