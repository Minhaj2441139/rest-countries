import React, { useState,useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h1>This is Countries:{countries.length}</h1>
           <div className='countries-container'>
           {
                countries.map(country=><Country
                //  name={country.name.common} 
                //  capital={country.capital}
                //  population={country.population}
                //  flag={country.flags.png}
                country={country}
                key={country.cca3}
                 ></Country>)
            }
           </div>    
        </div>
    );
};

export default Countries;