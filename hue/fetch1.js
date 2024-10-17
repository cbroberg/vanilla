const fetch = require('node-fetch')

let url = "https://https://discovery.meethue.com/"

let settings = { method: "Get" }

fetch(url, settings)
	.then(res => res.json())
	.then((json) => {
		// do something with JSON
		console.log(json)
	})

