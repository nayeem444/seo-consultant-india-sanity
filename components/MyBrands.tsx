import Image from 'next/image'
import marketingLadLogo from '../public/assets/Marketing-Lad-logo-white 2.svg'
import googleRankCheckLogo from '../public/assets/a Marketing Lad Company 1.svg'

const MyBrands = () => {
  return (
    <section className="bg-[#25282C] text-white p-6 md:p-24">
      <h2 className="p-6 md:p-12 absolute top-0 md:top-auto -mt-[100px] md:-mt-[130px] text-[30px] md:text-[100px] font-bold text-[#55575A] opacity-[.2] pointer-events-none">
        MY BRANDS
      </h2>
      <div className="container mx-auto px-4 md:px-24">
        <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6">
          My Brands
        </h2>
        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-4">
          Trusted SEO Consultant in India
        </h3>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          I'm the founder of Marketing Lad and Google Rank Check. Our intuitive
          SaaS
          <br className="hidden md:inline" /> tool helps SEOs in tracking their
          keyword positions.
        </p>
        <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <Image
              src={marketingLadLogo}
              alt="Marketing Lad Logo"
              width={300}
              height={100}
            />
          </div>
          <div>
            <Image
              src={googleRankCheckLogo}
              alt="Google Rank Check Logo"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBrands
