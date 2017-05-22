var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"password",
    database: "burgers_db"
  });
});

// Create connection
connection.connect(function(err){
  if (err) {
    console.log("Connection Error: " + err.stack);
    return;
  }
  console.log("Connection ID: " + connection.threadId);
});

//  Export connection and make available
module.exports = connection;
