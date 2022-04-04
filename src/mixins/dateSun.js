
export const dateSun = (time) => {
    const dateSun = new Date(time * 1000);

    const result = `${dateSun.getHours() > 12 ? dateSun.getHours() - 12 : dateSun.getHours()}:${dateSun.getMinutes()}`;

    return result;
}