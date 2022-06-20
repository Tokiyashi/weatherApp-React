import React, {useEffect, useState} from 'react';
import WeatherDisplay from "./components/UI/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import axios from "axios";
import Loader from './components/UI/Loader/Loader'

function App() {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState([]);
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
            }).finally(() => {
                    setLoading(false);
        });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    function makeForecast(response){
        const addWeatherWithIndex = (index) => {
            return {
                name: response.city.name,
                country: response.city.country,
                temp: response.list[index].main.temp,
                main: response.list[index].weather[0].main,
                description: response.list[index].weather[0].description,
                icon: response.list[index].weather[0].icon
            }
        }
        setWeather(
            [addWeatherWithIndex(0),
                addWeatherWithIndex(7),
                addWeatherWithIndex(15),
                addWeatherWithIndex(22)
            ]
        );
        console.log(weather);
    }

    return (
    <main>
         <div>
            {
                geoLocation.city && <SearchBar setLoading={arg => setLoading(arg)} setWeather={(arg) => {
                    makeForecast(arg);
                } } userCity={geoLocation.city}  />
            }
            {
                loading
                ? <div className="loadingScreen">
                    <Loader/>
                </div>
                :
                <div>
                {
                weather[0].temp
                    ? <WeatherDisplay weather={weather}> </WeatherDisplay>
                    : <div className="notFound">
                        <p className="notFound__text shadowedText">
                            City not found... &#128546;
                        </p>
                    </div>
                }

                </div>
            }
        </div>
    </main>
  );
}

export default App;
