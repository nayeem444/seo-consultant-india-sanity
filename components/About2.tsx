import React from 'react'
import Image from 'next/image'
import img from '../public/Images/IMG_3627-min-scaled.jpg'

const About2 = () => {
  return (
    <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl my-12 flex justify-center font-bold  text-gray-900 sm:text-4xl">My Expertise As The SEO Consultant</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
               
                <p className="mt-4">I have worked with several high-profile clients, including BeaconStac, Unacademy, AMEX GBT, fullfeel, Taxmann, CustomShow, Prospeo, GrowThink and Dominion.</p>
                <p className="mt-4">With a deep understanding of search engine algorithms and a passion for driving organic traffic, I have mastered the skills of optimising websites for higher visibility and better performance in search results.</p>
                <p className="mt-4">I have a track record of success in improving domain ratings, increasing organic traffic, and boosting organic rankings for a wide range of clients.</p>
                <p className="mt-4">
In the world of SEO, my story began in 2016 while I was pursuing my MBA. Eager to put theory into practice, I launched my very first website, shahmiris.com. However, it was far from a roaring success. I failed quite miserably.</p>
                <p className="mt-4">
As time passed, I started my side hustle again as a Marketing Lad, and this time it began to gain traction. Within just a few short years, I found myself making ten times more than what my day job was paying me. It was a realisation that turned everything on its head. Marketing Lad was no longer just a side gig. </p>
   

               
            </div>
            <div className="sm:mt-12 md:mt-0">
            <p className="mt-4">I passed it on to an outstanding team of more than 20 people and took on the role of an advisor.
</p>
                <p className="mt-4">I also discovered a deep love for SEO consulting. It’s a joy to share the knowledge I’ve gathered over the years – not just the wins, but the failures too – with my clients.
</p>
                <Image
                src={img}
                height={800}
                width={800}
                alt='image'
                className="object-cover rounded-lg shadow-md mt-4"
                />
            </div>
        </div>
    </div>
</section>
  )
}

export default About2