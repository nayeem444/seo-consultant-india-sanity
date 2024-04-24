import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../public/New_CustomShow_logo_-2048x364.png';
import img2 from '../public/Untitled design (47).png';
import img3 from '../public/fullfeel_logo_gradient_v1.png';

const Card = ({ title, keyword, imgSrc, link }) => (
  
  <div className="flex mb-12 ml-4">
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded w-96">
      <div className="relative h-40 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img className="object-cover" src={imgSrc} alt="card-image" />
      </div>
      <div className="p-6 ">
        
         <h5 className=" flex justify-center  items-center sm:justify-start mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
      
        <p className="flex justify-center   items-center sm:justify-start font-sans text-base antialiased leading-relaxed text-inherit">
          <span className="font-semibold  ">Keyword: 
          {keyword}
          </span>
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center  items-center sm:justify-start">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            className="align-middle select-none font-sans font-bold text-center captilize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Cards1 = ({ settings }) => {
  const cards1 = [
    {
        title: 'Dynamic Presentations – Benefits, Types, and Uses',
        keyword: 'Dynamic Presentations',
        imgSrc: 'https://www.customshow.com/wp-content/uploads/2023/07/CustomShow-Blogs-2.png',
        link: 'https://www.customshow.com/dynamic-presentations/',
      },
      {
        title: 'The Art of Ethical Presentations: Conscious Communication',
        keyword: 'Ethical Presentations',
        imgSrc: 'https://www.customshow.com/wp-content/uploads/2023/12/CustomShow-Blogs-6.png',
        link: 'https://www.customshow.com/ethical-presentations/',
      },
      {
        title: 'The Importance of Video in Presentations',
        keyword: 'Importance of video presentations',
        imgSrc: 'https://www.customshow.com/wp-content/uploads/2017/01/The-Importance-of-Video-in-Presentations.png',
        link: 'https://www.customshow.com/importance-video-presentations/',
      },
      {
        title: 'How to Hand Over A Presentation to the Next Person',
        keyword: 'How to hand over a presentation to next person',
        imgSrc: 'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
        link: 'https://www.customshow.com/how-to-handover-presentation-to-next-person/',
      },
      {
        title: '10 Types of Presentations: From Elegant to Persuasive',
        keyword: 'Types of presentations',
        imgSrc: 'https://www.customshow.com/wp-content/uploads/2024/02/CustomShow-Blogs-17.png',
        link: 'https://www.customshow.com/types-of-presentations/',
      },
        
  ];

  return (
    <div className="m-4 lg:m-12">
      <Slider {...settings}>
        {cards1.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            keyword={card.keyword}
            imgSrc={card.imgSrc}
            link={card.link}
          />
        ))}
      </Slider>
    </div>
  );
};

const Cards2 = ({ settings }) => {
  const cards2 = [
    {
      title: '16 Proven Ethical Link Building Strategies In 2024',
      keyword: 'Ethical Link Building',
      imgSrc: 'https://marketinglad.io/wp-content/uploads/2020/10/26052023-3-768x432.png',
      link: 'https://marketinglad.io/ethical-link-building-strategies/',
    },
    {
      title: 'Landing Page Size Guide: Boost Your Conversion Rates',
      keyword: 'Landing Page size guide',
      imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/12/Add-a-subheading-2-2-768x432.png',
      link: 'https://marketinglad.io/landing-page-size-guide/',
    },

    {
        title: 'Permanent Backlinks – 8 Most Effective Ways To Grab Them.',
        keyword: 'Permanent Backlinks',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/05/Add-a-subheading-2-768x432.png',
        link: 'https://marketinglad.io/permanent-backlinks/',
      },
    
      {
        title: 'Forum Backlinks: What Are They And Do They Hurt SEO.',
        keyword: 'Forum Backlinks',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-4-768x432.png',
        link: 'https://marketinglad.io/forum-backlinks/',
      },

      {
        title: 'What Are Contextual Backlinks – Why Do You Need Them?',
        keyword: 'Contextual Backlinks',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
        link: 'https://marketinglad.io/contextual-backlinks/',
      },
      {
        title: '19 Best Link-Building And SEO Communities In 2024',
        keyword: 'Best marketing and Link Building communities',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/06/Add-a-subheading-9-768x432.png',
        link: 'https://marketinglad.io/best-marketing-and-linkbuilding-communities/',
      },
      {
        title: 'SEMScoop Review: A Keyword Research Tool In 2024',
        keyword: 'Semscoop Review',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/07/Add-a-subheading-8-768x432.png',
        link: 'https://marketinglad.io/semscoop-review-a-keyword-research-tool/',
      },
      {
        title: 'Link Building For Startups – 4 Best Ways To Get Started.',
        keyword: 'Link Building for startups',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
        link: 'https://marketinglad.io/link-building-startups/',
      },
      {
        title: '15 Education Marketing Trends In 2024',
        keyword: 'Education marketing trends',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2021/08/Deeba-13-768x432.png',
        link: 'https://marketinglad.io/education-marketing-trends/',
      },
      {
        title: 'The Role Of Link Juice In SEO: Tips For Building Better Backlinks',
        keyword: 'Role of link juice',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
        link: 'https://marketinglad.io/the-role-of-link-juice-in-seo-for-building-better-backlinks/',
      },
      {
        title: 'The Power Of Pillow Links: Building Better Backlinks For SEO',
        keyword: 'Power of pillow links',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2022/04/Add-a-subheading-13-768x432.png',
        link: 'https://marketinglad.io/the-power-of-pillow-links-building-better-backlinks-for-seo/',
      },
      {
        title: 'Role Of Niche Relevant Backlinks In Digital Marketing',
        keyword: 'Role of niche relevant backlinks',
        imgSrc: 'https://marketinglad.io/wp-content/uploads/2023/05/Add-a-subheading-1-3-300x169.png',
        link: 'https://marketinglad.io/role-of-niche-relevant-backlinks-in-digital-marketing/',
      },
   
  ];

  return (
    <div className="m-4 lg:m-12">
      <Slider {...settings}>
        {cards2.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            keyword={card.keyword}
            imgSrc={card.imgSrc}
            link={card.link}
          />
        ))}
      </Slider>
    </div>
  );
};

const Cards3 = ({ settings }) => {
    const cards2 = [
      {
        title: 'Best States for Real Estate Agents to Grow and Succeed',
        keyword: 'Best states for Real Estate agents',
        imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2023/04/best-states.jpg',
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
          imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2023/02/stressful.jpg',
          link: 'https://www.fullfeel.io/why-is-being-a-realtor-stressful/',
        },
      
       
        {
          title: 'What to Include in a Real Estate Buyers Guide',
          keyword: 'Real Estate buyers guide',
          imgSrc: 'https://www.fullfeel.io/wp-content/uploads/2022/09/46.png',
          link: 'https://www.fullfeel.io/real-estate-buyers-guide/',
        },
  
     
    ];
  
    return (
      <div className="m-4 lg:m-12">
        <Slider {...settings}>
          {cards2.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              keyword={card.keyword}
              imgSrc={card.imgSrc}
              link={card.link}
            />
          ))}
        </Slider>
      </div>
    );
  };

const PopularArticles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
        
      },

      
    ],
  };

  return (
    <div>
      <div className="lg:w-1/6 ml-4 lg:ml-24 m-8  ">
        <Image layout="responsive" width={100} height={100} src={img1} alt="image" />
      </div>

      <Cards1 settings={settings} />

      <div className="lg:w-1/6 ml-4 lg:ml-24 m-8">
        <Image layout="responsive" width={100} height={100} src={img2} alt="image" />
      </div>
      <Cards2 settings={settings} />

      <div className=" lg:w-1/6 ml-4 lg:ml-24 mt-12 m-8">
        <Image layout="responsive" width={100} height={100} src={img3} alt="image" />
      </div>
      <Cards3 settings={settings} />
    </div>
  );
};

export default PopularArticles;