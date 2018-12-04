require('dotenv').load()
const Holidays = require('@salling-group/holidays')

const { HOLIDAYS_TOKEN } = process.env

const holiday = new Holidays({
	'applicationName': 'My Application v1.0.0',
	'auth': {
		'type': 'bearer',
		'token': HOLIDAYS_TOKEN,
	},
})

/* holiday.holidaysInBetween('2018-01-01', '2018-12-31').then((holidays) => {
	console.log(holidays)
	// for (const holiday of holidays) {
	// 	console.log(`${holiday.date} - ${holiday.name}${holiday.nationalHoliday ? ' (national)' : ''}`)
	// }
}) */

const christmas = async () => {
	const date = '2018-12-24'
	if (await holiday.isHoliday(date)) {
		console.log(`${date} is a holiday.`)
	} else {
		console.log(`${date} is not a holiday.`)
	}
}

// christmas()

const { createInstance } = require('@salling-group/auth')
const instance = createInstance({
	'applicationName': 'Senti.API',
	'auth': {
		'type': 'bearer',
		'token': HOLIDAYS_TOKEN,
	},
})

// Date format: YYYY-MM-DD
const getHolidays = async (startDate, endDate, lang) => {
	let language
	lang === 'en' ? language = 'en-US' : language = 'da-DK'
	let response = await instance.get(`/v1/holidays?translation=${language}`, {
		'params': {
			'startDate': startDate,
			'endDate': endDate,
		},
	})
	console.log(response.data)
	console.log('STATUS', response.status)
}

// Date format: YYYY-MM-DD
getHolidays('2018-01-01', '2018-12-31', 'en')


/* instance.get('/v1/holidays', {
	'params': {
		'date': '2018-01-01',
	},
}).then((response) => console.log('Holidays: ', response.data))
 */

// https://www.npmjs.com/package/@salling-group/auth
// https://www.npmjs.com/package/@salling-group/holidays 
// https://developer.sallinggroup.com/api-reference