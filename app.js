const express = require("express");
const mysql = require("mysql2");

const app = express();

// Database connection parameters
var mysqlConnection = mysql.createConnection({
  //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  user: "BUDDY-UP",
  password: "BUDDY-UP-2024@JULy",
  host: "127.0.0.1",
  database: "BUDDY-UP",
});

// Establish the connection
mysqlConnection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as id " + mysqlConnection.threadId);
});

//Data to send to server on the given adress

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3004, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  } else {
    console.log("Server listening on port 3004");
  }
});
