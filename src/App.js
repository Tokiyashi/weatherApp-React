import React, {useState} from 'react';
import WeatherDisplay from "./components/UI/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/UI/SearchBar/SearchBar";



function App() {
    const [weather, setWeather] = useState({});
  return (
    <main>
        <SearchBar setWeather={(arg) => setWeather(arg)}  />
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
