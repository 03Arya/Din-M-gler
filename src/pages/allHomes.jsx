import Image from "next/image";
import Link from "next/link";

import "@/style/nav.scss"
import "@/style/footer.scss"
import "@/style/houses.scss"
import "@/style/allHomes.scss"

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Houses from "@/components/houses";
import HouseFilter from "@/components/houseFilter";


export default function AllHomes() {
  return (
    <main>
      <Navigation />
      <section className="allHomesHero">
        <div className="allHomesHeroBg">
          <h1>Boliger til salg</h1>
        </div>
      </section>
      <section className="allHomesContainer">
        <Houses />
      </section>
      <Footer />
    </main>
  );
}