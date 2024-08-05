import React from 'react'
import Navbar from 'components/Navbar2'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Banner from 'components/CaseStudyPage/Banner'
import Footer2 from 'components/Footer2'
import Img from '../../../public/leadgen.png'
import Img1 from '../../../public/assets/caseStudy/—Pngtree—meeting discussion_5409601.png'
import Img2 from '../../../public/assets/caseStudy/backlink.png'
import Img3 from '../../../public/assets/caseStudy/execution.png'

const index = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#25282C] min-h-screen text-white pt-4 flex flex-col">
        <div className="container mx-auto text-center px-4">
          <div className="relative flex justify-center">
            <h1 className="absolute text-[60px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none pt-12">
              LeadGen
            </h1>
            <p className="mt-36 md:mt-48 text-3xl font-semibold">
              Explore my content which achieves high rankings on Google?
            </p>
          </div>
          <div className="md:flex justify-between py-12 md:py-28">
            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
              <Image
                src={Img}
                width={700}
                height={300}
                className="rounded-xl md:mr-24"
                alt="Prospeo"
              />
            </div>
            <div className="flex flex-col text-left md:ml-12">
              <h2 className="text-2xl font-medium p-2">Information</h2>
              <p className="p-2">
              The company was struggling to increase its domain rating,<br/> search impressions, and clicks, which is crucial for generating leads and increasing conversions.<br/>  They approached us to help them with their digital marketing strategy.
              </p>
              <p className="p-2">
                <span className="font-semibold">Category :</span> Keyword Research & Analysis
              </p>
              <p className="p-2">
                <span className="font-semibold">Date :</span> 12 May, 2024
              </p>
              <p className="p-2">
                <span className="font-semibold">Client :</span> John Smith
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 p-12">
            <div>
              <h2 className="pl-8 py-4 font-medium text-2xl">Project Brief:</h2>
              <p className="pl-8">
              LeadGen App was facing several challenges, including <br/>low domain rating, low search impressions, and low clicks.<br/> These challenges were affecting their lead generation efforts<br/> and ultimately hurting their bottom line. <br/>They were not getting enough traffic to their website and<br/> were not ranking high enough on search engines to attract potential customers              </p>
            </div>
            <div className="pt-8 md:pt-16">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Domain Rating increased to 69,</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Search impressions and clicks increased by 834% and 821%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Increase in traffic translated into more leads and conversions,</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src={Img1}
                width={400}
                height={300}
                className="rounded-xl"
                alt="Meeting Discussion"
              />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-medium p-2">Solution :</h2>
              <p className="p-2">
              Our team worked closely with LeadGen App to identify the root causes of their challenges.<br/> We performed a thorough analysis of their website, content,<br/> and backlink profile to determine the areas that needed improvement. <br/>We then developed a comprehensive SEO strategy that included <br/>building high-quality backlinks to their website.

We identified websites with high domain authority and relevance<br/> to LeadGen App's niche and reached out to them to request backlinks.<br/> We created high-quality content and guest posts that would appeal<br/> to these websites' audiences and would also link back to LeadGen App's website.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center py-12 space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-medium p-2">Results :</h2>
              <p className="p-2">
              Our strategy was a success, and LeadGen App saw a significant <br/>improvement in their domain rating, search impressions, and clicks.<br/> The domain rating increased to 69, and search impressions and clicks increased<br/> by 834% and 821%, respectively. The increase in traffic and clicks<br/> translated into more leads and conversions, which helped <br/>LeadGen App grow its business and increase its revenue.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Image
                src={Img2}
                width={400}
                height={300}
                className="rounded-xl"
                alt="Backlink Acquisition"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center py-12 space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src={Img3}
                width={200}
                height={300}
                className="rounded-xl"
                alt="Execution"
              />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-medium p-2">Conclusion</h2>
              <p className="p-2">
              In conclusion, LeadGen App's struggles with domain rating, <br/>search impressions, and clicks were holding back their lead generation efforts.<br/> Our team was able to help them overcome these challenges <br/>by implementing a comprehensive link building strategy that included <br/>building high-quality backlinks to their website.

 As a result,<br/> LeadGen App saw a significant improvement in their search engine rankings, <br/> traffic, and conversions, which helped them grow their business and increase their revenue.
              </p>
            </div>
          </div>
        </div>
        <Banner />
        <Footer2 />
      </div>
    </>
  )
}

export default index
