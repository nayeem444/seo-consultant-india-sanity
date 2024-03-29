import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';
import Link from 'next/link'
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

export default function Home() {
  return ( 
   <>
    <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
            <title>Shahid Shahmiri - Your Expert SEO Consultant in India</title>
        <meta name="description" content=" Looking for the #1 SEO consultant in India? My proven tactics drive traffic and increase revenue. Schedule a Free consultation." />
        
      </Head>
   <SpeedInsights/>
<Header/>
<Hero/>
<Caursal/>
<About/>
<Heading/>
<Popular/>
<Timeline/>
<Calan/>
<About2/>
<Content/>
<Service/>
<Accordion/>
<Testimonials/>
<Contact/>
<Footer/>
{/* <Hero2/> */}

   </>
  )
}


