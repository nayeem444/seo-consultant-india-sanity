// pages/thank-you.js
import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const ThankYouPage = () => {
  useEffect(() => {
    // Trigger automatic download
    const link = document.createElement('a');
    link.href = '/path-to-your-seo-checklist.pdf'; // Replace with actual path
    link.download = 'OnPage-SEO-Checklist.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
    <Navbar/>
      <div className="min-h-screen to-white flex items-center justify-center px-4">
      <Head>
        <title>Thank You for Downloading</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <svg className="w-64 h-64 mx-auto mb-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#4CAF50" />
          <path d="M80 120 L60 100 L50 110 L80 140 L150 70 L140 60 Z" fill="white" />
        </svg>
        <h1 className="text-4xl font-bold mb-4">Thank You for Downloading!</h1>
        <p className="text-xl mb-8">Your OnPage SEO Checklist is on its way to your inbox.</p>
        <p className="mb-8">If the download hasn't started automatically, don't worry!</p>
        <a 
          href="/path-to-your-seo-checklist.pdf" 
          download="OnPage-SEO-Checklist.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Click Here to Download Manually
        </a>
      </div>
    </div>
    <Footer2/>
    </>
  
  );
};

export default ThankYouPage;