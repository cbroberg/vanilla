require('dotenv').load()
// get the client
const mysql = require('mysql2')
// const mysql = require('mysql')

const { DB_HOST, DB_USER, DATABASE, PASSWORD } = process.env

// create the connection to database
const connection = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: PASSWORD,
	database: DATABASE
})

// console.log(connection)

// simple query
connection.query(
	'SELECT * FROM `events` WHERE `name` = "Christian Broberg"',
	function (err, results, fields) {
		console.log(err)
		console.log(results) // results contains rows returned by server
		console.log(fields) // fields contains extra meta data about results, if available
	}
)