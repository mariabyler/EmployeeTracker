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
      message: "Would you like to view a [DEPARTMENT], [ROLE], or [EMPLOYEE]?",
      choices: ["DEPARTMENT", "ROLE", "EMPLOYEE"]
    })
    .then(function(answer) {
      if (answer.viewOptions === "DEPARTMENT") {
        viewDepartment();
      }
      else if(answer.viewOptions === "ROLE") {
        viewRole();
      } else if(answer.viewOptions === "EMPLOYEE") {
        viewEmployee();
      } else{
        connection.end();
      }
    });
    add(); 
}
// function which prompts the user for what action they should take
function add() {
  inquirer
    .prompt({
      name: "addOptions",
      type: "list",
      message: "Would you like to add a [DEPARTMENT], [ROLE], or [EMPLOYEE]?",
      choices: ["DEPARTMENT", "ROLE", "EMPLOYEE"]
    })
    .then(function(answer) {
      if (answer.addOptions === "DEPARTMENT") {
        addDepartment();
      }
      else if(answer.addOptions === "ROLE") {
        addRole();
      } else if(answer.addOptions === "EMPLOYEE") {
        addEmployee();
      } else{
        connection.end();
      }
    });
    update(); 
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

// // function to handle posting new items up for auction
// function postAuction() {
//   // prompt for info about the item being put up for auction
//   inquirer
//     .prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "What is the item you would like to submit?"
//       },
//       {
//         name: "category",
//         type: "input",
//         message: "What category would you like to place your auction in?"
//       },
//       {
//         name: "startingBid",
//         type: "input",
//         message: "What would you like your starting bid to be?",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       // when finished prompting, insert a new item into the db with that info
//       connection.query(
//         "INSERT INTO auctions SET ?",
//         {
//           item_name: answer.item,
//           category: answer.category,
//           starting_bid: answer.startingBid || 0,
//           highest_bid: answer.startingBid || 0
//         },
//         function(err) {
//           if (err) throw err;
//           console.log("Your auction was created successfully!");
//           // re-prompt the user for if they want to bid or post
//           start();
//         }
//       );
//     });
// }

// function bidAuction() {
//   // query the database for all items being auctioned
//   connection.query("SELECT * FROM auctions", function(err, results) {
//     if (err) throw err;
//     // once you have the items, prompt the user for which they'd like to bid on
//     inquirer
//       .prompt([
//         {
//           name: "choice",
//           type: "rawlist",
//           choices: function() {
//             var choiceArray = [];
//             for (var i = 0; i < results.length; i++) {
//               choiceArray.push(results[i].item_name);
//             }
//             return choiceArray;
//           },
//           message: "What auction would you like to place a bid in?"
//         },
//         {
//           name: "bid",
//           type: "input",
//           message: "How much would you like to bid?"
//         }
//       ])
//       .then(function(answer) {
//         // get the information of the chosen item
//         var chosenItem;
//         for (var i = 0; i < results.length; i++) {
//           if (results[i].item_name === answer.choice) {
//             chosenItem = results[i];
//           }
//         }

//         // determine if bid was high enough
//         if (chosenItem.highest_bid < parseInt(answer.bid)) {
//           // bid was high enough, so update db, let the user know, and start over
//           connection.query(
//             "UPDATE auctions SET ? WHERE ?",
//             [
//               {
//                 highest_bid: answer.bid
//               },
//               {
//                 id: chosenItem.id
//               }
//             ],
//             function(error) {
//               if (error) throw err;
//               console.log("Bid placed successfully!");
//               start();
//             }
//           );
//         }
//         else {
//           // bid wasn't high enough, so apologize and start over
//           console.log("Your bid was too low. Try again...");
//           start();
//         }
//       });
//   });
// }


// creates all queries to database
// add department
  // function addDepartment() {
  //   console.log("Inserting a new department...\n");
  //   var query = connection.query(
  //     "INSERT INTO department WHERE department_name ?",
  //     function(err, res) {
  //       if (err) throw err;
  //       console.log(res.affectedRows + " department added!\n");
  //     }
  //   );
  
  //   // logs the actual query being run
  //   console.log(query.sql);
  // } 
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
