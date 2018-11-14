var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

let day

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
        day = 'Friday'
        break

    case 6:
        day = 'Saturday'
        break
    default:
        log('There was an error getting day ...')
        break
}

log(day)

var animal = 'Dog'

switch (animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        log(`A ${animal} will go on Noah's Ark`)
        break
    case 'Spoon':
        log(`A ${animal} is not an animal`)
        break
    case 'Dinosaur':
    default:
        log(`A ${animal} will go on Noah's Ark`)
        break
}
