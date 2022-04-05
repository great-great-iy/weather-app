import axios from 'axios';

const REQUEST_URL1 = 'https://api.openweathermap.org/data/2.5/onecall';
const REQUEST_URL2 = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e70a3de7d1e331d90caba417ecaa5647';

export const fetchCoord = async (latitude, longitude) => {
    const { data } = await axios.get(REQUEST_URL1, {
        params: {
            lat: latitude,
            lon: longitude,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

export const findCity = async (nameCity) => {
    const { data } = await axios.get(REQUEST_URL2, {
        params: {
            q: nameCity,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

export const getDataDefault = async (latitude, longitude) => {
    const { data } = await axios.get(REQUEST_URL2, {
        params: {
            lat: latitude,
            lon: longitude,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}