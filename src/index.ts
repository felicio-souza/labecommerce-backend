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


// Obtendo prodtuos por nome
app.get("/products/seacrh", (req: Request, res: Response)=>{
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




//Exercicio 1 

// Pegar produtos por ID

app.get("/products/:id", (req:Request, res: Response)=>{
    const productId: string = req.params.id
    const result = products.find((prod)=> prod.id === productId)

    res.status(200).send(result)
})



//Retornar o array de compras por usuario
app.get("/users/:id/purchases", (req: Request, res: Response)=>{

    const userId: string = req.params.id

    const result = purchases.find((item)=>
    item.userId === userId)

    res.status(200).send(result )

})


//Exercicio 2

//Deletando usuario
app.delete("/users/:id", (req: Request, res: Response)=>{

    const id: string =  req.params.id
    const index: number = users.findIndex((iten)=>iten.id === id)
    let mgs: string
    if(index >= 0){
        users.splice(index, 1)
        mgs = "Usuario deletado com sucesso"
    }else{

        mgs = "Usuario não econtrado"
    }

    res.status(200).send(mgs)

})

//Deletando produto

app.delete("/products/:id", (req: Request, res: Response)=>{

    const id : string = req.params.id
    const index : number = products.findIndex((iten)=>  iten.id === id)

    let mensagem:String
    if(index >= 0){
    products.splice(index, 1)
    mensagem = "Produuto foi deletado com sucesso"
    }else{
        mensagem = "Produto não encontrado"
    }

    res.status(200).send(mensagem)
})

//Exercicio 3
//Edit User by id

app.get("/users/:id", (req: Request, res: Response)=>{

    const id: string = req.params.id
    const newEmail: string | undefined = req.body.newEmail
    const newPassword: string | undefined = req.body.newPassword

    const findUser = users.find((iten)=>iten.id === id)

    if(findUser){
        findUser.email = newEmail || findUser.email
        findUser.password = newPassword || findUser.password

    }

    res.status(200).send("Editado com suceso")
}

)
//Edit Product by id

app.put("/products/:id", (req:Request, res: Response) =>{

    const id: string = req.params.id
    const newName: string = req.body.name
    const newPrice : number = req.body.price
    const newCategory : CHOICE = req.body.category

    const findProduct = products.find((iten)=> iten.id === id)
    if(findProduct){
        findProduct.name = newName || findProduct.name
        findProduct.price = newPrice || findProduct.price
        findProduct.category = newCategory || findProduct.category
    }

    res.status(200).send(findProduct)

})

