import Slider from 'react-slick'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'Shahid provided exceptional link building services and helped increase our domain ranking significantly. His expertise professionalism and clear communication made the process seamless and his efforts have established our brand as a reputable authority in our industry. We highly recommend Shahid for his outstanding service.',
    name: 'Jeremiah O Brian Emerge',
    title: 'Founder Emerge Global',
    image: 'https://marketinglad.io/wp-content/uploads/2024/08/testi1.jpeg',
  },
  {
    quote:
      'Shahid have a deep knowledge of SEO and content marketing. Its been a complete pleasure working with him. He is proactive contributors who would make a great addition to any business. Communications are clear & frequent.',
    name: 'Arusik Ghambaryan',
    title: 'Marketer at Crowdfunding',
    image: 'https://marketinglad.io/wp-content/uploads/2022/10/Arusik-Ghambaryan-SEO-TCF-min.jpeg',
  },
  {
    quote:
      'Shahid has been a pleasure to work with! He provide quality high DR websites within our niche. Never low quality spammy sites or news sites which publish countless topics and have zero SEO value. His prices are also quite reasonable for what you are getting.',
    name: 'Justin Lubomirsky',
    title: 'SEO Expert at INFUSEmedia',
    image: 'https://marketinglad.io/wp-content/uploads/2022/11/pic-1.jpg',
  },
]

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Define the breakpoint for large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Define the breakpoint for medium screens (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Define the breakpoint for small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="bg-[#25282C] text-white">
      <div className="flex justify-center">
        <h2 className="absolute top-0 md:top-auto -mt-[50px] text-[40px] md:text-[150px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
          TESTIMONIAL
        </h2>
      </div>
      <div className="mt-24 py-12">
        <p className="text-center font-semibold mb-8 text-2xl md:text-4xl">
          As An SEO Consultant My Competence Speaks For Itself<br/> - But My Clients
          Can Vouch For Me Too!
        </p>
        <div className="w-[80%] mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#3B3B3B] rounded-md shadow-md overflow-hidden">
                  <div className="p-8">
                    <p className="text-normal italic mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="bg-[#55575A] flex items-center">
                    <Image
                      src={testimonial.image}
                      width={300}
                      height={300}
                      alt={testimonial.name}
                      className="w-28 h-28 object-cover p-4 rounded-full -mt-8"
                    />
                    <div className="ml-4">
                      <p className="font-semibold -mt-4 -ml-4">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-left -ml-4">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel
