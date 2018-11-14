const cls = require('../services/lib').cls
const log = require('../services/lib').log

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

const scheduledUpdate = async () => {
	// Here is where the real update executes
	console.log('Now updating ... please wait!')
}

const update = async (when) => {
	console.log('Update will start in', when, 'seconds')
	await setTimeout(scheduledUpdate, (when * 1000))
}

// update(5).then((res) =>	console.log(res))
update(5)