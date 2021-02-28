import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name,population,region,flag}= props.country;
    const handleAddCountry = props.handleAddCountry;
   
    return (
        <div className="country-container">

            <div className="all-countries">
            <h3>Country Name: {name}</h3>
            <img src={flag} alt=""/>
            <h5>Population: {population}</h5>
            <h5>Region: {region}</h5>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            {/* <button onClick={()=>handleAddCountry(props.country)}>Countries Added</button> */}
            </div>
            
        </div>
    );
};

export default Country;