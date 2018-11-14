const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

var text = ''
var n = 0
var i = 0

// While .. 
while (n < 5) {
    n++
    if (n === 3) continue
    log('n = ' + n)
}

// Do ... While - runs minimum 1 time because the condition is checked last (similar to Repeat ... Until)
do {
    i++
    text = 'The number is ' + i

    if (i === 5) break
    log(text)
}
while (i < 5)

