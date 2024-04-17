// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// import Navbar from 'components/Navbar';
// import Footer from 'components/Footer';

// const Index = () => {


//   // State to store form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//     url: ''  // Assuming there's a URL field in your form or it is fetched/stored differently
//   });

//   const [loading, setLoading] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState('');

//   // Handler to update state with form input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Simulate validation
//   const validateInputs = () => {
//     // Simple validation logic (extend as needed)
//     return formData.name && formData.email && formData.subject && formData.message;
//   };

//   // Handler to process form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateInputs()) {
//       setSubmissionStatus('Please fill in all fields correctly.');
//       return;
//     }

//     setLoading(true);

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       message: formData.message,
//       url: formData.url
//     };

//     try {
//       await emailjs.send(
//         'service_4vvzs8s', // Your EmailJS service ID
//         'template_sj37i4q', // Your EmailJS template ID
//         templateParams,
//         '2KVJi6pnykS-hRjpk' // Your EmailJS user ID
//       );

//       console.log('Email sent successfully');
//       setSubmissionStatus('Success! Your message has been sent.');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setSubmissionStatus('Error sending message. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 flex flex-col sm:flex-row">
//           {/* Content Section (Left) */}
//           <div className="max-w-md mx-auto sm:mr-8">
//             <div>
//               <h1 className="text-2xl font-semibold">Get In Touch</h1>
//               <ul>
//                 <li  className=" flex mt-4  text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
//                 <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
//                 Expand your SEO Channel
//                 </li>
//                 <li  className=" flex mt-4  text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
//                 <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
//                 Boost your Earnings
//                 </li>
//                 <li  className=" flex mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
//                 <svg viewBox="0 0 24 24" fill="none" width={25} height={25} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#2275fb"></path> </g></svg>
//                 Assistance to your Marketing Team
//                 </li>
//               </ul>
//              <p className=" mt-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7" >              Fill out the form to get in touch for a free quote. Start your growth journey now, we look forward to hearing from you!
// </p>
//             </div>
//           </div>

//           {/* Form Section (Right) */}
//           <div className="max-w-md mx-auto mt-10 sm:mt-0">
     
//       <div className="divide-y divide-gray-200">
//         <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//           <div className="relative">
//             <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Name" onChange={handleChange} />
//             <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
//           </div>
//           <div className="relative">
//             <input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" onChange={handleChange} />
//             <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
//           </div>
//           <div className="relative">
//             <input autoComplete="off" id="subject" name="subject" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Subject" onChange={handleChange} />
//             <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Subject</label>
//           </div>
//           <div className="relative">
//             <textarea id="message" name="message" className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Message" onChange={handleChange}></textarea>
//             <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
//           </div>
        
       
//           <div className="relative">
//             <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1" disabled={loading}>
//               {loading ? 'Sending...' : 'Submit'}
//             </button>
//           </div>
//           {submissionStatus && (
//             <p className={`text-sm ${submissionStatus.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
//               {submissionStatus}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Index;






import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Index = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    return formData.name && formData.email && formData.subject && formData.message;
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
        subject: '',
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
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl md:max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            {/* Content Section (Left) */}
            <div className="flex-1 m-4">
              <h1 className="text-2xl font-semibold">Get In Touch</h1>
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
            <input autoComplete="off" id="subject" name="subject" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Subject" onChange={handleChange} value={formData.subject} />
            <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Subject</label>
          </div>
          <div className="relative">
            <textarea id="message" name="message" className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
            <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
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
      </div>
      <Footer/>
    </>
  );
}

export default Index;
