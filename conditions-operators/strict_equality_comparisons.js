const cls = require('../services/lib').cls
const log = require('../services/lib').log

/**
 * Strict Equality Comparisons.
 */

cls()

/* 
There are six primitive types in JavaScript: string, number, boolean, null, undefined, and symbol. 
When you do a “strict equality comparison” on two primitives that hold the same value, you’ll get true. 
For example: */

const one = 1
const uno = 1
log(one === uno) // true


/* 
Equality comparison problems arises because of non-primitive types — 
In JavaScript there is only one other type and that’s Object. 
Functions and Arrays are also just objects.
*/

const three = { n: 1 }
const trees = { n: 1 }
log(three === trees) // false
log(three === three) // true