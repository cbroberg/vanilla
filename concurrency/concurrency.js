var sleep = require('../services/lib').sleep

const animate = async (text) => {
	for (let i = 0; i < 100; i++) {
		console.log(text + i)
		await sleep(25)
	}
}

animate('Hello')

