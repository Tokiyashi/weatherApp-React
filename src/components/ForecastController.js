

const api = {
    key: "6288c75382467c9f1bd043ba12aa0a7b",
    base: "https://api.openweathermap.org/data/2.5/"
}

export const makeForecastByCity = async function makeForecast(target){
        console.log(target);
        const response = await fetch(`${api.base}forecast?q=${target}&units=metric&APPID=${api.key}`).then(res => res.json())
            .then(result => {
                return result;
            });

        function addWeatherWithIndex(index, response){
            return {
                name: response.city.name,
                country: response.city.country,
                temp: response.list[index].main.temp,
                main: response.list[index].weather[0].main,
                description: response.list[index].weather[0].description,
                icon: response.list[index].weather[0].icon
            }
        }

        return [addWeatherWithIndex(0, response),
            addWeatherWithIndex(8, response),
            addWeatherWithIndex(16, response),
            addWeatherWithIndex(24, response)
        ]
}