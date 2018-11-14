var functions = require('./services/function_lib.js')
var colors = require('./services/colors')

// DEFINITION

var log = (p) =>  { console.log(p) }
var cls = () => { process.stdout.write('\x1Bc') }

cls()

function first() {
    setTimeout(
        function() {
            log('first')
        }, 500
    )
}

var third = () => {
    setTimeout( 
        function() {
            log('third')
        }, 500
    )
}

var forth = () => {setTimeout( () => {log('forth')}, 500)}

function doHomework(subject, callback) {
    log(`Starting my ${subject} homework`)
    callback(subject)
}

function alertFinished(subject){
    log(`Finished my ${subject} homework`)
}

// (param1, param2, paramN) => expression 
 
// ES5 
var multiply1 = function(x, y) { return (x * y)} 
 
// ES6 
var multiply2 = (x, y) => { return x * y }
var multiply3 = (x, y) => x * y

//ES6 
var phraseSplitter = phrase => phrase.split(" ")

var smartPhones = [
	{ name:'iphone', price:500 },
	{ name:'Galaxy S6', price:600 },
	{ name:'Galaxy Note 5', price:400 }
]

var funcLog = () =>  log(typeof(functions.second))
// var funcLog = () =>  { log(f.second) }

var setNameIds = (id, name) => ({ id: id, name: name }) 

// Higher order function
function greaterThan(a) {
    return function(b) {
        return b > a
    }
}

// Higher order function refactored as an arrow function 
var greater = (a) => (b) => b > a

var greaterThan10 = greaterThan(10)

// Function expression
var MyFunctionExpression1 = function() {
    var notSoSecret = 42
    log(notSoSecret)
}

// Function expression refactored as an arrow function
var MyFunctionExpression2 = () => {
    var notSoSecret = 42
    log(notSoSecret)
}

// EXECUTION
// for (let i = 0; i < 1e2; i++) {
//     log(i)
// }

// ASYNCRONOUS FUNCTION EXECUTION 
first()
functions.second()
third()
forth()


doHomework('math', function() {
    log('Finished my math homework')
})

doHomework('literature', alertFinished)

log(multiply1(5, 5))
log(multiply2(10, 10))
log(multiply3(20, 20))
log(phraseSplitter("ES6 Awesomeness"))  // ["ES6", "Awesomeness"]

log(smartPhones.map(smartPhone => smartPhone.price))

funcLog() 

log(setNameIds(4, "Kyle"))   // Object {id: 4, name: "Kyle"} 

log(greaterThan(10)(11)) // true
log(greaterThan10(11)) // true
log(greaterThan('a')('a')) // false
log(greater(10)(11)) // true
log(greater('A')('z')) // true
log(functions.greater('A')('z')) // true

MyFunctionExpression1()
MyFunctionExpression2()

// SHORTHAND JAVASCRIPT TECHNIQUES

const x = 3
// The Ternary Operator
// const big = x > 10 ? true : false
const big = x > 10 ? "Greater than 10" : x < 5 ? "Less than 5" : "Between 5 and 10"

log(big)

let variable1, variable2 = variable1  || ''
log(variable2 === '') // prints true

variable1 = 'foo'
variable2 = variable1  || ''
log(variable2) // prints foo

if (variable2) {
    log('Yes it is true')
}

// let a
let something
log(`something is ${something}`)
if ( !something ) {
    log('Doing something') // do something...
}

const bool = something || 'false'
log(bool)

// log(colors)
log(colors.danger)

var fruits = ["Banana", "Orange", "Apple", "Apricot", "Mango", "Grape", "Cantalope", "Melon", "Lime"]
log(fruits)
log(fruits.length) // the length of fruits is 8

// Longhand Array.forEach
function logArrayElements(element, index, array) {
    log("array[" + index + "] = " + element)
}
fruits.forEach(logArrayElements)

// Shorthand for Array.forEach:
for (let index in fruits) {
    log(fruits[index]) // prints all array elements
}

// ADD ELEMENTS
fruits.push("Lemon")
fruits[fruits.length] = "Papaya"

var logArray = (element, index, array) =>  { log("array[" + (index + 1) + "] = " + element) }
fruits.forEach(logArray)

log('')

// Implicit Return Shorthand. (diamater) 
var calcCircumference = diameter => (
    Math.PI * diameter
)
log(calcCircumference(10))

// Default Parameter Values
let volume = (l, w = 3, h = 4 ) => (l * w * h)
log(volume(2)) // print 24
log(volume(2, 2, 2)) // print 8

// Template Literals
let host = 'odeum.com'
let port = 80
let database = 'users'

// Longhand
const db1 = 'http://' + host + ':' + port + '/' + database

// Shorthand with template literals
const db2 = `http://${host}:${port}/${database}`

log(db1)
log(db2)

// Destructuring Assignment Shorthand
// longhand
// const store = this.props.store
// const form = this.props.form
// Shorthand
// const { store, form } = this.props

// Multi-line String Shorthand
// Longhand (n = newline, t=tab)
const lorem_long = 'Lorem Long ipsum dolor sit amet, consectetur\n'
+ 'adipisicing elit, sed do eiusmod tempor incididunt\n'
+ 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
+ 'veniam, quis nostrud exercitation ullamco laboris\n\t'
+ 'nisi ut aliquip ex ea commodo consequat. Duis aute\n'
+ 'irure dolor in reprehenderit in voluptate velit esse.\n\t'

log(lorem_long)

// Shorthand with template literals
const lorem_short = `Lorem Short ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse.`

log(lorem_short)

log('')

// Spread Operator Shorthand
// Lognhand joining arrays 
const odd = [1, 3, 5]
const nums = [2, 4, 6].concat(odd)

// Longhand cloning arrays
const arr = [1, 2, 3, 4]
const arr2 = arr.slice()

// Shorthand joining arrays
const odd2 = [1, 3, 5]
const nums2 = [2, 4, 6, ...odd2]
log(nums2) // [ 2, 4, 6, 1, 3, 5 ]

// Shorthand cloning arrays
const arr3 = [1, 2, 3, 4]
const arr4 = [...arr3]

log(`Longhand: ${arr2}, Shorthand: ${arr4} Numbers: ${nums}`)

// Combine the spread operator with ES6 destructuring notation
const { a, b, c, d } = { a: 1, b: 2, c: 3, d: 4 }
log(`a = ${a}, b =  ${b}, c = ${c} d = ${d}`)

// Mandatory Parameter Shorthand
var mandatory = () => {
    log('Missing parameter!')
//   throw new Error('Missing parameter!')
}

var foo = (bar = mandatory()) => {
    return bar
}

foo()

// Array.find Shorthand
const pets = [
    { type: 'Dog', name: 'Max'},
    { type: 'Cat', name: 'Karl'},
    { type: 'Dog', name: 'Tommy'},
]

let pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy')
log(pet) // { type: 'Dog', name: 'Tommy' }

log('')

var n1 = 0
var x1 = 0

while (n1 < 3) {
  n1++
  x1 += n1
  log(`n1 = ${n1}`)
  log(`x1 = ${x1}`)
}
