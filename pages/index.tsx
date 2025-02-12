import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Calan from "../components/PopUp";
import Hero2 from "components/Hero2";
import ExitPopup from "components/Banner";
import Navbar2 from "../components/Navbar2";
import Clients from "components/Clients";
import AboutMe from "components/AboutMe";
import Explore from 'components/Explore';
import WorkHistory from "components/WorkHistory";
import SEOExpertise from "components/SEOExpertise";
import Services from "components/services";
import MyBrands from "components/MyBrands";
import CaseStudies from "components/CaseStudies";
import FaqComponent from "components/FaqComponent";
import TestimonialsCarousel from "components/TestimonialsCarousel";
import Footer2 from "components/Footer2";
import RecentBlogs from '../components/RecentBlogs'
import WhatsAppChat from "components/chat";





export default function Home({discription ,title}) {
  return ( 
   <>
    <Head>
    <Analytics/>
    <link rel="icon" href="/favicon.ico" sizes="any" />
           
        <meta name="description" content=" Looking for the #1 SEO consultant in India? My proven tactics drive traffic and increase revenue. Schedule a Free consultation." />
        <link rel="canonical" href="https://shahidshahmiri.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Shahid Shahmiri SEO Expert Consultant in India",
              "url": "https://shahidshahmiri.com/",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai"
              },
              "areaServed": "AE"
            })
          }}
        />
        
      </Head>
   <SpeedInsights/>
{/*    
<Header/>
<Hero/>

<Caursal/>
<About/>
<Heading/>
<Popular/>
<Timeline/>

<About2/>
<Content/>
<Service/>
<MyBrands/>
<CaseStudy/>
<Accordion/>
<Testimonials/> */}
{/* <Contact/> */}
{/* <Footer/> */}

<Navbar2/>
<Hero2/>
<Clients/>
<AboutMe/>
<Explore/>
<TestimonialsCarousel/>
<WorkHistory/>
<SEOExpertise/>
<Services/>
<MyBrands/>
<Calan/>
<ExitPopup/>
<CaseStudies/>
<FaqComponent/>
<RecentBlogs/>
<WhatsAppChat/>
<Footer2/>
   </>
  )

  
}
export async function getStaticProps() {
  const description = " Looking for the #1 SEO consultant in India? My proven tactics drive traffic and increase revenue. Schedule a Free consultation.";
  const title = "Shahid Shahmiri - Your Expert SEO Consultant in India"
  return {
      props: { description,title }, // Pass the description to the component
    };
  }

