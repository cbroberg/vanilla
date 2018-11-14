const cls = require('../services/lib').cls
const log = require('../services/lib').log
const chalk = require('chalk')

// Dates, managing and displaying

cls()

var date1 = new Date()

log(date1.toString())
log(date1.toDateString())
log(date1.toTimeString())
log(date1.toUTCString())

var date2 = new Date()

log(date2.getDate())
log(date2.getDay())
log(date2.getMonth())
log(date2.getFullYear())

let doSomething = () => {
    for (var i = 0; i < 1000000000; i++) { // 1 billion loops

    }
}

var startTime = new Date()
doSomething()
var endTime = new Date()

var elapsedTime = endTime.getTime() - startTime.getTime()
log(elapsedTime)


var isItFriday = () => {
    let day = ''
    switch(new Date().getDay()) {
            case 0:
            day = 'Sunday'
            break

            case 1:
            day = 'Monday'
            break

            case 2:
            day = 'Tuesday'
            break

            case 3:
            day = 'Wednesday'
            break

            case 4:
            day = 'Thursday'
            break

            case 5:
            day = `${chalk.red('YES')} ${chalk.green('it')} ${chalk.cyan('is')} ${chalk.yellow('FRIDAY!!!')}`
            break

            case 6:
            day = 'Saturday'
            break
            default:
            log('There was an error getting day ...')
            break
    }
    return day
}

log(isItFriday())

// Get Week Number
var getWeekNumber = function(date) {
    var d = new Date( + date)
    d.setHours(0, 0, 0)
    d.setDate(d.getDate() + 4 - (d.getDay() || 7))
    return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) +1 ) / 7)
}

log(getWeekNumber(new Date()))

