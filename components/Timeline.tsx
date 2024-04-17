

import React from 'react';

// TimelineContent component
const TimelineContent = ({ content }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <ul className="list-disc pl-6 text-gray-700">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// TimelinePhase component
const TimelinePhase = ({ phase, color }) => (
  <div className={`p-2 rounded-md ${color}`}>
    <h3 className="text-white font-semibold">{phase}</h3>
  </div>
);

// TimelineItem component
const TimelineItem = ({ phase, content, color, isLeft }) => (
  <div className={`flex items-center mb-8 w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
    <div className="flex-grow">
      <TimelinePhase phase={phase} color={color} />
      <TimelineContent content={content} />
    </div>
    <div className="flex-shrink-0 ml-4">
     
    </div>
  </div>
);

// Timeline component
const Timeline = () => {
  const timelineData = [
    {
      phase: 'Aqua Chill Systems (2017-2018)',
      content: ['Marketing Executive at Aqua Chill Systems Started my Marketing Journey.', 'Update and maintain EMS, MIS, Weekly Sheet, and Regional Sales Process Sheet.', 'Maintain & Submit pre-qualification data.', 'Coordinate meetings with HVAC consultants & Architects/ reviews of the front end,','Maintain Front-end data of Presentations, offer formats, and case studies.'],
      color: 'bg-blue-600 text-white',
      isLeft: true,
    },
    {
        phase: 'Digital Marketer at Leadcube Media  (2018 - 2019)',
        content: ['Worked with many clients like AMEX GBT, LeadGen App, and IEC Abroad to improve their SEO performance and lead generation.', 'Work with a Digital Marketing Manager to develop marketing plans, advertising, and campaigns.', 'Define personas and engage with target audiences', 'Implement our social media strategy (Twitter, Facebook and LinkedIn) to encourage and maximize engagement.'],
        color: 'bg-blue-600 text-white',
        isLeft: true,
      },
    {
        phase: 'Digital Marketer at LeadGen App (2019 - 2020)',
        content: ['Collaborated with LeadGen App to improve their search engine ranking, clicks, and online presence, and continue to work towards advancing their SEO performance. Later onboarded them as my client.', 'Plan Product Strategy, Organise Marketing Strategy, Growth Hacking and Branding.', 'Provide ideas as well as opportunities to assist and enhance conversion results.', 'Assisting in website SEO, and social media channels like Twitter, and Facebook and driving traffic to the website'],
        color: 'bg-blue-600 text-white',
        isLeft: true,
      },

  
    {
      phase: 'Marketing Specialist at Unacademy (2020 - 2021)',
      content: ['Worked with Unacademy - India Largest Edtech platform to improve their YouTube SEO and subscriptions. Hosted many episodes on the CTwT Show', 'Manage content strategy, video optimization and viewership growth for Unacademy’s existing and newly created YouTube channels.', 'Work with internal and external stakeholders to spearhead YouTube channel rollout, including determining content proposition, programming strategy, branding and video optimization.', 'Actively manage channel branding, programming, optimization (e.g. Titles, tags, descriptions, annotations, etc) and reporting strategies.'],
      color: 'bg-blue-600 text-white',
      isLeft: true,
    },
    {
        phase: 'SEO Manager at Taxmann Group  (2021 - 2022)',
        content: ['Developed and implemented effective search engine optimization (SEO) strategies. Helped in coordinating content, design, social media, pay-per-click (PPC) marketing and other activities', 'Developing and implementing effective search engine optimization (SEO) strategies.', 'Managing offsite and onsite optimization projects and reporting on performance', 'Manage SEO for other partner sites like Styl-Inc.com and Mindler.com'],
        color: 'bg-blue-600 text-white',
        isLeft: true,
      },
      {
        phase: 'SEO Consultant at Zoomifier  (2022 - 2024)',
        content: ['Developing and implementing effective search engine optimization (SEO) strategies.', 'Coordinating content, design, social media, pay-per-click (PPC) marketing and other activities', 'Managing offsite and onsite optimization projects and reporting on performance', 'Conduct keyword research to guide content teams' ,'Manage SEO for other partner sites like Zoomifier.com and CustomShow.com','Review technical SEO issues and recommend fixes'],
        color: 'bg-blue-600 text-white',
        isLeft: true,
      },
      {
        phase: 'Advisor at Marketing Lad  (Currently) ',
        content: ['I lead a dynamic team of digital marketing experts in delivering cutting-edge solutions to drive business growth and success. With a relentless passion for SEO and link building, we empower clients with innovative strategies that propel their online presence to new heights.', 'Key Achievements:', 'Pioneered result-oriented SEO campaigns, increasing organic traffic by 200% for a diverse clientele.', 'Spearheaded link-building initiatives, securing high-authority backlinks, and elevating domain authority for clients across industries.','Launched industry-leading SEO and link-building packages, fueling sustainable business expansion.','Cultivated a collaborative work culture, attracting top talent and fostering professional development within the team.'],
        color: 'bg-blue-600 text-white',
        isLeft: true,
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-4xl font-bold mb-8 text-center">Work History</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center">From Vision to Success</h3>
      {/* Middle line */}
      {/* <div className="absolute left-1/2 top-64 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div> */}
      {/* Dots on the middle line */}
      {timelineData.map((item, index) => {
        const dotTop = `calc(${(index + 1) * (100 / (timelineData.length + 1))}% + 120px)`;
        return (
          <div key={index} className="absolute left-1/2 transform -translate-x-1/2" style={{ top: dotTop }}>
            {/* <div className="bg-gray-300 rounded-full h-4 w-4"></div> */}
          </div>
        );
      })}
      {/* Timeline items */}
      <div className="grid grid-cols-1 gap-8">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            phase={item.phase}
            content={item.content}
            color={item.color}
            isLeft={item.isLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
