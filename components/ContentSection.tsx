import React from 'react'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import img1 from '../public/Images/WhatsApp Image 2024-02-14 at 3.19.00 PM.jpeg';

const content = () => {
  return (
    <section className="bg-blueGray-200 -mt-12 mb-48">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div className="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center mt-16">
      <div className="w-full md:w-1/2 px-4 mr-auto ml-auto">
        
        <h3 className="text-4xl mb-2 font-bold leading-normal">
        Trusted SEO Consultant in India
        </h3>
        <p className="  leading-relaxed mt-4 mb-4 ">
        As an SEO specialist, I understand that it can be difficult to trust someone on the internet claiming to be an expert. However, I have a proven track record of helping businesses develop successful digital strategies that increase rankings, drive quality traffic, and generate revenue.
        </p>
        <p className="  leading-relaxed mt-0 mb-4 ">
        My understanding of evolving search intent and data-driven approach helps me avoid penalties from core updates. I actively participate in industry events, webinars, and podcasts to share my knowledge and stay up-to-date on the latest SEO techniques and insights.
        </p>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/#contact">
                <CustomButton/>
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </div>
      </div>
      <div className="w-full md:w-1/2 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <Image alt="..." src={img1} className="w-full align-middle rounded-t-lg mt-12" width={500} height={200}/>
       
        </div>
      </div>
    </div>
  </div>
 
</section>
  )
}

export default content