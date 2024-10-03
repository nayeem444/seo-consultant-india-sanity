import React from 'react'
import Head from 'next/head'
import Hero from '../../components/CaseStudyPage/Hero'
import Banner from 'components/CaseStudyPage/Banner'

const index = () => {
  return (

    <>

<Head>
        <title>Case Studies</title>
        <meta name="description" content="Discover how Aegis Softtech achieved exceptional SEO growth in just 5 months, increasing users by 463% and leads by 460%." />
      </Head>

      <div className='max-w-8xl mx-auto'>
        <Hero/>
    </div>
    </>
 
  )
}

export default index