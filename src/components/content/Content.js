import React from 'react';
import { BrowserRouter, Routes, Rout, Route } from 'react-router-dom';
import Hour from '../hour/Hour';
import Searches from '../searches/Searches';
import Today from '../today/Today';
import Week from '../week/Week';
import './content.scss';


function Content() {
    return (
        <div className="content">
            <Searches />
            <div className="content-main">
                <Routes>
                    <Route path='/' element={<Today />} />
                    <Route path='week' element={<Week />} />
                    <Route path='hour' element={<Hour />} />
                </Routes>
            </div>
        </div>
    );
}


export default Content;
