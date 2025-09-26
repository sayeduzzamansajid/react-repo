import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {


    const countriesData = use(countriesPromise);


    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountry] = useState([])

    //event handler for visited country 
    const handleVisitedCountries = (country) => {

        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountry(newVisitedCountries);

    }
    return (
        <div>
            <h1>Number of all Countries: {countries.length} </h1>
            <h3>Total Country visited Number: { visitedCountries.length } </h3>
            <ol>
                {
                    visitedCountries.map(country =>{
                        return <li key={country.cca3.cca3}>name: {country.name.common}</li>
                    })
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;