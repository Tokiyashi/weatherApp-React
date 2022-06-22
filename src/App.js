import React, {useEffect, useState} from 'react';
import WeatherDisplay from "./components/UI/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import Loader from './components/UI/Loader/Loader'
import Error from "./components/UI/ErrorScreen/Error";
import UserGeoController from "./components/UserGeoController";
import {useFetching} from "./components/hooks/useFetching";
import {makeForecastByCity} from "./components/ForecastController";


function App() {

    const [weather, setWeather] = useState([]);
    const [geoLocation, setGeoLocation] = useState();
    const [getUserGeo, loading, error] = useFetching( async ()=> {
        const userGeo = await UserGeoController.getUserGeo();
        setGeoLocation(userGeo.city);
    });
    const [city, setCity] = useState();

    const [makeForecast, forecastLoading, forecastError] = useFetching( async (city)=>
    {
        let forecast = await makeForecastByCity(city);
        setWeather(forecast);
    }, city);

    useEffect( ()=>{
        getUserGeo();
    }, []);

    return (
        <main>
            {
                geoLocation &&
                <SearchBar
                    fetchData={ async (arg) => {
                        setCity(arg)
                       await makeForecast(arg);
                    }}
                    userCity={geoLocation}
                />
            }
            {
                (forecastLoading ||loading) &&
                <div className="loadingScreen">
                    <Loader/>
                </div>
            }
            {
               error || forecastError
                ? <Error/>
                : <div>
                    {
                        (weather.length>0) && !loading && !forecastLoading &&
                        <WeatherDisplay weather={weather}> </WeatherDisplay>
                    }
                </div>
            }
        </main>
  );
}

export default App;
