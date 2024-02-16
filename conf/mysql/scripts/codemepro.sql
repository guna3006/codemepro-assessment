CREATE DATABASE codemepro_db;
CREATE USER IF NOT EXISTS 'codemepro'@'%' IDENTIFIED BY 'codemepro';
ALTER USER 'codemepro'@'%' IDENTIFIED WITH mysql_native_password BY 'codemepro';
GRANT ALL ON codemepro_db.* TO 'codemepro'@'%';
USE codemepro_db;


CREATE TABLE products (
    Name VARCHAR(50),
    Price DECIMAL(10, 2),
    Weight INT
);

INSERT INTO products (Name, Price, Weight) VALUES
('Item 1', 10, 200),
('Item 2', 100, 20),
('Item 3', 30, 300),
('Item 4', 20, 500),
('Item 5', 30, 250),
('Item 6', 40, 10),
('Item 7', 200, 10),
('Item 8', 120, 500),
('Item 9', 130, 790),
('Item 10', 20, 100),
('Item 11', 10, 340),
('Item 12', 4, 800),
('Item 13', 5, 200),
('Item 14', 240, 20),
('Item 15', 123, 700),
('Item 16', 245, 10),
('Item 17', 230, 20),
('Item 18', 110, 200),
('Item 19', 45, 200),
('Item 20', 67, 20),
('Item 21', 88, 300),
('Item 22', 10, 500),
('Item 23', 17, 250),
('Item 24', 19, 10),
('Item 25', 89, 10),
('Item 26', 45, 500),
('Item 27', 99, 790),
('Item 28', 125, 100),
('Item 29', 198, 340),
('Item 30', 220, 800),
('Item 31', 249, 200),
('Item 32', 230, 20),
('Item 33', 190, 700),
('Item 34', 45, 10),
('Item 35', 12, 20),
('Item 36', 5, 200),
('Item 37', 2, 200),
('Item 38', 90, 20),
('Item 39', 12, 300),
('Item 40', 167, 500),
('Item 41', 12, 250),
('Item 42', 8, 10),
('Item 43', 2, 10),
('Item 44', 9, 500),
('Item 45', 210, 790),
('Item 46', 167, 100),
('Item 47', 23, 340),
('Item 48', 190, 800),
('Item 49', 199, 200),
('Item 50', 12, 20);


CREATE TABLE courierCharge (
    Min DECIMAL(10, 2),
    Max DECIMAL(10, 2),
    Charge DECIMAL(10, 2)
);

INSERT INTO courierCharge (Min, Max, Charge) VALUES
    (0, 200 , 5),
    (200, 500 , 10),
    (500, 1000 , 15),
    (1000, 5000 , 20);

