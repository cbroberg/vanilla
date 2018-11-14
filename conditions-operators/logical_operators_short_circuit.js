var cls = require('../services/lib').cls
var log = require('../services/lib').log

cls()

// AND: &&  OR: ||

var num = 6

if (num > 5 && num < 10) {
    log('Unicycle')
}

num = 11

if (num > 5 || num < 10) {
    log('Unicycle')
}

var test = true

var isTrue = () => {
    log('Test is true')
}

if (test) {
    isTrue()
}

// Short-circuit Evaluation
( test && isTrue() )

function theSameOldFoo(name) {
    name = name || 'Bar' // default value (Short-circuit Evaluation)
    log('My best friends name is ' + name)
}

function theGoodOldFoo(name = 'Foo') {
    name = name || 'Bar' // default value is passed through the paramameter
    log('My best friends name is ' + name)
}

theSameOldFoo()
theSameOldFoo('Christian')

theGoodOldFoo()
theGoodOldFoo('Christian')
