const cls = require('./services/lib').cls
const log = require('./services/lib').log

// Check if a property is in an object

cls()

var myObject = {
    name: 'ODEUM CodeJS'
}

if (myObject.name) {
    log('It is in there!')
}

if (myObject.hasOwnProperty('name')) {
    log('It is still in there :) ')
}

log('name' in myObject) // true

log(myObject.hasOwnProperty('valueOf')) // false
log('valueOf' in myObject) // valueOf prototype property - true

