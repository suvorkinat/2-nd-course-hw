function date(number) {
    if ((number >= 1 && number <= 2) || number === 12) {
        return `Winter`;    
    } else if (number >= 3 && number <= 5) {
        return `Spring`;
    } else if (number >= 6 && number <= 8) {
        return `Summer`;
    } else if (number >= 9 && number <= 11) {
        return `Autumn`;
    } else {
        return `There is no such month!`;
    }
}
alert(date(number));