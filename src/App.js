import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.scss';
import { Content, Navbar } from './components';
import { useStore } from './hooks';
import { actions } from './store';
import { fetchCoord, findCity, getDataDefault } from './api/fetchWeather';
import { setDataDays } from './store/actions';

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
    }, [state.cityName]);

    useEffect(() => {
        function getDays() {
            try {
                function getData() {
                    try {
                        fetchCoord(state.lat, state.lon).then((data) => {
                            dispatch(actions.setDataDays(data));
                        })
                    } catch (error) {
                        console.error(error);
                    }
                }
                getData();
            } catch (error) {
                console.error(error);
            }
        }
        getDays();
    }, [state.cityName, state.dayData]);

    console.log(city);
    console.log(state)

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
