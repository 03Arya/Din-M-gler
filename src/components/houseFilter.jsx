import React from 'react';

function HouseFilter({ type, setType, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="all">All types</option>
        <option value="Villa">Villa</option>
        <option value="Landejendom">Landejendom</option>
        <option value="Ejerlejlighed">Ejerlejlighed</option>
        <option value="Byhus">Byhus</option>
      </select>

      <input type="range" min="0" max="12000000" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      <input type="range" min="0" max="12000000" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
    </div>
  );
}

export default HouseFilter;