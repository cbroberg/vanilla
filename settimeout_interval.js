const cls = require('./services/lib').cls
const log = require('./services/lib').log

// setInterval and setTimeout

cls()

// setTimeout

setTimeout(bye, 10000)

log('Hello')

// var timeoutID = setTimeout(bye, 10000)
// clearTimeout(timeoutID)

function bye() {
    log('Goodbye')
    clearInterval(intervalId)
}


// setInterval
var count = 0
var intervalId = setInterval(counter, 1000)

function counter() {
    log(++count)
}

let byebye = () => {
    log('Bye Bye')
}

