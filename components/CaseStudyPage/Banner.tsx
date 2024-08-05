import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#2465F5] flex justify-center h-3/5 align-middle items-center flex-col py-4'>
        <h1 className='text-center text-5xl font-semibold pt-8'>
        Ready To Take Your SEO To <br/>
The Next Level
        </h1>
        <p className='text-center'>
        Effective SEO strategies not only elevate a website's visibility but also drive<br/>
targeted traffic, enhance user experience,
        </p>
        <a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 my-8"
            >
              Book A Free Consultation Call
            </a>
    </div>
  )
}

export default Banner