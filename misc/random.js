function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}


let t = 5
let p = 20

// loop

if (t >= 45) {
	t = t - getRandomInt(50)	
} else t = t + getRandomInt(50)

if (p >= 100) {
	p = p - getRandomInt(100)
} else p = p + getRandomInt(100)


console.log(t)
console.log(p)


var myobj = { 
	temperature: Math.floor(Math.random() * (37 - 5 + 1)) + 5, 
	pressure: Math.floor(Math.random() * (100 - 40 + 1)) + 40 
}

	console.log(myobj)



