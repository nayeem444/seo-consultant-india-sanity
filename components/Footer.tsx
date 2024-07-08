import React from 'react'
import NewsLetter from '../components/NewsLetter'

const footer = () => {
  return (
   
<footer className="bg-neutral-900"> 
<div className="container px-6 py-12 mx-auto"> 
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"> 
<div className="sm:col-span-2"> 
<NewsLetter/> 
</div> 
<div> 
  <p className="font-semibold text-white">Quick Link</p> 
<div className="flex flex-col items-start mt-5 space-y-2"> 
<a href="/#about" className=" transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">About</a> 
<a href="/blog" className=" transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blog</a> 
<a href="/contact" className=" transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact</a> 
</div> </div> <div> <p className="font-semibold text-white dark:text-white">Address</p> 
<div className="flex flex-col items-start mt-5 space-y-2"> 
<p className=" transition-colors duration-300 text-white  ">Srinagar, India Office
H NO 3. Qamarwari 2nd Petrol Pump, Near City Mart 190017.</p> 
<p className='text-white'>
  Contact : hi@shahidshahmiri.com 
</p>
</div> </div> </div> <hr className="my-6 text-white md:my-8 text-white"/>
<div className="flex flex-col sm:flex-row justify-between px-2">
    <div className="flex justify-center sm:justify-start lg:flex-row">
        <a href="https://twitter.com/shahid_shahmiri" className="transition-colors duration-300 text-white hover:text-blue-500 dark:hover:text-blue-400" aria-label="twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/shahidshahmiri/" className="mx-2 transition-colors duration-300 text-white hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-full w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
        </a>
    </div>
    <div className="flex justify-center items-center text-white mt-4 sm:mt-0">
        © 2024 Shahid Shahmiri. All rights reserved.
    </div>
    <div></div>
</div>


  </div> 
  </footer>
  )
}

export default footer






{/* <div className="flex flex-wrap justify-center md:justify-start">
<a
  href=" "
  className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  data-te-ripple-init
  data-te-ripple-color="light"
>

</a>
<a
  href=""
  className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  data-te-ripple-init
  data-te-ripple-color="light"
>

</a>

</div> */}