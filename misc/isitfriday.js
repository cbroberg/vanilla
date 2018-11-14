const cls = require('../services/lib').cls
const log = require('../services/lib').log
const chalk = require('chalk')

cls()


var isItFriday = () => {
    let day = ''
    switch(new Date().getDay()) {
            case 0:
            day = 'Sunday'
            break

            case 1:
            day = 'Monday'
            break

            case 2:
            day = 'Tuesday'
            break

            case 3:
            day = 'Wednesday'
            break

            case 4:
            day = 'Thursday'
            break

            case 5:
            day = `${chalk.red('YES')} ${chalk.green('it')} ${chalk.cyan('is')} ${chalk.yellow('FRIDAY!!!')}`
            break

            case 6:
            day = 'Saturday'
            break
            default:
            log('There was an error getting day ...')
            break
    }
    return day
}

log('')
log(isItFriday())
log('')

