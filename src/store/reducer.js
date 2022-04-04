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
    days:
    {
        lat: 21.0004,
        "lon": 105.7529,
        "timezone": "Asia/Bangkok",
        "timezone_offset": 25200,
        "current": {
            "dt": 1649066663,
            "sunrise": 1649026066,
            "sunset": 1649070724,
            "temp": 26.01,
            "feels_like": 26.01,
            "pressure": 1017,
            "humidity": 41,
            "dew_point": 11.75,
            "uvi": 0.58,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 5.63,
            "wind_deg": 139,
            "wind_gust": 6.01,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        "minutely": [
            {
                "dt": 1649066700,
                "precipitation": 0
            },
            {
                "dt": 1649066760,
                "precipitation": 0
            },
            {
                "dt": 1649066820,
                "precipitation": 0
            },
            {
                "dt": 1649066880,
                "precipitation": 0
            },
            {
                "dt": 1649066940,
                "precipitation": 0
            },
            {
                "dt": 1649067000,
                "precipitation": 0
            },
            {
                "dt": 1649067060,
                "precipitation": 0
            },
            {
                "dt": 1649067120,
                "precipitation": 0
            },
            {
                "dt": 1649067180,
                "precipitation": 0
            },
            {
                "dt": 1649067240,
                "precipitation": 0
            },
            {
                "dt": 1649067300,
                "precipitation": 0
            },
            {
                "dt": 1649067360,
                "precipitation": 0
            },
            {
                "dt": 1649067420,
                "precipitation": 0
            },
            {
                "dt": 1649067480,
                "precipitation": 0
            },
            {
                "dt": 1649067540,
                "precipitation": 0
            },
            {
                "dt": 1649067600,
                "precipitation": 0
            },
            {
                "dt": 1649067660,
                "precipitation": 0
            },
            {
                "dt": 1649067720,
                "precipitation": 0
            },
            {
                "dt": 1649067780,
                "precipitation": 0
            },
            {
                "dt": 1649067840,
                "precipitation": 0
            },
            {
                "dt": 1649067900,
                "precipitation": 0
            },
            {
                "dt": 1649067960,
                "precipitation": 0
            },
            {
                "dt": 1649068020,
                "precipitation": 0
            },
            {
                "dt": 1649068080,
                "precipitation": 0
            },
            {
                "dt": 1649068140,
                "precipitation": 0
            },
            {
                "dt": 1649068200,
                "precipitation": 0
            },
            {
                "dt": 1649068260,
                "precipitation": 0
            },
            {
                "dt": 1649068320,
                "precipitation": 0
            },
            {
                "dt": 1649068380,
                "precipitation": 0
            },
            {
                "dt": 1649068440,
                "precipitation": 0
            },
            {
                "dt": 1649068500,
                "precipitation": 0
            },
            {
                "dt": 1649068560,
                "precipitation": 0
            },
            {
                "dt": 1649068620,
                "precipitation": 0
            },
            {
                "dt": 1649068680,
                "precipitation": 0
            },
            {
                "dt": 1649068740,
                "precipitation": 0
            },
            {
                "dt": 1649068800,
                "precipitation": 0
            },
            {
                "dt": 1649068860,
                "precipitation": 0
            },
            {
                "dt": 1649068920,
                "precipitation": 0
            },
            {
                "dt": 1649068980,
                "precipitation": 0
            },
            {
                "dt": 1649069040,
                "precipitation": 0
            },
            {
                "dt": 1649069100,
                "precipitation": 0
            },
            {
                "dt": 1649069160,
                "precipitation": 0
            },
            {
                "dt": 1649069220,
                "precipitation": 0
            },
            {
                "dt": 1649069280,
                "precipitation": 0
            },
            {
                "dt": 1649069340,
                "precipitation": 0
            },
            {
                "dt": 1649069400,
                "precipitation": 0
            },
            {
                "dt": 1649069460,
                "precipitation": 0
            },
            {
                "dt": 1649069520,
                "precipitation": 0
            },
            {
                "dt": 1649069580,
                "precipitation": 0
            },
            {
                "dt": 1649069640,
                "precipitation": 0
            },
            {
                "dt": 1649069700,
                "precipitation": 0
            },
            {
                "dt": 1649069760,
                "precipitation": 0
            },
            {
                "dt": 1649069820,
                "precipitation": 0
            },
            {
                "dt": 1649069880,
                "precipitation": 0
            },
            {
                "dt": 1649069940,
                "precipitation": 0
            },
            {
                "dt": 1649070000,
                "precipitation": 0
            },
            {
                "dt": 1649070060,
                "precipitation": 0
            },
            {
                "dt": 1649070120,
                "precipitation": 0
            },
            {
                "dt": 1649070180,
                "precipitation": 0
            },
            {
                "dt": 1649070240,
                "precipitation": 0
            },
            {
                "dt": 1649070300,
                "precipitation": 0
            }
        ],
        "hourly": [
            {
                "dt": 1649066400,
                "temp": 26.01,
                "feels_like": 26.01,
                "pressure": 1017,
                "humidity": 41,
                "dew_point": 11.75,
                "uvi": 0.58,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 5.63,
                "wind_deg": 139,
                "wind_gust": 6.01,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649070000,
                "temp": 25.2,
                "feels_like": 24.9,
                "pressure": 1017,
                "humidity": 43,
                "dew_point": 11.74,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 5.4,
                "wind_deg": 136,
                "wind_gust": 8.2,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649073600,
                "temp": 23.84,
                "feels_like": 23.51,
                "pressure": 1018,
                "humidity": 47,
                "dew_point": 11.86,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 5.28,
                "wind_deg": 136,
                "wind_gust": 8.63,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649077200,
                "temp": 22.29,
                "feels_like": 21.93,
                "pressure": 1019,
                "humidity": 52,
                "dew_point": 11.97,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 4.8,
                "wind_deg": 139,
                "wind_gust": 8.63,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649080800,
                "temp": 20.59,
                "feels_like": 20.27,
                "pressure": 1020,
                "humidity": 60,
                "dew_point": 12.56,
                "uvi": 0,
                "clouds": 8,
                "visibility": 10000,
                "wind_speed": 4.18,
                "wind_deg": 145,
                "wind_gust": 8.4,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649084400,
                "temp": 18.7,
                "feels_like": 18.4,
                "pressure": 1022,
                "humidity": 68,
                "dew_point": 12.87,
                "uvi": 0,
                "clouds": 8,
                "visibility": 10000,
                "wind_speed": 3.55,
                "wind_deg": 153,
                "wind_gust": 7.59,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649088000,
                "temp": 18.34,
                "feels_like": 18.11,
                "pressure": 1022,
                "humidity": 72,
                "dew_point": 13.29,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 3.24,
                "wind_deg": 161,
                "wind_gust": 6.71,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649091600,
                "temp": 18.1,
                "feels_like": 17.9,
                "pressure": 1021,
                "humidity": 74,
                "dew_point": 13.48,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 2.84,
                "wind_deg": 167,
                "wind_gust": 5.71,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649095200,
                "temp": 17.83,
                "feels_like": 17.65,
                "pressure": 1021,
                "humidity": 76,
                "dew_point": 13.56,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 2.36,
                "wind_deg": 167,
                "wind_gust": 4.3,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649098800,
                "temp": 17.76,
                "feels_like": 17.6,
                "pressure": 1021,
                "humidity": 77,
                "dew_point": 13.63,
                "uvi": 0,
                "clouds": 8,
                "visibility": 10000,
                "wind_speed": 1.71,
                "wind_deg": 163,
                "wind_gust": 2.41,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649102400,
                "temp": 17.66,
                "feels_like": 17.52,
                "pressure": 1020,
                "humidity": 78,
                "dew_point": 13.65,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 1.54,
                "wind_deg": 151,
                "wind_gust": 1.98,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649106000,
                "temp": 17.54,
                "feels_like": 17.39,
                "pressure": 1020,
                "humidity": 78,
                "dew_point": 13.72,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 1.16,
                "wind_deg": 148,
                "wind_gust": 1.39,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649109600,
                "temp": 17.37,
                "feels_like": 17.23,
                "pressure": 1021,
                "humidity": 79,
                "dew_point": 13.74,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 1.03,
                "wind_deg": 141,
                "wind_gust": 1.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649113200,
                "temp": 17.37,
                "feels_like": 17.25,
                "pressure": 1021,
                "humidity": 80,
                "dew_point": 13.94,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 0.59,
                "wind_deg": 135,
                "wind_gust": 0.7,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649116800,
                "temp": 18.79,
                "feels_like": 18.66,
                "pressure": 1022,
                "humidity": 74,
                "dew_point": 14.22,
                "uvi": 0.67,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 0.17,
                "wind_deg": 50,
                "wind_gust": 0.41,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649120400,
                "temp": 20.64,
                "feels_like": 20.51,
                "pressure": 1023,
                "humidity": 67,
                "dew_point": 14.37,
                "uvi": 2.38,
                "clouds": 11,
                "visibility": 10000,
                "wind_speed": 0.5,
                "wind_deg": 24,
                "wind_gust": 0.61,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649124000,
                "temp": 22.46,
                "feels_like": 22.35,
                "pressure": 1023,
                "humidity": 61,
                "dew_point": 14.62,
                "uvi": 5.21,
                "clouds": 8,
                "visibility": 10000,
                "wind_speed": 0.53,
                "wind_deg": 16,
                "wind_gust": 0.92,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649127600,
                "temp": 24.09,
                "feels_like": 23.96,
                "pressure": 1023,
                "humidity": 54,
                "dew_point": 14.27,
                "uvi": 8.41,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 0.89,
                "wind_deg": 10,
                "wind_gust": 1.23,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649131200,
                "temp": 25.19,
                "feels_like": 25.04,
                "pressure": 1022,
                "humidity": 49,
                "dew_point": 13.74,
                "uvi": 10.24,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 1.84,
                "wind_deg": 10,
                "wind_gust": 2.02,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649134800,
                "temp": 26.13,
                "feels_like": 26.13,
                "pressure": 1020,
                "humidity": 45,
                "dew_point": 13.34,
                "uvi": 11.09,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 2.13,
                "wind_deg": 19,
                "wind_gust": 2.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649138400,
                "temp": 26.94,
                "feels_like": 26.92,
                "pressure": 1019,
                "humidity": 42,
                "dew_point": 12.93,
                "uvi": 10.13,
                "clouds": 11,
                "visibility": 10000,
                "wind_speed": 2.09,
                "wind_deg": 40,
                "wind_gust": 2,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649142000,
                "temp": 27.36,
                "feels_like": 27.14,
                "pressure": 1018,
                "humidity": 40,
                "dew_point": 12.44,
                "uvi": 7.41,
                "clouds": 27,
                "visibility": 10000,
                "wind_speed": 2.13,
                "wind_deg": 60,
                "wind_gust": 1.71,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649145600,
                "temp": 27.46,
                "feels_like": 27.16,
                "pressure": 1017,
                "humidity": 39,
                "dew_point": 12.18,
                "uvi": 4.52,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 2.17,
                "wind_deg": 66,
                "wind_gust": 1.51,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649149200,
                "temp": 27.23,
                "feels_like": 26.98,
                "pressure": 1017,
                "humidity": 39,
                "dew_point": 12.15,
                "uvi": 2.01,
                "clouds": 37,
                "visibility": 10000,
                "wind_speed": 2.17,
                "wind_deg": 66,
                "wind_gust": 1.42,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649152800,
                "temp": 26.63,
                "feels_like": 26.63,
                "pressure": 1017,
                "humidity": 41,
                "dew_point": 12.56,
                "uvi": 0.59,
                "clouds": 41,
                "visibility": 10000,
                "wind_speed": 2.08,
                "wind_deg": 79,
                "wind_gust": 1.81,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649156400,
                "temp": 24.75,
                "feels_like": 24.59,
                "pressure": 1017,
                "humidity": 50,
                "dew_point": 13.65,
                "uvi": 0,
                "clouds": 44,
                "visibility": 10000,
                "wind_speed": 2.39,
                "wind_deg": 112,
                "wind_gust": 3.64,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649160000,
                "temp": 22.55,
                "feels_like": 22.32,
                "pressure": 1018,
                "humidity": 56,
                "dew_point": 13.44,
                "uvi": 0,
                "clouds": 44,
                "visibility": 10000,
                "wind_speed": 4.55,
                "wind_deg": 144,
                "wind_gust": 7.4,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649163600,
                "temp": 21.55,
                "feels_like": 21.28,
                "pressure": 1019,
                "humidity": 58,
                "dew_point": 12.85,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 3.88,
                "wind_deg": 154,
                "wind_gust": 7.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649167200,
                "temp": 20.8,
                "feels_like": 20.48,
                "pressure": 1020,
                "humidity": 59,
                "dew_point": 12.45,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 3.49,
                "wind_deg": 157,
                "wind_gust": 6.58,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649170800,
                "temp": 20.41,
                "feels_like": 20.02,
                "pressure": 1020,
                "humidity": 58,
                "dew_point": 11.95,
                "uvi": 0,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 2.98,
                "wind_deg": 153,
                "wind_gust": 5.47,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649174400,
                "temp": 20.11,
                "feels_like": 19.69,
                "pressure": 1020,
                "humidity": 58,
                "dew_point": 11.76,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 2.92,
                "wind_deg": 148,
                "wind_gust": 5.19,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649178000,
                "temp": 19.85,
                "feels_like": 19.43,
                "pressure": 1019,
                "humidity": 59,
                "dew_point": 11.66,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 2.51,
                "wind_deg": 161,
                "wind_gust": 4.2,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649181600,
                "temp": 19.62,
                "feels_like": 19.2,
                "pressure": 1019,
                "humidity": 60,
                "dew_point": 11.66,
                "uvi": 0,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 1.89,
                "wind_deg": 163,
                "wind_gust": 2.58,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649185200,
                "temp": 19.41,
                "feels_like": 19,
                "pressure": 1018,
                "humidity": 61,
                "dew_point": 11.66,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 1.17,
                "wind_deg": 120,
                "wind_gust": 1.3,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649188800,
                "temp": 19.17,
                "feels_like": 18.76,
                "pressure": 1018,
                "humidity": 62,
                "dew_point": 11.79,
                "uvi": 0,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 0.83,
                "wind_deg": 84,
                "wind_gust": 0.9,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649192400,
                "temp": 18.93,
                "feels_like": 18.52,
                "pressure": 1018,
                "humidity": 63,
                "dew_point": 11.76,
                "uvi": 0,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 0.53,
                "wind_deg": 71,
                "wind_gust": 0.61,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649196000,
                "temp": 18.86,
                "feels_like": 18.45,
                "pressure": 1019,
                "humidity": 63,
                "dew_point": 11.76,
                "uvi": 0,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 0.16,
                "wind_deg": 212,
                "wind_gust": 0.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649199600,
                "temp": 18.79,
                "feels_like": 18.42,
                "pressure": 1020,
                "humidity": 65,
                "dew_point": 12.05,
                "uvi": 0,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 0.44,
                "wind_deg": 296,
                "wind_gust": 0.41,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649203200,
                "temp": 20.49,
                "feels_like": 20.16,
                "pressure": 1020,
                "humidity": 60,
                "dew_point": 12.4,
                "uvi": 0.54,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 1.06,
                "wind_deg": 305,
                "wind_gust": 1.34,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649206800,
                "temp": 22.43,
                "feels_like": 22.11,
                "pressure": 1021,
                "humidity": 53,
                "dew_point": 12.45,
                "uvi": 2.29,
                "clouds": 34,
                "visibility": 10000,
                "wind_speed": 1.73,
                "wind_deg": 329,
                "wind_gust": 1.92,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649210400,
                "temp": 24.23,
                "feels_like": 23.94,
                "pressure": 1021,
                "humidity": 47,
                "dew_point": 12.25,
                "uvi": 5,
                "clouds": 27,
                "visibility": 10000,
                "wind_speed": 2.35,
                "wind_deg": 342,
                "wind_gust": 2.92,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649214000,
                "temp": 25.63,
                "feels_like": 25.4,
                "pressure": 1020,
                "humidity": 44,
                "dew_point": 12.76,
                "uvi": 8.06,
                "clouds": 34,
                "visibility": 10000,
                "wind_speed": 2.79,
                "wind_deg": 3,
                "wind_gust": 3.31,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649217600,
                "temp": 26.85,
                "feels_like": 26.9,
                "pressure": 1020,
                "humidity": 43,
                "dew_point": 13.36,
                "uvi": 6.47,
                "clouds": 31,
                "visibility": 10000,
                "wind_speed": 2.76,
                "wind_deg": 15,
                "wind_gust": 2.71,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649221200,
                "temp": 27.62,
                "feels_like": 27.47,
                "pressure": 1018,
                "humidity": 42,
                "dew_point": 13.66,
                "uvi": 7.01,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 2.94,
                "wind_deg": 14,
                "wind_gust": 2.61,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649224800,
                "temp": 28.23,
                "feels_like": 27.94,
                "pressure": 1017,
                "humidity": 41,
                "dew_point": 13.85,
                "uvi": 6.4,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 3.33,
                "wind_deg": 9,
                "wind_gust": 2.9,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649228400,
                "temp": 28.16,
                "feels_like": 27.95,
                "pressure": 1016,
                "humidity": 42,
                "dew_point": 14.05,
                "uvi": 4.49,
                "clouds": 73,
                "visibility": 10000,
                "wind_speed": 3.47,
                "wind_deg": 11,
                "wind_gust": 3.11,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649232000,
                "temp": 28.32,
                "feels_like": 28.03,
                "pressure": 1015,
                "humidity": 41,
                "dew_point": 13.95,
                "uvi": 2.74,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 3.12,
                "wind_deg": 11,
                "wind_gust": 3.11,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1649235600,
                "temp": 27.36,
                "feels_like": 27.43,
                "pressure": 1015,
                "humidity": 45,
                "dew_point": 14.56,
                "uvi": 1.22,
                "clouds": 80,
                "visibility": 10000,
                "wind_speed": 2.75,
                "wind_deg": 11,
                "wind_gust": 3.1,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1649044800,
                "sunrise": 1649026066,
                "sunset": 1649070724,
                "moonrise": 1649032800,
                "moonset": 1649080680,
                "moon_phase": 0.1,
                "temp": {
                    "day": 24.57,
                    "min": 15.99,
                    "max": 26.33,
                    "night": 18.34,
                    "eve": 26.01,
                    "morn": 16.19
                },
                "feels_like": {
                    "day": 24.13,
                    "night": 18.11,
                    "eve": 26.01,
                    "morn": 15.67
                },
                "pressure": 1022,
                "humidity": 40,
                "dew_point": 10.18,
                "wind_speed": 5.63,
                "wind_deg": 139,
                "wind_gust": 8.63,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 3,
                "pop": 0,
                "uvi": 11.46
            },
            {
                "dt": 1649131200,
                "sunrise": 1649112413,
                "sunset": 1649157142,
                "moonrise": 1649121480,
                "moonset": 1649170380,
                "moon_phase": 0.13,
                "temp": {
                    "day": 25.19,
                    "min": 17.37,
                    "max": 27.46,
                    "night": 20.11,
                    "eve": 26.63,
                    "morn": 17.37
                },
                "feels_like": {
                    "day": 25.04,
                    "night": 19.69,
                    "eve": 26.63,
                    "morn": 17.23
                },
                "pressure": 1022,
                "humidity": 49,
                "dew_point": 13.74,
                "wind_speed": 4.55,
                "wind_deg": 144,
                "wind_gust": 7.4,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 9,
                "pop": 0,
                "uvi": 11.09
            },
            {
                "dt": 1649217600,
                "sunrise": 1649198760,
                "sunset": 1649243559,
                "moonrise": 1649210400,
                "moonset": 1649259960,
                "moon_phase": 0.16,
                "temp": {
                    "day": 26.85,
                    "min": 18.79,
                    "max": 28.32,
                    "night": 22.32,
                    "eve": 27.4,
                    "morn": 18.86
                },
                "feels_like": {
                    "day": 26.9,
                    "night": 22.28,
                    "eve": 27.47,
                    "morn": 18.45
                },
                "pressure": 1020,
                "humidity": 43,
                "dew_point": 13.36,
                "wind_speed": 3.47,
                "wind_deg": 11,
                "wind_gust": 4.83,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 31,
                "pop": 0,
                "uvi": 8.06
            },
            {
                "dt": 1649304000,
                "sunrise": 1649285107,
                "sunset": 1649329978,
                "moonrise": 1649299500,
                "moonset": 1649349600,
                "moon_phase": 0.19,
                "temp": {
                    "day": 27.51,
                    "min": 20.48,
                    "max": 30.73,
                    "night": 22.09,
                    "eve": 30.73,
                    "morn": 20.9
                },
                "feels_like": {
                    "day": 27.92,
                    "night": 22.03,
                    "eve": 29.74,
                    "morn": 20.98
                },
                "pressure": 1019,
                "humidity": 50,
                "dew_point": 16.15,
                "wind_speed": 4.59,
                "wind_deg": 171,
                "wind_gust": 9.38,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": 19,
                "pop": 0,
                "uvi": 11.61
            },
            {
                "dt": 1649390400,
                "sunrise": 1649371454,
                "sunset": 1649416396,
                "moonrise": 1649388840,
                "moonset": 0,
                "moon_phase": 0.22,
                "temp": {
                    "day": 27.58,
                    "min": 19.91,
                    "max": 30.52,
                    "night": 21.78,
                    "eve": 30.43,
                    "morn": 19.91
                },
                "feels_like": {
                    "day": 27.7,
                    "night": 21.79,
                    "eve": 28.94,
                    "morn": 19.81
                },
                "pressure": 1017,
                "humidity": 46,
                "dew_point": 15.05,
                "wind_speed": 4.96,
                "wind_deg": 150,
                "wind_gust": 9.21,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 53,
                "pop": 0,
                "uvi": 11.77
            },
            {
                "dt": 1649476800,
                "sunrise": 1649457802,
                "sunset": 1649502814,
                "moonrise": 1649478360,
                "moonset": 1649439000,
                "moon_phase": 0.25,
                "temp": {
                    "day": 27.05,
                    "min": 19.55,
                    "max": 30.32,
                    "night": 21.32,
                    "eve": 30.28,
                    "morn": 19.55
                },
                "feels_like": {
                    "day": 27.34,
                    "night": 21.13,
                    "eve": 29.46,
                    "morn": 19.7
                },
                "pressure": 1014,
                "humidity": 48,
                "dew_point": 15.15,
                "wind_speed": 5.53,
                "wind_deg": 138,
                "wind_gust": 9.63,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 6,
                "pop": 0,
                "uvi": 12
            },
            {
                "dt": 1649563200,
                "sunrise": 1649544151,
                "sunset": 1649589233,
                "moonrise": 1649567940,
                "moonset": 1649528340,
                "moon_phase": 0.28,
                "temp": {
                    "day": 26.45,
                    "min": 19.43,
                    "max": 31.5,
                    "night": 22.04,
                    "eve": 31.5,
                    "morn": 19.43
                },
                "feels_like": {
                    "day": 26.45,
                    "night": 22.34,
                    "eve": 31.74,
                    "morn": 19.41
                },
                "pressure": 1011,
                "humidity": 52,
                "dew_point": 15.96,
                "wind_speed": 5.51,
                "wind_deg": 128,
                "wind_gust": 9,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 99,
                "pop": 0,
                "uvi": 12
            },
            {
                "dt": 1649649600,
                "sunrise": 1649630499,
                "sunset": 1649675652,
                "moonrise": 1649657640,
                "moonset": 1649617440,
                "moon_phase": 0.31,
                "temp": {
                    "day": 25.22,
                    "min": 20.55,
                    "max": 29.74,
                    "night": 22.84,
                    "eve": 29.74,
                    "morn": 20.55
                },
                "feels_like": {
                    "day": 25.65,
                    "night": 23.32,
                    "eve": 30.82,
                    "morn": 21.09
                },
                "pressure": 1012,
                "humidity": 71,
                "dew_point": 19.56,
                "wind_speed": 5.38,
                "wind_deg": 134,
                "wind_gust": 9.43,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 86,
                "pop": 0.36,
                "rain": 1.06,
                "uvi": 12
            }
        ]
    }

};


function reducer(state = initState, action) {
    switch (action.type) {
        //...
        case Types.SET_DATA_DAILY: {
            state = {
                ...state,
                day: { ...action.data }
            }
            return state;
        }
        case Types.SET_DATA_DAYS: {
            state = {
                ...state,
                days: { ...action.data }
            }
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