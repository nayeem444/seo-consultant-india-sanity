import React from 'react';
import Image from 'next/image';

import img from '../public/prospeo.png';
import img1 from '../public/leadgen.png';
import img2 from '../public/apexure.png';

const caseStudy = () => {
  return (
<div>
<h2 className="mb-8 lg:mb-16 text-4xl font-bold tracking-tight leading-tight text-center dark:text-dark md:text-4xl">
         Case Study
        </h2>
<div className='flex justify-center flex-wrap'>

<div className=" mb-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 mx-4">
    <a href="/case-study/prospeo/">
        <div className="rounded h-56">
            <Image
            className='rounded-3xl'
            src={img}
            width={400}
            height={400}
            />
            </div>
    </a>
    <div className="p-5">
        <a href="/case-study/prospeo/">
            <h5 className="mb-2 text-2xl font-bold flex justify-center  items-center sm:justify-start ">Prospeo</h5>
        </a>
        <div className='flex justify-center  items-center sm:justify-start'>
        <p className="mb-3 font-normal flex justify-center  items-center sm:justify-start ">Skyrocketing Prospeo’s Traffic And Domain Rating Through Strategic SEO</p>
        </div>
        <div className='flex justify-center  items-center sm:justify-start'>
        <a href="/case-study/prospeo/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>

<div className=" mb-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 mx-4">
    <a href="/case-study/leadgen">
        <div className="rounded h-56">
            <Image
            className='rounded-lg'
            src={img1}
            width={400}
            height={400}
            />
            </div>
    </a>
    <div className="p-5">
        <a href="/case-study/leadgen">
            <h5 className="mb-2 text-2xl font-bold flex justify-center  items-center sm:justify-start ">Leadgen App</h5>
        </a>
        <div className='flex justify-center  items-center sm:justify-start'>
        <p className="mb-3 font-normal ">Increasing LeadGenApp's Search Impressions By 834% Overall and DR to 69</p></div>
        <div className="flex justify-center  items-center sm:justify-start">
        <a href="/case-study/leadgen" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>


<div className=" mb-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 mx-4">
    <a href="/case-study/apexure/">
        <div className="rounded ">
            <Image
            className='rounded-lg'
            src={img2}
            width={400}
            height={400}
            />
            </div>
    </a>
    <div className="p-5">
        <a href="/case-study/apexure/">
            <h5 className="mb-2 text-2xl font-bold flex justify-center  items-center sm:justify-start ">Apexure</h5>
        </a>
        <div className='flex justify-center  items-center sm:justify-start'>
        <p className="mb-3 font-normal ">Increasing APEXURE's Search Clicks By 310% and DR to 52</p> </div>
        <div className='flex justify-center  items-center sm:justify-start'>
        <a href="/case-study/apexure/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default caseStudy