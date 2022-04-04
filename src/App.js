import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import axios from 'axios';

function App() {

    const API_KEY = 'e70a3de7d1e331d90caba417ecaa5647';
    // 'https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}'
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

    // useEffect(() => {
    //     const requestUrl1 = `https://api.openweathermap.org/data/2.5/onecall`
    //     const requestUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;
    //     function getUser() {
    //         try {
    //             axios.get(requestUrl1, {
    //                 params: {
    //                     lat: location.lat,
    //                     lon: location.lon,
    //                     units: 'metric',
    //                     appid: API_KEY
    //                 }
    //             })
    //                 .then(function (response) {
    //                     return response.data;
    //                 })
    //                 .then((data) => {
    //                     dispatch(actions.setDataDays(data));
    //                 })
    //                 .catch(function (error) {
    //                     // handle error
    //                     console.log(error);
    //                 })
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getUser();
    // }, [city]);

    // console.log(state.days);

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
