import Link from 'next/link';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from './NewsLetter';

const Footer2 = () => {
  return (
    <div>
      <div className="w-full bg-[#25282C] text-white px-4 sm:px-6 md:px-12 lg:px-48 py-2">
        <div className="max-w-7xl mx-auto py-8">
          <NewsLetter/>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Address Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Address</h3>

              <div className="mb-4">
                <p className='font-bold'>India Office</p>
                <p>Srinagar, India Office H NO 3. Qamarwari</p>
                <p>2nd Petrol Pump, Near City Mart 190017.</p>
              </div>

              <div className='mb-4'>
                <p className='font-bold'>UAE Office</p>
                <p>Al Zahiya, </p>
                <p>Building G100 Near Hotel Ramada Abu Dhabi, UAE. </p>
              </div>

              <a href='mailto:hi@shahidshahmiri.com' className="hover:text-gray-300">
                Email: hi@shahidshahmiri.com
              </a>
              <div className="flex items-center gap-2 hover:text-gray-300">
                <FaPhone size={14} />
                <span>+91 6005105758</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300">
                <FaPhone size={14} />
                <span>+971 557320409</span>
              </div>

              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Link href="https://www.linkedin.com/in/shahidshahmiri/" 
                      className="text-[#2465F5] hover:text-blue-400">
                  <FaLinkedin size={24} />
                </Link>
                <Link href="https://twitter.com/shahid_shahmiri" 
                      className="text-[#2465F5] hover:text-blue-400">
                  <FaXTwitter size={24} />
                </Link>
              </div>
            </div>

            {/* Locations Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Locations</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link href="/seo-expert-in-uae" className="hover:text-gray-300">
                    UAE
                  </Link>
                </li>
                <div className='mt-8'>
                  <h3 className="text-xl font-semibold mt-8 mb-2">Resources</h3>
                  <Link href="/on-page-seo-checklist" className="hover:text-gray-300">
                    On Page SEO Checklist
                  </Link>
                </div>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-center md:text-left">
                {[
                  { href: "/#about", text: "About" },
                  { href: "https://blog.shahidshahmiri.com/", text: "Blog" },
                  { href: "/contact", text: "Contact" },
                  { href: "/seo-glossary", text: "SEO Glossary" },
                  { href: "/privacy-policy", text: "Privacy Policy" },
                  { href: "/refund-and-cancellation-policy", text: "Refund and Cancellation Policy" },
                  { href: "/terms-and-conditions", text: "Terms and Conditions" },
                  { href: "/shipping-and-delivery-policy", text: "Shipping and Delivery Policy" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#55575A] py-4 px-4 text-center text-sm text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
          <span>© 2024 Shahid Shahmiri. All rights reserved.</span>
          <span className="flex items-center">
            Powered by
            <a className="ml-2 font-bold hover:text-gray-300" href="https://marketinglad.io/">
              Marketing Lad
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;