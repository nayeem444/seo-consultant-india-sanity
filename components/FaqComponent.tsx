import { useState } from 'react';

const faqData = [
  {
    question: "Why Hire an SEO Expert for Your Business?",
    answer: "In today's competitive business landscape, a strong online presence is crucial for reaching customers. Hiring an SEO expert offers these key benefits: - Boost Brand Awareness: Improve website visibility and build trust with potential customers. - Generate More Leads: SEO generates organic leads, leading to increased sales and revenue. - Increase Sales: Higher search engine rankings attract active customers, boosting sales. - Stay Ahead of Competitors: In a competitive market, staying ahead with effective SEO is essential."
  },
  { question: "Who is the best SEO Expert in India?", 
  answer: "Shahid Shahmiri, the best SEO expert in India, has left an indelible mark by partnering with prestigious brands such as Unacademy, BeconStac, LeadGen App, and other industry giants. Shahid has successfully scaled their marketing and SEO effort. When you work with Shahid, you can be confident in achieving remarkable growth and outshining the competition." },
  { question: "How much SEO charges in India?", 
  answer: "SEO charges in India vary depending on the project complexity, duration, and expertise required. On average, hourly rates range from $3,000 to $8,000, while monthly retainers start around $60,000. It’s important to discuss specific requirements and negotiate with SEO professionals and consultants for accurate pricing." },
  { question: "Benefits of Hiring an SEO Expert?", 
  answer: "Hiring an SEO expert for your business offers: - Cost-Effective Online Promotion - Precise Audience Tracking - Organic Lead Generation - High Conversion Rates - Increased Brand Visibility" },
  { question: "What are benefits of choosing Your SEO services?", 
  answer: "Here are some benefits of choosing my SEO expert services: Up-to-Date with Latest Google Algorithms: I always stay updated with the latest Google algorithms while implementing SEO strategies, keeping your website ahead of the competition. Generate a Large Number of Leads: My approach as an SEO Consultant in India attracts user traffic to your website, resulting in a high number of leads for your business. Increased Sales: By achieving a high ranking on Google, your website will attract a large number of consumers looking for products or services similar to yours, increasing your sales potential. Online Reputation Management: In addition to optimizing your website for SEO, I also strive to maintain your business’s online reputation at a high level." },
  { question: "Can the assistance of SEO experts be beneficial?",
  answer: "SEO experts play a vital role in achieving brand recognition for a website. Their dedication and expertise help to establish trust in a company, elevating its identity to the highest level. Thanks to the efforts of these professionals, a company’s brand can be enhanced significantly." },
  { question: "How much does it cost to hire an SEO consultant?", 
  answer: "The cost to hire an SEO consultant varies based on factors like scope, industry, and expertise. Hourly rates can range from $100 to $300+, while project-based fees start around $1,000. Let’s discuss your needs for an accurate quote. Remember, investing in an SEO consultant brings long-term benefits for online visibility and business growth." },
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
