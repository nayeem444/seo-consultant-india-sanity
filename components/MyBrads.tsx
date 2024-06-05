import React from 'react';
import Image from 'next/image';

const images = {
  logo: "/a Marketing Lad Company (1).svg",
  logo2: "/a Marketing Lad Company.svg"
};

const MyBrands = () => {
  return (
    <div className='bg-black'>
      <div className=" p-6 ">
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
    <div className="flex flex-wrap justify-center p-4 ">
      {Object.values(images).map((image, index) => (
        <div key={index} className="m-2 ">
          <Image
           
            src={image}
            alt={`logo${index}`}
            width={180}
            height={180}
            layout="fixed"
            
            className=" rounded -mt-12 mb-8"
          />
        </div>
      ))}
    </div>
  );
};
