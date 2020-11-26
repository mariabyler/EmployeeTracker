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

// creates all queries to database
// add department
  function addDepartment() {
    console.log("Inserting a new department...\n");
    var query = connection.query(
      "INSERT INTO department WHERE department_name ?",
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department added!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  addDepartment(); 
// add role
//   function addRole() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//       "INSERT INTO products SET ?",
//       {
//         flavor: "Rocky Road",
//         price: 3.0,
//         quantity: 50
//       },
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " product inserted!\n");
//         // Call updateProduct AFTER the INSERT completes
//         updateProduct();
//       }
//     );
  
//     // logs the actual query being run
//     console.log(query.sql);
//   }
// // add employee
//   function addEmployee() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//       "INSERT INTO products SET ?",
//       {
//         flavor: "Rocky Road",
//         price: 3.0,
//         quantity: 50
//       },
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " product inserted!\n");
//         // Call updateProduct AFTER the INSERT completes
//         updateProduct();
//       }
//     );
  
//     // logs the actual query being run
//     console.log(query.sql);
//   }
  
//   function updateProduct() {
//     console.log("Updating all Rocky Road quantities...\n");
//     var query = connection.query(
//       "UPDATE products SET ? WHERE ?",
//       [
//         {
//           quantity: 100
//         },
//         {
//           flavor: "Rocky Road"
//         }
//       ],
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " products updated!\n");
//         // Call deleteProduct AFTER the UPDATE completes
//         deleteProduct();
//       }
//     );
  
//     // logs the actual query being run
//     console.log(query.sql);
//   }
  
//   function deleteProduct() {
//     console.log("Deleting all strawberry icecream...\n");
//     connection.query(
//       "DELETE FROM products WHERE ?",
//       {
//         flavor: "strawberry"
//       },
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " products deleted!\n");
//         // Call readProducts AFTER the DELETE completes
//         readProducts();
//       }
//     );
//   }
  

// // inquirer/command line
