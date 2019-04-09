'use strict'

const pino = require('pino')
// const logger = pino(pino.destination('./pino.json'))
const logger = pino(pino.extreme('./pino.json'))

logger.info({ MIX: { IN: true } }) // only a one time post

// const pino = require('pino')('./pino.json')
const expressPino = require('express-pino-logger')({
	logger: logger
})

var app = require('express')()


app.use(expressPino)
 
app.get('/', function (req, res) {
  // each request has its own id
  // so you can track the log of each request
  // by using `req.log`
  // the ids are cycled every 2^31 - 2
  req.log.info('something else')
  res.send('hello world')
})
 
app.listen(3000)