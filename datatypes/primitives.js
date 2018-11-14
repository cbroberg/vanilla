const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

/* 
A primitive (primitive value, primitive data type) is data that is not an object and has no methods. 
In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are immutable (cannot be changed).

Primitive wrapper objects in JavaScript
Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:

String for the string primitive.
Number for the number primitive.
Boolean for the Boolean primitive.
Symbol for the Symbol primitive.
The wrapper's valueOf() method returns the primitive value.

*/

let s = String('Hello World')
let n = Number(5)
let b = Boolean(true)
let sym = Symbol('A')

log(s)
log(typeof (s))

if (s.valueOf() === 'Hello World') {
	log('Yeahhhh ... ')
}

if (s !== 'HELLO WORLD') {
	log('And it is not!')
}

log(n, b, sym)