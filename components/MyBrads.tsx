import React from 'react';
import Image from 'next/image';

const images = {
  logo: "/grc.png",
  logo2: "/marketinglad.png"
};

const MyBrands = () => {
  return (
    <div>
      <div className="bg-black p-6 md:p-12">
        <div className="flex justify-center">
          <h3 className="text-white font-bold text-2xl md:text-4xl mt-4 md:mt-8">My Brands</h3>
        </div>
        <div className="flex justify-center">
          <p className="text-white p-4 md:p-12 mx-4 md:mx-48 text-center">
            I'm the founder of Marketing Lad and Google Rank Check. Our intuitive SaaS tool helps SEOs in tracking their keyword positions.
          </p>
        </div>
      </div>
      <div>
        <Brand />
      </div>
    </div>
  );
};

export default MyBrands;

const Brand = () => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {Object.values(images).map((image, index) => (
        <div key={index} className="m-2 lg:-mt-12 ">
          <Image
           
            src={image}
            alt={`logo${index}`}
            width={300}
            height={300}
            layout="fixed"
            sizes="(max-width: 640px) 100px, (min-width: 641px) 250px"
            className=" rounded sm:w-100 sm:h-100 md:w-250 md:h-250 object-contain"
          />
        </div>
      ))}
    </div>
  );
};
