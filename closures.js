const cls = require('./services/lib').cls
const log = require('./services/lib').log

/*
Closures:
A closure is the combination of a function and the environment within which that function was declared.

JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

cls()

let makeName = (name) => {
    let displayName = () => {
        log(`${name}\n`)
    }
    return displayName
}

// name1 and name2 are both closures
var name1 = makeName('JavaScript is a superpower')
var name2 = makeName('React is extending the superpowers')

name1()
name2()

var counter = (() => {
    var privateCounter = 0
    let changeBy = (value) => {
        privateCounter += value
    }
    return {
        increment: () => { // closure with fat arrow
            changeBy(1)
        },
        decrement() { // closure
            changeBy(-1)
        },
        value() { // closure
            return privateCounter
        }
    }
})()

log(counter.value()) // 0
counter.increment()
counter.increment()
log(counter.value()) // 2
counter.decrement()
log(counter.value()) // 1

