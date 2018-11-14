const cls = require('../services/lib').cls
const log = require('../services/lib').log

// Proxies are used to define custom behaviour on the properties of the object when it's accessed 
// Syntax: var p = new Proxy(target, handler)
// target = an object, handler explains how it is going to be different than usual when you access the object. Methods in a handler are called traps

cls()

var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37
    }
}

var p = new Proxy({}, handler)
p.a = 1
p.b = undefined

log(p.a, p.b) // 1, undefined
log('c' in p, p.c) // false, 37

log('')

var target = {}
var p2 = new Proxy(target, {})

p2.a = 37 // operation forwarded to the target

log(target.a) // 37. The operation has been properly forwarded

log('')

const rand = Math.random() < 0.5
const throwError = rand // random boolean 

// validation, error handling, boolean
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                if (throwError) {
                    throw new TypeError('The age is not an integer')
                } else {
                    log('Age must be a number')
                }
                
            }
        if (value > 200) {
            if (throwError) {
                throw new RangeError('The age seems invalid')
            } else {
                log('Age must be a positive number')
            }
            
        }
        }

        // The default behavior to store the value
        obj[prop] = value

        // Indicate success
        return true
    }
}

let person = new Proxy({}, validator)

person.age = 100
console.log(person.age) // 100
person.age = 'young' // Throws an exception
person.age = 300 // Throws an exception

