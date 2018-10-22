const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

const object1 = {
	a: 1,
	b: 2,
	c: 3
}

const object2 = Object.assign({ c: 4, d: 5 }, object1)

console.log(object2.c, object2.d)
console.log(object1)
console.log(object2)

// expected output: 3 5

