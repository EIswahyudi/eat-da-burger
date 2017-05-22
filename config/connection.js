var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password:"password",
  database: "burgers_db"
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
