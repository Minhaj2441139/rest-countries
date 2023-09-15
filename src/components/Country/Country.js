import React from 'react';
import './Country.css';

const country = (props) => {
    //console.log(props.country);
    const{name,capital} = props.country;
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <img src={props.country.flags.png} alt="" />
            <h4>Capital:{capital}</h4>
            

        </div>
    );
};

export default country;