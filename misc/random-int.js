const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()


const numSimulations = 10

for (let i = 0; i < numSimulations;) {
	i++
	log('sim' + i)
}

