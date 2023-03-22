import React from 'react';
import './Country.css'
const Country = (props) => {
 const {name, flags, population, area, region} = props.country;
  return (
    <div className='country bg-success text-white'>
      <img className='images' src={flags.svg} alt="" />
      <h2>Country Name: {name.common}</h2>
      <h2>Population: {population}</h2>
      <p><small>Area: {area}</small></p>
      <p>Region: {region}</p>
      
    </div>
  );
};

export default Country;