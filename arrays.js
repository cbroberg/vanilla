const cls = require('./services/lib').cls
const log = require('./services/lib').log
const write = require('./services/lib').write

cls()

var sandwich = ['Cheese', 'Ham', 'Lettuce', 'Bread', 'Tomato', 'Mustard', 'Ketchup', 'Pickles']

sandwich.forEach( (element) => {
    write(element + '\n')
})

log('')

// Shorthand array iteration
for (let i in sandwich) {
    log(sandwich[i]) // prints all array elements
}

log('')

// Multi index array
var teams = [['Bulls', 23], ['White Sox', 45]]
teams[1][0] = 'Red Socks'
log(teams[1][0])

teams.push(['Knights', 17])

for (let i in teams) {
    log(teams[i])
}

log(teams.pop())

log('')

for (let i in teams) {
    log(teams[i])
}

var arr1 = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']

arr1 = arr1.concat(arr2)
log(arr1) // ['a', 'b', 'c', 'd', 'e', 'f']

log(arr1.join('-')) // a-b-c-d-e-f
log(arr1.reverse()) // [ 'f', 'e', 'd', 'c', 'b', 'a' ]
log(arr1.reverse()) // ['a', 'b', 'c', 'd', 'e', 'f']
log(arr1.shift()) // [ 'b', 'c', 'd', 'e', 'f' ]
log(arr1)
arr1.unshift('a') // ['a', 'b', 'c', 'd', 'e', 'f']
log(arr1)
log(arr1.slice(1, 3)) // ['b', 'c']
arr1.push('z')
arr1.push('k')
arr1.push('l')
arr1.push('y')
log(arr1.sort(arr1))

log(arr1.splice(2, 2, 'JS rules')) // [ 'c', 'd' ]
log(arr1)

// reduce - The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sum = numbers.reduce((result, item) => {
    return result + item
}, 0)
log(sum)