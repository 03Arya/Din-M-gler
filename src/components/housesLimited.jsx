"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function AgentShowcase() {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        fetch('https://dinmaegler.onrender.com/homes?_limit=4')
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                setHomes(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className='houseContainer'>
            {homes.map(home => {
                const imageUrl = home.images[0]?.url; // Access the first image in the array 
                let backgroundColor;
                switch (home.energylabel) {
                    case 'A':
                        backgroundColor = '#10ac84';
                        break;
                    case 'B':
                        backgroundColor = '#ffe100';
                        break;
                    case 'C':
                        backgroundColor = '#FA983A';
                        break;
                    case 'D':
                        backgroundColor = '#F21515';
                }

                return (
                        <div key={home.id} className="house">
                            <Image className='houseImage'
                                src={imageUrl}
                                width={540}
                                height={225}
                            />
                            <div className='houseTextContainer'>
                                <p className='houseAdress'>{home.adress1}</p>
                                <p className='houseCityCode'>{home.postalcode} {home.city}</p>
                                <div className='houseMiddleDiv'>
                                    <p className='houseType'>{home.type} .</p>
                                    <p className='houseCost'>Ejerudgift: {home.cost} kr</p>
                                </div>
                                <div className='houseBottomDiv'>
                                    <p className='houseEnergyLabel' style={{backgroundColor}}>{home.energylabel}</p>
                                    <p className='houseRooms'>{home.rooms} værlser</p>
                                    <p className='houseLivingSpace'>{home.livingspace} m2</p>
                                    <p className='housePrice'>kr {home.price}</p>
                                </div>
                            </div>
                        </div>
                );
            })}
        </div>
    );
}