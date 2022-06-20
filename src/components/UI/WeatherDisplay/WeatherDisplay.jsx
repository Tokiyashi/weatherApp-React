import React, {useEffect, useMemo, useState} from 'react';
import cl from './WeatherDisplay.module.css'
import arrow from './left-arrow-svgrepo-com.svg'

const WeatherDisplay = ({weather}) => {

    const [dayNum, setDayNum] = useState(0);

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
        <div className={cl.weatherWrapper}>
            <img className={[cl.filterBlue, cl.leftArrow].join(' ')}
                src={arrow}
                width="50px" onClick={()=>{setDayNum(dayNum-1)}}
            />
            <div className={cl.weather}>
                <img
                    className={cl.weather_icon}
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt="icon"
                    width="100"
                />
                <div className={cl.weather__location}>
                    {weather[dayNum].name},  {weather[dayNum].country}

                </div>
                <div className={cl.weather__time}>
                    {dateBuilder(new Date())}
                </div>
                <div className={cl.weather__info}>
                    <div className={cl.weather__info__temperature}>
                        {Math.round(weather[0].temp)}°С
                    </div>
                    <div className="weather">
                        {weather[dayNum].main} <br/>
                        {weather[dayNum].description}
                    </div>
                </div>
            </div>
            <img className={[cl.filterBlue, cl.rightArrow].join(' ')}
                 src={arrow}
                 width="50px"
                 onClick={()=>{setDayNum(dayNum+1)}}
            />
        </div>

    );
};

export default WeatherDisplay;