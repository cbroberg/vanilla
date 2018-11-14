const cls = require('./services/lib').cls
const log = require('./services/lib').log

/*
THIS keyword:
What is “this”
when a function is called a new execution context is created by the JavaScript engine that exists until the function has finished executing. 
Every execution context contains a reference to an object, “this”.
What “this” refers to depends on where and how the function that is being executed is called (and defined - arrows). Identifying where the function is called (the “call-site”) will help you determine what “this” refers to.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
*/

cls()

// let a

// Default binding of "this" - beware a is not defined but the example runs
function fooFunction() {
    this.a = 'foo' // eslint-disable-next-line
    log(a) // foo
}

fooFunction() // call-site 

// Implicit binding of "this"
function barFunction1() {
    log(this)
}

var fooObject = {
    a: 'foo',
    b: barFunction1
}
fooObject.b()

log('-----')

// Explicit Binding
function barFunction2() {
    log(this)
}

var fooObject2 = {
    a: 'foo'
}

barFunction2.bind(fooObject2)()
barFunction2.call(fooObject2)
barFunction2.apply(fooObject2)

log('')

// New Binding of "this
function fooFunction2() {
    this.a = 'a'
    this.log = function() {
        log(this)
    }
}
var barFunction3 = new fooFunction2()
barFunction3.log()

function add(c, d) {
    return this.a + this.b + c + d
}

log('')

// Arrow function binds "this" to the enclosing execution context
var globalObject = this
var foo = (() => this)
log(foo() === globalObject) // true

log('')

var myObject = {
    a: 1,
    b: 3
}

log(add.call(myObject, 5, 7)) // 16
log(add.apply(myObject, [10, 20])) // 34

log('')

// Since arrow function has a short syntax, it's inviting to use it for a method definition. Let's try:
// var calculate = {  
//   array: [1, 2, 3],
//   sum: () => {
//     log(this === calculate) // => true
//     return this.array.reduce((result, item) => result + item)
//   }
// }
// log(this === console) // => true  
// // Throws "TypeError: Cannot read property 'reduce' of undefined"
// calculate.sum()  


var calculate2 = {  
  array: [1, 2, 3],
  sum() {
    log(this === calculate2) // => true
    return this.array.reduce((result, item) => result + item)
  }
}

calculate2.sum() // => 6  
log(this === {}) // => true  
calculate2.sum()

// NOTE: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/

log('')

function MyCat(name) {  
  this.catName = name
}
MyCat.prototype.sayCatName = () => {  
  console.log(this === cat) // => false
  return this.catName
}
var cat = new MyCat('Mew')  
log(cat.sayCatName()) // => undefined  


function MyCat2(name) {  
  this.catName = name
}
MyCat2.prototype.sayCatName = function() {  
  console.log(this === cat2) // => true
  return this.catName
}
var cat2 = new MyCat2('Mew')  
log(cat2.sayCatName()) // => 'Mew'  

