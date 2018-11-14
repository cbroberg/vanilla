const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()


var age = 19

// Normal if expression
if (age >= 18) {
    log('You are an adult')
} else {
    log('You are a kid')
}

age = 15
// Ternary operator - condition ? expression1 : experssion2
log((age >= 18) ? 'You are an adult!' : 'You are a kid!') // if age >= 18 then 'adult' else 'kid'

var stop

// eslint-disable-next-line
age > 18 ? (
    log('OK, you can go'),
    stop = false,
    log(stop)
) : (
    log('Sorry, you are much too young!'),
    stop = true,
    log(stop)
)

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted'

log(access) // Access granted
