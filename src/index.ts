import {createProduct, creatUser, getAllProducts, getAllUses, getProductById} from "./database"
// import {users} from "./database"
import {purchases} from "./database"
import {products} from "./database"
import { CHOICE, TProduct, TProductq, TPurchase, TUser } from "./types"

import express, {Request, Response} from "express"
import cors from "cors"
import {db} from "./database/knex"



//Criação do servidor
const app = express()

// Formato para json
app.use(express.json())

//Meotdo cors
app.use(cors())


app.listen(3003, ()=>{

    console.log("Servidor rodando na porta 3003")
})




// ///Adiciona o cliente
// creatUser("07", "fernando@gmail.com", "casa123")

// //Mostra todos os clientes
// getAllUses()

// //Adicionar produto
// createProduct( "03", "celular",1500, CHOICE.ELETRONICS)

// //Mostra todos os produtos
// getAllProducts()

// //Mostrar produto por ID
// getProductById("01")


// //EndPoint de teste

// app.get("/ping!", (req: Request, res: Response)=>
// res.send("Pong!"))


// //Obtendo todos os clientes (Fatorando)

// // app.get("/users", (req: Request, res: Response) => {
// //     try {
// //       res.status(200).send(users);
// //     } catch (error) {
// //       console.log(error);
// //       if (res.statusCode === 200) {
// //         res.status(500);
// //       }
// //       res.send(error);
// //     }
// //   });

// //Obtendo todos os produtos (Fatorando)

// app.get("/products", (req: Request, res: Response) => {
//     try {
//       res.status(200).send(products);
//     } catch (error) {
//       console.log(error);
//       if (res.statusCode === 200) {
//         res.status(500);
//       }
//       res.send(error);
//     }
//   });


// // Obtendo prodtuos por nome (Fatorando, paramentro com pelo menos uma caracteres)

//     app.get("/products/search", (req: Request, res: Response) => {
//         try {
//           const q = req.query.name as string
//           if (q.length < 1) {
//             res.status(400);
//             throw new Error("'query params' deve possuir pelo menos um caractere");
//           }
//           const result = products.filter((item) =>
//             item.name.toLowerCase().includes(q.toLowerCase())
//           );
//           res.status(200).send(result);
//         } catch (error) {
//           console.log(error);
//           if (res.statusCode === 200) {
//             res.status(500);
//           }
//           res.send(error);
//         }
//       });

//     // Criando usuario (fatorando)

//     // app.post("/users", (req: Request, res: Response) => {
//     //     try {
//     //       const { id, email, password }: TUser = req.body;
//     //       if (!id) {
//     //         res.status(400);
//     //         throw new Error("'id' deve ser passado no body");
//     //       }
//     //       if (typeof id !== "string") {
//     //         res.status(400);
//     //         throw new Error("'id' deve ser do tipo 'string'");
//     //       }
//     //       if (!email) {
//     //         res.status(400);
//     //         throw new Error("'email' deve ser passado no body");
//     //       }
//     //       if (typeof email !== "string") {
//     //         res.status(400);
//     //         throw new Error("'email' deve ser do tipo 'string'");
//     //       }
//     //       if (!password) {
//     //         res.status(400);
//     //         throw new Error("'password' deve ser passado no body");
//     //       }
//     //       if (typeof password !== "string") {
//     //         res.status(400);
//     //         throw new Error("'password' deve ser do tipo 'string'");
//     //       }
//     //       const searchId = users.find((user) => user.id === id);
//     //       if (searchId) {
//     //         res.status(400);
//     //         throw new Error("Já existe uma conta com esse id");
//     //       }
//     //       const searchEmail = users.find((user) => user.email === email);
//     //       if (searchEmail) {
//     //         res.status(400);
//     //         throw new Error("Já existe uma conta com esse email");
//     //       }
//     //       const newUser: TUser = { id, email, password };
//     //       users.push(newUser);
//     //       res.status(201).send("Usuário cadastrado com sucesso!");
//     //     } catch (error) {
//     //       console.log(error);
//     //       if (res.statusCode === 200) {
//     //         res.status(500);
//     //       }
//     //       res.send(error);
//     //     }
//     //   });

//     //Criando produto

//     app.post("/products", (req: Request, res: Response) => {
//         try {
//           const { id, name, price, category }: TProduct = req.body;
      
//           if (!id) {
//             res.status(400);
//             throw new Error("'id' deve ser passado no body");
//           }
      
//           if (!name) {
//             res.status(400);
//             throw new Error("'name' deve ser passado no body");
//           }
      
//           if (!price) {
//             res.status(400);
//             throw new Error("'price' deve ser passado no body");
//           }
      
//           if (!category) {
//             res.status(400);
//             throw new Error("'category' deve ser passado no body");
//           }
      
//           if (id !== undefined) {
//             if (typeof id !== "string") {
//               res.status(400);
//               throw new Error("'id' deve ser do tipo 'string'");
//             }
//           }
      
//           if (name !== undefined) {
//             if (typeof name !== "string") {
//               res.status(400);
//               throw new Error("'name' deve ser do tipo 'string'");
//             }
//           }
      
//           if (price !== undefined) {
//             if (typeof price !== "number") {
//               res.status(400);
//               throw new Error("'price' deve ser do tipo 'number'");
//             }
//           }
      
//           if (category !== undefined) {
//             if (
//               category !== CHOICE.ACCESSOIES &&
//               category !== CHOICE.CLOTHES_AND_SHOES &&
//               category !== CHOICE.ELETRONICS
//             )
//               res.status(400);
//               throw new Error(
//                 "'category' deve ter um tipo válido: 'Acessórios', 'Roupas e calçados', 'Eletrônicos' "
//               );
//             }
          
      
//           const searchId = products.find((product) => product.id === id);
//           if (searchId) {
//             res.status(400);
//             throw new Error("Já existe um produto cadastrado com esse 'id'");
//           }
//           const newProduct: TProduct = { id, name, price, category };
//           products.push(newProduct);
//           res.status(201).send("Produto cadastrado com sucesso!");
//         } catch (error) {
//           console.log(error);
//           if (res.statusCode === 200) {
//             res.status(500);
//           }
//           res.send(error);
//         }
//       });

//         //Criando compra

//         // app.post("/purchases", (req: Request, res: Response) => {
//         //     try {
//         //       const { userId, productId, quantity, totalPrice }: TPurchase = req.body;
          
//         //       if (!userId) {
//         //         res.status(400);
//         //         throw new Error("'userId' deve ser passado no body");
//         //       }
//         //       if (!productId) {
//         //         res.status(400);
//         //         throw new Error("'productId' deve ser passado no body");
//         //       }
//         //       if (!quantity) {
//         //         res.status(400);
//         //         throw new Error("'quantity' deve ser passado no body");
//         //       }
//         //       if (!totalPrice) {
//         //         res.status(400);
//         //         throw new Error("'totalPrice' deve ser passado no body");
//         //       }
//         //       if (userId !== undefined) {
//         //         if (typeof userId !== "string") {
//         //           res.status(400);
//         //           throw new Error("'userId' deve ser do tipo 'string'");
//         //         }
//         //       }
//         //       if (productId !== undefined) {
//         //         if (typeof productId !== "string") {
//         //           res.status(400);
//         //           throw new Error("'productId' deve ser do tipo 'string'");
//         //         }
//         //       }
//         //       if (quantity !== undefined) {
//         //         if (typeof quantity !== "number") {
//         //           res.status(400);
//         //           throw new Error("'quantity' deve ser do tipo 'number'");
//         //         }
//         //       }
//         //       if (totalPrice !== undefined) {
//         //         if (typeof totalPrice !== "number") {
//         //           res.status(400);
//         //           throw new Error("'totalPrice' deve ser do tipo 'number'");
//         //         }
//         //       }
//         //       const searchUserId = users.find((user) => user.id === userId);
//         //       if (!searchUserId) {
//         //         res.status(404);
//         //         throw new Error(
//         //           "'userId' deve corresponder à 'id' de um usuário cadastrado"
//         //         );
//         //       }
//         //       const searchProductId = products.find(
//         //         (product) => product.id === productId
//         //       );
//         //       if (!searchProductId) {
//         //         res.status(400);
//         //         throw new Error(
//         //           "'productId' deve corresponder à 'id' de um produto cadastrado"
//         //         );
//         //       }
//         //       if (searchProductId) {
//         //         if (searchProductId.price * quantity !== totalPrice) {
//         //           res.status(400);
//         //           throw new Error(
//         //             "O valor total da compra não corresponde ao valor do produto vezes a quantidade informada"
//         //           );
//         //         }
//         //       }
//         //       const newPurchase: TPurchase = { userId, productId, quantity, totalPrice };
//         //       purchases.push(newPurchase);
//         //       res.status(201).send("Compra realizada com sucesso!");
//         //     } catch (error) {
//         //       console.log(error);
//         //       if (res.statusCode === 200) {
//         //         res.status(500);
//         //       }
//         //       res.send(error);
//         //     }
//         //   });




// //Exercicio 1 

// // Pegar produtos por ID

// app.get("/products/:id", (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
  
//       const result = products.find((product) => product.id === id);
//       if (!result) {
//         res.status(404);
//         throw new Error(
//           "O produto não existe em nosso banco de dados. Verifique o 'id'"
//         );
//       }
//       res.status(200).send(result);
//     } catch (error) {
//       console.log(error);
//       if (res.statusCode === 200) {
//         res.status(500);
//       }
//       res.send(error);
//     }
//   });


//   //Obtendo lista de compras por usuario 

//   // app.get("/users/:id/purchases", (req: Request, res: Response) => {
//   //   try {
//   //     const id = req.params.id;
      
//   //     const searchUserId = users.find((user) => user.id === id);
//   //     if (!searchUserId) {
//   //       res.status(404);
//   //       throw new Error("Usuário não existe. Verifique o 'id'");
//   //     }
  
//   //     const userPurchases = purchases.filter(
//   //       (purchase) => purchase.userId === id
//   //     );
  
//   //     res.status(200).send(userPurchases);
//   //   } catch (error) {
//   //     console.log(error);
//   //     if (res.statusCode === 200) {
//   //       res.status(500);
//   //     }
//   //     res.send(error);
//   //   }
//   // });

// //Exercicio 2

// //Deletando usuario
// // app.delete("/users/:id", (req: Request, res: Response) => {
// //     try {
// //       const id = req.params.id;
// //       const searchUserId = users.find((user) => user.id === id);
// //       if (!searchUserId) {
// //         res.status(404);
// //         throw new Error("Usuário não existe. Verifique o 'id'");
// //       }
// //       const index = users.findIndex((user) => user.id === id);
// //       if (index) {
// //         users.splice(index, 1);
// //       }
// //       res.status(200).send("Usuário apagado com sucesso");
// //     } catch (error) {
// //       console.log(error);
// //       if (res.statusCode === 200) {
// //         res.status(500);
// //       }
// //       res.send(error);
// //     }
// //   });

// //Deletando produto

// app.delete("/products/:id", (req: Request, res: Response) => {
//     try{
//       const id = req.params.id;
//       const searchProduct = products.find(product => product.id === id)
//       if(!searchProduct){
//         res.status(404)
//         throw new Error("Produto não existe. Verifique o 'id'")
//       }
//       const index = products.findIndex((product) => product.id === id);
//       if (index) {
//         products.splice(index, 1);
//       }
//       res.status(200).send("Produto apagado com sucesso");
//     } catch (error) {
//       console.log(error);
//       if (res.statusCode === 200) {
//         res.status(500);
//       }
//       res.send(error);
//     }
//     });

// //Exercicio 3
// //Edit User by id

// // app.put("/users/:id", (req: Request, res: Response) => {
// //     try{
// //      const id = req.params.id;
// //      const newEmail = req.body.email
// //      const newPassword = req.body.password
   
// //      const searchUserId = users.find((user) => user.id === id);
   
// //        if (!searchUserId) {
// //          res.status(404);
// //          throw new Error("Usuário não existe. Verifique o 'id'");
// //        }
   
// //        if(newEmail !== undefined){
// //          if(typeof newEmail !== "string"){
// //            res.status(400)
// //            throw new Error("'email' deve ser do tipo 'string'")
// //          }
// //        }
   
// //        if(newPassword !== undefined){
// //          if(typeof newPassword !== "string"){
// //            res.status(400)
// //            throw new Error("'password' deve ser do tipo 'string'")
// //          }
// //        }
// //      const result = users.find((user) => user.id === id);
// //      if (result) {
// //        result.email = newEmail || result.email;
// //        result.password = newPassword || result.password;
// //      }
// //      res.status(200).send("Cadastro atualizado com sucesso");
// //     } catch(error){
// //      console.log(error)
// //      if (res.statusCode === 200) {
// //        res.status(500);
// //      }
// //      res.send(error);
// //     }
// //    });

// //Edit Product by id

// app.put("/products/:id", (req: Request, res: Response) => {

//     try{
//       const id = req.params.id;
//       const newName = req.body.name
//       const newPrice = req.body.price
//       const newCategory = req.body.category
    
//       const searchProduct = products.find(product => product.id === id)
//       if(!searchProduct){
//         res.status(404)
//         throw new Error("Produto não encontrado. Verifique o 'id'")
//       }
     
//       if(newName !== undefined){
//         if(typeof newName !== "string"){
//           res.status(400)
//           throw new Error("'name' deve ser do tipo 'string'")
//         }
//       }
//       if(newPrice !== undefined){
//         if(typeof newPrice !== "number"){
//           res.status(400)
//           throw new Error("'price' deve ser do tipo 'number'")
//         }
//       }
//       if (newCategory !== undefined) {
//         if(
//           newCategory !== CHOICE.ACCESSOIES &&
//           newCategory !== CHOICE.CLOTHES_AND_SHOES &&
//           newCategory !== CHOICE.ELETRONICS
        
//         ){
//           res.status(400);
//           throw new Error(
//             "'category' deve ter um tipo válido: 'Acessórios', 'Roupas e calçados', 'Eletrônicos'"
//           );
//         }
//       }
//       const result = products.find((product) => product.id === id);
//       if (result) {
//         result.name = newName || result.name;
//         result.price = newPrice || result.price;
//         result.category = newCategory || result.category;
//       }
//       res.status(200).send("Produto atualizado com sucesso");
//     } catch(error){
//       console.log(error)
//       if (res.statusCode === 200) {
//         res.status(500);
//       }
//       res.send(error);
//      }
//     });



//OS CODIGOS A CIMA COMENTADO FAZEM PARTE DO PROJETO AS PRIMEIRAS SEMANAS

//Criando endpoints conexao KNEX
//Get All Users
app.get("/users", async(req: Request, res: Response) =>{

    try {
      const result = await db.raw('SELECT * FROM users;')
      res.status(200).send({result})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//Get All Products
app.get("/products", async(req: Request, res: Response) =>{

  try {
    const result = await db.raw('SELECT * FROM products;')
    res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//Get All Products by name
app.get("/products/search", async(req: Request, res: Response) =>{

  try {
    const q = req.query.q
    
    const result = await db.raw(`SELECT * FROM products WHERE name LIKE "%${q}%";`)
    res.status(200).send(result)
  

  } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//EDIT PRODUCT BY ID
//Editando produto
app.put("/products/:id", async(req: Request, res: Response) =>{

 try {
  const idToEdit = req.params.id
  const { newId, newName, newPrice, newDescription, newImageUrl } = req.body;

console.log(idToEdit)
console.log(newDescription)
console.log(newPrice)

      if (newName === undefined || newPrice === undefined || newDescription === undefined || newImageUrl === undefined) {
   res.status(400);
  throw new Error("Dados inválidos");

  };
      if (newPrice! == undefined) {

      if (typeof newPrice !== "number") {
          res.status(400)
          throw new Error("O campo 'price' deve ser number")
      }

      if (newPrice < 0) {
          res.status(400)
          throw new Error(" O campo 'price' não pode ser negativo")
      }
  }
  
  // if(newDescription.length < 6){
  //   res.status(400)
  //   throw new Error(" O campo 'descrition' deve possuir no minio 6 caracteres")
  // }

  // const [product]: {  id: string,  name: string, price: number, description: string, imageUrl: string }[]
  // = db("products").where({id:idToEdit})
  const [ product ] = await db("products").where({ id: idToEdit })

  //       if (product) {
	// 					await db.raw(`
	// 						UPDATE products
	// 						SET
	// 							id = "${newId || product.id}",
	// 							name = "${newName || product.name}",
  //               price = "${newPrice || product.price}",
  //               description = "${newDescription || product.description}",
  //              	imageUrl = ${newImageUrl || product.imageUrl}
	// 						WHERE
	// 							id = "${idToEdit}";
	// 					`)

						await db("products").update({
							id: newId || product.id,
							name: newName || product.name,
              price: newPrice || product.price,
              description: newDescription || product.description,
              imageUrl: newImageUrl || product.imageUrl
						}).where({ id: idToEdit })
  // if(product){

  //   const updatedProduct = {
  //     id: newId || product.id,
  //     name: newName || product.name,
  //     price: newPrice || product.price,
  //     description: newDescription || product.description,
  //     imageUrl: newImageUrl || product.imageUrl,
      
  //   }
         
    // await db("products").update(updatedProduct).where({ id: idToEdit })

//   }  else {
//     res.status(404)
//     throw new Error("'id' não encontrada")
// }

res.status(200).send({ message: "Atualização realizada com sucesso" })

} catch (error) {
  console.log(error)

  if (req.statusCode === 200) {
      res.status(500)
  }

  if (error instanceof Error) {
      res.send(error.message)
  } else {
      res.send("Erro inesperado")
  }
}
})

//Criando novos endpoints

//CREATE USER
//Refatorando usando QUERY BUILDER (modo abreviado)
app.post("/users", async (req: Request, res: Response) =>{

  try {
    const { id, name, email, password, createdAt } = req.body;
   
    if (!id || typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo 'string'");
    }
  
    if (!email || typeof email !== "string") {
      res.status(400);
      throw new Error("'email' deve ser do tipo 'string'");
    }
   
    if (!password || typeof password !== "string") {
      res.status(400);
      throw new Error("'password' deve ser do tipo 'string'");
    }

    const idExist = await db.raw(`
    SELECT * FROM users WHERE id = "${id}";
    `)

   
    if (idExist.length) {
      res.status(400);
      throw new Error("Já existe uma conta com esse id");
    }
 
    // const newUser = await db.raw(`
    // INSERT INTO users(id, name, email, password)
    // VALUES ("${id}", "${name}", "${email}", "${password}");`);
    // res.status(201).send({message: "Cadastro realizado com sucesso"});
    const newUser = {

      id: id,
      name: name,
      email: email,
      password: password
    }
        
    await db("users").insert(newUser)
    res.status(201).send({message: "Cadastro realizado com sucesso"});

  } catch (error:any) {
     res.status(400).send(error.message);
  }
});

//CREATE PRODUCT
//Refatorando usando QUERY BUILDER (modo abreviado)
app.post("/products", async (req: Request, res: Response) =>{

  try {

    const { id, name, price, description, imageUrl } = req.body;
  
    if (!id || typeof id !== "string") {
    res.status(400);
    throw new Error("'id' deve ser do tipo 'string'");
    }
    
    if (!name || typeof name !== "string") {
      res.status(400);
      throw new Error("'name' deve ser do tipo 'string'");
    }
   
    if (isNaN(price) ) {
      res.status(400);
      throw new Error("'o preço deve ser no formato de numeros'");
    }

    if (description < 5 ) {
      res.status(400);
      throw new Error("'decrição deve ter no minimo 5 caracteres'");
    }

    const idExist = await db.raw(`
    SELECT * FROM products WHERE id = "${id}";
    `)
    if (idExist.length) {
      res.status(400);
      throw new Error("Já existe um produto com esse id");
    }
  
    // const newProduct = await db.raw(`
    // INSERT INTO products(id, name, price, description, imageUrl)
    // VALUES ("${id}", "${name}", "${price}", "${description}", "${imageUrl}");`);
    // res.status(201).send({message: "Produto cadastrado com sucesso"});

    const newProduct = {
      
      id: id, 
      name: name,
      price: price, 
      description: description, 
      imageUrl: imageUrl,

  }
    await db("products").insert(newProduct)
    res.status(201).send({message: "Produto cadastrado com sucesso"});

  } catch (error:any) {
     res.status(400).send(error.message);
  }
});


//CREATE PURCHASE
app.post("/purchases", async (req: Request, res: Response) =>{

  try {
    const { id, buyer, totalPrice, createdAt, paid } = req.body;
    console.log(id, buyer, totalPrice, paid )
   
    if (!id || typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo 'string'");
    }
  
   
    if (isNaN(totalPrice) ) {
      res.status(400);
      throw new Error("'o preço deve ser no formato de numeros'");
    }


    const idExist = await db.raw(`
    SELECT * FROM purchases WHERE id = "${id}";
    `)
    if (idExist.length) {
      res.status(400);
      throw new Error("Já existe um um produto com esse id");
    }
  
    const newPuchases = await db.raw(`
    INSERT INTO purchases(id, buyer, totalPrice, paid)
    VALUES ("${id}", "${buyer}", "${totalPrice}", "${paid}");`);
    res.status(201).send({message: "Compra cadastrada com sucesso"});

  } catch (error:any) {
     res.status(400).send(error.message);
  }
});

//DELETANDO PURCHASE
app.delete("/purchases/:id", async (req: Request, res: Response) => {
  try {
      const idToDelete = req.params.id
      
      const [ purchase ] = await db("purchases").where({ id: idToDelete })

      if (!purchase) {
          res.status(404)
          throw new Error("'id' não encontrada")
      }

      await db("purchases").del().where({ id: idToDelete })

      res.status(200).send({ message: "Compra deletada com sucesso" })

     } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//GET PRODUCTS BY ID
//Refatorando usando QUERY BUILDER (modo abreviado)


app.get("/products/:id", async(req: Request, res: Response) =>{

    try {

    const id = req.params.id

    // const result = await db.raw(`SELECT * FROM products WHERE id = "${id}";`)
    // res.status(200).send(result)

    const result = await db('products').where({id})
    res.status(200).send(result)

  } catch (error: any) {
      res.status(400).send(error.message)
  }
})


//GET USER PURCHASES BY USER ID

app.get("/users/:id/purchases", async(req: Request, res: Response) =>{

  try {

    const id = req.params.id;

    const searchUserId = await db.raw(`SELECT * FROM users WHERE id = "${id}";`)

    if (!searchUserId) {
      res.status(404);
      throw new Error("Usuário não existe. Verifique o 'id'");
        }
    const userPurchases = await db.raw(`SELECT * FROM purchases WHERE buyer = "${id}";`)
      res.status(200).send(userPurchases);
     


    } catch (error: any) {
      res.status(400).send(error.message)
  }
})
 
//Criando endpoint com query builder

// GET PURCHASES BY ID
// Refatorando para retonar a lista de produtos com relação as compras 

app.get("/purchases/:id", async(req: Request, res: Response) => {
  try {
      const id = req.params.id;      
      const purchase = await db("purchases").where({id}).first();
      const buyer = await db("users").where({id: purchase.buyer}).first();

  if (!purchase) {
      return res.status(404).send("Compra não encontrada");
  }
    
      
  if (!buyer) {
      return res.status(404).send("Comprador não encontrado");
  }
    
      const productsList = await db("products")
      await db('products')
      .join('purchases_products', 'purchases_products.product_id', '=', 'products.id')
      .where({ 'purchases_products.purchase_id': id })
     
      const infoPurchaseUser = {
      purchaseId: purchase.id,
      totalPrice: purchase.totalPrice,
      createdAt: purchase.createdAt,
      paid: purchase.paid,
      buyerId: buyer.id,
      emailBuyer: buyer.email,
      nameBuyer: buyer.name,
      productsList: productsList
  };
      res.status(200).send(infoPurchaseUser);
  } catch (error: any) {
      res.status(400).send(error.message);
  }
});
  

