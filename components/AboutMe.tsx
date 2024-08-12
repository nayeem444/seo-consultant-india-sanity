import React from 'react';
import Image from 'next/image';
import { PopupButton } from "react-calendly";
import CustomButton from '../components/CustomButton'
import Img1 from '../public/Images/shahid.webp'
import Img2 from '../public/assets/Rectangle 19.svg'

const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
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

const AboutMe = () => {
  return (
    <section className="relative bg-[#25282C] text-white pt-12 overflow-hidden flex justify-start" id='about'>
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center relative z-10">
        <div className="flex justify-center md:w-1/2">
          <div className="relative">
            <Image
              src={Img1}
              alt="SEO Consultant"
              width={500}
              height={200}
              className="object-contain rounded-xl"
            />
         
          </div>
        </div>
        <div className="md:w-1/2 pt-12 md:mt-0 md:pl-12 ">
          <h2 className="text-3xl  mb-4 text-center md:text-left font-semibold">Best SEO Consultant In India</h2>
          <p className="leading-relaxed mb-4 text-center md:text-left">
            As an experienced SEO consultant from India, I am specialized in driving organic growth and visibility for businesses of all sizes. With a focus on ethical SEO practices, I help businesses thrive online through sustainable and long-term strategies. I am readily available to address any questions or concerns you may have. Let me help your business succeed online.
          </p>
          <p className="leading-relaxed mb-6 text-center md:text-left">
            I regularly provide recommendations and advice to some of the biggest <span className="text-blue-400"> <a href="https://marketinglad.io/link-building-slack-community/"> SEO communities</a> </span>, groups, and social media platforms to keep up with the highly competitive search ecosystem and the latest SEO strategies. I also share many of these insights on my blog in great detail to ensure that my readers don’t miss out on anything important.
          </p>
          <div className="text-center md:text-left">
            <div
              className="inline-block bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-8"
            >
              <CustomButton/>
            </div>
          </div>
        </div>
      </div>
      <h2 className="absolute top-20 left-1/2 md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
        ABOUT
      </h2>
    </section>
  );
};

export default AboutMe;
