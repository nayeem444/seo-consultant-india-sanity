import React from 'react';
import { Book, FileText, CreditCard, RotateCcw, Shield, Lock, AlertTriangle, XCircle, Scale, Edit,Mail } from 'lucide-react';
import Head from 'next/head';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
    <Head>
    <meta name="robots" content="noindex, nofollow" />
    <title>Terms and Conditions | Shahid Shahmiri</title>
    </Head>
    <Navbar/>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-black">
        <div className="bg-blue-600 px-6 py-4 ">
          <h1 className="text-3xl font-bold text-white">Terms and Conditions</h1>
        </div>
        <div className="px-6 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Book className="mr-2 text-blue-600 " size={24} />
              1. Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to Shahid Shahmiri, a personal brand powered by Marketing Lad. By accessing or using our website (shahidshahmiri.com), purchasing our services, or engaging with our digital products, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600" size={24} />
              2. Services and Products
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1. SEO Services</h3>
                <p className="text-gray-700"><strong>Scope:</strong> We offer SEO consultation, management, and custom SEO services. The scope of each service is outlined in the service agreement provided to clients before the commencement of work.</p>
                <p className="text-gray-700"><strong>Delivery:</strong> Services are delivered per the agreed-upon timelines in the service contract.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">2.2. Digital Products</h3>
                <p className="text-gray-700"><strong>Scope:</strong> Digital products, such as SEO checklists, are provided for download after purchase.</p>
                <p className="text-gray-700"><strong>Use:</strong> These products are intended for personal or professional use and may not be redistributed or resold without our permission.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CreditCard className="mr-2 text-blue-600" size={24} />
              3. Payment Terms
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1. Pricing</h3>
                <p className="text-gray-700"><strong>Currency:</strong> All prices are quoted in USD.</p>
                <p className="text-gray-700"><strong>Adjustment:</strong> Prices may be adjusted without prior notice; however, changes will not affect purchased services.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.2. Payment Methods</h3>
                <p className="text-gray-700">We accept payments via credit/debit cards, PayPal, and other secure payment gateways.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.3. Payment Schedule</h3>
                <p className="text-gray-700">For services, a 50% upfront payment is required before the start of the project. The remaining 50% is due upon completion or at designated milestones as outlined in the contract.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <RotateCcw className="mr-2 text-blue-600" size={24} />
              4. Refund Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">4.1. Services</h3>
                <p className="text-gray-700">Due to the nature of SEO services, refunds are not provided once work has commenced. If you are unsatisfied with the initial deliverables, please contact us to discuss possible solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">4.2. Digital Products</h3>
                <p className="text-gray-700">All sales of digital products, such as SEO checklists, are final and non-refundable due to the immediate access granted upon purchase.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-2 text-blue-600" size={24} />
              5. Intellectual Property
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">5.1. Ownership</h3>
                <p className="text-gray-700">All content, materials, and intellectual property provided by Shahid Shahmiri remain the exclusive property of Shahid Shahmiri and Marketing Lad unless otherwise agreed in writing.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">5.2. Use of Content</h3>
                <p className="text-gray-700">You are granted a limited, non-exclusive, non-transferable license to use the content for personal or business purposes. Redistribution, reproduction, or resale of our content is strictly prohibited without prior consent.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Lock className="mr-2 text-blue-600" size={24} />
              6. Confidentiality
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">6.1. Client Information</h3>
                <p className="text-gray-700">We take your privacy seriously. All client information and project details are kept confidential unless required by law or with your explicit consent.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">6.2. Use of Testimonials</h3>
                <p className="text-gray-700">By providing a testimonial, you permit us to use it on our website and marketing materials. We will anonymize your information unless you agree to the use of your full name and company.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-2 text-blue-600" size={24} />
              7. Liability
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">7.1. Limitation of Liability</h3>
                <p className="text-gray-700">Shahid Shahmiri is not liable for indirect, incidental, or consequential damages arising from using our services or digital products. Our total liability for any claim related to our services or products is limited to the amount paid by the client.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">7.2. No Guarantee of Results</h3>
                <p className="text-gray-700">While we strive to achieve the best possible results for our clients, we do not guarantee specific outcomes due to the varying factors affecting SEO performance.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <XCircle className="mr-2 text-blue-600" size={24} />
              8. Termination
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">8.1. Termination by Client</h3>
                <p className="text-gray-700">You may terminate your contract or service agreement with us at any time by providing written notice. However, payments made for services rendered are non-refundable.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">8.2. Termination by Shahid Shahmiri</h3>
                <p className="text-gray-700">We reserve the right to terminate services if the client violates these Terms and Conditions or fails to make payments as agreed.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Scale className="mr-2 text-blue-600" size={24} />
              9. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by and construed by the laws of India. Any disputes arising from these Terms and Conditions or the use of our services will be subject to the exclusive jurisdiction of the courts of India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Edit className="mr-2 text-blue-600" size={24} />
              10. Changes to Terms and Conditions
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these Terms and Conditions without prior notice. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the revised Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 text-blue-600" size={24} />
              11. Contact Information
            </h2>
            <p className="text-gray-700">
              Please contact us if you have any questions or concerns about these Terms and Conditions. We are here to assist you and ensure your experience with Shahid Shahmiri is positive and transparent.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer2/>
    </>
  
  );
};

export default TermsAndConditionsPage;