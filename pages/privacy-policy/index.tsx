import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const PrivacyPolicyPage = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { icon: Shield, title: 'Data Protection', content: 'We implement robust measures to safeguard your personal information.' },
    { icon: Lock, title: 'Information Security', content: 'Your data is encrypted and stored securely on our protected servers.' },
    { icon: Eye, title: 'Transparency', content: 'We are committed to being open about our data collection and usage practices.' },
    { icon: FileText, title: 'Compliance', content: 'Our policies adhere to the latest data protection regulations and standards.' },
  ];

  return (
    <>
  <Navbar/>
    <div className="min-h-screen  p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 "
      >
        Privacy Policy
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-700 mb-8"
        >
          As an SEO consultant committed to protecting your privacy, I understand the importance of safeguarding your personal information. This privacy policy outlines how I collect, use, and protect your data when you use my services.
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;