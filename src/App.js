import React, {useEffect, useState} from 'react';
import WeatherDisplay from "./components/UI/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import axios from "axios";



function App() {

    const [weather, setWeather] = useState({});
    const [geoLocation, setGeoLocation] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: ""
    });

    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setGeoLocation({
                    ...geoLocation,
                    ip: data.ip,
                    countryName: data.country_name,
                    countryCode: data.country_calling_code,
                    city: data.city,
                    timezone: data.timezone
                });
                console.log(geoLocation);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);




    return (
    <main>
        <SearchBar setWeather={(arg) => setWeather(arg) }  />
        {weather.main
                ? <WeatherDisplay weather={weather} />
                : <div >
                вбей нормальный город мудак
                </div>
        }
    </main>
  );
}

export default App;
