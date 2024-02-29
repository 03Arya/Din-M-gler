import Image from "next/image";

import "@/style/nav.scss" 
import "@/style/hero.scss"
import "@/style/aboutUs.scss"

import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import AboutUs from "@/components/aboutUs";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
    </main>
  );
}
