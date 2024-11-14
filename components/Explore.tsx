// import React from 'react'
// import Image from 'next/image'
// import Slider from 'react-slick'
// import img1 from '../public/assets/New_CustomShow_logo_ 1.svg'
// import img2 from '../public/assets/Marketing-Lad-logo-white 2.svg'
// import img3 from '../public/assets/fullfeel_logo_gradient_v1-2048x250 1.svg'

// const ExploreSection = () => {
//   const items1 = [
//     {
//       title: 'Dynamic Presentations – Benefits, Types, and Uses',
//       keyword: 'Dynamic Presentations',
//       imgSrc:
//         'https://www.customshow.com/wp-content/uploads/2023/07/CustomShow-Blogs-2.png',
//       link: 'https://www.customshow.com/dynamic-presentations/',
//     },
//     {
//       title: 'The Art of Ethical Presentations: Conscious Communication',
//       keyword: 'Ethical Presentations',
//       imgSrc:
//         'https://www.customshow.com/wp-content/uploads/2023/12/CustomShow-Blogs-6.png',
//       link: 'https://www.customshow.com/ethical-presentations/',
//     },
//     {
//       title: 'The Importance of Video in Presentations',
//       keyword: 'Importance of video presentations',
//       imgSrc:
//         'https://www.customshow.com/wp-content/uploads/2017/01/The-Importance-of-Video-in-Presentations.png',
//       link: 'https://www.customshow.com/importance-video-presentations/',
//     },
//     {
//       title: 'How to Hand Over A Presentation to the Next Person',
//       keyword: 'How to hand over a presentation to next person',
//       imgSrc:
//         'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
//       link: 'https://www.customshow.com/how-to-handover-presentation-to-next-person/',
//     },
//     {
//       title: '10 Types of Presentations: From Elegant to Persuasive',
//       keyword: 'Types of presentations',
//       imgSrc:
//         'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
//       link: 'https://www.customshow.com/types-of-presentations/',
//     },
//   ]

//   const items2 = [
//     {
//       title: '16 Proven Ethical Link Building Strategies In 2024',
//       keyword: 'Ethical Link Building',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2020/10/26052023-3-768x432.png',
//       link: 'https://marketinglad.io/ethical-link-building-strategies/',
//     },
//     {
//       title: 'Landing Page Size Guide: Boost Your Conversion Rates',
//       keyword: 'Landing Page size guide',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/12/Add-a-subheading-2-2-768x432.png',
//       link: 'https://marketinglad.io/landing-page-size-guide/',
//     },
//     {
//       title: 'Permanent Backlinks – 8 Most Effective Ways To Grab Them.',
//       keyword: 'Permanent Backlinks',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/05/Add-a-subheading-2-768x432.png',
//       link: 'https://marketinglad.io/permanent-backlinks/',
//     },
//     {
//       title: 'Forum Backlinks: What Are They And Do They Hurt SEO.',
//       keyword: 'Forum Backlinks',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-4-768x432.png',
//       link: 'https://marketinglad.io/forum-backlinks/',
//     },
//     {
//       title: 'What Are Contextual Backlinks – Why Do You Need Them?',
//       keyword: 'Contextual Backlinks',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
//       link: 'https://marketinglad.io/contextual-backlinks/',
//     },
//     {
//       title: '19 Best Link-Building And SEO Communities In 2024',
//       keyword: 'Best marketing and Link Building communities',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
//       link: 'https://marketinglad.io/best-marketing-and-linkbuilding-communities/',
//     },
//     {
//       title: 'SEMScoop Review: A Keyword Research Tool In 2024',
//       keyword: 'Semscoop Review',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/07/Add-a-subheading-8-768x432.png',
//       link: 'https://marketinglad.io/semscoop-review-a-keyword-research-tool/',
//     },
//     {
//       title: 'Link Building For Startups – 4 Best Ways To Get Started.',
//       keyword: 'Link Building for startups',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
//       link: 'https://marketinglad.io/link-building-startups/',
//     },
//     {
//       title: '15 Education Marketing Trends In 2024',
//       keyword: 'Education marketing trends',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2021/08/Deeba-13-768x432.png',
//       link: 'https://marketinglad.io/education-marketing-trends/',
//     },
//     {
//       title:
//         'The Role Of Link Juice In SEO: Tips For Building Better Backlinks',
//       keyword: 'Role of link juice',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
//       link: 'https://marketinglad.io/the-role-of-link-juice-in-seo-for-building-better-backlinks/',
//     },
//     {
//       title: 'The Power Of Pillow Links: Building Better Backlinks For SEO',
//       keyword: 'Power of pillow links',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
//       link: 'https://marketinglad.io/the-power-of-pillow-links-building-better-backlinks-for-seo/',
//     },
//     {
//       title: 'Role Of Niche Relevant Backlinks In Digital Marketing',
//       keyword: 'Role of niche relevant backlinks',
//       imgSrc:
//         'https://marketinglad.io/wp-content/uploads/2023/05/Add-a-subheading-1-3-300x169.png',
//       link: 'https://marketinglad.io/role-of-niche-relevant-backlinks-in-digital-marketing/',
//     },
//   ]

//   const items3 = [
//     {
//       title: 'Best States for Real Estate Agents to Grow and Succeed',
//       keyword: 'Best states for Real Estate agents',
//       imgSrc:
//         'https://www.fullfeel.io/wp-content/uploads/2023/04/best-states.jpg',
//       link: 'https://www.fullfeel.io/best-states-for-real-estate-agents/',
//     },
//     {
//       title: 'Real Estate Call To Action (CTA) – Good Examples',
//       keyword: 'Real Estate call to action',
//       imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2022/10/CTA.png',
//       link: 'https://www.fullfeel.io/real-estate-call-to-action/',
//     },
//     {
//       title: 'Why Is Being A Realtor Stressful? The Toll Of Selling Homes',
//       keyword: 'Why is Being a Realtor Stressful',
//       imgSrc:
//         'https://www.fullfeel.io/wp-content/uploads/2023/02/stressful.jpg',
//       link: 'https://www.fullfeel.io/why-is-being-a-realtor-stressful/',
//     },
//     {
//       title: 'What to Include in a Real Estate Buyers Guide',
//       keyword: 'Real Estate buyers guide',
//       imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2022/09/46.png',
//       link: 'https://www.fullfeel.io/real-estate-buyers-guide/',
//     },
//   ]

//   return (
//     <div className="mx-auto bg-[#25282C] text-white py-4 max-w-8xl">
//       <div className="container mx-auto text-center">
//         <div className="flex justify-center">
//           <h2 className="absolute text-[60px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
//             EXPLORE
//           </h2>
//         </div>
//         <div className="pt-48">
//           <p className="-mt-20 text-3xl font-semibold ">
//             Explore My Content Which Achieves High Rankings On Google
//           </p>
//           <div className="flex justify-center py-12">
//             <Image
//               src={img1}
//               width={300}
//               height={300}
//               alt="Image"
//               style={{
//                 filter: 'grayscale(1)',
//               }}
//             />
//           </div>
//           <SliderComponent items={items1} />
//           <div className="flex justify-center py-12">
//             <Image src={img2} width={300} height={300} alt="Image" />
//           </div>
//           <SliderComponent items={items2} />
//         </div>
//         <div className="flex justify-center py-12">
//           <Image
//             src={img3}
//             width={300}
//             height={300}
//             alt="Image"
//             style={{
//               filter: 'grayscale(1)',
//             }}
//           />
//         </div>
//         <SliderComponent items={items3} />
//       </div>
//     </div>
//   )
// }

// export default ExploreSection

// const SliderComponent = ({ items }) => {
//   const settings = {
//     arrows: false,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <Slider {...settings}>
//       {items.map((item, index) => (
//         <div key={index} className="p-4 max-w-6xl">
//           <div className="bg-[#3b3b3b] p-6 rounded-3xl shadow-lg max-w-6xl">
//             <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-4">
//                 <h3 className="text-lg font-semibold text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mt-2">{item.keyword}</p>
//               </div>
//               <Image
//                 src={item.imgSrc}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-3xl"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-center md:text-left">{item.title}</h3>
//             <p className="text-sm text-gray-400 text-center md:text-left py-2">
//               Keyword: {item.keyword}
//             </p>
//             <div className="text-center md:text-left">
//               <a
//                 href={item.link}
//                 className="inline-block bg-transparent border-[1px] border-blue-500 text-white rounded-full px-6 py-[4px] hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-8"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   )
// }









































import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img1 from '../public/assets/New_CustomShow_logo_ 1.svg'
import img2 from '../public/assets/Marketing-Lad-logo-white 2.svg'
import img3 from '../public/assets/fullfeel_logo_gradient_v1-2048x250 1.svg'

const ExploreSection = () => {

    const items1 = [
    {
      title: 'Dynamic Presentations – Benefits, Types, and Uses',
      keyword: 'Dynamic Presentations',
      imgSrc:
        'https://www.customshow.com/wp-content/uploads/2023/07/CustomShow-Blogs-2.png',
      link: 'https://www.customshow.com/dynamic-presentations/',
    },
    {
      title: 'The Art of Ethical Presentations: Conscious Communication',
      keyword: 'Ethical Presentations',
      imgSrc:
        'https://www.customshow.com/wp-content/uploads/2023/12/CustomShow-Blogs-6.png',
      link: 'https://www.customshow.com/ethical-presentations/',
    },
    {
      title: 'The Importance of Video in Presentations',
      keyword: 'Importance of video presentations',
      imgSrc:
        'https://www.customshow.com/wp-content/uploads/2017/01/The-Importance-of-Video-in-Presentations.png',
      link: 'https://www.customshow.com/importance-video-presentations/',
    },
    {
      title: 'How to Hand Over A Presentation to the Next Person',
      keyword: 'How to hand over a presentation to next person',
      imgSrc:
        'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
      link: 'https://www.customshow.com/how-to-handover-presentation-to-next-person/',
    },
    {
      title: '10 Types of Presentations: From Elegant to Persuasive',
      keyword: 'Types of presentations',
      imgSrc:
        'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
      link: 'https://www.customshow.com/types-of-presentations/',
    },
  ]

const items2 = [
  {
    title: '16 Proven Ethical Link Building Strategies In 2024',
    keyword: 'Ethical Link Building',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2020/10/26052023-3-768x432.png',
    link: 'https://marketinglad.io/ethical-link-building-strategies/',
  },
  {
    title: 'Landing Page Size Guide: Boost Your Conversion Rates',
    keyword: 'Landing Page size guide',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/12/Add-a-subheading-2-2-768x432.png',
    link: 'https://marketinglad.io/landing-page-size-guide/',
  },
  {
    title: 'Permanent Backlinks – 8 Most Effective Ways To Grab Them.',
    keyword: 'Permanent Backlinks',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/05/Add-a-subheading-2-768x432.png',
    link: 'https://marketinglad.io/permanent-backlinks/',
  },
  {
    title: 'Forum Backlinks: What Are They And Do They Hurt SEO.',
    keyword: 'Forum Backlinks',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-4-768x432.png',
    link: 'https://marketinglad.io/forum-backlinks/',
  },
  {
    title: 'What Are Contextual Backlinks – Why Do You Need Them?',
    keyword: 'Contextual Backlinks',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
    link: 'https://marketinglad.io/contextual-backlinks/',
  },
  {
    title: '19 Best Link-Building And SEO Communities In 2024',
    keyword: 'Best marketing and Link Building communities',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
    link: 'https://marketinglad.io/best-marketing-and-linkbuilding-communities/',
  },
  {
    title: 'SEMScoop Review: A Keyword Research Tool In 2024',
    keyword: 'Semscoop Review',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/07/Add-a-subheading-8-768x432.png',
    link: 'https://marketinglad.io/semscoop-review-a-keyword-research-tool/',
  },
  {
    title: 'Link Building For Startups – 4 Best Ways To Get Started.',
    keyword: 'Link Building for startups',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
    link: 'https://marketinglad.io/link-building-startups/',
  },
  {
    title: '15 Education Marketing Trends In 2024',
    keyword: 'Education marketing trends',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2021/08/Deeba-13-768x432.png',
    link: 'https://marketinglad.io/education-marketing-trends/',
  },
  {
    title:
      'The Role Of Link Juice In SEO: Tips For Building Better Backlinks',
    keyword: 'Role of link juice',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
    link: 'https://marketinglad.io/the-role-of-link-juice-in-seo-for-building-better-backlinks/',
  },
  {
    title: 'The Power Of Pillow Links: Building Better Backlinks For SEO',
    keyword: 'Power of pillow links',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
    link: 'https://marketinglad.io/the-power-of-pillow-links-building-better-backlinks-for-seo/',
  },
  {
    title: 'Role Of Niche Relevant Backlinks In Digital Marketing',
    keyword: 'Role of niche relevant backlinks',
    imgSrc:
      'https://marketinglad.io/wp-content/uploads/2023/05/Add-a-subheading-1-3-300x169.png',
    link: 'https://marketinglad.io/role-of-niche-relevant-backlinks-in-digital-marketing/',
  },
]

const items3 = [
  {
    title: 'Best States for Real Estate Agents to Grow and Succeed',
    keyword: 'Best states for Real Estate agents',
    imgSrc:
      'https://www.fullfeel.io/wp-content/uploads/2023/04/best-states.jpg',
    link: 'https://www.fullfeel.io/best-states-for-real-estate-agents/',
  },
  {
    title: 'Real Estate Call To Action (CTA) – Good Examples',
    keyword: 'Real Estate call to action',
    imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2022/10/CTA.png',
    link: 'https://www.fullfeel.io/real-estate-call-to-action/',
  },
  {
    title: 'Why Is Being A Realtor Stressful? The Toll Of Selling Homes',
    keyword: 'Why is Being a Realtor Stressful',
    imgSrc:
      'https://www.fullfeel.io/wp-content/uploads/2023/02/stressful.jpg',
    link: 'https://www.fullfeel.io/why-is-being-a-realtor-stressful/',
  },
  {
    title: 'What to Include in a Real Estate Buyers Guide',
    keyword: 'Real Estate buyers guide',
    imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2022/09/46.png',
    link: 'https://www.fullfeel.io/real-estate-buyers-guide/',
  },
]

return (
  <div className="mx-auto bg-[#25282C] text-white py-4 max-w-8xl overflow-hidden">
    <div className="container mx-auto text-center">
      <div className="flex justify-center">
        <h2 className="absolute text-[60px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          EXPLORE
        </h2>
      </div>
      <div className="pt-48">
        <p className="-mt-20 text-3xl font-semibold">
          Explore My Content Which Achieves High Rankings On Google
        </p>
        <div className="flex justify-center py-12">
          <Image
            src={img1}
            width={300}
            height={300}
            alt="Image"
            style={{
              filter: 'grayscale(1)',
            }}
          />
        </div>
        <SliderComponent items={items1} />
        <div className="flex justify-center py-12">
          <Image src={img2} width={300} height={300} alt="Image" />
        </div>
        <SliderComponent items={items2} />
      </div>
      <div className="flex justify-center py-12">
        <Image
          src={img3}
          width={300}
          height={300}
          alt="Image"
          style={{
            filter: 'grayscale(1)',
          }}
        />
      </div>
      <SliderComponent items={items3} />
    </div>
  </div>
)
}

export default ExploreSection





const SliderComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 for initial display
  const [itemsPerView, setItemsPerView] = useState(1); // Default for smaller screens

  // Ensure we have enough items for smooth scrolling
  const totalItems = items.length;
  const fillerItemsCount = (itemsPerView - (totalItems % itemsPerView)) % itemsPerView;
  
  // Create new array with filler items if necessary
  const displayItems = [...items];

  // Adding filler items to maintain consistent count
  for (let i = 0; i < fillerItemsCount; i++) {
    displayItems.push(items[i % totalItems]); // Add duplicates of existing items
  }

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateItemsPerView(); // Set initial items per view based on current screen size
    window.addEventListener('resize', updateItemsPerView); // Update on resize
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % displayItems.length; // Adjusted for seamless looping
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${((currentIndex) * (100 / itemsPerView))}%)`, // Adjust for current index
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 p-4"
            style={{ width: `${100 / itemsPerView}%` }} // Adjust width based on itemsPerView
          >
            <div className="bg-[#3b3b3b] p-6 rounded-3xl shadow-lg">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.keyword}</p>
                </div>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-center md:text-left">{item.title}</h3>
              <p className="text-sm text-gray-400 text-center md:text-left py-2">
                Keyword: {item.keyword}
              </p>
              <div className="text-center md:text-left">
                <a
                  href={item.link}
                  className="inline-block bg-transparent border-[1px] border-blue-500 text-white rounded-full px-6 py-[4px] hover:bg-blue-500 hover:text-white transition-colors duration-300 mb-8"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: displayItems.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Set current index directly to the slide
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

