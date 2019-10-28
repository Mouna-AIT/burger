const mysql = require('mysql')

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'a26yf41badmx186q',
        password: 's42x8lrwbeizv3cr',
        database: 'burgers_db'
    })
}

connection.connect()
module.exports = connection