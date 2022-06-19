import React, {useEffect, useState} from 'react';
import WeatherDisplay from "./components/UI/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import axios from "axios";
import Loader from './components/UI/Loader/Loader'

function App() {
    const [loading, setLoading] = useState(true)
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
            }).finally(() => {
                setLoading(false);
        });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);




    return (
    <main>
        {
            loading
            ?<div className="loadingScreen">
                <Loader/>
            </div>

            : <div>
                    {
                        geoLocation.city && <SearchBar setWeather={(arg) => setWeather(arg) } userCity={geoLocation.city}  />
                    }
                    {weather.main
                        ? <WeatherDisplay weather={weather}  >  </WeatherDisplay>
                        : <div className="notFound" >
                            <p className="notFound__text shadowedText">
                                City not found... &#128546;
                            </p>
                        </div>
                    }
                </div>
        }




    </main>
  );
}

export default App;
