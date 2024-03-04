import Houses from "@/components/houses";

import "@/style/houses.scss";

import Image from "next/image";
import Link from "next/link";

import "@/style/nav.scss"
import "@/style/hero.scss"
import "@/style/aboutUs.scss"
import "@/style/ad.scss"
import "@/style/footer.scss"
import "@/style/houses.scss"
import "@/style/frontPage.scss"

import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import AboutUs from "@/components/aboutUs";
import Ad from "@/components/ad";
import Footer from "@/components/footer";
import HousesLimited from "@/components/housesLimited";

export default function AllHomes() {
  return (
    <div>
      <h1>All Homes</h1>
      <Houses />
    </div>
  );
}