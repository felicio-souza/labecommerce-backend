-- Active: 1682084925641@@127.0.0.1@3306

-- --Criando a Tabela
-- CREATE TABLE users(
-- id TEXT PRIMARY KEY UNIQUE NOT NULL,
-- email TEXT UNIQUE NOT NULL,
-- password TEXT NOT NULL

-- );

-- --Populando tabela

-- INSERT INTO users(id, email, password)
-- VALUES 
-- ("10", "Pedro@gmail.com", "123casa"),
-- ("11", "Marcos@gmail.com", "456casa"),
-- ("12", "Paulo@gmail.com", "693casa");

-- --Criando tabela de produtos
-- CREATE TABLE products(

--     id TEXT PRIMATY KEY UNIQUE NOT NULL,
--     name TEXT NOT NULL,
--     price REAL NOT NULL,
--     category TEXT NOT NULL

-- );

-- --Populando a tabela

-- INSERT INTO products(id, name, price, category)
-- VALUES
-- ("20", "HeadPhone", 250, "eletronicos" ),
-- ("21", "Camera", 300, "eletronicos" ),
-- ("22", "sapato", 220, "roupas e calçados" ),
-- ("23", "Blusa", 100, "roupas e calçados" ),
-- ("24", "Relogio", 400, "acessorio ");

-- SELECT * FROM products;

-- --EXERCICIO 1 criando queries

-- -- Get all Users
-- SELECT * FROM users;


-- --Get all products
-- SELECT * FROM products;

-- --Search Products by name
-- --Procure o produto por nome
-- SELECT * FROM products
-- WHERE LIKE "%monitor%";



-- --Create user
-- --Criando um novo usuario
-- INSERT INTO users (id, email, password)
-- VALUE("26", "kilder@gmail.com", "123456@");


-- --Create Products
-- --Criando um novo produto
-- INSERT INTO products (id, name, price, category)
-- VALUE("32", "bone", 100, "acessorio");


-- --EXERCICIO 2 criando queries

-- -- Get products by id
-- -- Buscar produto com id 02
-- SELECT * FROM products
-- WHERE id = "02";

-- --Delect user by id
-- --Delete o usuario de id 02
-- DELETE FROM users
-- WHERE id = 02;


-- --Delect Product by id
-- --Delete o produto de id 02
-- DELETE FROM products
-- WHERE id = 02;

-- --Edit User by id
-- --Altere email do ussuario 01 para marcos.filho@dev.com.br
-- UPDATE users
-- SET email = "marcos.filho@dev.com.br"
-- WHERE id = 01;


-- --Edit User by id
-- --Altere o preço do objeto 01 para 5500
-- UPDATE products
-- SET price = 5500
-- WHERE id = 01 or name = "notebook";




-- --Exercicio 3

-- --Get all users
-- --Retorna o resltado ordenado pela coluna email em ordem crescente
-- SELECT * FROM users
-- ORDER BY email ASC;


-- --Get all products versão 1
-- --Retorna o resultado pela coluna price em ordem crescente limitado em 20 começando pelo primeiro item
-- SELECT * FROM products
-- ORDER BY price ASC
-- limit 2


-- --Get all products versão 2
-- --Retone produtos de valores de 200 e 1000
-- --Retorna oS produtos com preços dentro dos intervalos
-- SELECT * FROM products
-- WHERE price >= 200 AND price <= 1000
-- ORDER BY price ASC;


-- --CRIAÇÃO DA TABELA DE PERDIDOS PURCHASES

-- CREATE TABLE purchases(
--     id TEXT PRIMARY KEY UNIQUE NOT NULL,
--     total_price REAL NOT NULL,
--     paid INTEGER NOT NULL,
--     delivered_at TEXT,
--     buyer_id TEXT NOT NULL ,
--     FOREIGN KEY (buyer_id) REFERENCES users(id)

-- )  ;

-- INSERT INTO purchases(id, total_price, paid, delivered_at, buyer_id)
-- VALUES 
-- ("06", 1500, 0, NULL, 10 ),
-- ("07", 250, 1, NULL, 10 ),
-- ("08", 300, 0, NULL, 11 ),
-- ("09", 1600, 1, NULL, 11 );

-- SELECT * FROM purchases;

-- --Editando valor da data do pedido

-- UPDATE purchases
-- SET delivered_at = DATETIME('now', 'localtime')
-- WHERE id = "08";

-- --Criando query para consulta

-- SELECT * FROM users
-- INNER JOIN purchases
-- ON purchases.buyer_id = users.id;


-- --Criando tabelas de relações

-- CREATE TABLE purchases_products(
-- purchase_id TEXT NOT NULL,
-- product_id TEXT NOT NULL,
-- quantity INTEGER NOT NULL);

-- --Adicionando alguns itens

-- INSERT INTO purchases_products(purchase_id, product_id, quantity)
-- VALUES 
-- ("10", "21", 3),
-- ("11", "24", 2),
-- ("12", "22", 1);

-- SELECT * FROM purchases_products;

-- --Mostrando todos as colunas das tabelas em relação
-- SELECT 
-- purchases.id AS purchasesID,
-- purchases.total_price AS purchasesTotalPrice,
-- purchases.paid AS purchasesPaid,
-- purchases.delivered_at AS purchasesDelivered,
-- purchases.buyer_id AS purchasesBuyer,
-- products.id AS productsID,
-- products.name AS productsName,
-- products.price AS productsPrice,
-- products.category AS purchasesCategory
  
-- FROM purchases_products
-- INNER JOIN purchases
-- ON purchases_products.purchase_id = purchases.id
-- INNER  JOIN products
-- ON purchases_products.product_id = products.id;

-- SELECT * FROM products;
-- SELECT * FROM purchases;
-- SELECT * FROM purchases_products;



-- --Apagando as tabelas SQL (users, products e purchases) conforme o execicio 2 into knex

-- DROP TABLE users;
-- DROP TABLE products;
-- DROP TABLE purchases;
-- DROP TABLE purchases_products;



--Criando novas Tabelas conforme descrito (tabelas = users, products e purchases)

--Create Table User
CREATE TABLE users(
id TEXT PRIMARY KEY UNIQUE NOT NULL,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime'))

);

--Inserindo users
INSERT INTO users(id, name, email, password, createdAt )
VALUES
("001", "Antonio Silva", "antonios@casaazul", "so123456", DATETIME('now', 'localtime')),
("002", "Carlos Magno", "carlos@caracol", "so654321", DATETIME('now', 'localtime')),
("003", "Roberta Soares", "robertaso@caracol", "rs123456", DATETIME('now', 'localtime'));

-- Listando tabela
SELECT * FROM users;

--Create Table Products
CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    imageUrl TEXT

);

--Inserindo products
INSERT INTO products(id, name, price, description, imageUrl )
VALUES
("p001", "monitor", 900, "monitor de 29 polegadas, full HD UltraWide Led IPS, multi-color", "https://m.media-amazon.com/images/I/61QUveKcmIL._AC_SL1103_.jpg"),
("p002", "headset", 369, "Headset Gamer Redragon Pandora 2 Preto RGB", "https://m.media-amazon.com/images/I/61SjfwykKxL._AC_SL1500_.jpg"),
("p003", "JavaScript", 190, "JavaScript: O Guia Definitivo Capa comum", "https://d1b14unh5d6w7g.cloudfront.net/B016N7G8EK.01.S001.LXXXXXXX.jpg?Expires=1681490298&Signature=g94RP95T33vVmz7MtcZiWj60sghPxS7Oujy4kMM3lfGLi4DmgtdKTtTCkmf-6F8gQDmycdrPUuSLg1B8GI2PW0qmh0NXi7elV9z0D04rGrclS8bmPT5pFVi6blzGFcOHd48kjni~HSncPO3XHXWWsYHKZSxy2R2pJHGv0nUZv80_&Key-Pair-Id=APKAIUO27P366FGALUMQ");

-- Listando tabela
SELECT * FROM products;


--Create Purchases

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    totalPrice REAL NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime')),
    paid INTEGER NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)

          
);

--Inserindo purchases
INSERT INTO purchases(id, buyer, totalPrice, createdAt, paid)
VALUES
("pu001", "001", 900, DATETIME('now', 'localtime'), 1),
("pu002", "002", 369, DATETIME('now', 'localtime'), 0),
("pu003", "003", 190, DATETIME('now', 'localtime'), 1);

-- Listando tabela
SELECT * FROM purchases;

CREATE TABLE purchases_products(
purchase_id TEXT NOT NULL,
product_id TEXT NOT NULL,
quantity INTEGER NOT NULL

);
-- CREATE TABLE purchases_products(
--     purchase_id TEXT NOT NULL,
--     product_id TEXT NOT NULL,
--     quantity INTEGER NOT NULL,
--     FOREIGN KEY (purchase_id)
--     REFERENCES purchases (id),
--     FOREIGN KEY (product_id) 
--     REFERENCES products (id)
-- );

INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES
("pu001", "p001", 1),
("pu002", "p002", 1),
("pu003", "p003", 1);


--Recriando os endpoint
--Esta sendo criado no arquivo INDEX

DROP TABLE users;
DROP TABLE products;
DROP TABLE purchases;
DROP TABLE purchases_products;

SELECT 
*  
FROM purchases_products
INNER JOIN purchases
ON purchases_products.purchase_id = purchases.id
INNER JOIN products
ON purchases_products.product_id = products.id;