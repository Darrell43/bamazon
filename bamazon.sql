DROP DATABASE bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
item_id INT (10) NULL,
tools VarChar (255) NULL,
homeImprovement VarChar (255) NULL,
price DECIMAL (10, 2) NULL,
stockQuantity INTEGER (100),
PRIMARY KEY (id)
);


INSERT INTO products (tools, price, stockQuantity, item_id)
VALUES ("Pliers", 10.50, 85, 3333), ("Hammer", 8.00, 100, 1111), 
("DrillGun", 25.75, 50, 4444), ("ChainSaw", 50.00, 40, 2222), ("Shovel", 15.75, 55, 5555), 
("Plunger", 4.50, 56, 6666), ("WireCutter", 11.50, 30, 7777), ("Duct Tape", 3.50, 80, 8888), 
("Flash Light", 7.50, 80, 9999), ("Measuring Tape", 4.00, 80, 1009);

