import React, { useEffect, useState } from 'react';
import Image from "next/image";
import HouseFilter from './HouseFilter'; // Import the HouseFilter component

export default function HouseShowcase() {
  const [homes, setHomes] = useState([]);
  const [type, setType] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(12000000);

  useEffect(() => {
    fetch('https://dinmaegler.onrender.com/homes')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        setHomes(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const filteredHomes = homes.filter(home => {
    return (type === 'all' || home.type.toLowerCase() === type.toLowerCase()) && home.price >= minPrice && home.price <= maxPrice;
    });

  return (
    <div className='houseContainer'>
      <HouseFilter type={type} setType={setType} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

      {filteredHomes.map(home => {
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
          <a className='houseLink' href={`/house/${home.id}`}>
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
          </a>
        );
      })}
    </div>
  );
}