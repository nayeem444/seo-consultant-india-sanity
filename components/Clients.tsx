
import React from 'react';
import Image from 'next/image';

const Clients = () => {
  const logos = [
    { name: 'Logo 1', img: '/assets/logos/LeadGen/1.png' },
    { name: 'Logo 2', img: '/assets/logos/LeadGen/2.png' },
    { name: 'Logo 3', img: '/assets/logos/LeadGen/3.png' },
    { name: 'Logo 4', img: '/assets/logos/LeadGen/4.png' },
    { name: 'Logo 5', img: '/assets/logos/LeadGen/5.png' },
    { name: 'Logo 6', img: '/assets/logos/LeadGen/6.png' },
    { name: 'Logo 8', img: '/assets/logos/LeadGen/7.png' },
  ];

  return (
    <section className="w-full bg-gray-900 py-12 overflow-hidden">
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .slider {
          display: inline-flex;
          animation: slide 20s linear infinite;
        }
       
      `}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Clients I have Worked With</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="slider">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="inline-block px-4">
                <div className="relative w-48 h-24">
                  <Image
                    layout='fill'
                    objectFit='cover'
                    alt={`${logo.name} logo`}
                    src={logo.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;







// import React from 'react';
// import Image from 'next/image';

// const Clients = () => {
//   const logos = [
//     { name: 'Logo 1', img: '/assets/logos/LeadGen/1.png' },
//     { name: 'Logo 2', img: '/assets/logos/LeadGen/2.png' },
//     { name: 'Logo 3', img: '/assets/logos/LeadGen/3.png' },
//     { name: 'Logo 4', img: '/assets/logos/LeadGen/4.png' },
//     { name: 'Logo 5', img: '/assets/logos/LeadGen/5.png' },
//     { name: 'Logo 6', img: '/assets/logos/LeadGen/6.png' },
//     { name: 'Logo 7', img: '/assets/logos/LeadGen/7.png' },
//   ];

//   return (
//     <section className="w-full bg-gray-900 py-12 overflow-hidden">
//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .slider {
//           display: inline-flex;
//           animation: slide 20s linear infinite;
//         }
//         .slider-reverse {
//           animation-direction: reverse;
//         }
//       `}</style>
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
//         <div className="overflow-hidden whitespace-nowrap mb-8">
//           <div className="slider">
//             {[...logos, ...logos].map((logo, index) => (
//               <div key={index} className="inline-block px-4">
//                 <div className="relative w-48 h-24">
//                   <Image
//                     layout='fill'
//                     objectFit='cover'
//                     alt={`${logo.name} logo`}
//                     src={logo.img}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden whitespace-nowrap">
//           <div className="slider slider-reverse">
//             {[...logos, ...logos].map((logo, index) => (
//               <div key={`reverse-${index}`} className="inline-block px-4">
//                 <div className="relative w-48 h-24">
//                   <Image
//                     layout='fill'
//                     objectFit='cover'
//                     alt={`${logo.name} logo`}
//                     src={logo.img}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;