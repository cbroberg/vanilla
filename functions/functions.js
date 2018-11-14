var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

function square(number) {
    return number * number
}

log(square(4))


var someVar = 'Hat'

function myFun() {
    var someVar = 'Shoes'
    log(someVar)
}

myFun()
log(someVar)

// Function hoisting - using a function before it is declared
log(addSquares(1, 3))

// Nested functions

function addSquares(a, b) {
    function square(x) {
        return x * x        
    }
    return square(a) + square(b)
}

log(addSquares(2, 3))
log(addSquares(3, 4))
log(addSquares(4, 5))

