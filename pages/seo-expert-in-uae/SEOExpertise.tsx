import React from 'react';
import Image from 'next/image';
import { PopupButton } from 'react-calendly';
import Img1 from '../../public/Images/shahid2.jpg';
import Img2 from '../../public/Images/explore.webp';

const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/shahmirishahid/seo-consultation"
      rootElement={document.getElementById('__next')}
      text="Book A Free Consultation Call"
      className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    />
  );
};

const ExpertiseSection = () => {
  return (
    <div className="bg-[#25282C] text-white max-w-6xl mx-auto">
      <div className="flex justify-center relative">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          EXPERTISE
        </h2>
      </div>

      <div className="container mx-auto px-4 lg:px-20 mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center pt-4 pb-12">
          My Expertise As The SEO Consultant
        </h2>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
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
              I also discovered a deep love for SEO consulting. It's a joy to share the knowledge I’ve gathered over the years – not just the wins, but the failures too – with my clients.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex  mt-8 lg:mt-0 flex-col  ">
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
  Trusted SEO Consultant in the UAE
  </h3>
</div>

<div className="text-center mx-auto ">
  <p className="mb-4">
   I understand that placing your trust in someone online can be challenging. However, my proven track record of helping businesses craft successful digital strategies speaks for itself—boosting rankings, driving quality traffic, and increasing revenue.  </p>
  <p className="mb-4">
  With a deep understanding of evolving search intent and a data-driven approach, I ensure your site stays protected from penalties due to core updates. I regularly participate in industry events, webinars, and podcasts to share insights and stay at the forefront of the latest SEO techniques.
  </p>
  <div className="mt-8">
    <CalendlyPopupButton />
  </div>
</div>

       
      </div>
    </div>
  );
};

export default ExpertiseSection;
