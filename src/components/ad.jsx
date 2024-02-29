import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image"

import phoneLeft from "@/images/phoneLeft.png";
import phoneRight from "@/images/phoneRight.png";

export default function Ad() {
    return (
        <section className="adContainer">
            <div className="adContent">
                <h5 className="adHeader">Hold dig opdateret på salgsprocessen</h5>
                <p className="adText">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvalige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                <div className="downloadLinksContainer">
                    <a className="googlePlayLink" href=""><FontAwesomeIcon icon={faGooglePlay} />Google Play</a>
                    <a className="appleStoreLink" href=""><FontAwesomeIcon icon={faApple} />Apple Store</a>
                </div>
                <div className="phoneContainer">
                    <Image className="phoneLeft" src={phoneLeft} />
                    <Image className="phoneRight" src={phoneRight} />
                </div>
            </div>
        </section>
    )
}