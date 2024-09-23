import React from 'react'
import Image from 'next/image'

const services = () => {
  const services = [
    {
      title: 'Local SEO',
      description:
        "I'll enhance your business's local visibility by optimizing Google My Business and leveraging targeted local SEO tactics.",
      imgSrc: '/assets/services/local-seo 1.svg',
    },
    {
      title: 'On Page SEO',
      description:
        "I'll boost your site's relevance and authority with on-page SEO, optimizing content, meta tags, and images for better search engine rankings.",
      imgSrc: '/assets/services/seo 1.svg',
    },
    {
      title: 'Technical SEO',
      description:
        "I'll enhance your website's foundation with technical SEO, focusing on site speed, mobile-friendliness, and secure, crawlable structures for better rankings.",
      imgSrc: '/assets/services/setting 1.svg',
    },
    {
      title: 'Off Page SEO',
      description:
        "I'll strengthen your online presence through off-page SEO, building high-quality backlinks and enhancing social media engagement to improve rankings.",
      imgSrc: '/assets/services/browser 1.svg',
    },
    {
      title: 'Content Writing/ Management',
      description:
        "I'll enhance your brand with content writing/management, creating compelling, SEO-optimized content that engages audiences.",
      imgSrc: '/assets/services/copy-writing 1.svg',
    },
    {
      title: 'International SEO',
      description:
        "I'll expand your global reach with international SEO, tailoring strategies to different languages and cultures to maximize your website's worldwide visibility.",
      imgSrc: '/assets/services/mingcute_earth-line (1).png',
    },
  ]

  return (
    <section className="mx-auto bg-[#25282C] py-16 text-white max-w-6xl" id='services'>
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h2 className="text-[40px] md:text-[150px] font-bold text-[#55575A] 78 opacity-10 absolute inset-0 flex justify-center items-center">
            SERVICES
          </h2>
          <h2 className="pt-12 text-4xl font-semibold mb-8 text-center">
            What I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#323334] p-6 rounded-lg border border-blue-500 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.imgSrc}
                  width={50}
                  height={50}
                  alt="image"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default services
