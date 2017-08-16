const cls = () => { process.stdout.write('\x1Bc') }
const log = console.log
const write = (p) => { process.stdout.write(p) }

const sleep = (miliseconds) => {
    var currentTime = new Date().getTime()
    while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

const nx = (message) => {
    if (message) {
        log('')
        log(message)
        log('')
    } else {
        log('')
        log('--- NEXT EXAMPLE ---')
        log('')    
    }
    
}

let pause = () => {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Press any key to continue ...', (answer) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`)
        rl.close()
})    
}

module.exports = {
    cls: cls,
    log: log,
    sleep: sleep,
    write: write,
    nx: nx,
    pause: pause
}

