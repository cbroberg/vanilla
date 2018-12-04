var moment = require('moment')

const eachDay = (startDate, stopDate) => {
	var dates = []
	var currentDate = moment(startDate)
	var stopDate = moment(stopDate)
	while (currentDate <= stopDate) {
		dates.push(moment(currentDate).format('MM-DD'))
		currentDate = moment(currentDate).add(1, 'days')
	}
	return dates
}

const getByDate = (date, data, year) => {
	let filteredElements = data.filter((element) => {
		if (element.date === date) {
			element.date = `${year}-${element.date}`
			return element
		}
	})
	return filteredElements
}

const getAnnualEvents = (startDate, endDate, lang) => {
	let year = startDate.substring(0, 4)
	const days = lang === 'en' ? require('./days.en.json') : require('./days.da.json')
	let dates = eachDay(startDate, endDate)
	let destinationArray = []
	for (let i in dates) {
		destinationArray.push(...getByDate(dates[i], days, year))
	}
	return JSON.stringify(destinationArray)
}

let annualEvents = getAnnualEvents('2018-01-01', '2018-12-31', 'da')
console.log(annualEvents)
