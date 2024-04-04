function getTimeOFDay(time){
    if (time >= 4 && time <= 11) return "Morning";
    if(time >= 12 && time <= 16) return "Afternoon";
    if(time >= 17 || time <3) return "Evening";
}

function isMorning(time){
    return time >= 4 && time <= 11;
}

function isAfternoon(time){
    return time >= 12 && time <= 16;
}

function isEvening(time){
    return time >= 17 || time <3;
}

module.exports = { getTimeOFDay, isMorning, isAfternoon, isEvening};