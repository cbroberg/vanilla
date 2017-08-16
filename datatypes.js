var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

// There are 7 data types in JavaScript

// Boolean
var data = true
if (data) {
    log(`Boolean value: ${data}`)
} else {
    log(`Boolean value: ${data}`)
}

// null
var n = null
log(n * 32)

// undefined
var a
log(a) // undefined
log(a + 2) // NaN   

// Number
var num = 3.6
var ber = 6.4
log(num + ber)

// String
var name = 'Christian'
log('My name is ' + name)

// Symbol
var sym1 = Symbol('foo')
var sym2 = Symbol('foo')
log(sym1 === sym2)
log(String(sym1) === String(sym2))
log(String(sym1))

// Object
var myCar = {}
myCar.make = 'Ford'
myCar.model = 'Mustang'

log(`My car is a ${myCar.make}, and the model is a ${myCar.model}`)

var myNewCar = {
    make: 'Ford',
    model: 'Mustang'
}

log(`My new car is a ${myNewCar.make}, and the model is a ${myNewCar.model}`)


