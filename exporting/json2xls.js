var fs = require('fs')
var json2xls = require('json2xls')

var json = {
	Name: 'bar',
	Email: 'moo',
	Address: 123,
	Date: new Date()
}

var xls = json2xls(json)

fs.writeFileSync('data.xlsx', xls, 'binary')