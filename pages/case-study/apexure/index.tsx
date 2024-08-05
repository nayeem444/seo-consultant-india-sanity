import React from 'react'
import Navbar from 'components/Navbar2'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Banner from 'components/CaseStudyPage/Banner'
import Footer2 from 'components/Footer2'
import Img from '../../../public/apexure.png'
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
              Apexure
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
              APEXURE is a web design digital agency that specializes <br/>conversion focused landing pages and websites.<br/> The company was struggling to increase its Domain Strength,<br/> Organic Keywords, and Search Rankings, which are crucial for generating leads and increasing conversions. They approached us to help them with their Link Building Strategy.
              </p>
            </div>
            <div className="pt-8 md:pt-16">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Apexure's DR increased to 47</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Search Impressions increased by 83%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Search Clicks increased by 310%</span>
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
              <h2 className="text-2xl font-medium p-2">Challenges :</h2>
              <p className="p-2">
              APEXURE was facing several challenges, including low Domain Strength, Organic Keywords,<br/> and Search Rankings. These challenges were affecting their lead generation efforts and ultimately<br/> hurting their bottom line. They were not getting enough traffic to their website and were not ranking high enough on search engines to attract potential customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center py-12 space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-medium p-2">Solution:</h2>
              <p className="p-2">
              Our team worked closely with APEXURE to identify the root causes of their challenges.<br/> We performed a thorough analysis of their website, content, and backlink profile to determine<br/> the areas that needed improvement. We then developed a comprehensive link building strategy<br/> that included building high-quality backlinks to their website.

We identified websites with high Domain Ratings and relevance to APEXURE's niche and reached out to them to request backlinks.<br/> We created high-quality content and guest posts that would appeal to these websites'<br/> audiences and would also link back to APEXURE's website.              </p>
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
              <h2 className="text-2xl font-medium p-2">Results : </h2>
              <p className="p-2">
              Our strategy was a success, and APEXURE saw a significant <br/>improvement in their Domain Strength, Organic Keywords, and Search Rankings.<br/> We built 98 backlinks to their focus pages with an average Domain Rating of 70. <br/>The high-quality links we built helped to improve their overall SEO KPIs <br/> like Organic Traffic, Search Impressions, Clicks, and Search Rankings.<br/>
The increase in traffic and clicks translated into more leads and conversions,<br/> which helped APEXURE grow its business and increase its revenue.<br/> The high-quality links we built also helped to establish <br/>APEXURE  as a credible and authoritative source in their niche.        </p>
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
