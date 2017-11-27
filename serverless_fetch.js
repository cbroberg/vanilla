var http = require("http")

var options = {
	"method": "GET",
	"hostname": "localhost",
	"port": "3000",
	"path": "/go/get",
	"headers": {
		"Content-Type": "'application/json",
		"cache-control": "no-cache"
	}
}

var req = http.request(options, function (res) {
	var chunks = []

	res.on("data", function (chunk) {
		chunks.push(chunk)
	})

	res.on("end", function () {
		var body = Buffer.concat(chunks)
		console.log(body.toString())
	})
})

req.end()

