import React from 'react'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import CustomButton from 'components/CustomButton'
import img from '../../../public/leadgen.png'
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
              Increasing LeadGenApp's 
              </div>
              <div className="mt-4 sm:mt-6 text-lg sm:text-xl font-light text-true-gray-500 antialiased">
              Search Impressions By 834% Overall
              </div>
              <div  className="hidden lg:inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 mr-16 mt-4">            
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
            <h3 className="text-lg sm:text-xl font-bold mb-2">Client</h3>
            <p className="text-gray-700">
            The company was struggling to increase its domain rating, search impressions, and clicks, which is crucial for generating leads and increasing conversions.  They approached us to help them with their digital marketing strategy.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Challenges</h3>
            <p className="text-gray-700">
            LeadGen App was facing several challenges, including low domain rating, low search impressions, and low clicks. These challenges were affecting their lead generation efforts and ultimately hurting their bottom line. They were not getting enough traffic to their website and were not ranking high enough on search engines to attract potential customers.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Solution</h3>
            <p className="text-gray-700">
            Our team worked closely with LeadGen App to identify the root causes of their challenges. We performed a thorough analysis of their website, content, and backlink profile to determine the areas that needed improvement. We then developed a comprehensive SEO strategy that included building high-quality backlinks to their website.

We identified websites with high domain authority and relevance to LeadGen App's niche and reached out to them to request backlinks. We created high-quality content and guest posts that would appeal to these websites' audiences and would also link back to LeadGen App's website.
            </p>
          </div>
        </div>
        <div className="timeline-item mb-8 sm:mb-10">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Results</h3>
            <p className="text-gray-700">
            Our strategy was a success, and LeadGen App saw a significant improvement in their domain rating, search impressions, and clicks. The domain rating increased to 69, and search impressions and clicks increased by 834% and 821%, respectively. The increase in traffic and clicks translated into more leads and conversions, which helped LeadGen App grow its business and increase its revenue.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot absolute w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
          <div className="timeline-content ml-10">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Conclusion</h3>
            <p className="text-gray-700">
            In conclusion, LeadGen App's struggles with domain rating, search impressions, and clicks were holding back their lead generation efforts. Our team was able to help them overcome these challenges by implementing a comprehensive link building strategy that included building high-quality backlinks to their website.

As a result, LeadGen App saw a significant improvement in their search engine rankings, traffic, and conversions, which helped them grow their business and increase their revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  )
}

export default index









