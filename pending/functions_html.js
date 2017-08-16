// DEFINITION

var log = (p) =>  { document.write(p) }

function doHomework(subject, callback) {
    log(`Starting my ${subject} homework.`)
    callback()
}

function alertFinished(){
  log('Finished my literature homework')
  log('<BR>')
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
var MyFunctionExpression1 = function(){
    var notSoSecret = 42
    log(notSoSecret)
}

// Function expression refactored as an arrow function
var MyFunctionExpression2 = () => {
    var notSoSecret = 42
    log(notSoSecret)
}

// EXECUTION

doHomework('math', function() {
    log('<BR>')
    log('Finished my math homework')
})
log('<BR>')

doHomework('literature', alertFinished)
log('<BR>')

log(multiply1(5, 5))
log('<BR>')

log(multiply2(10, 10))
log('<BR>')

log(multiply3(20, 20))
log('<BR>')

log(phraseSplitter("ES6 Awesomeness"))  // ["ES6", "Awesomeness"]
log('<BR>')

log(smartPhones.map(smartPhone => smartPhone.price))
log('<BR>')

log(setNameIds(4, "Kyle"))   // Object {id: 4, name: "Kyle"} 
log('<BR>')

log(greaterThan(10)(11)) // true
log('<BR>')

log(greaterThan10(11)) // true
log('<BR>')

log(greaterThan('a')('a')) // false
log('<BR>')

log(greater(10)(11)) // true
log('<BR>')

log(greater('A')('z')) // true
log('<BR>')

MyFunctionExpression1()
log('<BR>')

MyFunctionExpression2()
log('<BR>')

log('Hello World')

