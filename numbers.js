var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

var num1 = (12 + 2) / 7 * 10
var num2 = 12 % 7 // modulus

num1++
num1--

num1 += 5 
num1 -= 3
num1 *= 2
num1 /= 4


log(num1)
log(++num2)

function isEven(n) {
   return n % 2 === 0
}

log(isEven(4)) // true
log(isEven(5)) // false
log(!isEven(5)) // true

