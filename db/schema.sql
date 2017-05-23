### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP
);