import * as Types from './constant';

export const findByCityName = cityName => ({
    type: Types.FIND_BY_CITY_NAME,
    cityName
})

export const setDataDaily = data => ({
    type: Types.SET_DATA_DAILY,
    data
})

export const setDataDays = data => ({
    type: Types.SET_DATA_DAYS,
    data
})




