-- create table products(
--     id int primary key not null,
--     name varchar(255) not null,
--     price int not null,
--     stock int not null
-- );

-- CREATE TABLE products(
--     id VARCHAR  PRIMARY KEY,
--     name VARCHAR NOT NULL,
--     stock INT NOT NULL,
--     price INT NOT NULL,
--     photo VARCHAR NOT NULL,
--     description VARCHAR NOT NULL
-- );

-- CREATE TABLE users(
--     id VARCHAR PRIMARY KEY,
--     email VARCHAR NOT NULL,
--     password VARCHAR NOT NULL,
--     fullname VARCHAR NOT NULL,
--     role VARCHAR NOT NULL
-- );

-- insert into products(id,name,price,stock) 
-- values(1,'baju', 100000,12),
-- (2,'kemeja', 120000,20),
-- (3,'kemeja', 250000,25);

-- insert into products(id,name,price,stock) 
-- values(4,'baju', 100000,12);

-- select * from products;

-- update products
-- set name  = 'baju baru',
-- price = 120000,
-- stock = 20
-- where id = 1;

-- delete from products
-- where id = 4;