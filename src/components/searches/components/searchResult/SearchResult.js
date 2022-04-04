import React from 'react';
import './searchResult.scss';


function SearchResult() {
    return (
        <div className="search-result">
            <div className="search-result__content">
                <ul className="">
                    <li className="search-result-child ">
                        <div className="search-result-content">
                            <div className="flag">
                                <img
                                    alt="flag"
                                    className="rounded-full"
                                    src="https://flagcdn.com/48x36/ir.png"
                                />
                            </div>
                            <div className="search-result__country">
                                <strong>Qā’em Shahr</strong>, Iran
                            </div>
                            <div className="search-result__text">
                                <strong>q</strong>a'emshahr
                            </div>
                        </div>
                    </li>
                    <li className="search-result-child ">
                        <div className="search-result-content">
                            <div className="flag">
                                <img
                                    alt="flag"
                                    className="rounded-full"
                                    src="https://flagcdn.com/48x36/ir.png"
                                />
                            </div>
                            <div className="search-result__country">
                                <strong>Qā’em Shahr</strong>, Iran
                            </div>
                            <div className="search-result__text">
                                <strong>q</strong>a'emshahr
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default SearchResult;
