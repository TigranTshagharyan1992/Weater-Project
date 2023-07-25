import React from 'react';
import Header from "./Header";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {KEY}  from '../helpers/constants';
import  WeatherDay from '../elements/WeatherDay'
import { useState } from "react";

/**
 *
 * @returns {*}
 * @constructor
 */

const Weather = () => {
    const {city} = useParams();

   const [weatherData, setWeatherData] = useState(false);

    async function getData() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`);
            const data = await response.json();
            setWeatherData(data);
        } catch (e) {

        }

    }
    function showWeatherData(data){
        let check = '';
      const result = data.map((item,index) => {
          const date = item.dt_txt.split(" ")[0];
          const time = item.dt_txt.split(" ")[1];
          if(check !== date && (time === '15:00:00')){
              check = date;
              return  <WeatherDay data={item} key={index+1}/>
          }

        });
        return result;
    }
    useEffect(()=>{
        getData();
    },[city]);


    return (
        <div>
            <Header />

            <div className='city-block'>
                {
                    (() => {
                        if(weatherData) {
                            return (
                                <p className='city-name'>{weatherData.city.name} , {weatherData.city.country} Population {weatherData.city.population} </p>
                            )
                        } else {
                            return (
                                <p></p>
                            )
                        }
                    })()
                }
            </div>

            <div className='weather-container'>
                    {
                        weatherData && showWeatherData(weatherData.list)
                    }

            </div>
        </div>
    );
};

export default Weather;