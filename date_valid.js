const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

// Is date a valid date

var daysInMonth = (m, y) => {
	switch (m) {
		case 1:
			return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28
		case 8: case 3: case 5: case 10:
			return 30
		default:
			return 31
	}
}

var isValidDate = (d, m, y) => {
	m = parseInt(m, 10) - 1
	return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y)
}

log('')
log('30-03-2017: ', isValidDate(30, 3, 2017)) // March 30, 2017 - true
log('29-02-2017: ', isValidDate(29, 2, 2017)) // February 29, 2017 - false
log('29-02-2016: ', isValidDate(29, 2, 2016)) // February 29, 2016 - true
log('30-13-2017: ', isValidDate(30, 13, 2017)) // Nomonth 30, 2017 - false

var dateString = "23-10-2015" // Oct 23

var dateParts = dateString.split("-")

var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]) // month is 0-based

console.log(dateObject)