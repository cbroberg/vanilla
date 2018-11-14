const cls = require('./services/lib').cls
const log = require('./services/lib').log

cls()

/* Destructuring 
The destructuring assignment syntax is a JavaScript expression that makes it possible to 
extract (unpack) values from arrays, or properties from objects, into distinct variables.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/

// Assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 }
// Traditional assignment 
// var x = voxel.x
// var y = voxel.y
// var z = voxel.z

// Destructuring assignment
const { x, y, z } = voxel // const { prop1, prop2 } = this.props
log(x, y, z)
const { x: a, y: b, z: c } = voxel
log(a, b, c)

// Assign variables from nested objects
const nestedObject = {
	start: { x: 5, y: 6},
	end: {x: 7, y: 8}
}
const { start: { x: startX, y: startY }} = nestedObject
log(startX, startY)

// Assign variables from arrays
// Rest operator to reassign array elements
var [q, p, ...rest] = [1, 2, 3, 4, 5]
log(q, p, rest) // 1 2 [ 3, 4, 5 ]

// Pass an object as a function's parameters
let profile = {
	name: 'Chris', 
	age: 49 , 
	nationality: 'Danish', 
	location: 'Denmark' 
}

const profileUpdate = (profileData) => {
	const { name, age, nationality, location } = profileData
	log(name, age, nationality, location)
}

profileUpdate(profile)

const profileUpdate2 = ({ name, age, nationality, location }) => {
	log(name, age, nationality, location)
}

profileUpdate2(profile)


