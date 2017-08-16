require('isomorphic-fetch')
var fs = require('fs')
const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

var fruits = ["Banana", "Orange", "Apple", "Apricot", "Mango", "Grape", "Cantalope", "Melon", "Lime"]
fruits.push("Lemon")
fruits[fruits.length] = "Papaya"

// ASYNC / AWAIT + TRY / CATCH
let fruitID = 0

let getData = () => {
    fruitID++
    return fruits[fruitID-1]
}

let getMoreData = (data, i) => `${data} + ${fruits[i]}`

var data = (async () => {
    try {
        const a = await getData()
        const b = await getMoreData(a, fruitID++)
        const c = await getMoreData(b, fruitID++)
        const d = await getMoreData(c, fruitID++)
        const e = await getMoreData(d, fruitID++)
        return e
    } 
    catch (me) {
        log(me) // if you can
    }
})()

cls()
fs.writeFile('./starwars-characters.txt', '', function (err) {
    if (err) return log(err)
    log('creating file: starwars-characters.txt')
})

fs.writeFile('./starwars-characters.json', '', function (err) {
    if (err) return log(err)
    log('creating file: starwars-characters.json')
})

data.then( (result) => {
    log(`Asynchronous fruit data: ${result}`) // will log result
    log('')
})

// Fetch API with async/await

// TODO: Refactor to 1 loop and print to screen and file for each record

const swPeople = 'http://swapi.co/api/people/'
// const swFilms = '//swapi.co/api/films/'

var getPeople = (async () => {
    let { accumulatedResult, res1, res2 } = []
    let i = 1
    
    try {
        let result = await fetch(swPeople)
        let json = await result.json()
        
        log(`${i++}: ${swPeople}`)
        res1 = json.results
       
        while (json.next) {
            log(`${i++}: ${json.next}`)
            result = await fetch(json.next)
            json = await result.json()

            res2 = json.results
            accumulatedResult = res1.concat(res2)
            res1 = accumulatedResult
        }   
        log('')
        return accumulatedResult
    } 
    catch (me) {
        log(me)
    }
})()

getPeople.then( (result) => {
    let characters = result.map(character => character.name)
    for (let index in result) {
        log(characters[index]) // prints all characters in array
        fs.appendFile('./starwars-characters.txt', characters[index] + '\n', function (err) {
            if (err) throw err            
        })
    }
    log('')
})

function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(seconds)
        }, seconds * 1000)
    })
}

async function add1(x) {
    var a = wait(2)
    var b = wait(2)
    return x + await a + await b
}

let add2 = async (x) => {
    var a = await wait(2)
    var b = await wait(3)
    return x + a + b
}

add1(20).then(v => {
    log(v)  // prints 24 after 4 seconds.
})


add2(20).then(v => {
    log(v)  // prints 25 after 6 seconds.
})

