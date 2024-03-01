import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import img1 from '../public/Apexure (1).png';
import img2 from '../public/Beaconstac.png';
import img3 from '../public/DOOR3.png';
import img4 from '../public/Infuse-Media (2).png';
import img5 from '../public/LeadGen-App.png';
import img6 from '../public/Taxmann.png';
import img7 from '../public/Untitled-1-1.png';

const CustomNextArrow = (props) => (
  <div {...props} className="slick-arrow next-arrow">
    <i className="fas fa-chevron-right"></i>
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props} className="slick-arrow prev-arrow">
    <i className="fas fa-chevron-left"></i>
  </div>
);

const CaurosalLogo = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section>
      <div>
        <h2 className="font-montserrat mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-dark md:text-4xl">
          Associated And Featured In:
        </h2>
        <Slider {...settings} className="slick-slider md:h-48">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="flex">
                <div className="mr-4">
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaurosalLogo;
