const cls = require('./services/lib').cls
const log = require('./services/lib').log

// const, let & var 

cls()

// const - can not be reassigned a new value
const pi = Math.PI
log(pi)

// let - block level variables - redefines own scope in loops
for (let i = 0; i < 100; i++) {
    log(i)
}

// var - global and reassignable - faster than let in loops
for (var j = 0; j < 100; j++) {
    log(j)
}

log('')

