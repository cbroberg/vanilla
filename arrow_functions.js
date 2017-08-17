const cls = require('./services/lib').cls
const log = require('./services/lib').log

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

let materialsLength2 = materials.map((material) => material.lenght)

log(materialsLength1)
log(materialsLength2)
















/*
if (typeof(log(cls())) === 'undefined') { // undefined
    log('UNDEFINED ... and now to something else!')
}  

*/