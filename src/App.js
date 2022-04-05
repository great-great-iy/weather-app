import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import { fetchCoord, getDataDefault } from './api/fetchWeather';

function App() {

    const [state, dispatch] = useStore();
    const [city, setCity] = useState('');
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
        // const requestUrl1 = `https://api.openweathermap.org/data/2.5/onecall`
        // const requestUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;

        function getUser() {
            try {
                getDataDefault(location.lat, location.lon).then((data) => {
                    dispatch(actions.setDataDaily(data));
                })
                fetchCoord(location.lat, location.lon).then((data) => {
                    dispatch(actions.setDataDays(data));
                })
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [city]);

    console.log(state.dayData)

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
