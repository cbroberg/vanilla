const cls = require('./services/lib').cls
const log = require('./services/lib').log

/*
How to use Memoize to cache JavaScript function results and speed up your code.

Memoization is an optimization technique used primarily to speed up computer programs 
by storing the results of expensive function calls and returning the cached result when 
the same inputs occur again

https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e

*/

cls()

// a simple function to add something
const add1 = (n) => (n + 10)
add1(9)
// a simple memoized function to add something
const memoizedAdd1 = () => {
    let cache = {}
    return (n) => {
        if (n in cache) {
            log('Fetching from cache')
            return cache[n]
        }
        else {
            log('Calculating result')
            let result = n + 10
            cache[n] = result
            return result
        }
    }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd1()
log(newAdd(9)) // calculated
log(newAdd(9)) // cached


// a simple pure function to get a value adding 10
const add2 = (n) => (n + 10)
log('Simple call', add2(3))

// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let n = args[0]  // just taking one argument here
        if (n in cache) {
            log('Fetching from cache')
            return cache[n]
        }
        else {
            log('Calculating result')
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

// creating a memoized function for the 'add' pure function
const memoizedAdd2 = memoize(add2)
log(memoizedAdd2(3))  // calculated
log(memoizedAdd2(3))  // cached
log(memoizedAdd2(4))  // calculated
log(memoizedAdd2(4))  // cached

