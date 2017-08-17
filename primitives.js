const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

let s = String('Hello World')

log(s)
log(typeof (s))

if (s.valueOf() === 'Hello World') {
	log('Yeahhhh ... ')
}

