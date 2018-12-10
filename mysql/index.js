require('dotenv').load()
// get the client
const mysql = require('mysql2')
// const mysql = require('mysql')

const { DB_HOST, DB_HOST_LOCAL, DB_USER, DATABASE, PASSWORD } = process.env

// create the connection to database
const connection = mysql.createConnection({
	host: DB_HOST_LOCAL,
	user: DB_USER,
	password: PASSWORD,
	database: DATABASE
})

// console.log(connection)

// simple query 1
connection.query(
	'SELECT * FROM `events` WHERE `name` = "Christian Broberg"',
	function (err, results, fields) {
		console.log(err)
		console.log(results) // results contains rows returned by server
		// console.log(fields) // fields contains extra meta data about results, if available
	}
)

connection.query(
	'SELECT * FROM `events` WHERE `id` = "1"',
	function (err, results, fields) {
		console.log(err)
		console.log(results) // results contains rows returned by server
		// console.log(fields) // fields contains extra meta data about results, if available
	}
)


connection.end()