import Image from "next/image";

import "@/style/nav.scss" 
import "@/style/hero.scss"
import "@/style/aboutUs.scss"
import "@/style/ad.scss"
import "@/style/footer.scss"

import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import AboutUs from "@/components/aboutUs";
import Ad from "@/components/ad";
import Footer from "@/components/footer";
import AgentShowcase from "@/components/agentShowcase";


export default function Home() {
  return (
    <main>
      <Navigation />      
      <Hero />
      <AboutUs />
      <AgentShowcase />
      <Ad />
      <Footer />
    </main>
  );
}
