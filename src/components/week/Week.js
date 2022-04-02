import React, { useState } from "react";
import { useStore } from "../../hooks";
import { dateFormat, timeFormat, dayFormat, getTempCurrent, rounding } from "../../mixins";
import "./week.scss";

function Week() {

    const [state] = useStore();
    const dates = [...state?.daysData?.daily];
    const [active, setActive] = useState(0);
    const [datePicked, setDatePicked] = useState(dates[0]);

    const handlerPick = (elem, index) => {
        setDatePicked(elem);
        setActive(index);
    }

    const showWeather = (dates) => {
        let result = null;

        result = dates.map((elem, index) => {
            return (
                <div key={index} className={`tab-week__item col zoom-in ${active === index ? 'tab-week__item--active' : ''}`} onClick={() => handlerPick(elem, index)}>
                    <div className="week">
                        <div className="week-header">
                            <div className="week-header__day">{dateFormat(elem.dt)}</div>
                            <div className="week-header__date">{dayFormat(elem.dt)}</div>
                        </div>
                        <div className="week-content">
                            <div className="week-content__img">
                                <img
                                    src={`http://openweathermap.org/img/w/${elem.weather[0]?.icon}.png`}
                                    alt={elem.weather[0]?.icon}
                                    title={elem.weather[0]?.description}
                                    className="week-weather-img"
                                />
                            </div>
                            <div className="week-content__deg">
                                {rounding(elem.temp?.min)}°C <br />
                                {rounding(elem.temp?.max)}°C
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return result;
    }

    // tab-week__item--active
    return (
        <>
            <div className="row tab-week">
                {showWeather(dates)}
            </div>

            <div className="week-picked">
                <div className="week-picked__header">
                    <p>{`${dateFormat(datePicked?.dt)}, ${dayFormat(datePicked?.dt)}`}</p>
                </div>

                {/* <!-- Start Week Down Content --> */}
                <div className="row">
                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="w-full h-full"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fillRule="nonzero"
                                        d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Temp current</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{getTempCurrent(datePicked)}°C</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="w-full h-full"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fillRule="nonzero"
                                        d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Temp</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{rounding(datePicked?.temp?.min)}°C - {rounding(datePicked?.temp?.max)}°C</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 30 30"
                                className="icon-color icon-size"
                                height="1em"
                                width="1em"
                                style={{ color: "#4590fd" }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
                                    c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
                                    s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
                                    c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
                                    S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
                                    c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
                                    C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
                                    s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
                                    c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
                                    c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
                                    c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
                                    M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
                                    c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
                                    c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
                                    c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
                                    c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
                                    l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z"
                                ></path>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Humidity </p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{datePicked.humidity}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="text-warning icon-size"
                                height="1em"
                                width="1em"
                                style={{ color: "#ffc107" }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M128 416h256v48H128zM256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z"></path>
                                <path d="M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z"></path>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Wind speed</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{datePicked.wind_speed} km/h</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 30 30"
                                className="text-warning icon-size"
                                height="1em"
                                width="1em"
                                style={{ color: "#ffc107" }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.75,15.36c0-0.25,0.1-0.48,0.3-0.69c0.22-0.19,0.46-0.29,0.7-0.29h2.33c0.27,0,0.49,0.1,0.67,0.29
                                                c0.18,0.19,0.27,0.43,0.27,0.69c0,0.29-0.09,0.53-0.27,0.72c-0.18,0.19-0.41,0.29-0.67,0.29H3.75c-0.27,0-0.5-0.1-0.7-0.3
                                                C2.85,15.86,2.75,15.62,2.75,15.36z M6.08,7.38c0-0.27,0.09-0.5,0.26-0.68C6.57,6.5,6.8,6.4,7.05,6.4c0.26,0,0.49,0.1,0.68,0.29
                                                l1.64,1.65c0.19,0.22,0.28,0.45,0.28,0.69c0,0.28-0.09,0.52-0.27,0.7s-0.4,0.28-0.66,0.28c-0.24,0-0.48-0.1-0.7-0.29L6.34,8.11
                                                C6.17,7.9,6.08,7.65,6.08,7.38z M8.08,20.88c0-0.28,0.1-0.51,0.29-0.68c0.18-0.17,0.4-0.26,0.68-0.26h2.63l3.11-2.92
                                                c0.1-0.08,0.21-0.08,0.34,0l3.16,2.92h2.77c0.27,0,0.5,0.09,0.69,0.28c0.19,0.18,0.29,0.41,0.29,0.67c0,0.27-0.1,0.5-0.29,0.69
                                                c-0.19,0.19-0.42,0.29-0.69,0.29h-3.38c-0.1,0-0.2-0.02-0.29-0.07l-2.41-2.27l-2.39,2.27c-0.08,0.05-0.17,0.07-0.28,0.07H9.05
                                                c-0.27,0-0.5-0.1-0.69-0.29C8.17,21.38,8.08,21.15,8.08,20.88z M9,15.36c0,0.97,0.21,1.85,0.62,2.64c0.02,0.12,0.11,0.18,0.25,0.18
                                                h1.88c0.07,0,0.12-0.03,0.15-0.08c0.03-0.06,0.02-0.12-0.02-0.19c-0.64-0.77-0.96-1.62-0.96-2.55c0-1.12,0.4-2.08,1.2-2.87
                                                c0.8-0.79,1.76-1.18,2.89-1.18c1.12,0,2.07,0.39,2.86,1.18c0.79,0.79,1.19,1.74,1.19,2.87c0,0.94-0.32,1.79-0.95,2.55
                                                c-0.04,0.07-0.05,0.13-0.03,0.19s0.07,0.08,0.15,0.08h1.9c0.13,0,0.21-0.06,0.23-0.18C20.8,17.23,21,16.35,21,15.36
                                                c0-0.81-0.16-1.59-0.48-2.32c-0.32-0.74-0.75-1.37-1.28-1.91c-0.53-0.53-1.17-0.96-1.91-1.28c-0.74-0.32-1.51-0.47-2.32-0.47
                                                c-0.81,0-1.59,0.16-2.33,0.47c-0.74,0.32-1.38,0.74-1.92,1.28c-0.54,0.53-0.97,1.17-1.29,1.91C9.16,13.77,9,14.54,9,15.36z
                                                M14.03,6.4v-2.3c0-0.29,0.09-0.52,0.28-0.71s0.43-0.28,0.71-0.28c0.28,0,0.51,0.09,0.7,0.28S16,3.83,16,4.11v2.3
                                                c0,0.29-0.09,0.52-0.28,0.71c-0.18,0.18-0.42,0.28-0.7,0.28c-0.29,0-0.52-0.09-0.71-0.28C14.12,6.93,14.03,6.69,14.03,6.4z
                                                M20.38,9.04c0-0.25,0.09-0.48,0.27-0.69l1.62-1.65c0.19-0.19,0.43-0.29,0.7-0.29c0.27,0,0.51,0.1,0.69,0.29
                                                c0.19,0.19,0.28,0.42,0.28,0.69c0,0.29-0.09,0.53-0.26,0.73L22,9.73c-0.21,0.19-0.45,0.29-0.7,0.29c-0.27,0-0.49-0.09-0.66-0.28
                                                S20.38,9.32,20.38,9.04z M22.99,15.36c0-0.27,0.09-0.5,0.27-0.69c0.18-0.19,0.4-0.29,0.66-0.29h2.35c0.27,0,0.5,0.1,0.69,0.29
                                                c0.19,0.19,0.29,0.43,0.29,0.69c0,0.28-0.1,0.51-0.29,0.71s-0.42,0.3-0.69,0.3h-2.35c-0.27,0-0.49-0.1-0.67-0.29
                                                C23.08,15.88,22.99,15.64,22.99,15.36z"
                                ></path>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Sunrise</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{timeFormat(datePicked.sunrise)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 30 30"
                                className="text-warning icon-size"
                                height="1em"
                                width="1em"
                                style={{ color: "#ffc107" }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.88,15.47c0-0.28,0.1-0.5,0.3-0.68c0.17-0.18,0.4-0.26,0.68-0.26h2.31c0.27,0,0.49,0.09,0.67,0.27
                                                c0.17,0.18,0.26,0.4,0.26,0.67c0,0.28-0.09,0.52-0.27,0.71c-0.18,0.19-0.4,0.29-0.66,0.29H3.87c-0.27,0-0.5-0.1-0.69-0.3
                                                C2.98,15.97,2.88,15.74,2.88,15.47z M6.17,7.61c0-0.28,0.08-0.51,0.25-0.68c0.2-0.2,0.43-0.3,0.7-0.3c0.29,0,0.51,0.1,0.68,0.3
                                                l1.62,1.63c0.46,0.44,0.46,0.89,0,1.35c-0.19,0.19-0.4,0.28-0.65,0.28c-0.22,0-0.44-0.09-0.68-0.28L6.43,8.29
                                                C6.26,8.11,6.17,7.88,6.17,7.61z M8.14,20.89c0-0.26,0.1-0.49,0.3-0.69c0.18-0.18,0.41-0.27,0.68-0.27h3.22
                                                c0.11,0,0.2,0.02,0.28,0.08l2.35,2.22L17.36,20c0.07-0.05,0.17-0.08,0.29-0.08h3.3c0.27,0,0.5,0.09,0.69,0.28
                                                c0.19,0.19,0.29,0.42,0.29,0.68c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.69,0.29h-2.68l-3.14,2.84
                                                c-0.12,0.09-0.23,0.09-0.33,0l-3.08-2.84h-2.6c-0.27,0-0.5-0.1-0.69-0.29C8.24,21.39,8.14,21.16,8.14,20.89z M9.08,15.47
                                                c0,0.99,0.19,1.87,0.58,2.62c0.06,0.11,0.15,0.16,0.27,0.16h1.87c0.08,0,0.13-0.02,0.15-0.07c0.02-0.05-0.01-0.11-0.07-0.18
                                                c-0.59-0.74-0.89-1.59-0.89-2.53c0-1.1,0.39-2.04,1.18-2.81c0.79-0.77,1.74-1.16,2.85-1.16c1.1,0,2.04,0.39,2.83,1.16
                                                c0.78,0.78,1.18,1.71,1.18,2.8c0,0.94-0.3,1.79-0.89,2.53c-0.07,0.07-0.09,0.13-0.07,0.18c0.02,0.05,0.07,0.07,0.15,0.07h1.88
                                                c0.13,0,0.21-0.05,0.24-0.16c0.41-0.78,0.62-1.66,0.62-2.62c0-0.79-0.16-1.56-0.47-2.29s-0.74-1.37-1.27-1.9s-1.16-0.95-1.89-1.27
                                                c-0.73-0.32-1.5-0.47-2.3-0.47c-0.8,0-1.57,0.16-2.3,0.47c-0.73,0.32-1.36,0.74-1.89,1.27s-0.95,1.16-1.27,1.9
                                                S9.08,14.68,9.08,15.47z M14.04,6.66V4.33c0-0.27,0.1-0.5,0.29-0.69s0.42-0.29,0.69-0.29c0.27,0,0.5,0.1,0.69,0.29
                                                s0.29,0.42,0.29,0.69v2.32c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.69,0.29c-0.27,0-0.5-0.1-0.69-0.29
                                                C14.13,7.15,14.04,6.93,14.04,6.66z M20.31,9.24c0-0.28,0.09-0.51,0.26-0.67l1.63-1.63c0.16-0.2,0.39-0.3,0.68-0.3
                                                c0.27,0,0.5,0.1,0.68,0.29c0.18,0.19,0.27,0.42,0.27,0.69c0,0.28-0.08,0.51-0.25,0.68l-1.66,1.63c-0.23,0.19-0.46,0.28-0.69,0.28
                                                c-0.26,0-0.48-0.09-0.66-0.28C20.4,9.74,20.31,9.51,20.31,9.24z M22.9,15.47c0-0.27,0.09-0.49,0.26-0.67
                                                c0.17-0.18,0.4-0.27,0.67-0.27h2.32c0.27,0,0.5,0.09,0.69,0.27c0.19,0.18,0.29,0.4,0.29,0.67c0,0.27-0.1,0.5-0.29,0.7
                                                c-0.19,0.2-0.42,0.3-0.69,0.3h-2.32c-0.26,0-0.48-0.1-0.66-0.29C22.99,15.99,22.9,15.75,22.9,15.47z"
                                ></path>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Sunset</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{timeFormat(datePicked.sunset)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">

                        <div className="week-picked__logo">
                            <img
                                src={`http://openweathermap.org/img/w/${datePicked.weather[0]?.icon}.png`}
                                alt="icon"
                                className="week-weather-img"
                            />
                        </div>

                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Description</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{datePicked.weather[0]?.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="week-picked__content col">
                        <div className="week-picked__logo">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 256 512"
                                className="icon-color icon-size"
                                height="1em"
                                width="1em"
                                style={{ color: "#4590fd" }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path>
                            </svg>
                        </div>
                        <div className="week-picked__decs">
                            <div className="week-picked__decs-title">
                                <p>Atmospheric pressure</p>
                            </div>
                            <div className="week-picked__decs-content">
                                <p>{datePicked.pressure} hPa</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- End Week Down Content Box --> */}
                </div>
            </div>
        </>
    );
}

export default React.memo(Week);
