import React, {useEffect} from 'react';
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

    return (
        <div className={cl.weather}>
            <div className={cl.weather__location}>
                    {weather.name},  {weather.sys.country}
            </div>
            <div className={cl.weather__time}>
                {dateBuilder(new Date())}
            </div>
            <div className={cl.weather__info}>
                <div className={cl.weather__info__temperature}>
                    {Math.round(weather.main.temp)}
                </div>
                <div className="weather">
                    {weather.weather[0].main} <br/>
                    {weather.weather[0].description}
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;