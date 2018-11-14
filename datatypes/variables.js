var cls = require('../services/lib').cls
var log = require('../services/lib').log

cls()

var myName // declaration (undefined)

myName = 'Christian Broberg' // initialisation

var myCountry = 'Denmark' // declare and initialise

myCountry = 'Portugal' // redeclare a variable

log(`Name: ${myName}, \nCountry: ${myCountry} `)

