import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { InlineWidget } from "react-calendly";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import img from '../../public/Google-Meet-How-to-See-Everyone-at-the-Same-TIme.webp'


const Index = ({discription ,title}) => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    url: ''  // Assuming there's a URL field in your form or it is fetched/stored differently
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Handler to update state with form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Simulate validation
  const validateInputs = () => {
    // Simple validation logic (extend as needed)
    return formData.name && formData.email  && formData.message;
  };

  // Handler to process form submission
// Handler to process form submission
const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateInputs()) {
      setSubmissionStatus('Please fill in all fields correctly.');
      return;
    }
  
    setLoading(true);
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      url: formData.url
    };
  
    try {
      await emailjs.send(
        'service_4vvzs8s', // Your EmailJS service ID
        'template_sj37i4q', // Your EmailJS template ID
        templateParams,
        '2KVJi6pnykS-hRjpk' // Your EmailJS user ID
      );
  
      console.log('Email sent successfully');
      setSubmissionStatus('Success! Your message has been sent.');
      // Reset form data to initial state after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
        url: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

 


  return (
    
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-10  flex flex-col justify-center ">
        <div className="relative py-3 sm:max-w-xl md:max-w-4xl mx-auto mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            {/* Content Section (Left) */}
            <div className="flex-1 m-4">
              <h2 className="text-2xl font-semibold">Get In Touch</h2>
              <ul>
                <li className="flex mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
                  Expand your SEO Channel
                </li>
                <li className="flex mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
                  Boost your Earnings
                </li>
                <li className="flex mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
                  Assistance to your Marketing Team
                </li>
              </ul>
              <p className="mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                Fill out the form to get in touch for a free quote. Start your growth journey now, we look forward to hearing from you!
              </p>
            </div>

            {/* Form Section (Right) */}
            <div className="flex-1">
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
            <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Name" onChange={handleChange}   value={formData.name} />
            <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
          </div>
          <div className="relative">
            <input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Email address" onChange={handleChange} value={formData.email} />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
          </div>
          <div className="relative">
            <input autoComplete="off" id="url" name="url" type="url" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Email address" onChange={handleChange} value={formData.url} />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Website</label>
          </div>
         
          <div className="relative">
            <textarea id="message" name="message" className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
            <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">What are you looking for ?</label>
          </div>
                  <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                  {submissionStatus && (
                    <p className={`text-sm ${submissionStatus.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
                      {submissionStatus}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        


        <div className="relative bg-blue-600 mt-12">
    
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Get Help with SEO Management<br className="hidden md:block" />
              and Link Building 
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Need expert assistance with SEO management and link-building? I'm here to help! Book a FREE 30-minute call for your website's visibility.
              </p>
             
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-1/2">
             <Calander/>
            </div>
          </div>
        </div>
      </div>
    </div>


      </div>
      <Footer/>
    </>
  );
}


export async function getStaticProps() {
    const description = "Book a FREE consultation today or send a message for more information. Start your journey towards enhanced online visibility and increased traffic with expert guidance. ";
    const title = "Get a customized SEO strategy for your brand. Book a FREE consultation."
    return {
        props: { description ,title },
       
         // Pass the description to the component
      };
    }

export default Index;




// // Extend the Window interface to include Calendly
// const CalendlyPopupButton = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const togglePopup = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <div>
//         <button onClick={togglePopup}>Book A Free Consultation Call</button>
//         {isOpen && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 onClick={togglePopup}
//               >
//                 &times;
//               </button>
//               <iframe
//                 src="https://calendly.com/shahmirishahid/seo-consultation"
//                 width="100%"
//                 height="600"
              
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };






const Calander = () => {
  return (
    <div className="App">
      <InlineWidget
        url="https://calendly.com/shahmirishahid/marketing-lad-calendar"
      />
    </div>
  );
};


