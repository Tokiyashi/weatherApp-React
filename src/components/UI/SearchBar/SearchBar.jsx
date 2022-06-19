import React, {useState} from 'react';
import cl from './SearchBar.module.css';


const api = {
    key: "6288c75382467c9f1bd043ba12aa0a7b",
    base: "https://api.openweathermap.org/data/2.5/"
}

const SearchBar = ({setWeather}) => {

    const [query, setQuery] = useState('');


    const search = evt => {
        if (evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setQuery('');
                    setWeather(result);
                    console.log(result);
                })
        }
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