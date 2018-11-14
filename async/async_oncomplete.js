var global

function onComplete(a) { // When the code completes, do this
	global = a
	return a
}

function getFive(whenDone) {
	var a
	setTimeout(() => {
		a = 5
		whenDone(a)
		global = a
	}, 10)
}


// getFive(onComplete)

console.log(getFive(onComplete))

console.log(global)


// interviewer: what will the following code output?
const arr = [10, 12, 15, 21]
for (var i = 0; i < arr.length; i++) {
	setTimeout(() => {
		console.log('Index: ' + i + ', element: ' + arr[i])
	}, 3000)
}

