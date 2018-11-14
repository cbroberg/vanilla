const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()


const color = 'red'
const point = {
	x: 10,
	y: 20,
	color,
	toString() {
		return 'x=' + this.x + ', y=' + this.y + ', color=' + this.color
	},
	['prop_' + 42]: 42
}

let p = point.toString()

log(p)
log('The dynamic property is ' + point.prop_42)

