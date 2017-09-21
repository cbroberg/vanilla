const cls = require('./services/lib').cls
const log = require('./services/lib').log

/* Functional programming is all about transformations. 
For the actual transformations we use things called transformers. 
Transformers are typically implemented as pure functions that takes an input and produces a result. 
There is a formal name for the transformation process itself: morphism.

*/

cls()

// Endomorphism
// Endomorphism is a transformation that satisfies the criteria: input and output of the transformer must be from the same category.
// add1 :: Number -> Number
const add1 = val => val + 1

log(add1(2))


// Isomorphism
// Isomorphism is a pair of transformations between two categories with no data loss.

// objToArray :: {a: Number} -> SingleItemArray
//     SingleItemArray = Array.<Number>
let obj = { value: 12345 }
let arr = []
const objToArray = ({ value }) => [value]

arr = objToArray(obj)
log(arr)

// arrayToObj :: SingleItemArray -> {a: Number}
//     SingleItemArray = Array.<Number>
const arrayToObj = ([value]) => ({ value })
obj = arrayToObj(arr)
log(obj)

// Homomorphism
// Homomorphism is a structure preserving transformation.
// We always stay in the same category.What does it even mean ? 
// Mapping a JavaScript Array is one example.When you map an array, you transform item by item and the result is again an array.

const a = [1, 2, 3] // => Array[1, 2, 3]
const b = a.map(add1) // => Array[2, 3, 4]
log(b)

/*
Catamorphism
Catamorphism is a way folding a type into a value.The transformation is done from one category into another one.It is usually not possible to transform the value back to type because the structure of the type is lost during the transformation.
*/
const type = [1, 2, 3]
const value = type.reduce((sum, item) => sum + item, 0) // Number(6)

log(value)

