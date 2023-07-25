import React from 'react';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */

const  WeatherDay = (props) => {
    let data = props.data;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let datNumber = new Date(data.dt_txt).getDay();
    let day = weekday[datNumber];
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return (
        <div className='weather-box'>
            <div className="date">{day}</div>
            <div className="icon"><img src={icon} alt="no img"/></div>
            <div className="temperature">Temperature  {data.main.temp}<sup>°C</sup></div>
            <div className="temperature">Feels like  {data.main.feels_like}<sup>°C</sup></div>
            <div className="temperature">Humidity  {data.main.humidity}<sup>%</sup></div>
            <div className= "condition "> </div>
        </div>
    );
};

export default  WeatherDay;