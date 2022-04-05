import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

    console.log(location);
    console.log(state.cityName);
    console.log(state);

    return (

        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <Content />
            </div>
        </BrowserRouter>
    );
}

export default App;
