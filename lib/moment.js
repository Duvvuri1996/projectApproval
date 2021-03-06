const moment = require('moment');
const momentTz = require('moment-timezone');
const timeZone = 'Asia/Calcuta';

let now = () => {
    return moment.utc().format()
}

let getLocalTime = () => {
    return moment().tz(timeZone).format()
}

let convertToLocalTime = (time) => {
    return momentTz.tz(time,timeZone).format('LLLL')
}

module.exports = {
    now : now,
    getLocalTime : getLocalTime,
    convertToLocalTime : convertToLocalTime
}