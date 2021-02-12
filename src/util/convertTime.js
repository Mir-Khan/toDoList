const convertTime = (remainingTime) => {
    // if the todo is overdue, we're going to just return 000:00:00:00:00
    if (remainingTime <= 0) {
        return "000:00:00:00"
    }

    // first all the numbers to be displayed are calculated
    let seconds = Math.floor(((remainingTime / 1000))) % 60;
    let minutes = Math.floor(((remainingTime / (1000 * 60)))) % 60;
    let hours = Math.floor(((remainingTime / (1000 * 60 * 60)))) % 24;
    let days = Math.floor(((remainingTime / (1000 * 60 * 60 * 24))));

    // then the strings to be shown are properly formatted here
    let secString;
    let minString;
    let hoursString;
    let daysString;

    if (seconds < 10) {
        secString = '0' + seconds.toString();
    } else {
        secString = seconds.toString()
    }

    if (minutes < 10) {
        minString = '0' + minutes.toString();
    } else {
        minString = minutes.toString()
    }

    if (hours < 10) {
        hoursString = '0' + hours.toString();
    } else {
        hoursString = hours.toString();
    }

    if (days < 10) {
        daysString = '00' + days.toString();
    } else if (days < 100) {
        daysString = '0' + days.toString();
    } else {
        daysString = days.toString();
    }

    // we now return the string to display the time remaining
    return daysString + ':' + hoursString + ':' + minString + ':' + secString;
}

export default convertTime;