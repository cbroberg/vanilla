module.exports = function (cluster) {
	var express = require('express')
	var app = express()
	app.get('/', function (req, res) {
		console.log('Worker %d started!' + new Date(), cluster.worker.id)
		for (var i = 0; i < 999999999; i++) { }
		res.end('Hello from Worker ' + cluster.worker.id)
		console.log('Worker %d returned!' + new Date(), cluster.worker.id)
	})
	app.listen(8080, function () {
		console.log('Application started! Worker %d started!, process %d', cluster.worker.id, cluster.worker.process.pid)
	})
}
