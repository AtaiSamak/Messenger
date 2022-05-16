const getFormattedTime = (milliseconds) => {
    const time = new Date(milliseconds);
    return `${time.getHours()}:${time.getMinutes()} ${
        time.getHours() >= 12 ? "PM" : "AM"
    }`;
};

export default getFormattedTime;
