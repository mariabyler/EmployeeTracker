var inquirer = require("inquirer");
require("console.table");
var db = require("./db");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "root",
    database: "employees_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  });

  connection.query = util.promisify(connection.query);

  // create all queries to database

// inquirer/command line
