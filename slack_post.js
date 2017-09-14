const channels = require('./slack_data').channels
const buttons = require('./slack_data').buttons
const book = require('./slack_data').book
const json = require('./slack_data').json



function postMessageToSlack(url, message) {
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.open('POST', url, false)
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xmlhttp.send(message)
}

// console.log(channels['cb'].value, channels['cb'].message)

postMessageToSlack(channels['cb'].value, book)

