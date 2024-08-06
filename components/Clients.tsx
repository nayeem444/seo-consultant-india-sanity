import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Example client images (replace with your actual client images)
const clients = [
  { id: 1, src: '/assets/apexure-logo 1.svg', alt: 'Client 1' },
  { id: 2, src: '/assets/Beaconstac_Logo-removebg-preview 1.svg', alt: 'Client 2' },
  { id: 3, src: '/assets/fullfeel_logo_gradient_v1-2048x250 1.svg', alt: 'Client 3' },
  { id: 4, src: '/assets/Growthink-Logo-2020 1.svg', alt: 'Client 5' },
  { id: 5, src: '/assets/logo-prospeo-removebg-preview 1.svg', alt: 'Client 6' },
  // Add more clients as needed
];

const Clients = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-1/4 bg-[#191B1D] py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#C0C0C0] mb-8">Clients I've Worked With</p>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center items-center rounded-md bg-transparent p-2 h-24">
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150}
                  height={150}
                  className="object-contain bg-transparent filter grayscale"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
