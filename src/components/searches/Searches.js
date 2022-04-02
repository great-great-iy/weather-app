import React from 'react';
import Search from './components/search/Search';
import SearchResult from './components/searchResult/SearchResult';
import './searches.scss';


function Searches() {
    return (
        <div className="top-bar">
            <div className="top-bar__right">
                <Search />
                <SearchResult />
            </div>
        </div>
    );
}


export default Searches;
