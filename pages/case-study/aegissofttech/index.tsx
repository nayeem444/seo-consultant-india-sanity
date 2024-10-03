import React from 'react';
import { ArrowUpRight, BarChart2, TrendingUp, Users ,Target,CheckCircle } from 'lucide-react';
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
        <Navbar/>
      <header className=" py-6">
        <div className="container mx-auto p-12 flex justify-center">
          <h1 className="text-4xl font-bold">Aegis Softtech SEO Case Study</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
          <p className="mb-4">
            Aegis Softtech, a leading technology service provider specializing in software development, AI solutions, and digital transformation, approached me in late April 2024 with a specific goal: to improve their SEO visibility and drive organic traffic that would result in high-quality leads.
          </p>
          <p className="mb-4">
            Despite a well-established online presence, their SEO performance needed optimization. They faced challenges in reaching their target audience effectively, particularly in highly competitive search environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Before (May 2024)</h3>
              <Image 
              src="/assets/Before.png"
              width={500}
              height={400} 
              alt="Before KPI stats" 
              className="w-full h-48 object-cover mb-4 rounded" />
              <ul className="list-disc list-inside">
                <li>Users: 1,900 per month</li>
                <li>Impressions: 474,965 per month</li>
                <li>Clicks: 3,018 per month</li>
                <li>Domain Rating: 44</li>
                <li>Leads: Less than 10 per month</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">After 5 Months (2nd Oct 2024)</h3>
              <Image 
              src="/assets/After.png"
              width={500}
              height={400} 
              alt="After KPI stats" 
              className="w-full h-48 object-cover mb-4 rounded" />
              <ul className="list-disc list-inside">
                <li>Users: 8,800 per month</li>
                <li>Impressions: 1,114,924 per month</li>
                <li>Clicks: 6,748 per month</li>
                <li>Domain Rating: 65</li>
                <li>Leads: 46 per month</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Goals</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="mb-4">The primary goals were to:</p>
            <ul className="list-none space-y-4">
              {[
                'Increase organic traffic and website visibility.',
                'Improve keyword rankings for high-value services.',
                'Drive qualified leads that align with their business offerings.'
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-6 h-6 mr-2 text-[#2465f3] flex-shrink-0 mt-1" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">SEO Strategy Overview</h2>
  
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Identifying High-Potential Pages and Posts</h3>
             <p>  My first step was to conduct a detailed audit of the site’s content to identify its most promising pages. Using data from impressions and clicks, I focused on the following:
          </p>
              <ul className="list-disc list-inside">
                <li>Pages and posts ranking between positions 11 and 30 were close to breaking into the top 10 but needed targeted improvements.</li>
                <li>Money pages: Key service pages that had the potential to drive conversions but needed to be ranked higher.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">2. On-Page Optimization</h3>
              <p>I carried out several on-page optimizations that directly impacted user experience and search engine rankings, including:</p>
              <ul className="list-disc list-inside">
                <li>Title optimization: I revised titles to improve click-through rates (CTR) by making them more compelling and aligned with search intent. I also ensured that the focus keyword was placed at the beginning of the title, a best practice that boosts relevance in search results.</li>
                <li>Page speed improvements: I optimized the load times of crucial pages, which improved user experience and positively impacted search rankings.
</li>
                <li>EEAT implementation: I enhanced trust signals by adding testimonials, badges authoritativeness, and trustworthiness elements throughout the site.</li>
                <li>Permalink optimization: I restructured URLs to make them more SEO-friendly and easier for search engines to crawl.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">EEAT Implementation</h3>
            <Image 
            src="/assets/Agaes.png"
            width={500}
            height={400} 
            alt="EEAT implementation" 
            className="w-full h-[400px] mb-4 rounded" />
          </div>
        </section>

        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">3. Monthly Backlink Building Strategy</h2>
        <p className="mb-6">For off-page SEO, I adopted an aggressive yet strategic approach, building high-quality backlinks every month:</p>
        <div className="relative w-full h-[400px] mb-8">
          <Image 
            src="/assets/Overview.png"
            layout="fill"
            objectFit="cover"
            alt="Backlink building strategy" 
            className="rounded"
          />
        </div>
        <p className='py-4'>These consistent, high-quality backlinks improved Aegis Softtech’s domain rating from 44 to 65 and overall search engine trust.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { month: 'May 2024', backlinks:" Secured 53 backlinks from sites with domain ratings (DR) of 50+ and traffic above 1K, according to Ahrefs." },
            { month: 'June 2024', backlinks: "Built 78 backlinks following the same quality metrics." },
            { month: 'July 2024', backlinks: "Achieved a significant boost with 155 backlinks from authoritative sites." },
            { month: 'August 2024', backlinks: "Continued the momentum with 121 new backlinks." },
            { month: 'September 2024', backlinks: "Concluded the period with 154 backlinks, further strengthening the site’s authority."}
          ].map(({ month, backlinks }) => (
            <div key={month} className="bg-gray-900 p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">{month}</h4>
              <p className="">{backlinks}</p>
              <p className="text-sm">Backlinks</p>
            </div>
          ))}
        </div>
      </section>

        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">4. Targeted Keyword Strategy</h2>
        <p>I focused on highly relevant, competitive keywords to drive the right traffic and boost conversions. By concentrating efforts on these search terms, Aegis Softtech now ranks in the top 5 for:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              keyword: 'Hire power BI developer India',
              imageSrc: '/ages/powerBi.png'
            },
            {
              keyword: 'ServiceNow development company',
              imageSrc: '/ages/ServiceNow.png'
            },
            {
              keyword: 'Java development company',
              imageSrc: '/ages/Java.png'
            },
           
            
          ].map(({ keyword, imageSrc }) => (
            <div key={keyword} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{keyword}</h3>
              <div className="relative w-full h-48 mb-4">
                <Image 
                  src={imageSrc}
                  layout="fill"
                  objectFit="cover"
                  alt={`Keyword strategy for ${keyword}`} 
                  className="rounded"
                />
              </div>
              <p className="text-sm">Ranking in top 5 positions</p>
            </div>

          ))}

          

<div className="bg-gray-900 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Java development company in India</h3>
</div>

<div className="bg-gray-900 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Hire Microsoft Dynamics CRM developers</h3>
</div>

<div className="bg-gray-900 p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-4">Node JS development company India</h3>
</div>

        </div>
      </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Results: Exceptional Growth in Just 5 Months</h2>
          <p className='py-4'>
          The SEO strategies I implemented for Aegis Softtech began to show impressive results within the first few months. By October 1st, 2024, the following key performance indicators (KPIs) demonstrated significant growth compared to where the project started in April 2024.          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#2465f3]" />
              <h3 className="text-2xl font-semibold mb-2">Users</h3>
              <p className="text-4xl font-bold">4.63x</p>
              <p className="text-sm">Increase</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <BarChart2 className="w-12 h-12 mx-auto mb-4 text-[#2465f3]" />
              <h3 className="text-2xl font-semibold mb-2">Impressions</h3>
              <p className="text-4xl font-bold">2.35x</p>
              <p className="text-sm">Increase</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <ArrowUpRight className="w-12 h-12 mx-auto mb-4 text-[#2465f3]" />
              <h3 className="text-2xl font-semibold mb-2">Clicks</h3>
              <p className="text-4xl font-bold">2.24x</p>
              <p className="text-sm">Increase</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#2465f3]" />
              <h3 className="text-2xl font-semibold mb-2">Leads</h3>
              <p className="text-4xl font-bold">460%</p>
              <p className="text-sm">Increase</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Conclusion</h2>
        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="mb-4">
            The transformation of Aegis Softtech's SEO performance over just five months illustrates the power of a well-executed, data-driven SEO strategy. Through on-page optimizations, a focused backlink-building campaign, and targeted keyword selection, I was able to significantly boost their organic traffic, improve search engine rankings, and generate a substantial increase in high-quality leads.
          </p>
          <p className="mb-4">
            The growth in key metrics demonstrates the approach's effectiveness:
          </p>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#2465f3]" />
              <span>Increase in users from 1,900 to 8,800 per month</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-[#2465f3]" />
              <span>460% rise in leads</span>
            </li>
          </ul>
          <p>
            These results have laid a strong foundation for continued SEO success.
          </p>
        </div>
      </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Client Testimonial</h2>
          <blockquote className="bg-gray-900 p-8 rounded-lg italic">
            <p className="mb-4">
              "Shahid Shahmir's SEO consultation for Aegis Softtech has been transformative. Since partnering with Shahid, we have witnessed remarkable growth in our rankings, a substantial increase in organic traffic, and a significant lead boost. His expertise, strategic approach, and deep understanding of SEO have driven exceptional results for our business. Shahid is not just a consultant; he is a true partner in our success, and we couldn't be more satisfied with his impact on our digital presence."
            </p>
            <footer className="text-right">— Founder, Aegis Softtech</footer>
          </blockquote>
        </section>
      </main>

     <Footer2/>
    </div>
    </>
  
  );
};

export default CaseStudyPage;