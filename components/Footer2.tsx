// import Link from 'next/link';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import NewsLetter from './NewsLetter';

// const Footer2 = () => {
//   return (
//     <div>
//       <div className=" mx-auto bg-[#25282C] text-white px-6 md:px-48 py-2 max-w-8xl">
//         <div className="max-w-7xl mx-auto py-8">
//           {/* <div className="mb-8 text-center md:text-left">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
//               Subscribe To My Newsletter To Get Awesome SEO Tips.
//             </h2>
//             <div className="flex flex-col md:flex-row bg-[#55575A] rounded-full max-w-md mx-auto md:mx-0">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow bg-[#55575A] rounded-full  px-4 py-2 focus:outline-none"
//               />
//               <button className="bg-[#55575A] text-white px-6 py-2 rounded-b-full md:rounded-r-full md:rounded-b-none hover:bg-[#2465F5] transition duration-300 border border-blue-600">
//                 Subscribe
//               </button>
//             </div>
//           </div> */}
//           <NewsLetter/>
//           <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
//             <div className="mb-8 md:mb-0">
//               <h3 className="text-xl font-semibold mb-4">Address</h3>
//               <div>
//                 <p className='font-bold'>India Office</p>
//               <p>Srinagar, India Office H NO 3. Qamarwari</p>
//               <p>2nd Petrol Pump, Near City Mart 190017.</p>
//               </div>
              

//               <div  className='my-4'>
//               <p className='font-bold'>UAE Office</p>
//               <p>UAE Office Al Rawdhat, Al Sunbullah Street,</p>
//               <p>Al Neem Abu Dhabi</p>
//               </div>
            




//               <a href='mailto:hi@shahidshahmiri.com'>Email : hi@shahidshahmiri.com</a>
//               <div className="flex justify-center md:justify-start space-x-4 mt-4">
//                 <Link href="https://www.linkedin.com/in/shahidshahmiri/" className="text-[#2465F5] hover:text-blue-400">
//                   <FaLinkedin size={24} />
//                 </Link>
//                 <Link href="https://twitter.com/shahid_shahmiri" className="text-[#2465F5] hover:text-blue-400">
//                   <FaXTwitter size={24} />
//                 </Link>
//               </div>
//             </div>
          
//             <div className="px-12">
//               <h3 className="text-xl font-semibold mb-4">Locations</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/seo-expert-in-uae" className="hover:text-gray-300">
//                   UAE
//                   </Link>
//                 </li>
//                   <div className='mt-8'>
//                   <h3 className="text-xl font-semibold mt-8 mb-2">Resources</h3>
//                 <Link href="/on-page-seo-checklist" className="hover:text-gray-300 ">
//                   On Page SEO Checklist
//                   </Link>
//                   </div>
               
//               </ul>
//             </div>
//             <div className="px-12">
//               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/#about" className="hover:text-gray-300">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://blog.shahidshahmiri.com/" className="hover:text-gray-300">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="hover:text-gray-300">
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/seo-glossary" className="hover:text-gray-300">
//                   SEO Glossary
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacy-policy">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/refund-and-cancellation-policy">
//                     Refund and Cancellation Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="terms-and-conditions">
//                     Terms and Conditions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="shipping-and-delivery-policy">
//                     Shipping and Delivery Policy
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#55575A] p-4 text-center text-sm text-white flex flex-col sm:flex-row justify-around items-center sm:gap-8 px-4 sm:px-24">
//   <span className="mb-2 sm:mb-0">
//     © 2024 Shahid Shahmiri. All rights reserved.
//   </span> 
//   <span className="flex items-center">
//     Powered by
//     <a className="ml-2 font-bold" href="https://marketinglad.io/"> 
//       Marketing Lad
//     </a> 
//   </span>
// </div>
//     </div>
//   );
// };

// export default Footer2;




import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
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
              <div className="hover:text-gray-300">
                Phone : +91 6005105758
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