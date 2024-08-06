import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WorkHistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const workExperiences = [
    {
      company: 'Aqua Chill Systems',
      period: '(2017-2018)',
      details: [
        'Marketing Executive at Aqua Chill Systems Started my Marketing Journey.',
        'Update and maintain EMS, MIS, Weekly Sheet, and Regional Sales Process Sheet.',
        'Maintain & Submit pre-qualification data.',
        'Coordinate meetings with HVAC consultants & Architects/ reviews of the front end.',
        'Maintain Front-end data of Presentations, offer formats, and case studies.'
      ]
    },
    {
      company: 'Digital Marketer at Leadcube Media',
      period: '(2018 - 2019)',
      details: [
        'Worked with many clients like AMEX GBT, LeadGen App, and IEC Abroad to improve their SEO performance and lead generation.',
        'Work with a Digital Marketing Manager to develop marketing plans, advertising, and campaigns.',
        'Define personas and engage with target audiences.',
        'Implement our social media strategy (Twitter, Facebook, and LinkedIn) to encourage and maximize engagement.'
      ]
    },
    {
      company: 'Digital Marketer at LeadGen App',
      period: '(2019 - 2020)',
      details: [
        'Collaborated with LeadGen App to improve their search engine ranking, clicks, and online presence, and continue to work towards advancing their SEO performance. Later onboarded them as my client.',
        'Plan Product Strategy, Organise Marketing Strategy, Growth Hacking, and Branding.',
        'Provide ideas as well as opportunities to assist and enhance conversion results.',
        'Assisting in website SEO, and social media channels like Twitter, and Facebook and driving traffic to the website.'
      ]
    },
    {
      company: 'Marketing Specialist at Unacademy',
      period: '(2020 - 2021)',
      details: [
        'Worked with Unacademy - India\'s Largest Edtech platform to improve their YouTube SEO and subscriptions. Hosted many episodes on the CTwT Show.',
        'Manage content strategy, video optimization, and viewership growth for Unacademy’s existing and newly created YouTube channels.',
        'Work with internal and external stakeholders to spearhead YouTube channel rollout, including determining content proposition, programming strategy, branding, and video optimization.',
        'Actively manage channel branding, programming, optimization (e.g. Titles, tags, descriptions, annotations, etc) and reporting strategies.'
      ]
    },
    {
      company: 'SEO Manager at Taxmann Group',
      period: '(2021 - 2022)',
      details: [
        'Developed and implemented effective search engine optimization (SEO) strategies. Helped in coordinating content, design, social media, pay-per-click (PPC) marketing, and other activities.',
        'Developing and implementing effective search engine optimization (SEO) strategies.',
        'Managing offsite and onsite optimization projects and reporting on performance.',
        'Manage SEO for other partner sites like Styl-Inc.com and Mindler.com.'
      ]
    },
    {
      company: 'SEO Consultant at Zoomifier',
      period: '(2022 - 2024)',
      details: [
        'Developing and implementing effective search engine optimization (SEO) strategies.',
        'Coordinating content, design, social media, pay-per-click (PPC) marketing, and other activities.',
        'Conduct keyword research to guide content teams.',
        'Manage SEO for other partner sites like Zoomifier.com and CustomShow.com.',
        'Review technical SEO issues and recommend fixes.'
      ]
    },
    {
      company: 'Advisor at Marketing Lad',
      period: '(Currently)',
      details: [
        'I lead a dynamic team of digital marketing experts in delivering cutting-edge solutions to drive business growth and success. With a relentless passion for SEO and link building, we empower clients with innovative strategies that propel their online presence to new heights.',
        'Key Achievements:',
        'Pioneered result-oriented SEO campaigns, increasing organic traffic by 200% for a diverse clientele.',
        'Spearheaded link-building initiatives, securing high-authority backlinks, and elevating domain authority for clients across industries.',
        'Launched industry-leading SEO and link-building packages, fueling sustainable business expansion.',
        'Cultivated a collaborative work culture, attracting top talent and fostering professional development within the team.'
      ]
    }
  ];

  return (
    <section className="bg-[#25282C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h2 className="text-[40px] md:text-[100px] font-bold text-gray-700 opacity-10 absolute inset-0 flex justify-center items-center">
            EXPERIENCE
          </h2>
          <h2 className="relative text-3xl font-semibold mb-12">
            Work History
          </h2>
        </div>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="m-4 md:m-8 p-6 border-b border-[#717171]"
            >
              <h3
                className="text-xl font-semibold flex justify-start items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {experience.company} <span className="text-gray-400">{experience.period}</span>
                <span className="ml-4">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </h3>
              {activeIndex === index && (
                <ul className="list-disc list-inside space-y-2 mt-2">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
