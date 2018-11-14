const cls = require('../services/lib').cls
const log = require('../services/lib').log

// Template Literals - strings on steroids with parser/parsing capabilities - Styled Components are built on Tagged Template Literals

cls()

// Multi-line strings
const lorem_ipsum = `Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse.`

log(lorem_ipsum)

// Expression Interpolation
var a = 5
var b = 10

let add = () => {
    return a + b
}

log(`Fifteen is ${add()} and
not ${2 * a + b}.`)
// "Fifteen is 15 and
// not 20."


// Tagged Template Literals
function tag(strings, ...values) {
    log(strings)
    log(strings[0])
    log(strings[1])
    log(values)
    return 'Tagged Template Literals made Styled Components'
}

const t = tag`Hello ${a + b}world ${a * b}`
log(tag`Hello ${a + b}world ${a * b}`)
log(t)
    

var person = 'Mike'
var age = 28

function myTag(strings, personExp, ageExp) {
    var str0 = strings[0] // "that "
    var str1 = strings[1] // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2]

    var ageStr
    if (ageExp > 99){
        ageStr = 'centenarian'
    } else {
        ageStr = 'youngster'
    }
    return str0 + personExp + str1 + ageStr
}

var output = myTag`that ${ person } is a ${ age }`

log(output)
// that Mike is a youngster

function template(strings, ...keys) {
    return (function(...values) {
        var dict = values[values.length - 1] || {}
        var result = [strings[0]]
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key]
            result.push(value, strings[i + 1])
        })
        return result.join('')
    })
}

var t1Closure = template`${0}${1}${0}!` // Our template
log(t1Closure('Y', 'A'))  // "YAY!" is what we put into our template
var t2Closure = template`${0} ${'foo'}!`
log(t2Closure('Hello', {foo: 'World'}))  // "Hello World!"
