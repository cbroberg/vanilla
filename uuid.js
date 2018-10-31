// https://www.npmjs.com/package/uuid

const uuidv1 = require('uuid/v1') // timestamp
const uuidv3 = require('uuid/v3') // namespace
const uuidv4 = require('uuid/v4') // random
const uuidv5 = require('uuid/v5') // namespace

console.log(uuidv1())
console.log(uuidv3('hive.senti.cloud', uuidv3.DNS))
console.log(uuidv4())
console.log(uuidv5('http://console.senti.cloud/login', uuidv5.URL))

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'
console.log(uuidv5('Hello, World!', MY_NAMESPACE))


// homemade random
const generateUUID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8)
		return v.toString(16)
	})
}

console.log(generateUUID())
