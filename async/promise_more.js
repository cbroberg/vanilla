const cls = require('../services/lib').cls
const log = require('../services/lib').log
const chalk = require('chalk')

cls()

log(chalk.yellow('Ready for some promises?'))


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

var promiseCount = 0

function testPromise() {
    let thisPromiseCount = ++promiseCount
    log(thisPromiseCount + ': Started - Sync code started')
    let emulatedWaitingTime = Math.round(Math.random() * 2000 + 1000)

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            log(thisPromiseCount + ': Promise started - Async code started')
            // This is only an example to create asynchronism
            setTimeout(
                function() {
                    // We fulfill the promise with a random number of seconds to emulate network latency (or something else holding up the resolve!
                    log(`\nTime: ${emulatedWaitingTime / 1000} seconds `)
                    resolve(thisPromiseCount)                    
                }, emulatedWaitingTime)
        }
    )

    // We define what to do when the promise is resolved/rejected with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
        function(val) {
            log(`${val}: Promise fulfilled - Async code terminated in ${emulatedWaitingTime / 1000} seconds`)
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            log('Handle rejected promise ('+reason+') here.')
        })

    log(thisPromiseCount + ': Promise made - Sync code terminated')
}

testPromise()
testPromise()
testPromise()

log('')