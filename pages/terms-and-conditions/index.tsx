import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, FileCheck, Scale, MessageCircle } from 'lucide-react';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const TermsAndConditionsPage = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { icon: Book, title: 'Service Agreement', content: 'Outlines the scope of our SEO services and mutual responsibilities.' },
    { icon: FileCheck, title: 'Intellectual Property', content: 'Defines ownership and usage rights of content and strategies.' },
    { icon: Scale, title: 'Liability Limitations', content: 'Specifies the extent of our liability in providing SEO services.' },
    { icon: MessageCircle, title: 'Communication', content: 'Sets expectations for client communication and reporting.' },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 "
      >
        Terms and Conditions
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-700 mb-8"
        >
          Welcome to our SEO consultancy services. These Terms and Conditions govern your use of our services and outline our mutual rights and responsibilities. By engaging our services, you agree to these terms.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setHoveredSection(section.title)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="bg-blue-50 rounded-lg p-6 h-full transform transition-transform duration-300 hover:scale-105">
                <section.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-blue-700">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
              {hoveredSection === section.title && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 bg-blue-600 bg-opacity-90 rounded-lg flex items-center justify-center"
                >
                  <p className="text-white text-center p-4">{section.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Detailed Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>1. Services:</strong> We provide SEO consulting services as outlined in our service agreement. The specific scope of work will be detailed in a separate proposal or statement of work.
            </p>
            <p>
              <strong>2. Client Responsibilities:</strong> You agree to provide timely and accurate information necessary for us to perform our services. This includes access to necessary accounts, content, and resources as required.
            </p>
            <p>
              <strong>3. Intellectual Property:</strong> Any pre-existing intellectual property remains the property of its respective owner. New materials created specifically for your project will be transferred to you upon full payment, unless otherwise specified.
            </p>
            <p>
              <strong>4. Confidentiality:</strong> We agree to keep your business information confidential and not to disclose it to third parties without your consent, except as required by law.
            </p>
            <p>
              <strong>5. Payment Terms:</strong> Payment terms will be specified in our service agreement. We reserve the right to suspend services for overdue payments.
            </p>
            <p>
              <strong>6. Liability:</strong> Our liability is limited to the amount paid for our services. We are not responsible for indirect or consequential damages.
            </p>
            <p>
              <strong>7. Termination:</strong> Either party may terminate the agreement with written notice as specified in our service agreement. Any outstanding fees will become immediately due upon termination.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at:
            <br />
            <a href="mailto:hi@shahidshahmiri.com" className="text-blue-500 hover:underline">
            hi@shahidshahmiri.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
    <Footer2/>
    </>
  );
};

export default TermsAndConditionsPage;