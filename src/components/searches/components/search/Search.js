import React from 'react';
import './search.scss';


function Search() {

    return (
        <div className="search">
            <input
                type="text"
                className="search__input input placeholder-theme-13"
                placeholder="Search..."
            />
        </div>
    );
}


export default Search;
