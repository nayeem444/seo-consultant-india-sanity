import React ,{useEffect} from 'react';
import { PopupButton } from "react-calendly";

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
      className="bg-transparent border-2 border-white-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    />
  );
};

const Banner = () => {
  return (
    <div className='bg-[#2465F5] flex justify-center h-3/5 align-middle items-center flex-col py-4'>
        <h1 className='text-center text-5xl font-semibold pt-8'>
        Ready To Take Your SEO To <br/>
        The Next Level
        </h1>
        <p className='text-center'>
        Effective SEO strategies not only elevate a website's visibility but also drive<br/>
        targeted traffic, enhance user experience,
        </p>
        <div>
             <CalendlyPopupButton/>
            </div>
    </div>
  )
}

export default Banner;
