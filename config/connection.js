// Set up MySQL connection.
var mysql = require("mysql");

// Import the API keys
var keys = require("../keys");

// console.log(keys.mysql.id);
// console.log(keys.mysql.secret);

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: keys.mysql.secret,
        database: "burgers_db"
    });
}

// console.log(connection);

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
