import * as Types from './constant';

let initState = {
    city: '',
    lat: '',
    lon: '',
    day: {
        base: "stations",
        clouds: {
            all: 0,

            cod: 200
        },
        coord: {
            lat: 21.0245,
            lon: 105.8412
        },

        dt: 1649001881,
        id: 1581130,
        main: {
            feels_like: 17.61,
            grnd_level: 1021,
            humidity: 67,
            pressure: 1022,
            sea_level: 1022,
            temp: 18,
            temp_max: 18,
            temp_min: 18
        },

        name: "Hanoi",
        sys: {
            country: "VN",
            id: 9308,
            sunrise: 1648939698,
            sunset: 1648984285,
            type: 1
        },
        timezone: 25200,
        visibility: 10000,
        weather: [
            { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],

        wind: {
            deg: 181,
            gust: 4.47,
            speed: 2.46
        }
    },
    days: {

    }
};


function reducer(state = initState, action) {
    switch (action.type) {
        //...
        case Types.SET_DATA: {
            state = { ...action.data }
            return state;
        }
        case Types.GET_DATA: {
            return state
        }
        default:
            throw new Error('Invalid action!')
    }
}




export { initState };
export default reducer;