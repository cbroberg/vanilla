var https = require('https')
var pem = require('pem')
var express = require('express')

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
	if (err) {
		throw err
	}
	console.log(keys.serviceKey)
	console.log(keys.certificate)
	var app = express()

	app.get('/', function (req, res) {
		res.send('o hai!')
	})

	// https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(443)
	https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(4300)
})