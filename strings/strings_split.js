var cls = require('./services/lib').cls
var log = require('./services/lib').log

cls()

function createTagName(iconname) {
	const tagprefix = 'Md'
	let arr = iconname.split('_')
	arr = arr.map((a) => {
		return a.charAt(0).toUpperCase() + a.slice(1)
	})
	return tagprefix + arr.join('')

}

const IC1 = 'assignment_turned_in_with_a_lot_of_underscores'
const IC2 = 'search'
const IC3 = 'bug_report'
const IC4 = 'play_circle_outline'

log(createTagName(IC1))
log(createTagName(IC2))
log(createTagName(IC3))
log(createTagName(IC4))
