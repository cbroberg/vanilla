const cls = require('../services/lib').cls
const log = require('../services/lib').log
const write = require('../services/lib').write
const nx = require('../services/lib').nx

cls()

// Array iteration: 8 methods

// Array of fruits and sandwich ingredients
var fruits = ["Banana", "Orange", "Apple", "Apricot", "Mango", "Grape", "Cantalope", "Melon"]
var sandwich = ['Cheese', 'Ham', 'Lettuce', 'Bread', 'Tomato', 'Mustard', 'Ketchup', 'Pickles']

// Helper function
let logArrayItems = (item, index) => {
    log("Item[" + index + "] = " + item)
}

// forEach - The forEach() method executes a provided callback function once for each array element.
fruits.forEach(logArrayItems)

nx()

sandwich.forEach((item, index) => {
    log(index + '  =  ' + item)
})

nx()

// Shorthand for Array.forEach
for (let i in fruits) {
    write(fruits[i] + ', ')
}

log('')
log('')

nx()
let fruitSandwich = []

for (let i in fruits) {
    fruitSandwich[i] = fruits[i] + ' ' + sandwich[i].toLowerCase()
}

log(fruitSandwich)

nx()

// map - The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const fruitStamps = fruits.map((item) => {
    return item + ' stamps'
})

log(fruitStamps)

nx()

// filter - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const evens = numbers.filter((item) => {
    return item % 2 === 0 // modulus
})
log(evens) // [ 2, 4, 6, 8 ]

nx()

// reduce - The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = numbers.reduce((result, item) => {
    return result + item
}, 0)
log(sum) // 36

nx()

// some - The some() method tests whether some element in the array passes the test implemented by the provided function.
const isBiggerThanTwo = numbers.some((item, index) => {
    return item > 2
}, this)

log(`It is ${isBiggerThanTwo} that all items are bigger than two`) // true

nx()

// every - The every() method tests whether all elements in the array pass the test implemented by the provided function.
const allPositiveNumbers = numbers.every((item) => {
    return item > 0
})
log(`It is ${allPositiveNumbers} that all items are a positive number`) // true

nx()

// find - The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const pets = [
    { type: 'Dog', name: 'Max'},
    { type: 'Cat', name: 'Karl'},
    { type: 'Dog', name: 'Tommy'},
]

let found = pets.find((item) => {
    return item.name === 'Max'
})
log(found.name) // Max

// Array.find Shorthand
let pet = pets.find(pet => pet.type === 'Dog' && pet.name === 'Max')
log(pet) // { type: 'Dog', name: 'Tommy' }

nx()

// find index - The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let foundIndex = sandwich.findIndex((item) => {
    return item === 'Pickles' // 7
})
log(foundIndex)

foundIndex = pets.findIndex((item) => {
    return item.name === 'Max' // 0
})
log(foundIndex)

