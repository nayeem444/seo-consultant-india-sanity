import { useState } from 'react';

const WorkHistory = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="mx-auto bg-[#25282C] text-white py-12 max-w-8xl">
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
          {WorkHistoryItem({
            title: "Advisor at Marketing Lad",
            date: "(Currently)",
            responsibilities: [
              "I lead a dynamic team of digital marketing experts in delivering cutting-edge solutions to drive business growth and success. With a relentless passion for SEO and link building, we empower clients with innovative strategies that propel their online presence to new heights.",
              "Pioneered result-oriented SEO campaigns, increasing organic traffic by 200% for a diverse clientele.",
              "Spearheaded link-building initiatives, securing high-authority backlinks, and elevating domain authority for clients across industries.",
              "Launched industry-leading SEO and link-building packages, fueling sustainable business expansion.",
              "Cultivated a collaborative work culture, attracting top talent and fostering professional development within the team."
            ]
          })}

          {WorkHistoryItem({
            title: "SEO Consultant at Zoomifier",
            date: "(2022 - 2024)",
            responsibilities: [
              "Developing and implementing effective search engine optimization (SEO) strategies.",
              "Coordinating content, design, social media, pay-per-click (PPC) marketing, and other activities.",
              "Conduct keyword research to guide content teams.",
              "Manage SEO for other partner sites like Zoomifier.com and CustomShow.com.",
              "Review technical SEO issues and recommend fixes."
            ]
          })}

          {showMore && (
            <>
              {WorkHistoryItem({
                title: "SEO Manager at Taxmann Group",
                date: "(2021 - 2022)",
                responsibilities: [
                  "Developed and implemented effective search engine optimization (SEO) strategies. Helped in coordinating content, design, social media, pay-per-click (PPC) marketing, and other activities.",
                  "Developing and implementing effective search engine optimization (SEO) strategies.",
                  "Managing offsite and onsite optimization projects and reporting on performance.",
                  "Manage SEO for other partner sites like Styl-Inc.com and Mindler.com."
                ]
              })}

              {WorkHistoryItem({
                title: "Marketing Specialist at Unacademy",
                date: "(2020 - 2021)",
                responsibilities: [
                  "Worked with Unacademy - India's Largest Edtech platform to improve their YouTube SEO and subscriptions. Hosted many episodes on the CTwT Show.",
                  "Manage content strategy, video optimization, and viewership growth for Unacademy's existing and newly created YouTube channels.",
                  "Work with internal and external stakeholders to spearhead YouTube channel rollout, including determining content proposition, programming strategy, branding, and video optimization.",
                  "Actively manage channel branding, programming, optimization (e.g. Titles, tags, descriptions, annotations, etc) and reporting strategies."
                ]
              })}

              {WorkHistoryItem({
                title: "Digital Marketer at LeadGen App",
                date: "(2019 - 2020)",
                responsibilities: [
                  "Collaborated with LeadGen App to improve their search engine ranking, clicks, and online presence, and continue to work towards advancing their SEO performance. Later onboarded them as my client.",
                  "Plan Product Strategy, Organise Marketing Strategy, Growth Hacking, and Branding.",
                  "Provide ideas as well as opportunities to assist and enhance conversion results.",
                  "Assisting in website SEO, and social media channels like Twitter, and Facebook and driving traffic to the website."
                ]
              })}

              {WorkHistoryItem({
                title: "Digital Marketer at Leadcube Media",
                date: "(2018 - 2019)",
                responsibilities: [
                  "Worked with many clients like AMEX GBT, LeadGen App, and IEC Abroad to improve their SEO performance and lead generation.",
                  "Work with a Digital Marketing Manager to develop marketing plans, advertising, and campaigns.",
                  "Define personas and engage with target audiences.",
                  "Implement our social media strategy (Twitter, Facebook, and LinkedIn) to encourage and maximize engagement."
                ]
              })}

              {WorkHistoryItem({
                title: "Aqua Chill Systems",
                date: "(2017-2018)",
                responsibilities: [
                  "Marketing Executive at Aqua Chill Systems Started my Marketing Journey.",
                  "Update and maintain EMS, MIS, Weekly Sheet, and Regional Sales Process Sheet.",
                  "Maintain & Submit pre-qualification data.",
                  "Coordinate meetings with HVAC consultants & Architects/ reviews of the front end.",
                  "Maintain Front-end data of Presentations, offer formats, and case studies."
                ]
              })}
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

const WorkHistoryItem = ({ title, date, responsibilities }) => (
  <div className="m-4 md:m-8 p-6 border-b border-[#717171] text-center sm:text-left">
    <h3 className="text-xl font-semibold">
      {title} <span className="text-gray-400">{date}</span>
    </h3>
    <ul className="list-none sm:list-disc list-inside space-y-2 mt-2">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="text-sm sm:text-base">
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

export default WorkHistory;