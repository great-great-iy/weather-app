const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000)
    return days[date.getDay()]
}