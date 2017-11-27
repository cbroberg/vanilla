/* 
Javascript - External/Global variables in async callbacks
When you work a lot with async callbacks that rely on external vars then, let’s say a result from an API call, it can be kind of risky. 
You don’t know if the external variables has changed their value or if they are in the same state as before.
The solution is to make external needed variables private to the callback (or any other function expression, really). 
That way you know they stay the same when your function fire’s off.

*/

//Init a variable and set a value
var width = 10

//A "normal" function expression.
const callback2 =  () => {
	console.log(width)
}

//A function wrapped in an IIFE (Immediately Invoked Function Expression)
//Returns an object
const callback = ((width) => {
	var othervar = 1
	return {
		call: () => {
			console.log(width, ' ', othervar)
		}
	}
})(width)

//Call them both
callback.call()//Outputs 10
callback2()//Outputs 10


//Change the value of the global/external variable
width = 20


//Call again
callback.call()//Outputs 10
callback2()//Outputs 20

