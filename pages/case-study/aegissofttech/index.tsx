import React from 'react';
import { ArrowUpRight, BarChart2, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';

const CaseStudyPage = () => {
  return (
    <>
      <Head>
        <title>Case Study | Aegis Softtech</title>
        <meta name="description" content="Discover how Aegis Softtech achieved exceptional SEO growth in just 5 months, increasing users by 463% and leads by 460%." />
      </Head>

      <div className="min-h-screen text-white max-w-8xl">
        <Navbar />
        <header className="py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Aegis Softtech SEO Case Study</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">The Challenge</h2>
            <p className="mb-4">
            Aegis Softtech, a leading technology service provider specializing in software development, AI solutions, and digital transformation, approached me in late April 2024 with a specific goal: to improve their SEO visibility and drive organic traffic that would result in high-quality leads.
            </p>
            <p className="mb-4">
            Despite a well-established online presence, their SEO performance must be optimized. They faced challenges in reaching their target audience effectively, particularly in highly competitive search environments. Their core KPIs reflected the need for a robust SEO strategy:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {['Before (May 2024)', 'After 5 Months (2nd Oct 2024)'].map((period, index) => (
                <div key={period} className="bg-gray-900 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{period}</h3>
                  <Image 
                    src={index === 0 ? "/assets/Before.png" : "/assets/After.png"}
                    width={500}
                    height={400} 
                    alt={`${period} KPI stats`} 
                    className="w-full h-40 sm:h-48 object-cover mb-3 sm:mb-4 rounded" 
                  />
                  <ul className="list-disc list-inside text-sm sm:text-base">
                    <li>Users: {index === 0 ? '1,900' : '8,800'} per month</li>
                    <li>Impressions: {index === 0 ? '474,965' : '1,114,924'} per month</li>
                    <li>Clicks: {index === 0 ? '3,018' : '6,748'} per month</li>
                    <li>Domain Rating: {index === 0 ? '44' : '65'}</li>
                    <li>Leads: {index === 0 ? 'Less than 10' : '46'} per month</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Goals</h2>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
              <p className="mb-4">The primary goals were to:</p>
              <ul className="list-none space-y-3 sm:space-y-4">
                {[
                  'Increase organic traffic and website visibility.',
                  'Improve keyword rankings for high-value services.',
                  'Drive qualified leads that align with their business offerings.'
                ].map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#2465f3] flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">SEO Strategy Overview: From May 2024 Onwards</h2>
            <p className='mb-4'>To achieve Aegis Softtech’s SEO goals, I implemented a comprehensive SEO strategy starting May 1st, 2024. The data-driven approach focused on on-page and off-page optimization efforts to maximize results.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: '1. Identifying High-Potential Pages and Posts',
                  content: (
                    <>
                      <p className="mb-2">My first step was to conduct a detailed audit of the site's content to identify its most promising pages. Using data from impressions and clicks, I focused on the following:</p>
                      <ul className="list-disc list-inside text-sm sm:text-base">
                        <li>Pages and posts ranking between positions 11 and 30 were close to breaking into the top 10 but needed targeted improvements.</li>
                        <li>Money pages: Key service pages that had the potential to drive conversions but needed to be ranked higher.</li>
                      </ul>
                    </>
                  )
                },
                {
                  title: '2. On-Page Optimization',
                  content: (
                    <>
                      <p className="mb-2">I carried out several on-page optimizations that directly impacted user experience and search engine rankings, including:</p>
                      <ul className="list-disc list-inside text-sm sm:text-base">
                        <li>Title optimization: I revised titles to improve click-through rates (CTR) by making them more compelling and aligned with search intent.</li>
                        <li>Page speed improvements: I optimized the load times of crucial pages, which improved user experience and positively impacted search rankings.</li>
                        <li>EEAT implementation: I enhanced trust signals by adding testimonials, badges authoritativeness, and trustworthiness elements throughout the site.</li>
                        <li>Permalink optimization: I restructured URLs to make them more SEO-friendly and easier for search engines to crawl.</li>
                      </ul>
                    </>
                  )
                }
              ].map(({ title, content }) => (
                <div key={title} className="bg-gray-900 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
                  {content}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">EEAT implementation:</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-full sm:w-1/2">
                <p className="mb-4">I enhanced trust signals by adding testimonials, badges, authoritativeness, and trustworthiness elements throughout the site.</p>
              </div>
              <div className="w-full sm:w-1/2">
                <Image 
                  src="/assets/Agaes.png"
                  width={600}
                  height={400}
                  objectFit="contain"
                  alt="EEAT implementation" 
                  className="rounded w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6"> Monthly Backlink Building Strategy</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-full sm:w-1/2">
                <p className="mb-4">For off-page SEO, I adopted an aggressive yet strategic approach, building high-quality backlinks every month:</p>
                <p>These consistent, high-quality backlinks improved Aegis Softtech's domain rating from 44 to 65 and overall search engine trust.</p>
              </div>
              <div className="w-full sm:w-1/2">
                <Image 
                  src="/assets/Overview.png"
                  width={600}
                  height={400}
                  objectFit="contain"
                  alt="Backlink building strategy" 
                  className="rounded w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
              {[
                { month: 'May 2024', backlinks: "Secured 53 backlinks from sites with domain ratings (DR) of 50+ and traffic above 1K, according to Ahrefs." },
                { month: 'June 2024', backlinks: "Built 78 backlinks following the same quality metrics." },
                { month: 'July 2024', backlinks: "Achieved a significant boost with 155 backlinks from authoritative sites." },
                { month: 'August 2024', backlinks: "Continued the momentum with 121 new backlinks." },
                { month: 'September 2024', backlinks: "Concluded the period with 154 backlinks, further strengthening the site’s authority." }
              ].map(({ month, backlinks }) => (
                <div key={month} className="bg-gray-900 p-3 sm:p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{month}</h4>
                  <p className="text-sm  font-normal">{backlinks}</p>
                  
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6"> Targeted Keyword Strategy</h2>
            <p className="mb-4">I focused on highly relevant, competitive keywords to drive the right traffic and boost conversions. By concentrating efforts on these search terms, Aegis Softtech now ranks in the top 5 for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { keyword: 'Hire power BI developer India', imageSrc: '/ages/powerBi.png' },
                { keyword: 'ServiceNow development company', imageSrc: '/ages/ServiceNow.png' },
                { keyword: 'Java development company', imageSrc: '/ages/Java.png' },
                { keyword: 'Artificial intelligence business solutions', imageSrc: '/ages/Artificial.png' },
                { keyword: 'Java development company in India' },
                { keyword: 'Hire Microsoft Dynamics CRM developers' },
                { keyword: 'Node JS development company India' }
              ].map(({ keyword, imageSrc }, index) => (
                <div key={keyword} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{keyword}</h3>
                  {imageSrc && (
                    <div className="relative w-full h-32 mb-2">
                      <Image 
                        src={imageSrc}
                        layout="fill"
                        objectFit="cover"
                        alt={`Keyword strategy for ${keyword}`} 
                        className="rounded"
                      />
                    </div>
                  )}
                  <p className="text-sm">Ranking in top 5 positions</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Results: Exceptional Growth in Just 5 Months</h2>
            <p className="mb-4">
              The SEO strategies I implemented for Aegis Softtech began to show impressive results within the first few months. By October 1st, 2024, the following key performance indicators (KPIs) demonstrated significant growth compared to where the project started in April 2024.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'Users', icon: Users, increase: '4.63x' },
                { title: 'Impressions', icon: BarChart2, increase: '2.35x' },
                { title: 'Clicks', icon: ArrowUpRight, increase: '2.24x' },
                { title: 'Leads', icon: TrendingUp, increase: '460%' }
              ].map(({ title, icon: Icon, increase }) => (
                <div key={title} className="bg-gray-900 p-4 rounded-lg text-center">
                  <Icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-[#2465f3]" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>
                  <p className="text-2xl sm:text-3xl font-bold">{increase}</p>
                  <p className="text-xs sm:text-sm">Increase</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Conclusion</h2>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
              <p className="mb-4">
                The transformation of Aegis Softtech's SEO performance over just five months illustrates the power of a well-executed, data-driven SEO strategy. Through on-page optimizations, a focused backlink-building campaign, and targeted keyword selection, I was able to significantly boost their organic traffic, improve search engine rankings, and generate a substantial increase in high-quality leads.
              </p>
              <p className="mb-4">
                The growth in key metrics demonstrates the approach's effectiveness:
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#2465f3]" />
                  <span className="text-sm sm:text-base">Increase in users from 1,900 to 8,800 per month</span>
                </li><li className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#2465f3]" />
                  <span className="text-sm sm:text-base">460% rise in leads</span>
                </li>
              </ul>
              <p>
                These results have laid a strong foundation for continued SEO success.
              </p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Client Testimonial</h2>
            <blockquote className="bg-gray-900 p-6 sm:p-8 rounded-lg italic">
              <p className="mb-4 text-sm sm:text-base">
                "Shahid Shahmir's SEO consultation for Aegis Softtech has been transformative. Since partnering with Shahid, we have witnessed remarkable growth in our rankings, a substantial increase in organic traffic, and a significant lead boost. His expertise, strategic approach, and deep understanding of SEO have driven exceptional results for our business. Shahid is not just a consultant; he is a true partner in our success, and we couldn't be more satisfied with his impact on our digital presence."
              </p>
              <footer className="text-right text-sm sm:text-base">— Founder, Aegis Softtech</footer>
            </blockquote>
          </section>
        </main>

        <Footer2 />
      </div>
    </>
  );
};

export default CaseStudyPage;