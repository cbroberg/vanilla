var request = require("https")

var url = "https://discovery.meethue.com/"

function request({
	url: url,
	json: true
}, function (error, response, body) {

	if (!error && response.statusCode === 200) {
		console.log(body) // Print the json response
	}
})