const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

const will = {
	topic: undefined,
	payload: JSON.stringify({ status: 'offline (dead)' }),
	qos: 1,
	retain: true
}
	
will.topic = 'senti/services/watchman/watchman-cb-air/status'

const newWill = Object.assign({ topic: 'senti/services/watchman/watchman-cb-air/status' }, will)

log(will)
log(newWill)

