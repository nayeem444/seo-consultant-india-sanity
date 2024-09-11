import { useState } from 'react';

const faqData = [
  {
    question: "Why Hire an SEO Expert for Your Business?",
    answer: "In the competitive UAE market, a strong online presence is essential for reaching and engaging with customers. Hiring an SEO expert offers these key benefits:Boost Brand Awareness: Enhance your website’s visibility and build trust with potential customers.Generate More Leads: SEO attracts organic leads, leading to increased sales and revenue.Increase Sales: Higher search engine rankings draw in active customers, boosting your sales potential.Stay Ahead of Competitors: Effective SEO keeps you ahead in a competitive market, giving you an edge over competitors."
  },
  { question: "Who is the Best SEO Expert in the UAE?", 
  answer: "Shahid Shahmiri, a leading SEO expert in the UAE, has made a significant impact by partnering with renowned brands such as Unacademy, BeconStac, LeadGen App, and more. Shahid’s expertise in scaling marketing and SEO efforts ensures remarkable growth and helps businesses stand out from the competition." },
  { question: "How Much Do SEO Services Cost in the UAE?", 
  answer: "SEO service costs in the UAE vary based on project complexity, duration, and expertise. On average, hourly rates range from AED 1,000 to AED 3,000, while monthly retainers start around AED 12,000. For precise pricing, discuss your specific needs with SEO professionals and consultants." },
  { question: "Benefits of Hiring an SEO Expert", 
  answer: "Hiring an SEO expert offers:Cost-Effective Online Promotion: Maximize your online marketing budget.Precise Audience Tracking: Understand and target your audience effectively.Organic Lead Generation: Attract leads without relying on paid ads.High Conversion Rates: Improve your website’s ability to convert visitors into customers.Increased Brand Visibility: Enhance your online presence and brand recognition." },
  { question: "What Are the Benefits of Choosing My SEO Services?", 
  answer: "Here are some benefits of choosing my SEO services:Generate a Large Number of Leads: My strategies drive high-quality traffic to your site, resulting in more leads.ncreased Sales: Achieving top Google rankings attracts more consumers, boosting your sales potential.Online Reputation Management: I focus on not just SEO, but also maintaining and enhancing your business’s online reputation." },
  { question: "Can the Assistance of SEO Experts Be Beneficial?",
  answer: "Yes, SEO experts are crucial for achieving brand recognition and trust in the UAE market. Their expertise helps elevate your company’s online identity, significantly enhancing your brand's presence and credibility." },
  { question: "How Much Does It Cost to Hire an SEO Consultant?", 
  answer: "The cost to hire an SEO consultant in the UAE depends on factors like project scope, industry, and expertise. Hourly rates can range from AED 400 to AED 1,100+, while project-based fees start around AED 3,500. For a precise quote, discuss your specific needs with an SEO consultant. Investing in SEO brings long-term benefits for your online visibility and business growth." },
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 md:p-24">
      <h2 className=" -mt-[80px] md:-mt-[130px] text-[40px] md:text-[100px] font-bold text-[#55575A] opacity-[.2] pointer-events-none text-center w-full">
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
