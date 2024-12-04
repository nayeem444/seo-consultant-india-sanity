
// import React, { useState } from 'react';
// import Image from 'next/image';

// type Testimonial = {
//   id: number;
//   name: string;
//   headline: string;
//   role: string;
//   company: string;
//   content: string;
//   image: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Jeremiah O Brian Emerge',
//     headline: 'Exceptional Link-Building Services Boost Our Domain Ranking',
//     role: 'Founder Emerge Global',
//     company: 'Emerge Global',
//     content: 'Shahid delivered exceptional link-building services, significantly boosting our domain ranking. His expertise, professionalism, and clear communication made the process seamless, establishing our brand as a reputable authority. We highly recommend his service.',
//     image: 'https://marketinglad.io/wp-content/uploads/2024/08/testi1.jpeg',
//   },
//   {
//     id: 2,
//     name: 'Arusik Ghambaryan',
//     headline: 'SEO Expertise and Proactive Collaboration',
//     role: 'Marketer ',
//     company: 'Crowdfunding',
//     content: 'Shahid has a deep knowledge of SEO and content marketing. Its been a complete pleasure working with him. He is a proactive contributor who would make a great addition to any business. Communications are clear & frequent.',
//     image: 'https://marketinglad.io/wp-content/uploads/2022/10/Arusik-Ghambaryan-SEO-TCF-min.jpeg',
//   },
//   {
//     id: 3,
//     name: 'Justin Lubomirsky',
//     headline: 'High-Quality Niche Backlinks With Great Value',
//     role: 'SEO Expert',
//     company: 'INFUSEmedia',
//     content: 'Shahid has been a pleasure to work with! He provides quality high DR websites within our niche. Never low-quality spammy sites or news sites which publish countless topics and have zero SEO value. His prices are also quite reasonable for what you are getting.',
//     image: 'https://marketinglad.io/wp-content/uploads/2022/11/pic-1.jpg',
//   },
//   {
//     id: 4,
//     name: 'Harsh Savani',
//     headline: 'Transformative SEO Consultation Leads to Outstanding Growth',
//     role: 'Founder',
//     company: 'Ageis Softtech',
//     content: 'Shahid Shahmiri’s SEO consultation for Aegis Softtech has been transformative. Since partnering with Shahid, we have witnessed remarkable growth in our rankings, a substantial increase in organic traffic, and a significant lead boost. His expertise, strategic approach, and deep understanding of SEO have driven exceptional results for our business. Shahid is not just a consultant; he is a true partner in our success, and we couldn’t be more satisfied with his impact on our digital presence.',
//     image: '/Images/AgesSoft.jpeg',
//   },
// ];


// const TestimonialsSection: React.FC = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(testimonials[0]);

//   return (
//     <>
//    <div className="flex justify-center mb-8 sm:mb-16 md:mb-24 lg:mb-36 m-4 overflow-hidden mt-24">
//   <h2 className="absolute top-0 md:top-auto 
//     -mt-[30px] sm:-mt-[40px] md:-mt-[50px]
//     text-2xl sm:text-5xl md:text-7xl lg:text-[130px]
//     font-bold text-[#55575A] opacity-20 pointer-events-none">
//     TESTIMONIALS
//   </h2>
// </div>
// <div className="bg-gray-900 text-white p-8 rounded-3xl mx-auto max-w-7xl">
//       <div className="flex flex-col md:flex-row">


//         {/* Sidebar  */}
//         <div className="md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className={`mb-4 p-3 rounded-md cursor-pointer transition-colors flex items-center ${
//                 activeTestimonial.id === testimonial.id ? 'bg-gray-800' : 'hover:bg-gray-800'
//               }`}
//               onClick={() => setActiveTestimonial(testimonial)}
//             >
//               <Image
//                 width={40}
//                 height={40}
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <h3 className="font-semibold text-sm text-white">{testimonial.name}</h3>
//                 <p className="text-xs text-gray-400">
//                   {testimonial.role} at {testimonial.company}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

        

//         {/*  Active Testimonial */}
//         <div className="md:w-2/3 pl-0 md:pl-8 relative flex flex-col justify-center">
//         <svg viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" width={"30px"} color='rgb(75 85 99)'>
//                       <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
//                   </svg>
          
//           <h2 className="text-[1.5rem] font-[700] mb-4 text-center">{activeTestimonial.headline}</h2>
//           <p className="text-[1.125rem] font-[300] text-gray-400 text-center">{activeTestimonial.content}</p>
//         </div>
//       </div>
//     </div>
//     </>
   
//   );
// };

// export default TestimonialsSection;





import React, { useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  headline: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jeremiah O Brian Emerge',
    headline: 'Exceptional Link-Building Services Boost Our Domain Ranking',
    role: 'Founder Emerge Global',
    company: 'Emerge Global',
    content: 'Shahid delivered exceptional link-building services, significantly boosting our domain ranking. His expertise, professionalism, and clear communication made the process seamless, establishing our brand as a reputable authority. We highly recommend his service.',
    image: 'https://marketinglad.io/wp-content/uploads/2024/08/testi1.jpeg',
  },
  {
    id: 2,
    name: 'Arusik Ghambaryan',
    headline: 'SEO Expertise and Proactive Collaboration',
    role: 'Marketer ',
    company: 'Crowdfunding',
    content: 'Shahid has a deep knowledge of SEO and content marketing. Its been a complete pleasure working with him. He is a proactive contributor who would make a great addition to any business. Communications are clear & frequent.',
    image: 'https://marketinglad.io/wp-content/uploads/2022/10/Arusik-Ghambaryan-SEO-TCF-min.jpeg',
  },
  {
    id: 3,
    name: 'Justin Lubomirsky',
    headline: 'High-Quality Niche Backlinks With Great Value',
    role: 'SEO Expert',
    company: 'INFUSEmedia',
    content: 'Shahid has been a pleasure to work with! He provides quality high DR websites within our niche. Never low-quality spammy sites or news sites which publish countless topics and have zero SEO value. His prices are also quite reasonable for what you are getting.',
    image: 'https://marketinglad.io/wp-content/uploads/2022/11/pic-1.jpg',
  },
  {
    id: 4,
    name: 'Harsh Savani',
    headline: 'Transformative SEO Consultation Leads to Outstanding Growth',
    role: 'Founder',
    company: 'Ageis Softtech',
    content: 'Shahid Shahmiri’s SEO consultation for Aegis Softtech has been transformative. Since partnering with Shahid, we have witnessed remarkable growth in our rankings, a substantial increase in organic traffic, and a significant lead boost. His expertise, strategic approach, and deep understanding of SEO have driven exceptional results for our business. Shahid is not just a consultant; he is a true partner in our success, and we couldn’t be more satisfied with his impact on our digital presence.',
    image: '/Images/AgesSoft.jpeg',
  },
];


const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(testimonials[0]);

  return (
    <div className="relative px-4 py-12 sm:py-16 md:py-24">
      {/* Background Title */}
      <div className="flex justify-center mb-8 sm:mb-16 overflow-hidden">
        <h2 className="absolute top-0 
          text-3xl sm:text-5xl md:text-7xl lg:text-[130px] lg:mt-24
          font-bold text-[#55575A] opacity-20 pointer-events-none
          transform -translate-y-1/2">
          TESTIMONIALS
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 rounded-3xl mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-3 rounded-md cursor-pointer transition-all duration-300 
                  flex items-center gap-3 hover:transform hover:scale-102
                  ${activeTestimonial.id === testimonial.id 
                    ? 'bg-gray-800 shadow-lg' 
                    : 'hover:bg-gray-800/50'}`}
                onClick={() => setActiveTestimonial(testimonial)}
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Testimonial */}
          <div className="lg:w-2/3 flex flex-col justify-center space-y-6 p-4">
            <svg 
              viewBox="0 0 24 27" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-gray-600"
            >
              <path 
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" 
                fill="currentColor"
              />
            </svg>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-[1.5rem] font-bold text-center">
                {activeTestimonial.headline}
              </h2>
              <p className="text-base sm:text-lg md:text-[1.125rem] text-gray-400 text-center leading-relaxed">
                {activeTestimonial.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;