const express = require('express')
const fetch = require('isomorphic-fetch')

const app = express()
const port = 3000

app.get('/validate', (req, res) => {
	const { number } = req.query

	const url = `https://discovery.meethue.com/`

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const { valid, location, carrier } = data
			res.json({ valid, location, carrier })
		})
		.catch(error => {
			console.error('Error:', error)
			res.status(500).json({ error: 'An error occurred' })
		})
	//console.log('Data: ', number)
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})