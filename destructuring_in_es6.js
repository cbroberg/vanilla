const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

/* Destructuring 
The destructuring assignment syntax is a JavaScript expression that makes it possible to 
extract (unpack) values from arrays, or properties from objects, into distinct variables.

*/

// Assign variables from objects

// Assign variables from nested objects

// Assign variables from arrays

// Rest operator to reassign array elements

var a, b, rest
[a, b, ...rest] = [10, 20, 30, 40, 50];
log(a, b, rest)

