import { useState } from 'react';

const WorkHistory = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#25282C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h1 className="text-[40px] md:text-[100px] font-bold text-gray-700 opacity-10 absolute inset-0 flex justify-center items-center">
            EXPERIENCE
          </h1>
          <h2 className="relative text-3xl font-semibold mb-12">
            Work History
          </h2>
        </div>
        <div className="space-y-8">

        <div className="m-4 md:m-8 p-6">
                <h3 className="text-xl font-semibold">
                  Advisor at Marketing Lad{' '}
                  <span className="text-gray-400">(Currently)</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    I lead a dynamic team of digital marketing experts in delivering
                    cutting-edge solutions to drive business growth and success.
                    With a relentless passion for SEO and link building, we empower
                    clients with innovative strategies that propel their online
                    presence to new heights.
                  </li>
                  <li>Key Achievements:</li>
                  <li>
                    Pioneered result-oriented SEO campaigns, increasing organic
                    traffic by 200% for a diverse clientele.
                  </li>
                  <li>
                    Spearheaded link-building initiatives, securing high-authority
                    backlinks, and elevating domain authority for clients across
                    industries.
                  </li>
                  <li>
                    Launched industry-leading SEO and link-building packages,
                    fueling sustainable business expansion.
                  </li>
                  <li>
                    Cultivated a collaborative work culture, attracting top talent
                    and fostering professional development within the team.
                  </li>
                </ul>
              </div>


              <div className="m-4 md:m-8 p-6 border-b border-[#717171]">
                <h3 className="text-xl font-semibold">
                  SEO Consultant at Zoomifier{' '}
                  <span className="text-gray-400">(2022 - 2024)</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    Developing and implementing effective search engine optimization
                    (SEO) strategies.
                  </li>
                  <li>
                    Coordinating content, design, social media, pay-per-click (PPC)
                    marketing, and other activities.
                  </li>
                  <li>Conduct keyword research to guide content teams.</li>
                  <li>
                    Manage SEO for other partner sites like Zoomifier.com and
                    CustomShow.com.
                  </li>
                  <li>Review technical SEO issues and recommend fixes.</li>
                </ul>
              </div>
       
        
          {showMore && (
            <>


<div className="m-4 md:m-8 p-6 border-b border-[#717171]">
                <h3 className="text-xl font-semibold">
                  SEO Manager at Taxmann Group{' '}
                  <span className="text-gray-400">(2021 - 2022)</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    Developed and implemented effective search engine optimization
                    (SEO) strategies. Helped in coordinating content, design, social
                    media, pay-per-click (PPC) marketing, and other activities.
                  </li>
                  <li>
                    Developing and implementing effective search engine optimization
                    (SEO) strategies.
                  </li>
                  <li>
                    Managing offsite and onsite optimization projects and reporting
                    on performance.
                  </li>
                  <li>
                    Manage SEO for other partner sites like Styl-Inc.com and
                    Mindler.com.
                  </li>
                </ul>
              </div>
            
              <div className="m-4 md:m-8 p-6 border-b border-[#717171]">
                <h3 className="text-xl font-semibold">
                  Marketing Specialist at Unacademy{' '}
                  <span className="text-gray-400">(2020 - 2021)</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    Worked with Unacademy - India's Largest Edtech platform to
                    improve their YouTube SEO and subscriptions. Hosted many
                    episodes on the CTwT Show.
                  </li>
                  <li>
                    Manage content strategy, video optimization, and viewership
                    growth for Unacademy’s existing and newly created YouTube
                    channels.
                  </li>
                  <li>
                    Work with internal and external stakeholders to spearhead
                    YouTube channel rollout, including determining content
                    proposition, programming strategy, branding, and video
                    optimization.
                  </li>
                  <li>
                    Actively manage channel branding, programming, optimization
                    (e.g. Titles, tags, descriptions, annotations, etc) and
                    reporting strategies.
                  </li>
                </ul>
              </div>
             

              <div className="m-4 md:m-8 p-6 border-b border-[#717171]">
                <h3 className="text-xl font-semibold">
                  Digital Marketer at LeadGen App{' '}
                  <span className="text-gray-400">(2019 - 2020)</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    Collaborated with LeadGen App to improve their search engine
                    ranking, clicks, and online presence, and continue to work
                    towards advancing their SEO performance. Later onboarded them as
                    my client.
                  </li>
                  <li>
                    Plan Product Strategy, Organise Marketing Strategy, Growth
                    Hacking, and Branding.
                  </li>
                  <li>
                    Provide ideas as well as opportunities to assist and enhance
                    conversion results.
                  </li>
                  <li>
                    Assisting in website SEO, and social media channels like
                    Twitter, and Facebook and driving traffic to the website.
                  </li>
                </ul>
              </div>

             
          <div className="m-4 md:m-8 p-6 border-b border-[#717171]">
            <h3 className="text-xl font-semibold">
              Digital Marketer at Leadcube Media{' '}
              <span className="text-gray-400">(2018 - 2019)</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Worked with many clients like AMEX GBT, LeadGen App, and IEC
                Abroad to improve their SEO performance and lead generation.
              </li>
              <li>
                Work with a Digital Marketing Manager to develop marketing
                plans, advertising, and campaigns.
              </li>
              <li>Define personas and engage with target audiences.</li>
              <li>
                Implement our social media strategy (Twitter, Facebook, and
                LinkedIn) to encourage and maximize engagement.
              </li>
            </ul>
          </div>

          <div className="m-4 md:m-8 p-6 border-b border-[#717171]">
            <h3 className="text-xl font-semibold">
              Aqua Chill Systems{' '}
              <span className="text-gray-400">(2017-2018)</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Marketing Executive at Aqua Chill Systems Started my Marketing
                Journey.
              </li>
              <li>
                Update and maintain EMS, MIS, Weekly Sheet, and Regional Sales
                Process Sheet.
              </li>
              <li>Maintain & Submit pre-qualification data.</li>
              <li>
                Coordinate meetings with HVAC consultants & Architects/ reviews
                of the front end.
              </li>
              <li>
                Maintain Front-end data of Presentations, offer formats, and
                case studies.
              </li>
            </ul>
          </div>
            </>
          )}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"

          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
