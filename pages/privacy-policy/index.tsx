import React from 'react';
import { Shield, FileText, DollarSign, Users } from 'lucide-react';
import Head from 'next/head';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Head>
    <meta name="robots" content="noindex, nofollow" />
    <title>Privacy Policy | Shahid Shahmiri</title>
    </Head>
       <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        </div>
        <div className="px-6 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-2 text-blue-600" size={24} />
              Overview
            </h2>
            <p className="text-gray-700">
              Shahid Shahmiri, a leading personal brand powered by Marketing Lad, offers comprehensive SEO solutions tailored to meet the unique needs of businesses worldwide. Our Services are crafted to deliver measurable results, driving organic growth and maximizing online visibility. We pride ourselves on transparency, offering clear pricing structures without hidden fees and ensuring our clients know exactly what they are investing in.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600" size={24} />
              Services Offered
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Consultation</h3>
                <p className="text-blue-600 font-semibold">Starting Price: $1,500</p>
                <p className="text-gray-700">Our consultation services provide in-depth analysis and strategic guidance, helping businesses navigate the complexities of SEO. Whether you're looking for a one-time audit or ongoing advice, our consultations are designed to empower your team with actionable insights.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Management</h3>
                <p className="text-blue-600 font-semibold">Starting Price: $2,500</p>
                <p className="text-gray-700">Our SEO management services include comprehensive management of all SEO activities for businesses seeking a hands-off approach. We handle every aspect of your SEO strategy, from keyword research and on-page optimization to link building and performance tracking.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Checklists</h3>
                <p className="text-blue-600 font-semibold">Starting Price: $20 (Available for Purchase)</p>
                <p className="text-gray-700">Our SEO checklists are perfect for businesses and individuals seeking to implement SEO best practices independently. These checklists cover everything from basic to advanced SEO techniques, ensuring you leave no stone unturned.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Custom SEO Services</h3>
                <p className="text-blue-600 font-semibold">Starting Price: $3,000</p>
                <p className="text-gray-700">Tailored SEO solutions designed to meet the specific needs of your business. Whether you require local SEO, technical audits, or e-commerce optimization, our custom services are crafted to drive your success.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2 text-blue-600" size={24} />
              Pricing Details
            </h2>
            <p className="text-gray-700 mb-4">Consultation and Service Fees: All services start at the prices mentioned above and can vary depending on the scope and complexity of the project. A detailed proposal and quote will be provided after an initial assessment of your needs.</p>
            <h3 className="text-xl font-medium mb-2">Payment Terms:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>50% upfront before the commencement of services.</li>
              <li>50% upon completion or at designated milestones for ongoing projects.</li>
              <li>100% upfront payment if the project value is less than $1000.</li>
            </ul>
            <p className="text-gray-700 mb-4">Currency: All prices are quoted in USD. For clients in other countries, currency conversion will be calculated at the current exchange rate at the time of payment.</p>
            <h3 className="text-xl font-medium mb-2">Refund Policy:</h3>
            <p className="text-gray-700">We strive for complete client satisfaction. However, due to the nature of digital marketing and SEO services, refunds are not provided once the service has commenced. For detailed terms, please refer to our Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-blue-600" size={24} />
              Target Demographics
            </h2>
            <p className="text-gray-700">Our services are available to clients in all countries, focusing on delivering customized SEO solutions that align with diverse market needs. We cater to businesses of all sizes, from startups to enterprises, across various industries.</p>
          </section>

          <div className="mt-8 text-center">
            <p className="text-gray-600">For more information or to request a personalized quote, please contact us.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer2/>
    </>
 
  );
};

export default PrivacyPolicyPage;