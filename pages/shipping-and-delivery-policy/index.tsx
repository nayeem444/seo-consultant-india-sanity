import React from 'react';
import { Truck, FileText, Video, Globe, Clock, Mail } from 'lucide-react';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';
import Head from 'next/head';

const ShippingPage: React.FC = () => {
  return (
    <>
    <Head>
    <meta name="robots" content="noindex, nofollow" />
    <title>Shipping and Delivery Policy | Shahid Shahmiri</title>
    </Head>
<Navbar/>
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-black">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Shipping & Delivery Policy</h1>
        </div>
        <div className="px-6 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Truck className="mr-2 text-blue-600" size={24} />
              Overview
            </h2>
            <p className="text-gray-700">
              Shahid Shahmiri primarily offers digital products and services, including SEO consultations, management, and checklists. Since our offerings are delivered online, the traditional shipping concept does not apply. However, this policy outlines how and when our digital products and services are delivered to ensure a seamless experience for our clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600" size={24} />
              Digital Product Delivery
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Checklists</h3>
                <p className="font-semibold">Delivery Method:</p>
                <p className="text-gray-700">Our SEO checklists are delivered digitally via email upon purchase. A download link will be provided immediately after the payment is confirmed.</p>
                <p className="font-semibold mt-2">Delivery Time:</p>
                <p className="text-gray-700">Instant delivery. Once your payment is processed, you will receive an email with a link to download the checklist.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Consultation Reports</h3>
                <p className="font-semibold">Delivery Method:</p>
                <p className="text-gray-700">Consultation reports are provided in PDF format and sent via email.</p>
                <p className="font-semibold mt-2">Delivery Time:</p>
                <p className="text-gray-700">Reports are typically delivered within 5-7 business days after the consultation session, depending on the complexity of the analysis.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">SEO Management and Custom Services</h3>
                <p className="font-semibold">Delivery Method:</p>
                <p className="text-gray-700">All updates, reports, and deliverables related to SEO management and custom services are provided digitally through email or a shared online workspace (e.g., Google Drive, Dropbox, or similar platforms).</p>
                <p className="font-semibold mt-2">Delivery Time:</p>
                <p className="text-gray-700">The delivery schedule is determined based on the specific terms agreed upon in the service contract. Regular updates and reports will be shared as per the timeline outlined in your agreement.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Video className="mr-2 text-blue-600" size={24} />
              Service Delivery
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Consultation Sessions</h3>
                <p className="font-semibold">Delivery Method:</p>
                <p className="text-gray-700">Consultation sessions are conducted online via video conferencing platforms such as Zoom, Google Meet, or similar services.</p>
                <p className="font-semibold mt-2">Scheduling:</p>
                <p className="text-gray-700">Upon booking, you will receive an email to schedule your session at a mutually convenient time.</p>
                <p className="font-semibold mt-2">Delivery Time:</p>
                <p className="text-gray-700">Sessions are typically scheduled within 3-5 business days after booking, depending on availability.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Ongoing SEO Management</h3>
                <p className="font-semibold">Delivery Method:</p>
                <p className="text-gray-700">Services such as ongoing SEO management are delivered continuously over the agreed contract period. All work is conducted remotely, with regular updates provided via email, phone calls, or video meetings.</p>
                <p className="font-semibold mt-2">Delivery Time:</p>
                <p className="text-gray-700">Work begins as soon as the initial payment is received and is delivered according to the project timeline agreed upon during the onboarding process.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2 text-blue-600" size={24} />
              International Clients
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Time Zones:</p>
                <p className="text-gray-700">We accommodate clients from all time zones. Session scheduling and service delivery times will be adjusted to suit your local time.</p>
              </div>
              <div>
                <p className="font-semibold">Digital Access:</p>
                <p className="text-gray-700">All digital products and services are accessible globally, and we ensure that there are no barriers to access regardless of your location.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 text-blue-600" size={24} />
              Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns regarding the delivery of your digital products or services, please do not hesitate to contact us. We are committed to ensuring that your experience with Shahid Shahmiri is smooth and satisfactory.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer2/>
    </>
  
  );
};

export default ShippingPage;