const cls = require('./services/lib').cls
const log = require('./services/lib').log

// Symbols - Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
// Symbols are unique

cls()

// Creation

let symbol1 = Symbol()
let symbol2 = Symbol('symbol 2') // the string is only an identifier 

log(symbol1 === symbol2) // false
log(typeof symbol1)

// Use case 1: Symbols as property keys

const MY_KEY = Symbol()
let obj = {}

obj[MY_KEY] = 123
log(obj[MY_KEY])

// Use case 2: Constants representing concepts

const COLOR_RED = Symbol('Red')
const COLOR_ORANGE = Symbol('Orange')
const COLOR_YELLOW = Symbol('Yellow')
const COLOR_GREEN = Symbol('Green')
const COLOR_BLUE = Symbol('Blue')
const COLOR_VIOLET = Symbol('Violet')

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN
        case COLOR_ORANGE:
            return COLOR_BLUE
        case COLOR_YELLOW:
            return COLOR_VIOLET
        case COLOR_GREEN:
            return COLOR_RED
        case COLOR_BLUE:
            return COLOR_ORANGE
        case COLOR_VIOLET:
            return COLOR_YELLOW
        default:
            throw new SyntaxError('Unknown color: ' + color)
    }
}

log(getComplement(COLOR_ORANGE))

