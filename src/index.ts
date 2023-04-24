import {createProduct, creatUser, getAllProducts, getAllUses, getProductById} from "./database"
import {users} from "./database"
import {purchases} from "./database"
import {products} from "./database"
import { CHOICE, TProduct, TPurchase, TUser } from "./types"

import express, {Request, Response} from "express"
import cors from "cors"



//Criação do servidor
const app = express()

// Formato para json
app.use(express.json())

//Meotdo cors
app.use(cors())


app.listen(3003, ()=>{

    console.log("Servidor rodando na porta 3003")
})




///Adiciona o cliente
creatUser("07", "fernando@gmail.com", "casa123")

//Mostra todos os clientes
getAllUses()

//Adicionar produto
createProduct( "03", "celular",1500, CHOICE.ELETRONICS)

//Mostra todos os produtos
getAllProducts()

//Mostrar produto por ID
getProductById("01")


//EndPoint de teste

app.get("/ping!", (req: Request, res: Response)=>
res.send("Pong!"))


//Obtendo todos os clientes

app.get("/users", (req: Request, res: Response)=>{
    res.status(200).send(users)
})

//Obtendo todos os produtos

app.get("/products", (req: Request, res: Response)=>{
    res.status(200).send(products)
})


// Obtendo produtos por nome
app.get("/products/pesquisa", (req: Request, res: Response)=>{
    const q = req.query.q as string
    const result = products.filter(
        (prod)=> prod.name.toLowerCase().includes(q.toLowerCase()))

        res.status(200).send(result)
    })

    // Criando usuario 

app.post("/users", (req: Request, res: Response)=>{

    const id = req.body.id as string
    const email = req.body.email as string
    const password = req.body.password as string

    const novoUser: TUser= {

        id,
        email,
        password
    }
    users.push(novoUser)

    res.status(201).send("Cadastro realizado com suceso")

    })

    //Criando prosduto

    app.post("/prodducts", (req: Request, res: Response)=>{

        const id = req.body.id as string
        const name = req.body.name as string
        const price = req.body.price as number
        const category = req.body.categoria as CHOICE
    
        const newProduto: TProduct= {
    
            id,
            name,
            price,
            category

        }
        products.push(newProduto)
    
        res.status(201).send("Produto Cadastrado com suceso")
    
        })

        //Criando compra

        app.post("/purchases", (req: Request, res: Response)=>{

            const userId = req.body.userId as string
            const productId = req.body.productId as string
            const quantity = req.body.quantidadde as number
            const category = req.body.categoria as CHOICE
            const totalPrice = req.body.totalPreço as number
        
            const newPurchase: TPurchase= {
                userId,
                productId,
                quantity,
                totalPrice
            }
            purchases.push(newPurchase)
        
            res.status(201).send("Compra realizada com suceso")
        
            })

         