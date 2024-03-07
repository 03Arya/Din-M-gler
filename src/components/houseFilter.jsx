import React from 'react';
import ReactSlider from 'react-slider';

function HouseFilter({ type, setType, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div className='filterDiv'>
      <p className='filterDivHeader'><span className='filterDivSpan'>Søg</span> efter din drømmehus</p>
      <div className='buildingTypeDiv'>
        <p>Ejendomstype</p>
        <div className='selectWrapper'>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="all">All types</option>
            <option value="Villa">Villa</option>
            <option value="Landejendom">Landejendom</option>
            <option value="Ejerlejlighed">Ejerlejlighed</option>
            <option value="Byhus">Byhus</option>
          </select>
        </div>
      </div>
      <div className='priceRangeDiv'>
        <p>Pris-interval</p>
        <input type="range" min="0" max="12000000" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
        <div className='inputDiv'>
        <p>0 kr.</p>
        <p className='maxPrice'>12.000.000 kr.</p>
        </div>
      </div>
    </div>
  );
}

export default HouseFilter;