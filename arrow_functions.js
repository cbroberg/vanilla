const cls = require('./services/lib').cls
const log = require('./services/lib').log

/* Arrow functions

Unlike functions, arrows share the same lexical this as their surrounding code. That can be a challenge when
defining methods for an object. 

When 'not' to use arrow functions
https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/

*/


if (typeof(log(cls())) === 'undefined') { // undefined
    log('UNDEFINED ... and now to something else!')
}  



