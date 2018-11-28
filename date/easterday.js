function easterSunday(year) {
	let C = Math.floor(year / 100)
	let N = year - 19 * Math.floor(year / 19)
	let K = Math.floor((C - 17) / 25)
	let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15
	I = I - 30 * Math.floor((I / 30))
	I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11))
	let J = year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4)
	J = J - 7 * Math.floor(J / 7)
	let L = I - J
	let month = 3 + Math.floor((L + 40) / 44)
	let day = L + 28 - 31 * Math.floor(month / 4)

	return padout(month) + '-' + padout(day) + '-' + year
}

function padout(number) { return (number < 10) ? '0' + number : number }

console.log(easterSunday(2018))

function toTimestamp(strDate) {
	return date = Date.parse(strDate)
}

console.log(toTimestamp('04-01-2018 00:00:00'))
console.log(toTimestamp(easterSunday(2018)))

let d = new Date('04-01-2018')

console.log('Today is: ' + toTimestamp(d))

d.setDate(d.getDate() - 5)

console.log('5 days ago was: ' + toTimestamp(d))

const easterDisplacement = (year, displacement, positive) => {
	let d = new Date(easterSunday(year))
	return (positive ? d.setDate(d.getDate() + displacement) : d.setDate(d.getDate() - displacement))
}

console.log(easterDisplacement(2018, 5, false)) // -5 

let palmSunday = easterDisplacement(2018, 7, false)
console.log(palmSunday)

let pinse = easterDisplacement(2018, 49, true) // +49
console.log('Pinsedag', pinse)

var ts = new Date(pinse)
console.log(ts.toDateString())

let fastelavn = easterDisplacement(2018, 49, false) // -49
console.log('Fastelavn', fastelavn)

/* 

Fixed Dates:

Christmas Day/Juledag - 25 december
New Years Day/Nytårsdag	- 1. januar
Assumption 15th August

Variable:

Septuagesima Sunday = EasterSunday Sunday -63 days
Sexagesima Sunday = EasterSunday Sunday -56 days
Shrove Sunday/Fastelavn = EasterSunday Sunday -49 days
Shrove Tuesday = EasterSunday Sunday -47 days
Ash Wednesday = EasterSunday Sunday -46 days
Passion Sunday = EasterSunday Sunday -14 days
Palm Sunday = EasterSunday Sunday -7 days

Maundy Thursday/Skærtorsdag = EasterSunday Sunday -3 days
Good Friday/Langfredag = EasterSunday Sunday -2 days
Easter Sunday/Påskedag = 0
Easter Monday/Anden påskedag = EasterSunday Sunday +1 day

Rogation Sunday = EasterSunday Sunday +35 days

Ascension Day/Kristi Himmelfartsdag = EasterSunday Sunday +39 days
Pentecost or Whitsunday/Pinsedag = EasterSunday Sunday +49 days
Whitmundy = EasterSunday Sunday +50 days
Trinity Sunday = EasterSunday Sunday +56 days
Corpus Christi = EasterSunday Sunday +60 days (or EasterSunday Sunday +63 days Catholic Church in the United States)

*/