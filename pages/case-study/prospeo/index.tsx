import React from 'react'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import CustomButton from 'components/CustomButton'
import img from '../../../public/prospeo.png'
const index = () => {
  return (
   
    <div>
    <Navbar />
    <div className="min-w-full bg-gray-100 flex flex-col justify-center p-4 sm:p-10">
      <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl">
          <div className="flex items-center justify-start pt-4 pl-4 sm:pt-6 sm:pl-6">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
          </div>
          <div className="flex flex-col sm:flex-row px-4 py-6 sm:px-20">
            <div className="sm:w-2/4 my-8 sm:my-24 text-left">
              <div className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-none">
                Skyrocketing Prospeo's Traffic
              </div>
              <div className="mt-4 sm:mt-6 text-lg sm:text-xl font-light text-true-gray-500 antialiased">
                And Domain Rating Through Strategic SEO
              </div>
              <div  className="hidden lg:inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 mt-4 mr-16">            
                <a  href="/contact">Book a Free Consultation Call</a>
                </div>
            </div>
            <div className="mt-8 sm:mt-24 sm:ml-20 text-left">
              <Image
                src={img}
                width={400}
                height={400}
                alt="image"
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto py-12 sm:py-16 px-4">
      <div className="timeline relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Project Timeline</h2>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Background</h3>
            <p className="text-gray-700">
              Prospeo, a cutting-edge email-finding tool designed for sales and marketing professionals, faced challenges in gaining online visibility and attracting its target audience. With an initial traffic of just 15 visitors and a Domain Rating (DR) of 2, Prospeo needed a robust strategy to improve its online presence and attract more users.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Challenges</h3>
            <p className="text-gray-700">
              Low organic traffic hindering brand visibility. A weak backlink profile affects search engine rankings. Underutilised potential in organic keyword targeting.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Strategy</h3>
            <p className="text-gray-700">
              Our approach centred around enhancing Prospeo's organic reach and authority through strategic SEO and link-building efforts. Key components of our strategy included.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">High-Quality Backlink Acquisition</h3>
            <p className="text-gray-700">
              Focused on securing 56+ high-authority links from websites with an average DR of 64 to boost Prospeo's domain authority and search rankings.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Execution</h3>
            <p className="text-gray-700">
              Over 8 months, we implemented a targeted link-building campaign, leveraging relationships with high-DR websites across relevant industries. This approach enhanced Prospeo's backlink profile and overall SEO performance, leading to significant gains in organic traffic and domain rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  )
}

export default index









