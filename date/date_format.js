const cls = require('../services/lib').cls
const log = require('../services/lib').log

cls()

function formatDate(date, params) {
	var options = {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "UTC",
		timeZoneName: "short",
	}

	if (params) {
		options = Object.assign(options, params)
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
	return new Date(date).toLocaleString('da-DK', options)
}

formatDate('Invalid Date String') // bad date

formatDate(new Date())
formatDate(+new Date()) // timestamp
formatDate('2016-08-11') // Thu, August 11, 2016, 12:00 AM GMT
formatDate('08/11/2016')

// 8/11/2016, 7:00 AM
formatDate('08/11/2016', {
	weekday: undefined,
	month: "numeric",
	timeZoneName: undefined
})

log('', formatDate('02-29-2016'))

let d = "22-10-2018 23:29"
let dArr = d.split('-')
let ts = new Date(dArr[1] + "-" + dArr[0] + "-" + dArr[2]).getTime() // 1379392680000

console.log(ts)