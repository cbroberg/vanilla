const cls = require('../services/lib').cls
const log = require('../services/lib').log
const chalk = require('chalk')

cls()

let cpu = {
    totalPercent: 10
}

let ram = {
    used: 3,
    total: 4
}

let disk = {
    used: 201,
    total: 250
}

log(chalk.yellow('Ready for some colors?'))

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}`)

// ES2015 tagged template literal
log(chalk`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}`)

// Use RGB colors in terminal emulators that support it.
log('')
log(chalk.keyword('orange')('Yay for orange colored text!'))
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
log(chalk.hex('#DEADED').bold('Bold gray!'))

const miles = 18
const calculateFeet = miles => miles * 5280

log(chalk`
There are {bold 5280 feet} in a mile.
In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`)

log('')
