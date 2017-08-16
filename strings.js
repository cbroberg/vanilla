var cls = require('./services/lib').cls
var log = require('./services/lib').log
var sleep = require('./services/lib').sleep

cls()

var string1 = "He said \"Hi!\" "
var string2 = 'He said "Hi!" '

log(string1 + string2)

/*

\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed 

*/

var fullName = 'Christian ' + 'Broberg'
log(fullName)

var sentence = 'My name is ' + fullName
log(sentence)

fullName += ' is my name'
log(fullName)

// Strings [bracket notation]
var firstName = 'Christian'
firstName[0] = 'Q' // strings are immutable so firstName is not altered
log(`Strings are immutable so firstName[0] is still "${firstName[0]}" and not "Q"`)

let stringOne = 'JavaScript is the new superpower '
let stringTwo = 'React is superpowers with views '
let stringThree = ''
let stringFour = '       SIGN UP HERE!      '

log(stringOne.charAt(0)) // J
log(stringOne.charCodeAt(0)) // unicode number 74

log(stringOne.concat(stringTwo)) 
stringThree = stringOne.concat(stringTwo)

log(stringOne.endsWith('power ')) // true
log(String.fromCharCode(74)) // J
log(stringTwo.includes('super')) // true
log(stringTwo.indexOf('super')) // 9
log(stringThree.lastIndexOf('super')) // 42
log(stringThree.charAt(stringThree.lastIndexOf('super'))) // s
log(stringThree.match(/super/g)) // [ 'super', 'super' ]
log(stringOne.repeat(3))
log(stringThree.replace(/super/g, 'SUPER'))
log(stringOne.search('power')) // 27
log(stringOne.slice(4, 10)) // Script
log(stringThree.split(' '))
log(stringOne.startsWith('Java')) // true
log(stringOne.substr(0, 4)) // Java
log(stringOne.substring(4, 10)) // Script
log(stringThree.toLowerCase())
log(stringThree.toUpperCase())
log(stringFour)
log(stringFour.trim())


var printName = (string) => {
    let i = 0
    while (i < string.length) {
        process.stdout.write(string[i] + ' ')    
        i++        
        sleep(100)
    }
}

sleep(500)
log('')

printName('Christian')

log('')

function capFirst(string) {
    let s1 = string.toLowerCase()    
    let s2 = string.charAt(0).toUpperCase()    
    return s2 + s1.slice(1)
}

log(capFirst('THIS IS A STRING')) // This is a string

function writeNext(i) {
    process.stdout.write(i + ' ')
    if (i === 9)
        return

    setTimeout(function() {
        writeNext(++i) // recursive call 
    }, 100)
}

writeNext(1)

