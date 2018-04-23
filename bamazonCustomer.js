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


