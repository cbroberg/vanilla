const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

var p = new Promise((resolve, reject) => {

// do some async task and then ...

let good_condition = true

if (good_condition) {
    resolve(log('Success!'))
} else {
    reject(log('Failure!'))
}

})

p.then(() => {
    // do something with the result

}).catch((me) => {
    log(me) // do something with the error
})


function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

var p2 = timeout(1000).then(() => {
    return timeout(2000)
}).then(() => {
    throw new Error("hmm")
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)])
})

log(p2.then(() => {

}))