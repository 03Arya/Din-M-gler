import Image from "next/image";

import "@/style/nav.scss" 
import "@/style/hero.scss"

import Hero from "@/components/hero";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
    </main>
  );
}
