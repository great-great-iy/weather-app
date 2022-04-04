export const getTempCurrent = (dates) => {
    const now = new Date();
    const hour = now.getHours();

    let tempCurrent = null;

    if (hour >= 6 && hour < 12) {
        tempCurrent = dates?.temp?.morn;
    } else if (hour < 18) {
        tempCurrent = dates?.temp?.eve;
    } else {
        tempCurrent = dates?.temp?.night;
    }

    return tempCurrent;
}