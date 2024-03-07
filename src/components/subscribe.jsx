import next from "next";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Subscribe() {
    return (
        <main>
            <section className="subscribeContainer">
                <div className="subscribeBg">
                    <div className="subscribeConetnt">
                        <p>Tilmed dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
                        <form action="">
                            <input placeholder="Indsæt din email adresse" type="text" />
                            <button type="submit"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </form>
                    </div>
                </div>
            </section>
        </main >
    );
}