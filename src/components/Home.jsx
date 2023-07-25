import React from 'react';
import '../App.css';
import Header from "./Header";

/**
 *
 * @returns {*}
 * @constructor
 */

const Home = () => {

    return (
        <div>
            <Header />
            <h1 className='weather-block-text'>
                Please select city to see the weather
            </h1>
        </div>
    );
};

export default Home;