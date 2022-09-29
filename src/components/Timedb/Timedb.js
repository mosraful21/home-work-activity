const addToDb = (breakTime) => {
    let BreakTime = {};

    const storedTime = localStorage.getItem('breakTime');
    if (storedTime) {
        BreakTime = JSON.parse(storedTime);
    }


    const time = BreakTime[breakTime];
    if (time) {
        const newTime = time + 1;
        BreakTime[breakTime] = newTime;
    }
    else {
        BreakTime[breakTime] = 1;
    }
    localStorage.setItem('breakTime', JSON.stringify(BreakTime));
    
}

const getStoredTime = () => {
    let BreakTime = {};

    const storedTime = localStorage.getItem('breakTime');
    if (storedTime) {
        BreakTime = JSON.parse(storedTime);
    }
    return BreakTime;
}

export { addToDb, getStoredTime }
