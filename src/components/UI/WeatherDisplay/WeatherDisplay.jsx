import React, {useEffect, useMemo} from 'react';
import cl from './WeatherDisplay.module.css'

const WeatherDisplay = ({weather}) => {

    const dateBuilder = (d) => {

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    // useMemo() on change page

    return (
        <div className={cl.weather}>
            <img
                className={cl.weather_icon}
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="icon"
                width="100"
            />
            <div className={cl.weather__location}>
                    {weather[0].name},  {weather[0].country}

            </div>
            <div className={cl.weather__time}>
                {dateBuilder(new Date())}
            </div>
            <div className={cl.weather__info}>
                <div className={cl.weather__info__temperature}>
                    {Math.round(weather[0].temp)}°С
                </div>
                <div className="weather">
                    {weather[0].main} <br/>
                    {weather[0].description}
                </div>
            </div>
            <div>
                 <button> yesterday </button> <button> tomorrow </button>
            </div>
        </div>
    );
};

export default WeatherDisplay;