import React from 'react';
import Image from 'next/image';
import { PopupButton } from 'react-calendly';
import Img1 from '../public/Images/shahid2.jpg';
import Img2 from '../public/Images/explore.webp';

const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/d/cpjz-pkk-k6k"
      rootElement={document.getElementById('__next')}
      text="Book A Free Consultation Call"
      className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    />
  );
};

const ExpertiseSection = () => {
  return (
    <div className="mx-auto bg-[#25282C] text-white max-w-8xl">
      <div className="flex justify-center relative">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          EXPERTISE
        </h2>
      </div>

      <div className="container mx-auto px-4 lg:px-20 mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center pt-4 pb-12">
          My Expertise As The SEO Consultant
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <p className="mb-4">
              I have worked with several high-profile clients, including BeaconStac, Unacademy, AMEX GBT, fullfeel, Taxmann, CustomShow, Prospeo, GrowThink, and Dominion.
            </p>
            <p className="mb-4">
              With a deep understanding of search engine algorithms and a passion for driving organic traffic, I have mastered the skills of optimising websites for higher visibility and better performance in search results.
            </p>
            <p className="mb-4">
              I have a track record of success in improving domain ratings, increasing organic traffic, and boosting organic rankings for a wide range of clients.
            </p>
            <p className="mb-4">
              In the world of SEO, my story began in 2016 while I was pursuing my MBA. Eager to put theory into practice, I launched my very first website, shahmiris.com. However, it was far from a roaring success. I failed quite miserably.
            </p>
            <p className="mb-4">
              As time passed, I started my side hustle again as a Marketing Lad, and this time it began to gain traction. Within just a few short years, I found myself making ten times more than what my day job was paying me. It was a realisation that turned everything on its head. Marketing Lad was no longer just a side gig.
            </p>
            <p className="mb-4">
              I passed it on to an outstanding team of more than 20 people and took on the role of an advisor.
            </p>
            <p className="mb-4">
              I also discovered a deep love for SEO consulting. It's a joy to share the knowledge I've gathered over the years – not just the wins, but the failures too – with my clients.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-8">
            <Image
              src={Img1}
              alt="SEO Consultant"
              width={500}
              height={300}
              className="object-contain rounded-xl mb-4"
            />
            <Image
              src={Img2}
              alt="SEO Consultant"
              width={500}
              height={300}
              className="object-contain rounded-xl"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-24 text-center">
          <h3 className="text-4xl font-semibold mb-8">
            Trusted SEO Consultant in India
          </h3>
        </div>

        <div className="text-center mx-auto max-w-4xl">
          <p className="mb-4">
            As an SEO specialist, I understand that it can be difficult to trust someone on the internet claiming to be an expert. However, I have a proven track record of helping businesses develop successful digital strategies that increase rankings, drive quality traffic, and generate revenue.
          </p>
          <p className="mb-4">
            My understanding of evolving search intent and data-driven approach helps me avoid penalties from core updates. I actively participate in industry events, webinars, and podcasts to share my knowledge and stay up-to-date on the latest SEO techniques and insights.
          </p>
          <div className="mt-8 flex justify-center">
            <CalendlyPopupButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;