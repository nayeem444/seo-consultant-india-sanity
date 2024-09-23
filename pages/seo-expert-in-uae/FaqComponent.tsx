import { useState } from 'react';

const faqData = [
  {
    question: "How much does SEO cost in Dubai?",
    answer: [
      "The cost of SEO services in Dubai varies depending on several factors, such as the scope of the project, the SEO agency's experience, and the business's specific goals.", 
      "On average, monthly SEO packages can range from AED 3,000 to AED 15,000 or more.",
      "For small businesses, basic SEO services may cost around AED 3,000 to AED 6,000 per month, while more comprehensive or enterprise-level SEO campaigns can exceed AED 15,000 per month. Some agencies may also offer one-time SEO audits or specific services at a lower rate."
    ]
  },
  { 
    question: "How much do SEO experts charge?", 
    answer: [
      "SEO experts typically charge based on their experience, the complexity of the project, and the client's goals. ",
      "Hourly rates can range from $75 to $200 or more. ",
      "For project-based pricing, small to medium-sized projects may cost between $1,000 to $5,000, while larger or more complex SEO campaigns can exceed $10,000. ",
      "Monthly retainer fees, which are common, range from $1,500 to $10,000+ depending on the scope of work and the expertise required."
    ]
  },
  { 
    question: "How Much Do SEO Services Cost in the UAE?", 
    answer: [
        "An SEO expert in the UAE typically offers various services, including keyword research, on-page and off-page optimization, technical SEO audits, content strategy, local SEO, link-building campaigns, and performance tracking. ",
        "They also help businesses enhance their website's visibility on search engines like Google and optimize for UAE-specific market trends."
         ]
  },
  { 
    question: "What services does an SEO expert in the UAE offer?", 
    answer: [
      "An SEO expert in the UAE typically offers various services, including keyword research, on-page and off-page optimization, technical SEO audits, content strategy, local SEO, link-building campaigns, and performance tracking.",
      "They also help businesses enhance their website's visibility on search engines like Google and optimize for UAE-specific market trends."
    ]
  },
  { 
    question: "How do I choose the right SEO expert in the UAE?", 
    answer: [
        "When selecting an SEO expert in the UAE, consider their experience, knowledge of local market trends, client reviews, and proven track record. ",
        "It's important to ask for case studies or past results to ensure they have successfully worked with businesses similar to yours. Choose an expert who communicates clearly and offers a transparent SEO strategy. Book a call to learn more about how I can help your SEO campaign."
  ]
  },
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 md:p-24">
      <h2 className="-mt-[80px] md:-mt-[130px] text-[40px] md:text-[100px] font-bold text-[#55575A] opacity-[.2] pointer-events-none text-center w-full">
        FAQ's
      </h2>
      <h2 className="text-4xl font-bold text-center mb-6 -mt-12 md:-mt-0">Any Questions? Look Here</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="py-2 text-gray-300">
                {faq.answer.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-2">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;