import React from 'react';

import Image from "next/image"

import aboutUs from "@/images/aboutUs.png";
import housesForSale from "@/images/housesForSale.png";
import housesSold from "@/images/housesSold.png";

import property from "@/images/property.png";
import location from "@/images/location.png";
import customer from "@/images/customer.png";


export default function AboutUs() {
    return (
        <section className="aboutUsContainer">
            <div className="aboutUsDiv1">
                <Image src={aboutUs} alt="about us" />
                <div className='aboutUsContent'>
                    <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                    <br />
                    <p className='aboutUsUnderHeader'>Det synes vi siger noget om os!</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipusm is that it has normal distribution.</p>
                    <br />
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    <div className='houseForSale'>
                        <div>
                            <Image src={housesSold} alt="houses sold" />
                            <div className='numberDiv'>
                                <p className='houseNumber'>4829</p>
                                <p>boliger solgt</p>
                            </div>
                        </div>
                        <div>
                            <Image src={housesForSale} alt="houses for sale" />
                            <div className='numberDiv'>
                                <p className='houseNumber'>158</p>
                                <p>boliger til salg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutUsDiv2">
                <div className='moreInfoContainer'>
                    <Image src={property}/>
                    <div className='moreInfo'>
                        <p className='infoHeader'>Bestil et salgstjek</p>
                        <p className='infoText'>Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
                    </div>
                </div>

                <div className='moreInfoContainer'>
                    <Image src={location} />
                    <div className='moreInfo'>
                        <p className='infoHeader'>74 butikker</p>
                        <p className='infoText'>Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                    </div>
                </div>

                <div className='moreInfoContainer'>
                    <Image src={customer} />
                    <div className='moreInfo'>
                        <p className='infoHeader'>Tilmed køberkartotek</p>
                        <p className='infoText'>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}