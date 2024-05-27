import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';
import Hero from '../components/HeroSection'
import Header from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'
import Caursal from '../components/CaursalLogos'
import Timeline from "../components/Timeline";
import Accordion from "../components/FaqSection";
import Content from "../components/ContentSection";
import Calan from "../components/PopUp";
import Popular from "../components/PopularArticles";
import Heading  from "../components/Headline";
import Hero2 from "components/Hero2";
import About2 from "components/About2";
import ExitPopup from "components/Banner";
import CaseStudy from "../components/caseStudy"
import MyBrands from "components/MyBrads";


export default function Home({discription ,title}) {
  return ( 
   <>
    <Head>
    <Analytics/>
    <link rel="icon" href="/favicon.ico" sizes="any" />
           
        <meta name="description" content=" Looking for the #1 SEO consultant in India? My proven tactics drive traffic and increase revenue. Schedule a Free consultation." />
        <link rel="canonical" href="https://shahidshahmiri.com/" />
        
      </Head>
   <SpeedInsights/>
   
<Header/>
<Hero/>
<ExitPopup/>
<Caursal/>
<About/>
<Heading/>
<Popular/>
<Timeline/>
<Calan/>
<About2/>
<Content/>
<Service/>
<MyBrands/>
<CaseStudy/>
<Accordion/>
<Testimonials/>
{/* <Contact/> */}
<Footer/>

{/* <Hero2/> */}

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

