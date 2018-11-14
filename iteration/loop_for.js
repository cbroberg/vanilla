const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

// for ([initialisation]; [condition]; [final-expression]) {}

for (let i = 0; i < 100; i++) {
    log(i + 1)
}

var arr = []

for (let i = 0; i < 5; i++) {
    arr.push(i)
}

log(arr)

// For .. In - shorthand for arrays and objects
for (let i in arr) {
    if (i > 2) break
    log(arr[i]) // prints all array elements
}

var deepArray = [
    [1, 2], [3, 4], [5, 6]
]

for (let i in deepArray) {
    for (let j in deepArray[i]) { /* LOGNHAND: let j = 0; j < deepArray[i].length; j++*/
        log(deepArray[i][j])
    }
}

let person = {
    firstName: 'Christian',
    lastName: 'Broberg',
    arms: 2
}

let numArray = [3, 5, 7]
numArray.foo = 'Hello' // custom property on the array

let text = ''
for (let x in person) { // object property
    text += person[x] + ' ' // object value
    log(x)
}
log(text)

// Logs the index + the value
for (let i in numArray) {
    log(i + ': ' + numArray[i])
}

// Logs the value
for (let i of numArray) {
    log(i)
}

log(numArray.foo)