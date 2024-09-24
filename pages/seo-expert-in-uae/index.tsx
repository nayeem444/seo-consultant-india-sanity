import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';
import Link from "next/link";
import Calan from "../../components/PopUp";
import Hero2 from "./Hero3";
import ExitPopup from "components/Banner";
import Navbar2 from "../../components/Navbar2";
import Clients from "components/Clients";
import AboutMe from "./AboutMe";
import Explore from 'components/Explore';
import WorkHistory from "components/WorkHistory";
import SEOExpertise from "./SEOExpertise";
import Services from "components/services";
import MyBrands from "components/MyBrands";
import CaseStudies from "components/CaseStudies";
import FaqComponent from "./FaqComponent";
import TestimonialsCarousel from "components/TestimonialsCarousel";
import Footer2 from "components/Footer2";
import ErrorBoundary from "components/ErrorBoundary";

export default function Home({discription ,title}) {
  return ( 
   <>
    <Head>
    <Analytics/>
    <link rel="icon" href="/favicon.ico" sizes="any" />
           
        <meta name="description" content=" Looking for the #1 SEO consultant in UAE? My proven tactics drive traffic and increase revenue. Schedule a Free consultation." />
        <link rel="canonical" href="https://shahidshahmiri.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Shahid Shahmiri SEO Expert in UAE",
              "url": "https://shahidshahmiri.com/seo-expert-in-uae",
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
        <Link rel="alternate" hrefLang="en-ae" href="https://shahidshahmiri.com/seo-expert-in-uae" />
      
      </Head>
   <SpeedInsights/>


<Navbar2/>
{/* <Hero2/>
<Clients/>
<AboutMe/>
<Explore/>
<WorkHistory/>
<SEOExpertise/>
<Services/>
<MyBrands/>
<Calan/>
<ExitPopup/>
<CaseStudies/>
<FaqComponent/>
<TestimonialsCarousel/>
<Footer2/> */}
   </>
  )

  
}
export async function getStaticProps() {
  const description = " Looking for the #1 SEO consultant in UAE? My proven tactics drive traffic and increase revenue. Schedule a Free consultation.";
  const title = "Shahid Shahmiri - Your Expert SEO Consultant in UAE"
  return {
      props: { description,title }, // Pass the description to the component
    };
  }

