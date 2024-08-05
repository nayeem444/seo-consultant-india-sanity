import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import CustomButton from '../../components/CustomButton';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';
import Image from 'next/image';

const Index = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    url: ''
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Handler to update state with form input
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Simulate validation
  const validateInputs = () => {
    return formData.name && formData.email && formData.message;
  };

  // Handler to process form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
     <div className='h-screen '>
       
       <div className="relative text-center px-24  my-8">
         <h1 className="text-[40px] md:text-[100px] font-bold text-gray-700 opacity-10 absolute inset-0 flex justify-center items-center">
           Contact Me
         </h1>
         <h2 className="relative text-3xl font-semibold pt-28 pb-2">
           Get Help with SEO Management and Link Building
         </h2>
         <p>
           Need expert assistance with SEO management and link-building? I'm here to help!
           Book a FREE 30-minute call for your website's visibility.
         </p>
         <div className="font-montserrat flex   py-2 my-4 px-4 inline-flex justify-center items-center  text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
   <CustomButton/>
   </div>
       </div>
     
       <div className="flex-1">
         <div className="divide-y divide-gray-200 p-48">
           <form onSubmit={handleSubmit} className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
             <div className="relative">
               <input autoComplete="off" id="name" name="name" type="text" className="peer bg-[#25282C] rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4" placeholder="Name" onChange={handleChange} value={formData.name} />
               <label htmlFor="name" className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
             </div>
             <div className="relative">
               <input autoComplete="off" id="email" name="email" type="email" className="peer bg-[#25282C] rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4" placeholder="Email address" onChange={handleChange} value={formData.email} />
               <label htmlFor="email" className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
             </div>
             <div className="relative">
               <input autoComplete="off" id="url" name="url" type="url" className="peer bg-[#25282C] rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4" placeholder="Website" onChange={handleChange} value={formData.url} />
               <label htmlFor="url" className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Website</label>
             </div>
             <div className="relative">
               <textarea id="message" name="message" className="peer bg-[#25282C] rounded-full placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
               <label htmlFor="message" className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">What are you looking for?</label>
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
       <Footer2/>
     </div>
    
    </>
   
  );
}

export default Index;
