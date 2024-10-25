import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { InlineWidget } from "react-calendly";
import CustomButton from '../../components/CustomButton';
import Clients from 'components/Clients';
import TestimonialsCarousel from 'components/TestimonialsCarousel';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';
import Image from 'next/image';

const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      <InlineWidget 
        url="https://calendly.com/d/cpjz-pkk-k6k" 
        styles={{ height: '650px' }}  // Fixed height to match form
      />
    </div>
  );
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    url: ''
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateInputs = () => {
    return formData.name && formData.email && formData.message;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
        'service_svfqs4q',
        'template_4gf7hec',
        templateParams,
        'DdtunyfAGpJ-a2X2L'
      );

      setSubmissionStatus('Success! Your message has been sent.');
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
      <Navbar />
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative text-center mx-auto my-8 md:my-12 max-w-4xl">
          <div className="relative pt-8 md:pt-12 pb-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-700 opacity-10 text-white">
              Contact Me
            </h1>
            <div className="mt-4 md:mt-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Get Help with SEO Management and Link Building
              </h2>
              <p className="mt-4 text-base md:text-lg  px-4">
                Need expert assistance with SEO management and link-building? I'm here to help!
                Book a FREE 30-minute call for your website's visibility.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mt-8">
          {/* Calendly Widget */}
          <div className="w-full lg:w-1/2 h-[700px]"> {/* Fixed height container */}
            <div className="rounded-lg overflow-hidden shadow-lg  bg-white">
              <CalendlyPopupButton />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 h-[650px]"> {/* Fixed height container */}
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 shadow-lg rounded-lg h-full flex flex-col">
              <div className="text-[#0a2540] mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center">
                  Let's Connect & Improve Your Online Presence!
                </h3>
                <p className="text-center text-gray-600 mt-2">
                  Reach Out Today to Boost Your SEO & Visibility!
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex-grow space-y-4">
                {/* Name Field */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    className="peer bg-gray-100 rounded-lg h-12 w-full border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 px-4 transition-colors"
                    placeholder=" "
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all"
                  >
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer bg-gray-100 rounded-lg h-12 w-full border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 px-4 transition-colors"
                    placeholder=" "
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all"
                  >
                    Email Address
                  </label>
                </div>

                {/* Website Field */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="url"
                    name="url"
                    type="url"
                    className="peer bg-gray-100 rounded-lg h-12 w-full border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 px-4 transition-colors"
                    placeholder=" "
                    onChange={handleChange}
                    value={formData.url}
                  />
                  <label
                    htmlFor="url"
                    className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all"
                  >
                    Website
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer bg-gray-100 rounded-lg h-40 w-full border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 p-4 transition-colors"
                    placeholder=" "
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all"
                  >
                    What are you looking for?
                  </label>
                </div>
              </div>

              {/* Submit Button and Status - Fixed at bottom */}
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 transition-colors font-medium"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>

                {submissionStatus && (
                  <p className={`text-center text-sm mt-2 ${submissionStatus.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
                    {submissionStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <TestimonialsCarousel />
      <Clients />
      <Footer2 />
    </>
  );
};

export default Index;