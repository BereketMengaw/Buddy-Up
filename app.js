// TO INSTALL THE BASIC MODULES

const express = require("express");
const mysql = require("mysql2");

// TO SETUP THE APPLICATION FOR THE SERVER CONNECTION

const app = express();

// DATABASE PARAMETERS

const dbConfig = {
  user: "BUDDY-UP",
  password: "BUDDY-UP-2024@JULy",
  host: "127.0.0.1",
  database: "BUDDY-UP",
};

//MAKING CONNECTION TO THE DATABASE

const mysqlConnection = mysql.createConnection(dbConfig);

//ACTIVATION OF THE CONNECTION

mysqlConnection.connect(function (err) {
  if (err) {
    //this will help to trace the location of where the problem is located
    console.log("this error is from :" + err.stack);
    return;
  }

  //the message will be sent if the connection is completed to the terminal
  console.log("connected in good way!");
});

//SENDING REQUEST DATA TO SERVER AND SERVER HANDING USING THE SERVER APPLICATION ALREADY CREATED

//GET REQUEST TO GET THE RETURN OF 'Hello , World' AS PLACE HOLDER

app.get("/", (req, res) => {
  //IT DEFINES THE RESULT
  res.send("Hello, World!");
});

// DATA BASE RELATED CODES

//CREATING OF THE DATABASE

// AFTER THE REQUEST OF USING GET METHOD TO ./create-table page ' THE SERVER EXCUTES THE QUERY GIVEN
app.get("/create-table", (req, res) => {
  //THE QUERY THAT WILL BE USED NEXT TIME

  const createTableQuery = `CREATE TABLE IF NOT EXISTS your_table_name (
  id INT AUTO_INCREMENT PRIMARY KEY,
  column1 VARCHAR(255),
  column2 TEXT,
  column3 DATE
);
 `;

  //USING THE QUERY DEFINED ABOVE WE EXCUTE THE CODE DUE TO OUR CONNECTION TO THE DATABASE

  mysqlConnection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
      //THIS WILL DESPLAYED ON THE BROWSER
      res.status(500).send("Internal server error");
    } else {
      res.send("Table created successfully");
    }
  });
});

// USING OUR SERVER APPLICATION WE ARRAGE OUR LISTENER TO THE PORT 3004

app.listen(3004, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  } else {
    console.log("Server listening on port 3004");
  }
});
