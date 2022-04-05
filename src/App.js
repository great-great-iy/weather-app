import React, { useEffect, useState } from 'react';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import { fetchCoord, findCity, getDataDefault } from './api/fetchWeather';


function App() {

    const [state, dispatch] = useStore();
    const [location, setLocation] = useState({
        lat: '',
        lon: ''
    });

    const [active, setActive] = useState(1);

    const handlePicked = (value) => {
        setActive(value);
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    ...location,
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            })
        } else {
            console.warn("Not Available");
        }
    }, []);

    useEffect(() => {
        function getDay() {
            try {
                if (state.cityName === '') {
                    getDataDefault(location.lat, location.lon).then((data) => {
                        dispatch(actions.setDataDaily(data));
                    })
                } else {
                    findCity(state.cityName).then((data) => {
                        dispatch(actions.setDataDaily(data));
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
        getDay();
    }, [location, state.cityName]);

    useEffect(() => {
        function getDays() {
            try {
                fetchCoord(state.lat, state.lon).then((data) => {
                    dispatch(actions.setDataDays(data));
                })
            } catch (error) {
                console.error(error);
            }
        }
        getDays();
    }, [state.lat, state.lon]);

    return (

        <div className='app'>
            <Navbar handlePicked={handlePicked} />
            <Content active={active} />
        </div>

    );
}

export default App;


// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//     ["Year", "Temp", "Fell like"],
//     ["2004", 1000, 400],
//     ["2005", 1170, 460],
//     ["2006", 660, 1120],
//     ["2007", 1030, 540],
// ];

// export const options = {
//     title: "Company Performance",
//     curveType: "function",
//     legend: { position: "bottom" },
// };

// function App() {
//     return (
//         <Chart
//             chartType="LineChart"
//             width="100%"
//             height="400px"
//             data={data}
//             options={options}
//         />
//     );
// }

// export default App;