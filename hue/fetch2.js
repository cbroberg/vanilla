const https = require('https')

let url = "https://https://discovery.meethue.com/"

https.get(url, (res) => {
	let body = "";

	res.on("data", (chunk) => {
		body += chunk;
	});

	res.on("end", () => {
		try {
			let json = JSON.parse(body);
			// do something with JSON
			console.log("The data: ", json)
		} catch (error) {
			console.error(error.message);
		};
	});

}).on("error", (error) => {
	console.error(error.message);
})
