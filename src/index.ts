import {createProduct, creatUser, getAllProducts, getAllUses, getProductById} from "./database"
import {users} from "./database"
import {purchases} from "./database"
import {products} from "./database"
import { CHOICE } from "./types"


console.log(users)
console.log(products)
console.log(purchases)


//Adiciona o cliente
creatUser("07", "fernando@gmail.com", "casa123")

//Mostra todos os clientes
getAllUses()

//Adicionar produto
createProduct( "03", "celular",1500, CHOICE.ELETRONICS)

//Mostra todos os produtos
getAllProducts()

//Mostrar produto por ID
getProductById("01")

