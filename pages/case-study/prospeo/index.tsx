import React from 'react'
import Navbar from 'components/Navbar2'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Banner from 'components/CaseStudyPage/Banner'
import Footer2 from 'components/Footer2'
import Img from '../../../public/prospeo.png'
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
              Prospeo
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
                Keyword research is a crucial step in any successful SEO strategy. <br />
                It involves identifying and analyzing the search terms that your target audience<br />
                uses when looking for products, services, or information related to your.
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
                Prospeo, a cutting-edge email-finding tool designed for sales and marketing professionals, faced challenges in gaining online visibility and attracting its target audience. With an initial traffic of just 15 visitors and a Domain Rating (DR) of 2, Prospeo needed a robust strategy to improve its online presence and attract more users.
              </p>
            </div>
            <div className="pt-8 md:pt-16">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Traffic increased from 15 to 3500 visitors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Rating improved from 2 to 50</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-8 w-8 text-blue-500 mx-4" />
                  <span>Expanded to cover 2000+ keywords</span>
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
              <h2 className="text-2xl font-medium p-2">Our approach:</h2>
              <p className="p-2">
                Our approach centred around enhancing Prospeo’s organic reach<br />
                and authority through strategic SEO and link-building efforts.<br />
                Key components of our strategy included:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center py-12 space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-medium p-2">High-Quality Backlink Acquisition:</h2>
              <p className="p-2">
                Focused on securing 56+ high-authority links from websites <br />
                with an average DR of 64 to boost Prospeo’s <br />
                domain authority and search rankings.
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
              <h2 className="text-2xl font-medium p-2">Execution:</h2>
              <p className="p-2">
                Over 8 months, we implemented a targeted link-building campaign,<br />
                leveraging relationships with high-DR websites across relevant industries.<br />
                This approach enhanced Prospeo’s backlink profile and overall SEO performance,<br />
                leading to significant gains in organic traffic and domain rating.
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
