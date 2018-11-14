const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

// Random numbers & parseInt

const roundedNum = () => {
    return Math.round((Math.random() * 100))
}

const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let arr = []

for (let i = 0; i < 100; i++) { 
    arr[i] = roundedNum()
}

log(arr.sort(arr))
log(arr.length)
log(randomRange(1, 9))

log(parseInt('007'))

