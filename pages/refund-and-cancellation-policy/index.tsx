import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CalendarX, Clock, CreditCard } from 'lucide-react';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const RefundCancellationPage = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { icon: RefreshCw, title: 'Refund Policy', content: 'We offer a 30-day money-back guarantee for our SEO services.' },
    { icon: CalendarX, title: 'Cancellation Terms', content: 'You can cancel your ongoing services with a 14-day notice period.' },
    { icon: Clock, title: 'Processing Time', content: 'Refunds are typically processed within 5-10 business days.' },
    { icon: CreditCard, title: 'Payment Methods', content: 'Refunds are issued to the original payment method used for the purchase.' },
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
        Refund and Cancellation Policy
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-700 mb-8"
        >
          As an SEO consultant committed to client satisfaction, I have established a clear refund and cancellation policy. This ensures transparency and fairness in our business relationship.
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Detailed Policy</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>1. Refund Eligibility:</strong> If you're unsatisfied with our services, you can request a full refund within 30 days of your initial purchase. This applies to first-time clients only.
            </p>
            <p>
              <strong>2. Cancellation Process:</strong> To cancel ongoing services, please provide written notice at least 14 days before your next billing cycle. This allows us to properly close your account and cancel any scheduled work.
            </p>
            <p>
              <strong>3. Refund Process:</strong> Once a refund is approved, we aim to process it within 5-10 business days. The refund will be issued to the original payment method used for the purchase.
            </p>
            <p>
              <strong>4. Exceptions:</strong> Custom projects or services that have been fully delivered are not eligible for refunds. However, we're always willing to discuss ways to address any concerns you may have.
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
            If you have any questions about our Refund and Cancellation Policy, please contact us at:
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

export default RefundCancellationPage;