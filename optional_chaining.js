const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

// const data = {
// 	user: {
// 		address: {
// 			street: 'Pennsylvania Avenue',
// 		},
// 	},
// }

const data = {
	user: {},
}

log(data.user.address.street) // Uncaught TypeError: Cannot read property 'street' of undefined

log(data.user ?.address ?.street) // undefined