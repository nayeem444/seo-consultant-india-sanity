import { useState } from 'react';

const faqData = [
  {
    question: "What can I expect from an SEO consultation ?",
    answer: "An SEO consultation includes a detailed analysis of your website's performance, keyword strategy, technical issues, and backlink profile. You'll receive personalized recommendations to improve rankings, traffic, and conversions."
  },
  { question: "How long does it take to see SEO results?", 
  answer: "SEO is a long-term strategy, and results typically start appearing within 3 to 6 months. However, factors like competition, website structure, and content quality influence the timeline." },
  { question: "Do you provide a customized SEO strategy for my business?", 
  answer: "Yes! Every business is unique, and I create a tailored SEO strategy based on your industry, competitors, and goals to maximize your online visibility." },
  { question: "Is SEO consultation a one-time service, or do you offer ongoing support?",
  answer: "I offer both one-time consultations and ongoing SEO management to help you continuously improve your rankings and stay ahead of algorithm updates." },
  { question: "How do I get started with your SEO consultation?", 
  answer: "Simply book a consultation through this page, and I'll guide you through the process step by step." },
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-10 p-4 sm:p-6 md:p-24 max-w-8xl">
      <h2 className="-mt-[60px] sm:-mt-[80px] md:-mt-[130px] text-[30px] sm:text-[40px] md:text-[100px] font-bold text-[#55575A] opacity-[.2] pointer-events-none text-center w-full max-w-6xl">
        FAQ's
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 -mt-8 sm:-mt-12 md:-mt-0">
        Any Questions? Look Here
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <span className="text-base sm:text-lg font-medium pr-4">{faq.question}</span>
              <span className="text-xl flex-shrink-0">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="py-2 text-gray-300 text-sm sm:text-base">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
