const cls = require('../services/lib').cls
const log = require('../services/lib').log
const getJSON = require('./ajax_node.js').main

/*
JSON: JavaScript Object Notation.
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
JSON values can not be a function, a date or undefined
*/

/*
Resources:
https://github.com/mzabriskie/axios
https://github.com/typicode/json-server
http://jsonplaceholder.typicode.com
*/

cls()

// Object with all usable JSON datatypes
var myJSON = {
    "name": {
        "first": "Christian",
        "last": "Broberg"
    },
    "age": 49,
    "skills": [ "JavaScript", "React", "NodeJS" ],
    "married": false,
    "superpowers": null
}

// Un-formatted 
log(myJSON)

log('')

// stringify method
var stringified = JSON.stringify(myJSON)
log(`Stringify my JSON object: \n${stringified}`)


log('')

// parse method
var stringJSON = '{ "name": "Mette", "kids": 2, "nationality": "Danish" }'
var myParse = JSON.parse(stringJSON)
log(myParse)

log('')

var roundTrip = JSON.parse(JSON.stringify(myJSON))
log(roundTrip) // = myJSON object


getJSON.then( (result) => {
    log(result)
})


