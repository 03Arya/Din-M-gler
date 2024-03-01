import React from "react";
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import logo from "@/images/logo.png";

export default function Footer() {
    return (
        <footer>
            <section className="footerContent">
                <div className="footerDiv1">
                    <Image src={logo} />
                    <p>There are many variations of passages of Lorem Ipusm avaliable, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                </div>
                <div className="footerSecondContainer">
                    <div className="footerSocials">
                        <div className="footerIconsDiv"><FontAwesomeIcon icon={faPhone} />
                            <div className="footerTextDiv">
                                <p>Ring til os</p>
                                <span>+45 7070 4000</span>
                            </div>
                        </div>
                        <div className="footerIconsDiv"><FontAwesomeIcon icon={faPaperPlane} />
                            <div className="footerTextDiv">
                                <p>Send en mail</p>
                                <span>4000@dinmaegler.com</span>
                            </div>
                        </div>
                        <div className="footerIconsDiv"><FontAwesomeIcon icon={faLocationDot} />
                            <div className="footerTextDiv">
                                <p>Butik</p>
                                <span>Stændertorvet 78,4000 Roskilde</span>
                            </div>
                        </div>
                        <p>Din Mægler Roskilde, er din boligbutik i lokalområdet</p>
                    </div>
                    <nav className="footerLinks">
                        <span>Quick Links</span>
                        <p>Boliger til salg</p>
                        <p>Mæglere</p>
                        <p>Kontakt os</p>
                        <p>Log ind / bliv bruger</p>
                    </nav>
                </div>
            </section>
            <div className="footerMiddleBg">
                <div className="footerMiddleDiv">
                    <p>Medlem af</p>
                    <span>DMS</span>
                    <p>Dansk Mægler Sammenslutning</p>
                </div>
            </div>
            <div className="bottomFooter">
                <p>Layout by Jit Banik 2020</p>
            </div>
        </footer>
    )
}