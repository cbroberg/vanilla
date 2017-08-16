var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

var original = [true, true, undefined, false, null]

// slice
var copy1 = original.slice(0)
log(copy1)

// spread operator
var copy2 = [...original]
log(copy2)

// DEEP copying
var deepArray = [['JavaScript']]
log(deepArray)
var shallowCopy = deepArray.slice(0)
log(shallowCopy)

// NOT deep
shallowCopy[[0]].push('is great')
log(shallowCopy)

// DEEP
var deepCopy = JSON.parse(JSON.stringify(deepArray))
log(deepCopy)

deepCopy[0].push('is a super power')
log(deepCopy)
log(deepCopy[0])
