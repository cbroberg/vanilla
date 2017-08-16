var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

// > < <= >= ==/=== !=

var age = 17

if (age >= 18) {
    log('You are an adult')
} else if (age < 2) {
    log('You are a baby')
} else if (age < 18) {
    log('You are a child')
}

if (age === 18) { 
    log('You are 18')
} // === equal value and equal type 

if (age !== 18) { 
    log('You are NOT 18')
} // !== not equal value and equal type 

// eslint-disable-next-line
log(3 == '3') // true
log(3 === '3') // false

