import React from 'react';
import { FileText, XCircle, RotateCcw, CreditCard, Mail, Edit } from 'lucide-react';
import Head from 'next/head';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const CancellationRefundPolicyPage: React.FC = () => {
  return (

    <>
    <Head>
    <meta name="robots" content="noindex, nofollow" />
    <title>Refund and Cancellation | Shahid Shahmiri</title>
    </Head>
    <Navbar/>
    
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-black">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Cancellation/Refund Policy</h1>
        </div>
        <div className="px-6 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 text-purple-600" size={24} />
              1. Introduction
            </h2>
            <p className="text-gray-700">
              At Shahid Shahmiri, a personal brand powered by Marketing Lad, we are committed to providing exceptional SEO services and digital products. We understand that situations may arise where you need to cancel a service or request a refund. This Cancellation/Refund Policy outlines the terms and conditions governing cancellations and refunds for our services and products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <XCircle className="mr-2 text-purple-600" size={24} />
              2. Service Cancellation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">2.1. SEO Consultation and Management Services</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Cancellation by Client:</strong> You may cancel your SEO consultation or management services by providing written notice via email. Cancellations must be made at least 7 days before the scheduled start date of the service.</li>
                  <li><strong>Cancellation by Shahid Shahmiri:</strong> We reserve the right to cancel services if the client fails to meet payment obligations or violates our Terms and Conditions. In such cases, any payments made will not be refunded.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">2.2. Custom SEO Services</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Cancellation by Client:</strong> Custom SEO services are tailored to your needs and require significant preparation. Therefore, cancellations must be made within 5 days of signing the service agreement. Cancellations after this period will incur a fee equivalent to 50% of the total project cost.</li>
                  <li><strong>Cancellation by Shahid Shahmiri:</strong> We may cancel the service if unforeseen circumstances prevent us from fulfilling the agreement. In such cases, you will receive a full refund of any payments made.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <RotateCcw className="mr-2 text-purple-600" size={24} />
              3. Refund Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">3.1. SEO Services</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Non-Refundable Services:</strong> Due to SEO services, which involve extensive planning, research, and execution, refunds are generally not provided once the service has commenced.</li>
                  <li><strong>Partial Refunds:</strong> If a client cancels a service before significant work has begun, a partial refund may be granted at our discretion. The refund amount will be calculated based on the work completed up to the cancellation date.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">3.2. Digital Products (SEO Checklists)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Non-Refundable:</strong> All sales of digital products, such as SEO checklists, are final and non-refundable. This is due to the immediate access and irrevocable nature of digital goods.</li>
                  <li><strong>Technical Issues:</strong> If you experience technical issues accessing or downloading a digital product, please contact us within 48 hours of purchase. We will work with you to resolve the issue or provide an alternative solution.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CreditCard className="mr-2 text-purple-600" size={24} />
              4. Payment Disputes
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">4.1. Chargebacks</h3>
                <p className="text-gray-700">
                  We encourage clients to contact us directly if there are any issues with payments or services before initiating a chargeback with their financial institution. We are committed to resolving any disputes amicably.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">4.2. Resolution Process</h3>
                <p className="text-gray-700">
                  If a payment dispute arises, we will review the case and provide documentation to support our position. If the dispute is resolved in favor of the client, we will process a refund accordingly.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 text-purple-600" size={24} />
              5. Contact Information
            </h2>
            <p className="text-gray-700">
              Please contact us if you wish to cancel a service, request a refund, or have any questions regarding this policy. We are here to assist you and ensure your experience with Shahid Shahmiri is positive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Edit className="mr-2 text-purple-600" size={24} />
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify this Cancellation/Refund Policy at any time. Any changes will be posted on our website and will be effective immediately. Your continued use of our services after such changes indicates your acceptance of the revised policy.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer2/>
    </>

  );
};

export default CancellationRefundPolicyPage;