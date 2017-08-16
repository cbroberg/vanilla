const cls = require('./services/lib').cls
const log = require('./services/lib').log

// Spread and Rest operators

cls()

// Spread operator (...) allows expressions to be expanded in places where multiple arguments, elements (items) or variables are expected

// Add the elements of an existing array into a new array
var certificationsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']
var certifications = ['Responsive Web Design', ...certificationsToAdd, 'APIs and Microservices', 'Quality Assurance and Information Security']

for (let i in certifications) {
    log(certifications[i])
}

// Pass elements of an array as arguments to a function
let addThreeNumbers = (x, y, z) => {
    log(x + y + z)
}

let args = [0, 1, 2]

addThreeNumbers(...args)

let addNumbersInArray = (array) => {
    return array.reduce((sum, value) => { 
        return sum + value
    })
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let moreNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19]

log(addNumbersInArray(numbers)) // 55
log(addNumbersInArray(moreNumbers)) // 135
let bigNumbers = numbers.concat(moreNumbers)
log(addNumbersInArray(bigNumbers)) // 190

// Copy arrays
let numbersCopied = [...numbers] // like numbers.slice()
numbersCopied.push(11)
log(numbersCopied)

// Rest operator condenses multiple elements into an array

