const cls = require('./services/lib').cls
const log = require('./services/lib').log

// Try, Catch, Finally & Throw run-time error functions

cls()

// try, catch, finally

try {
    log('Start of try runs')
    
    unicycle() // is not defined

    log('End of try runs -- never reaches')
} 

catch(error) {
    // log(`\nError has occured:\n\n${error.stack}`)
    log(error.name)
    log(error.message)
    log('')
}

finally {
    log('This is always run')
    log('')
}

log('...Then the execution continues')
log('')

let json = {
    "age": 30
}

try {
    let user = JSON.parse(JSON.stringify(json)) // Okay so far
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name in object')
    }
    log(user.name)
}

catch(me) {
    log("JSON Error: " + me)
}
