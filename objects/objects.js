const cls = require('../services/lib').cls
const log = require('../services/lib').log
const nx = require('../services/lib').nx

cls()

// Object Basics 101

nx('Declaration Basics')

let person1 = {
    firstName:'Mette',
    lastName:'Bugge',
    age:43,
    eyeColor:'green',
    fullName: () => { return this.firstName + " " + this.lastName } // arrow function/method definition (closure)
}

let person2 = {
    firstName:'Christian',
    lastName:'Broberg',
    age:49,
    eyeColor:'blue',
    fullName() { return this.firstName + " " + this.lastName } // regular function/method definition (closure)
}

log(person1.fullName())
log(person2.fullName())

nx('Declaration Curly Brackets Notation + Template Literals')

var myCar = {}
myCar.make = 'Ford'
myCar.model = 'Mustang'

log(`My car is a ${myCar.make}, and the model is a ${myCar.model}`)

var myNewCar = {
    make: 'Ford',
    model: 'Mustang',
    color: 'black'
}

nx('Declaration Brackets Notation + Template Literals')

myNewCar['year'] = 1969 // bracket notation

log(`My new car is a ${myNewCar.color} ${myNewCar.make}, and the model is a ${myNewCar.year} ${myNewCar.model}`)

nx('Object Properties - "hasOwnProperty"')

let showProps = (obj, objNameStr) => {
    var result = ''
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objNameStr + '.' + i + ' = ' + obj[i] + '\n'
        }
    }
    return result
}

log(showProps(myNewCar, 'myNewCar'))

// Creation: object initialiser
var myHonda = {
    color: 'red',
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
}
log(myHonda)

nx('Object Creation: constructor function')

// Creation: constructor function
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

var someCar = new Car('Honda', 'Civic', '1993')
var someOtherCar = new Car('Chevy', 'Malibu', '1990')
someCar.color = 'Red'

log(someCar.color)
log(someOtherCar.model)

nx('Object Creation: Object.create - prototyping')

// Creation: Object.create - prototyping
var animal = {
    type: 'Invertebrates',
    displayType() {
        log(this.type)
    }
}

var animal1 = Object.create(animal)
animal1.displayType()

var fish = Object.create(animal)
fish.type = 'Fishes'
fish.displayType()

nx('Using Objects for Lookups')

// Using Objects for Lookups
var alpha = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
// ... 
}

if (alpha[2] === 'B') {
    log(`Number 2 in the alphabet is ${alpha[2].toLowerCase()}`)
}

nx('Remove Object properties')

// Remove Object properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13,
}
delete dishes.cups
log(dishes) // { plates: 8, forks: 28, bowls: 13 }

nx('Testing Object for properties')

// Testing Object for properties
log(dishes.hasOwnProperty('plates')) // true
log(dishes.hasOwnProperty('cups')) // false

nx('Accessing and Modifying Nested Objects')

// Accessing and Modifying Nested Objects
var ourStorage = {
    'desk': {
        'drawer': 'stabler'
    },
    'cabinet': {
        'topdrawer': {
            'folder1': 'a file',
            'folder2': 'secrets'
        },
        'bottomdrawer': 'milk'
    }
}

log(ourStorage.cabinet['topdrawer'].folder2) // secrets
log(ourStorage.desk.drawer) // stabler
ourStorage.cabinet['topdrawer'].folder2 = 'cake recipe'
log(ourStorage.cabinet['topdrawer'].folder2) // cake recipe

nx('Generate an Array of All Object Keys')

// Generate an Array of All Object Keys
log(Object.keys(ourStorage)) // [ 'desk', 'cabinet' ]
log(Object.keys(ourStorage.cabinet)) // [ 'topdrawer', 'bottomdrawer' ]
log(Object.keys(ourStorage.cabinet.topdrawer)) // [ 'folder1', 'folder2' ]
log(Object.keys(ourStorage.cabinet.bottomdrawer)) // [ '0', '1', '2', '3' ]


let options = {
    key: 0, 
    index: 0, 
    isVisible: false, 
    isAnObject: false, 
    style: ''
}

function objectAnalyser ({key, index, isVisible, isAnObject, style}) {
    log(key)
    log(index)
    log(isVisible)
    log(isAnObject)
    log(style)
    return (
        'Object logged ... '
    )

}

log(objectAnalyser(options))