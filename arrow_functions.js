const cls = require('./services/lib').cls
const log = require('./services/lib').log
const abort = require('./services/lib').abort

cls()

/* Arrow functions

Unlike functions, arrows share the same lexical this as their surrounding code. That can be a challenge when
defining methods for an object. This means it is not binding its own "this" and best suited for non method functions. 
Works great with Higher Order Functions such as Map, Filter & Reduce

When 'not' to use arrow functions
https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/

*/

/*
(param1, param2) => { statements }

Equivalent:
(param1, param2) => expression
(param1, param2) => { return expression }

Equivalent:
(singleParam) => { statements }
singleParam => { statements }

() => { statements }
() => expression
() => { return expression }

(param1, param2, paramN) => expression

*/

// NORMAL FUNCTION
function multiplyFunction(x, y) {
	return x * y
}

let multiplyFunctionWithLet = function (x, y) {
	return x * y
}

// ARROW FUNCTION
let multiplyArrow = (x, y) => x * y
let multiplyArrowWithReturn = (x, y) => { return x * y}

let materials = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'
]

log(materials)

let materialsLength1 = materials.map((material) => {
	return material.length
})

let materialsLength2 = materials.map(material => material.length)

log(materialsLength1)
log(materialsLength2)

// No binding of "this", so the example actually does what we think it does, it is incrementing this.age every second

function Person() {
	this.age = 0

	setInterval(() => {
		this.age++
		log(this.age)
		if (this.age === 10) {
			log(`Now age is 10 so let's get out of here`)
			abort()
		}
	}, 100)
}

var p = new Person()











/*
if (typeof(log(cls())) === 'undefined') { // undefined
    log('UNDEFINED ... and now to something else!')
}  

*/