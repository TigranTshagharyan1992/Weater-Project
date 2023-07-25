import React from 'react';
import {CITIES}  from '../helpers/constants';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from '../elements/Button';

/**
 *
 * @returns {*}
 * @constructor
 */
const Header = () => {

    const navigate = useNavigate();

    const citiesTab = () => {
        return CITIES.map((city, index)=>{

            return  <Button key={index+1} onClick={() => navigate(`/weather/${city}`,{ replace: true })} className="cityButton"> {city} </Button>

        });
    };

    return (
        <div>
            <div className='weather-block'>
                {citiesTab()}
            </div>

        </div>
    );
};

export default Header;