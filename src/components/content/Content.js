import React from 'react';
import { BrowserRouter, Routes, Rout, Route } from 'react-router-dom';
import Hour from '../hour/Hour';
import Searches from '../searches/Searches';
import Today from '../today/Today';
import Week from '../week/Week';
import './content.scss';


function Content(props) {

    const { active } = props;
    return (
        <div className="content">
            <Searches />
            <div className="content-main">
                {active === 1 && <Today />}
                {active === 2 && <Week />}
                {active === 3 && <Hour />}
            </div>
        </div>
    );
}


export default Content;
