import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import axios from 'axios';

function App() {

    const apiKey = 'e70a3de7d1e331d90caba417ecaa5647';
    const [state, dispatch] = useStore();
    const [location, setLocation] = useState({
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
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        })
    }, []);

    useEffect(() => {
        const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=21.0003968&lon=105.7528669&appid=${apiKey}`
        function getUser() {
            try {
                axios.get(requestUrl)
                    .then(function (response) {
                        return response.data;
                    })
                    .then((data) => {
                        dispatch(actions.setData(data));
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [location]);

    return (

        <>
            Test
        </>
        // <BrowserRouter>
        //   <div className='app'>
        //     <Navbar />
        //     <Content />
        //   </div>
        // </BrowserRouter>
    );
}

export default App;
