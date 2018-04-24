// USE bamazonDB;

// CREATE TABLE products(
// id INT NOT NULL AUTO_INCREMENT,
// tools VarChar (255) NULL,
// homeImprovement VarChar (255) NULL,
// price DECIMAL (10, 2) NULL,
// stockQuantity INTEGER (100),
// PRIMARY KEY (id)
// );

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllItems();
});

function queryAllItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].tools + " | " + res[i].price + " | " + res[i].stockQuantity);
    }
    console.log("-----------------------------------");
  });
}

// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "What is the ID of the product they would like to buy?",
      choices: function() {
        var choiceArray = [];
        for (var i = 0; i < res.length; i++) {
          choiceArray.push(results[i].item_id);
        }
        return choiceArray;
      }
    })
}

