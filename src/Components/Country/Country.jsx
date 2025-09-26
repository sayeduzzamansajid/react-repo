import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);
    const name = country.name.common;
    // console.log(country.flags.flags)

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false);
        //     setVCountry(vCountry-1)
        // }
        // else{
        //     setVisited(true);
        //     setVCountry(vCountry+1)
        // }
        // setVisited(visited?false:true);
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'visited-country'}`}>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3>Name: {name} </h3>

            <p>Population : {country.population.population}</p>

            <p>Area {country.area.area} Size: {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>

            <button onClick={handleVisited}> {visited ? "visited" : "Not Visited"} </button>

        </div>
    );
};

export default Country;