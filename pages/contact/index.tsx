import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { PopupButton } from 'react-calendly';
import CustomButton from '../../components/CustomButton';
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
    <PopupButton
      url="https://calendly.com/shahmirishahid/seo-consultation"
      rootElement={document.getElementById('__next')}
      text="Book A Free Consultation Call"
      className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300 z-50"
    />
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
        'service_4vvzs8s', // Your EmailJS service ID
        'template_sj37i4q', // Your EmailJS template ID
        templateParams,
        '2KVJi6pnykS-hRjpk' // Your EmailJS user ID
      );

      console.log('Email sent successfully');
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
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative text-center mx-4 my-8 md:mx-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 opacity-10 absolute inset-0 flex justify-center items-center">
            Contact Me
          </h1>
          <h2 className="relative text-2xl md:text-3xl font-semibold pt-16 pb-2">
            Get Help with SEO Management and Link Building
          </h2>
          <p className="relative">
            Need expert assistance with SEO management and link-building? I'm here to help!
            Book a FREE 30-minute call for your website's visibility.
          </p>
        </div>
        <div className="flex justify-center">
          <CalendlyPopupButton />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg space-y-4">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="text"
                  className="peer bg-gray-200 rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer bg-gray-200 rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formData.email}
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="url"
                  name="url"
                  type="url"
                  className="peer bg-gray-200 rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4"
                  placeholder="Website"
                  onChange={handleChange}
                  value={formData.url}
                />
                <label
                  htmlFor="url"
                  className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Website
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="peer bg-gray-200 rounded-lg placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  What are you looking for?
                </label>
              </div>
              <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2" disabled={loading}>
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
      <Footer2 />
    </>
  );
};

export default Index;
