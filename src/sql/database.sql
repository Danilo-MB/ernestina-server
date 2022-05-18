CREATE DATABASE ernestina;

CREATE TABLE categories(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category TEXT NOT NULL
);

USE DATABASE ernestina;
DESCRIBE categories;

CREATE TABLE products(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_category VARCHAR(255) NOT NULL,
    product_title VARCHAR(255) NOT NULL,
    product_description VARCHAR(255),
    product_imageUrl VARCHAR(255)
);
