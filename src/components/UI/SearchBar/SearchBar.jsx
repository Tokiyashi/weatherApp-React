import React, {useEffect, useState} from 'react';
import cl from './SearchBar.module.css';

const SearchBar = ({ userCity, fetchData}) => {

    const [query, setQuery] = useState(userCity);

    const search = evt => {
        if (evt.key === "Enter"){
            fetchData(query);
            setQuery('');
        }
    }

    useEffect(()=>{
        fetchData(userCity);
    }, [])

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