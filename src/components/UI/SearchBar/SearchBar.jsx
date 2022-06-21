import React, {useEffect, useState} from 'react';
import cl from './SearchBar.module.css';


const api = {
    key: "6288c75382467c9f1bd043ba12aa0a7b",
    base: "https://api.openweathermap.org/data/2.5/"
}

const SearchBar = ({setWeather, userCity, setLoading, setError}) => {

    const [query, setQuery] = useState(userCity);

    const search = evt => {
        if (evt.key === "Enter"){
            fetchData(query)
        }
    }


    useEffect(()=>{
        fetchData(userCity);
    }, [])



    function fetchData(target){
        setLoading(true);
        fetch(`${api.base}forecast?q=${target}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setQuery('');
                setWeather(result);
                setError(false);
            })
            .catch(e => {
                setError(true);
                setLoading(false);
            }).finally(()=>{

            });

    }

    return (
        <div className={cl.searchBox}>
            <input
                type="text"
                className={cl.searchBar}
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
};

export default SearchBar;