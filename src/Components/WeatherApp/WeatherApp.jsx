


import React, { useState } from 'react'
import './WeatherApp.css'
// import WeatherApp from './Components/WeatherApp/WeatherApp';
import search_icon from '../Assets/search.png'
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import Typewriter from 'typewriter-effect';


const WeatherApp = () => {

    let api_key = "dd94f859a0e52d6e4767fddf735f04a7"
    //b5fc173f16e3bec3c7c847c84924c760

    const [wicon, setWicon] = useState(cloud_icon);


    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let responce = await fetch(url)
        let data = await responce.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate")
        const temp = document.getElementsByClassName("weather-temp");;
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp + " °C";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icon);
        }

        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        }

        else {
            setWicon(clear_icon);
        }

    }
    return (

        <>
            <h1 style={{ width: '100%', fontFamily: 'cursive', backgroundColor: 'aqua', boxShadow: "0px 5px", textShadow: "2px 2px 4px #000000", position: "fixed", textAlign: 'center' }}>WeatherApp</h1>

            <div className='page'>



                <h2 className='typewriter' style={{fontSize:'40px'}}>
                    <Typewriter
                        options={{
                            strings: ["Darbhanga", "Patna", "Delhi","Muzaffarpur","Bengaluru","Bihar","Kolkata","Gurgao","Jharkhand","Rajasthan","Madhubani","UP","MP","Patna"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <div className='top-bar mx-auto '>

                    <input type='text' className=' cityInput m-4 form-control' placeholder='Search Location' />
                    <div className='search-icon m-4' onClick={() => { search() }}>
                        <img src={search_icon} />
                    </div>

                </div>
                <div className='weather-image'>
                    <img src={wicon} />
                </div>

                <div className='weather-temp' style={{ fontSize: '10vh', color: 'black' }}>
                    24 °C
                </div>
                <div className='weather-location'>India</div>
                <div className='data-container'>

                    <div className='element'>
                        <img src={humidity_icon} className='icon' />
                        <div className='data'>
                            <div className='humidity-percent' style={{ fontWeight: '600' }}>64 %</div>
                            <div className='text' style={{ fontWeight: '600' }}>Humidity</div>
                        </div>
                    </div>

                    <div className='element' >
                        <img src={wind_icon} className='icon' />
                        <div className='data' >
                            <div className='wind-rate' style={{ fontWeight: '600' }}>18 km/h</div>
                            <div className='text' style={{ fontWeight: '600' }} >Wind Speed</div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default WeatherApp;
