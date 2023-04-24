-- Active: 1681175004611@@127.0.0.1@3306

--Criando a Tabela
CREATE TABLE users(
id TEXT PRIMARY KEY UNIQUE NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL

);

--Populando tabela

INSERT INTO users(id, email, password)
VALUES 
("10", "Pedro@gmail.com", "123casa"),
("11", "Marcos@gmail.com", "456casa"),
("12", "Paulo@gmail.com", "693casa");

--Criando tabela de produtos
CREATE TABLE products(

    id TEXT PRIMATY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL

);

--Populando a tabela

INSERT INTO products(id, name, price, category)
VALUES
("20", "HeadPhone", 250, "eletronicos" ),
("21", "Camera", 300, "eletronicos" ),
("22", "sapato", 220, "roupas e calçados" ),
("23", "Blusa", 100, "roupas e calçados" ),
("24", "Relogio", 400, "acessorio ");

SELECT * FROM products;

--EXERCICIO 1 criando queries

-- Get all Users
SELECT * FROM users;


--Get all products
SELECT * FROM products;

--Search Products by name
--Procure o produto por nome
SELECT * FROM products
WHERE LIKE "%monitor%";



--Create user
--Criando um novo usuario
INSERT INTO users (id, email, password)
VALUE("26", "kilder@gmail.com", "123456@");


--Create Products
--Criando um novo produto
INSERT INTO products (id, name, price, category)
VALUE("32", "bone", 100, "acessorio");


--EXERCICIO 2 criando queries

-- Get products by id
-- Buscar produto com id 02
SELECT * FROM products
WHERE id = "02";

--Delect user by id
--Delete o usuario de id 02
DELETE FROM users
WHERE id = 02;


--Delect Product by id
--Delete o produto de id 02
DELETE FROM products
WHERE id = 02;

--Edit User by id
--Altere email do ussuario 01 para marcos.filho@dev.com.br
UPDATE users
SET email = "marcos.filho@dev.com.br"
WHERE id = 01;


--Edit User by id
--Altere o preço do objeto 01 para 5500
UPDATE products
SET price = 5500
WHERE id = 01 or name = "notebook";




--Exercicio 3

--Get all users
--Retorna o resltado ordenado pela coluna email em ordem crescente
SELECT * FROM users
ORDER BY email ASC;


--Get all products versão 1
--Retorna o resultado pela coluna price em ordem crescente limitado em 20 começando pelo primeiro item
SELECT * FROM products
ORDER BY price ASC
limit 2


--Get all products versão 2
--Retone produtos de valores de 200 e 1000
--Retorna oS produtos com preços dentro dos intervalos
SELECT * FROM products
WHERE price >= 200 AND price <= 1000
ORDER BY price ASC;


--CRIAÇÃO DA TABELA DE PERDIDOS PURCHASES

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL ,
    FOREIGN KEY (buyer_id) REFERENCES users(id)

)  ;

INSERT INTO purchases(id, total_price, paid, delivered_at, buyer_id)
VALUES 
("06", 1500, 0, NULL, 10 ),
("07", 250, 1, NULL, 10 ),
("08", 300, 0, NULL, 11 ),
("09", 1600, 1, NULL, 11 );

SELECT * FROM purchases;

--Editando valor da data do pedido

UPDATE purchases
SET delivered_at = DATETIME('now', 'localtime')
WHERE id = "08";

--Criando query para consulta

SELECT * FROM users
INNER JOIN purchases
ON purchases.buyer_id = users.id;


--Criando tabelas de relações

CREATE TABLE purchases_products(
purchase_id TEXT NOT NULL,
product_id TEXT NOT NULL,
quantity INTEGER NOT NULL);

--Adicionando alguns itens

INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES 
("10", "21", 3),
("11", "24", 2),
("12", "22", 1);

SELECT * FROM purchases_products;

--Mostrando todos as colunas das tabelas em relação
SELECT 
purchases.id AS purchasesID,
purchases.total_price AS purchasesTotalPrice,
purchases.paid AS purchasesPaid,
purchases.delivered_at AS purchasesDelivered,
purchases.buyer_id AS purchasesBuyer,
products.id AS productsID,
products.name AS productsName,
products.price AS productsPrice,
products.category AS purchasesCategory
  
FROM purchases_products
INNER JOIN purchases
ON purchases_products.purchase_id = purchases.id
INNER  JOIN products
ON purchases_products.product_id = products.id;

SELECT * FROM products;
SELECT * FROM purchases;
SELECT * FROM purchases_products;