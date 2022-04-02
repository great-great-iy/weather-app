export const dayFormat = (strDate) => {
    const now = new Date(strDate * 1000);
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const fullYear = now.getFullYear();

    return `${date < 10 ? '0' + date : date} - ${(month + 1) < 10 ? '0' + month : month} - ${fullYear}`;
}