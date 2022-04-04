import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import axios from 'axios';

function App() {

    const apiKey = 'e70a3de7d1e331d90caba417ecaa5647';
    const [state, dispatch] = useStore();
    const [position, setPosition] = useState({});
    const [location, setLocation] = useState({
        city: '',
        lat: '',
        lon: ''
    });

    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }

        navigator.geolocation.getCurrentPosition((position) => {
            setPosition(position);
            setLocation({
                ...location,
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        })
    }, []);
    console.log(position);

    // useEffect(() => {
    //     // const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    //     const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`;
    //     function getUser() {
    //         try {
    //             axios.get(requestUrl)
    //                 .then(function (response) {
    //                     return response.data;
    //                 })
    //                 .then((data) => {
    //                     dispatch(actions.setData(data));
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
    // }, [location]);


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
