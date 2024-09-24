import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from './NewsLetter';

const Footer2 = () => {
  return (
    <div>
      <div className=" mx-auto bg-[#25282C] text-white px-6 md:px-48 py-2 max-w-8xl">
        <div className="max-w-7xl mx-auto py-8">
          {/* <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Subscribe To My Newsletter To Get Awesome SEO Tips.
            </h2>
            <div className="flex flex-col md:flex-row bg-[#55575A] rounded-full max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-[#55575A] rounded-full  px-4 py-2 focus:outline-none"
              />
              <button className="bg-[#55575A] text-white px-6 py-2 rounded-b-full md:rounded-r-full md:rounded-b-none hover:bg-[#2465F5] transition duration-300 border border-blue-600">
                Subscribe
              </button>
            </div>
          </div> */}
          <NewsLetter/>
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p>Srinagar, India Office H NO 3. Qamarwari</p>
              <p>2nd Petrol Pump, Near City Mart 190017.</p>

              <div  className='my-4'>
              <p>UAE Office Al Rawdhat, Al Sunbullah Street,</p>
              <p>Al Neem Abu Dhabi</p>
              </div>
            




              <a href='mailto:hi@shahidshahmiri.com'>Email : hi@shahidshahmiri.com</a>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Link href="https://www.linkedin.com/in/shahidshahmiri/" className="text-[#2465F5] hover:text-blue-400">
                  <FaLinkedin size={24} />
                </Link>
                <Link href="https://twitter.com/shahid_shahmiri" className="text-[#2465F5] hover:text-blue-400">
                  <FaXTwitter size={24} />
                </Link>
              </div>
            </div>
          
            <div className="px-12">
              <h3 className="text-xl font-semibold mb-4">Locations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/seo-expert-in-uae" className="hover:text-gray-300">
                  UAE
                  </Link>
                </li>
               
              </ul>
            </div>
            <div className="px-12">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://blog.shahidshahmiri.com/" className="hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/seo-glossary" className="hover:text-gray-300">
                  SEO Glossary
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-and-cancellation-policy">
                    Refund and Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="terms-and-conditions">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="shipping-and-delivery-policy">
                    Shipping and Delivery Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#55575A] p-4 text-center text-sm text-white flex justify-around gap-8 px-24">
       <span>
       © 2024 Shahid Shahmiri. All rights reserved.
        </span> 
        <span className='ml-4' >Powered by  
         <a className='ml-2 font-bold' href='https://marketinglad.io/'> 
         Marketing Lad
          </a> 
          </span>
      </div>
    </div>
  );
};

export default Footer2;
