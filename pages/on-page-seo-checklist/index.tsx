import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Search, Link,ImagePlus , FileText, Database, BarChart, Smartphone, Zap, Download } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from 'components/Navbar2';
import PaymentButton from 'components/PaymentButton';
import Footer2 from 'components/Footer2';
import { title } from 'process';



const SeoCheckList: React.FC = () => {
  
  const metaKeywords = "Your On-Page SEO Success with My Proven Checklist";
  return (
    <>
     <Head>
        <title>Your On-Page SEO Success with My Proven Checklist</title>
        <meta name="description" content="Simplify your on-page SEO process with my proven checklist. Learn the exact steps to optimize your website for better Google ranking." />
        <meta name="keywords" content={metaKeywords} />
      </Head>
    <Navbar/>
    <div className="text-white py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
  <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-[49px]">
      Your On-Page SEO Success with My Proven Checklist
      </h1>
      <p className="text-xl mb-6">
        Are you tired of optimizing every tiny detail on your website just to rank on Google?
      </p>
      <p className="text-lg mb-8">
        My On-Page SEO Checklist simplifies the process, allowing you to focus on the factors that truly matter—based on real-world results.
      </p>
      <div className="flex justify-center lg:justify-start">
        <PaymentButton customerName={''} customerEmail={''} customerContact={''} />
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image
          src="/assets/hero77.svg"
          alt="CRO Checklist Preview"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>

  <div className="py-12">
    <div className="mt-12 md:mt-24 text-center">
      <h3 className="text-4xl font-semibold mb-8">Why This Checklist?</h3>
    </div>

    <div className="text-center mx-auto max-w-4xl">
      <p className="mb-4 text-xl">
        This isn’t just another generic on-page SEO guide. I’ve compiled this checklist from years of hands-on experience optimizing websites that now rank at the top of search engine results pages (SERPs).
      </p>
      <p className="mb-4 text-xl">
        Whether you’re an SEO professional or a business owner, this checklist gives you the actionable steps to boost your website's visibility and outrank your competition.
      </p>
      <div className="mt-8 flex justify-center">
        <PaymentButton customerName={''} customerEmail={''} customerContact={''} />
      </div>
    </div>
  </div>
</div>

  <BlurredCardsSection/>

  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-12 gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 leading-[49px]">Why Should you Trust me?</h2>
          <p className="text-xl mb-6">
          I’m a seasoned SEO expert with a proven track record of helping websites climb to the top of search rankings. My methods aren’t theoretical—they’re practical, tested, and have delivered tangible results for various businesses. 
          </p>
          <p className="text-lg mb-8 text-xl">
          
          Websites I’ve optimized are consistently ranking for competitive keywords, driving significant traffic, and converting visitors into customers. When you use my checklist, you’re leveraging the exact strategies I’ve used to achieve these successes.
          </p>
        <PaymentButton customerName={''} customerEmail={''} customerContact={''}/>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <Image
              src="/Images/shahid.webp"
              alt="CRO Checklist Preview"
              
              width={400}
              height={200}
              objectFit="contain"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>

<Clients/>

<div className='py-12'>
      <div className="md:mt-12 text-center">
  <h3 className="text-4xl font-semibold mb-8">
  Why $20 is a Steal?
  </h3>
</div>

<div className="text-center">
  <p className="mb-4 lg:mx-48 text-xl">
  For just $20, you’re not only getting a checklist—you’re gaining access to the exact tactics I’ve used to get multiple websites to rank on the first page of Google. Apply these proven methods to your site and see the results for yourself.  </p>
    <div className="mt-8 flex justify-center">
         <PaymentButton customerName={''} customerEmail={''} customerContact={''}/>    
  </div>
    </div>
  </div>





  <div className='py-12'>
      <div className=" md:mt-12 text-center">
  <h3 className="text-4xl font-semibold mb-8">
  Who is This For?
  </h3>
</div>

<div className="text-center mx-auto text-xl ">
  <ul>
    <li>
    SEO Professionals looking for a streamlined process to enhance on-page SEO.
    </li>
    <li>
    Business Owners who want to improve their website’s visibility without hiring an expensive consultant.
    </li>
    <li>
    Digital Marketers who need a reliable guide to optimize client websites and achieve better results.
    </li>
  </ul>
  
   
    </div>
  </div>
<Banner/>

<Footer2/>
  </>
  );
}

export default SeoCheckList;








interface CardProps {
    title: string;
    icon: React.ReactNode;
    isBlurred?: boolean;
  }

  const Card: React.FC<CardProps> = ({ title, icon, isBlurred = false }) => (
    <div className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isBlurred ? 'opacity-50 blur-sm' : ''}`}>
      <div className="p-8 bg-gray-800">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      </div>
    </div>
  );

  const BlurredCardsSection: React.FC = () => {
    const cards: CardProps[] = [
      { 
        title: "Targeted Keyword Strategy", 
        icon: <Search className="w-6 h-6" />
      },
      { 
        title: "URL Optimization", 
        icon: <Link className="w-6 h-6" />
      },
      { 
        title: "Image Optimization", 
        icon: <ImagePlus className="w-6 h-6" />
      },
      { 
        title: "Internal & External Linking", 
        icon: <FileText className="w-6 h-6" />
      },
      { 
        title: "Structured Data", 
        icon: <Database className="w-6 h-6" />
      },
      { 
        title: "Analytics Setup", 
        icon: <BarChart className="w-6 h-6" />
      },
      { 
        title: "Content Optimization", 
        icon: <FileText className="w-6 h-6" />
      },
      { 
        title: "Mobile Responsiveness", 
        icon: <Smartphone className="w-6 h-6" />
      },
      { 
        title: "Page Speed Optimization", 
        icon: <Zap className="w-6 h-6" />
      },
    ];
  
    return (
      <div className="relative py-16 overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-white mb-8 text-center">Your 11-Point On-page Checklist Including Bonus Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} {...card} isBlurred={index >= 6} />
            ))}
          </div>
        </div>
        {/* Blur overlay for last row */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        {/* Button overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 flex items-center justify-center">
        <div className="mt-8 flex justify-center">
         <PaymentButton/>    
  </div>
        </div>
      </div>
    );
  };
  
 

  


  
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
      <div className="mx-auto h-1/4  py-8 max-w-6xl text-4xl">
        <div className="max-w-6xl mx-auto text-center">
          <p className=" mb-8 font-semibold ">Clients I've Worked With</p>
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
  



const Banner = () => {
  return (
    <div className='bg-gray-900 flex justify-center h-3/5 align-middle items-center flex-col py-8'>
        <h2 className='text-center text-5xl font-semibold pt-8'>
        Ready To Take Your SEO To <br/>
        The Next Level
        </h2>
        <p className='text-center text-xl'>
        Effective SEO strategies not only elevate a website's visibility but also drive<br/>
        targeted traffic, enhance user experience,
        </p>
        <div className='m-8'>
            <PaymentButton/>
            </div>
    </div>
  )
}


