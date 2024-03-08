import Image from "next/image";
import Link from "next/link";

import "@/style/nav.scss"
import "@/style/hero.scss"
import "@/style/aboutUs.scss"
import "@/style/ad.scss"
import "@/style/footer.scss"
import "@/style/houses.scss"
import "@/style/frontPage.scss"
import "@/style/subscribe.scss"
import "@/style/agentsLimited.scss"

import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import AboutUs from "@/components/aboutUs";
import Ad from "@/components/ad";
import Footer from "@/components/footer";
import HousesLimited from "@/components/housesLimited";
import Subscribe from "@/components/subscribe";
import AgentsLimited from "@/components/agentsLimited";


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUs />
      <section className="frontPageHousesContainer">
        <div className="frontPageContent">
          <h3 className="frontPageHousesHeader">Udvalge Boliger</h3>
          <p className="frontPageHousesText">There are many variations of passages of Lorem Ipusm avaliable but the this in majority have suffered alteration in some</p>
          <HousesLimited />
          <Link className="showcaseAllHousesLink" href="/allHomes"> Se alle boliger</Link>
        </div>
      </section>
      <Subscribe />
      <AgentsLimited />
      <Ad />
      <Footer />
    </main>
  );
}
