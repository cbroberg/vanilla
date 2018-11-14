const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

const someString = 'This is a string'
const someNumber = 5

if (typeof (log(cls())) === 'undefined') { // undefined
	log('UNDEFINED ... and now to something else!')
}  

log(typeof(someString))

if (typeof(someNumber) === 'number') {
	log(typeof(someNumber))
}

