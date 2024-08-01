const express = require("express");
const mysql = require("mysql2");

// SETUP THE APPLICATION FOR THE SERVER CONNECTION
const app = express();

// DATABASE PARAMETERS
const dbConfig = {
  user: "BUDDY-UP",
  password: "BUDDY-UP-2024@JULy",
  host: "127.0.0.1",
  database: "BUDDY-UP",
};

// MAKING CONNECTION TO THE DATABASE
const mysqlConnection = mysql.createConnection(dbConfig);

// ACTIVATION OF THE CONNECTION
mysqlConnection.connect(function (err) {
  if (err) {
    console.log("this error is from :" + err.stack);
    return;
  }
  console.log("connected in good way!");
});

// SENDING REQUEST DATA TO SERVER AND SERVER HANDLING USING THE SERVER APPLICATION ALREADY CREATED

// GET REQUEST TO GET THE RETURN OF 'Hello, World' AS PLACE HOLDER
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// DATABASE RELATED CODES

// CREATING THE DATABASE
app.get("/create-table", (req, res) => {
  const createNameTable = `CREATE TABLE IF NOT EXISTS names(
    name_id INT AUTO_INCREMENT PRIMARY KEY,
    column1 VARCHAR(255) NOT NULL
  );`;

  const createAgeTable = `CREATE TABLE IF NOT EXISTS age (
    age_id int auto_increment,
    name_id int(11),
    age int(11) not null,
    PRIMARY KEY (age_id),
    FOREIGN KEY (name_id) REFERENCES names(name_id)
  );`;

  const createPlaceTable = `CREATE TABLE IF NOT EXISTS places (
    place_id int auto_increment,
    name_id int(11),
    place VARCHAR(255) not null,
    PRIMARY KEY (place_id),
    FOREIGN KEY (name_id) REFERENCES names(name_id)
  );`;

  const createCommentTable = `CREATE TABLE IF NOT EXISTS comments (
    comment_id int auto_increment,
    name_id int(11),
    comment TEXT not null,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (name_id) REFERENCES names(name_id)
  );`;

  mysqlConnection.query(createNameTable, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Names table created successfully");
  });

  mysqlConnection.query(createAgeTable, (err, result) => {
    if (err) {
      console.log("Error creating the age table:", err);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Age table created successfully");
  });

  mysqlConnection.query(createPlaceTable, (err, result) => {
    if (err) {
      console.log("Error creating the place table:", err);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Place table created successfully");
  });

  mysqlConnection.query(createCommentTable, (err, result) => {
    if (err) {
      console.log("Error creating the comment table:", err);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Comment table created successfully");
  });

  res.send("Tables creation process initiated");
});

// USING OUR SERVER APPLICATION WE ARRANGE OUR LISTENER TO THE PORT 3006
app.listen(3006, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  } else {
    console.log("Server listening on port 3006");
  }
});
