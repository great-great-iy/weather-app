import React from 'react';
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
                <Today />
                {/* <Week /> */}
                {/* <Hour/> */}
            </div>
        </div>
    );
}


export default Content;
