import React from 'react';
import './hour.scss';
import { timeFormat } from './../../mixins';
import { useStore } from '../../hooks';
import Chart from 'react-google-charts';

function Hour() {

    const [state] = useStore();

    const options = {
        title: "Weather",
        curveType: "function",
        legend: { position: "bottom" },
    };

    const getWeatherHour = (data) => {
        const result = [
            ["Hour", "Temp (°C)", "Fell like (°C)"]
        ];

        data.map((elem, index) => {
            result.push([timeFormat(elem.dt), elem.temp, elem.feels_like])
        })

        return result;
    }


    return (
        <div className="tab-hour">
            <Chart
                chartType="LineChart"
                width="100%"
                height="550px"
                data={getWeatherHour(state?.daysData?.hourly)}
                options={options}
            />
        </div>
    )
}


export default Hour;




