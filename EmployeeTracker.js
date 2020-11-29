var inquirer = require("inquirer");
require("console.table");
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
    view();
  });

  // connection.query = util.promisify(connection.query);

// function which prompts the user for what action they should take
function view() {
  inquirer
    .prompt({
      name: "viewOptions",
      type: "list",
      message: "Would you like to view a [DEPARTMENT], [ROLE], [EMPLOYEE], or [NONE]?",
      choices: ["DEPARTMENT", "ROLE", "EMPLOYEE", "NONE"]
    })
    .then(function(answer) {
      if (answer.viewOptions === "DEPARTMENT") {
        viewDepartment();
      }
      else if(answer.viewOptions === "ROLE") {
        viewRole();
      } else if(answer.viewOptions === "EMPLOYEE") {
        viewEmployee();
      } else if(answer.viewOptions === "NONE") {
        add(); 
      } 
      // else{
      //   connection.end(); 
      // }
    });
}
// function which prompts the user for what action they should take
function add() {
  inquirer
    .prompt({
      name: "addOptions",
      type: "list",
      message: "Would you like to add a [DEPARTMENT], [ROLE], [EMPLOYEE], or [NONE]?",
      choices: ["DEPARTMENT", "ROLE", "EMPLOYEE", "NONE"]
    })
    .then(function(answer) {
      if (answer.addOptions === "DEPARTMENT") {
        addDepartment();
      }
      else if(answer.addOptions === "ROLE") {
        addRole();
      } else if(answer.addOptions === "EMPLOYEE") {
        addEmployee();
      } else if(answer.addOptions === "NONE") {
        update(); 
      } 
      // else{
      //   connection.end(); 
      // }
    });
}
// function which prompts the user for what action they should take
function update() {
  inquirer
    .prompt({
      name: "updateOptions",
      type: "list",
      message: "Would you like to update an employee role [YES] or [NO]?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.updateOptions === "YES") {
        updateRole();
      } else if(answer.updateOptions === "NO") {
        connection.end();
      }
    });
}
// add department
  function addDepartment() {
    inquirer
    .prompt({
      name: "newDept",
      type: "input",
      message: "What department would you like to add?",
    })
    .then (function(answer) {
    console.log("Inserting a new department...\n");
    var query = connection.query(
      "INSERT INTO department SET ?",
      {
        department_name: answer.newDept
      },
      
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department added!\n");
        update();
      }
      ); 
    });
  } 

  // add role
  function addRole() {
    inquirer
    .prompt([{
      name: "newRole",
      type: "input",
      message: "What role would you like to add?",
    }, 
    {
      name: "salary",
      type: "input",
      message: "What is their salary?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
    ])
    .then (function(answer) {
    console.log("Inserting a new role...\n");
    var query = connection.query(
      "INSERT INTO role SET ?",
      {
        title: answer.newRole, 
        salary: answer.salary
      },
      
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role added!\n");
        update(); 
      }
      ); 
    });
  } 
  // add employee
  function addEmployee() {
    inquirer
    .prompt([{
      name: "firstName",
      type: "input",
      message: "What is the first name of the new employee?"
    }, 
    {
      name: "lastName",
      type: "input",
      message: "What is the last name of the new employee?"
    }
    ])
    .then (function(answer) {
    console.log("Inserting a new employee...\n");
    var query = connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.firstName, 
        last_name: answer.lastName
      },
      
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee added!\n");
        update(); 
      }
      ); 
    }); 
  } 
