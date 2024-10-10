import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateInputs = () => {
    return formData.name && formData.email && formData.company;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateInputs()) {
      setSubmissionStatus('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
    };

    try {
      await emailjs.send(
        'service_baztu4d',
        'template_jhhrhhi',
        templateParams,
        '2KVJi6pnykS-hRjpk'
      );

      console.log('Email sent successfully');
      setSubmissionStatus('Success! Downloading PDF and redirecting...');
      
      // Trigger PDF download
      const pdfUrl = '/On-Page SEO Checklist - SS .pdf'; // Replace with actual PDF URL
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = '/On-Page SEO Checklist - SS .pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Redirect to thank you page
      setTimeout(() => {
        router.push('/on-page-seo-checklist/thankyou');
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-6xl mx-auto" id='checklist'>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-[100%] p-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Download the Onpage SEO Checklist
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg space-y-4">
            {/* Form inputs remain the same */}
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
                required
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
                required
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
                id="company"
                name="company"
                type="text"
                className="peer bg-gray-200 rounded-full placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-4"
                placeholder="Company"
                onChange={handleChange}
                value={formData.company}
                required
              />
              <label
                htmlFor="company"
                className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Company
              </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold rounded-md px-4 py-2 w-full" disabled={loading}>
              {loading ? 'Processing...' : 'Get Your Checklist'}
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
  );
};

export default LeadForm;