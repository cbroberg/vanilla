var app = require('express')()
var bunyan = require('bunyan')

var log = bunyan.createLogger({
	name: 'myapp',
	streams: [
		{
			level: 'info',
			path: './logfile.json'  // log ERROR and above to a file
		}
	]
})

app.get('/', function (req, res) {
	log.info({ req: req }, 'start request');  // <-- this is the guy we're testing
	log.info('something else')
	res.send('hello world')
})

app.listen(3000)
