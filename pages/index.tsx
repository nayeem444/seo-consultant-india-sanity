import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from '../components/HeroSection'
import Header from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'

import Timeline from "../components/Timeline";
import Accordion from "../components/FaqSection";
import Content from "../components/ContentSection";
import Calan from "../components/PopUp";

export default function Home() {
  return (
   <>
   <SpeedInsights/>
<Header/>
<Hero/>

<About/>
<Timeline/>
<Calan/>
<Content/>
<Service/>
<Accordion/>
<Testimonials/>
<Contact/>
<Footer/>
   </>
  )
}


