import { CHOICE, TUser, TPurchase, TProduct} from "./types";

export const users: TUser[] = [

   { 
    id: "01",
    email: "marcos@dev.com.br",
    password: "dev123"
   },

   { 
    id: "02",
    email: "julio@dev.com.br",
    password: "dev123"
   },
]

export const products: TProduct[] = [

    { 
        id: "01",
        name: "notebook",
        price: 3500,
        category: CHOICE.ELETRONICS
    },
 
    { 
        id: "02",
        name: "monitor",
        price: 800,
        category: CHOICE.ELETRONICS
    },
 ]

 export const purchases: TPurchase[] = [

    { 
        userId: "01",
        productId: "01",
        quantity: 1,
        totalPrice: 3500
    },
 
    { 
        userId: "02",
        productId: "02",
        quantity: 2,
        totalPrice: 1600
    },
 ]


//USER função para retonar um usuarios por id
export function creatUser(id:string, email:string, password: string){

    users.push({id, email, password})
    
    console.log("Adicionado com sucesso")

    }

 //USER função para retonar todos os usuarios   
export function getAllUses():TUser[]{

    return users
   }
    

    
//PRODUTO função para criar um produto novo
export function createProduct(id:string, name:string, price:number, category: CHOICE){

        products.push({id, name, price, category})

        console.log("Criado com sucesso")
        
    }

//PRODUTO função para retonar todos os produtos
export function getAllProducts():void{

        console.log(products)
       }


//PRODUTO função para retonar todos os produtos a partit de um ID
export function getProductById(idProcurado:string): TProduct[]{

      return  products.filter((prod)=>{ prod.id === idProcurado})

        
        
    }

 
  
    //PRODUTO função para buscar por produto baseado em um nome a lista de produtos
    export function queryProductsByName(q:string):TProduct[]{
        return products.filter((prod)=>prod.name.toLowerCase().includes(q.toLowerCase()))
    }
       
    
    
    //PRODUTO função para cria uma nova compra na lista de purchases
    export function createPurchase(userId:string, productId:string, quantity:number, totalPrice:number):string{
        purchases.push({userId, productId, quantity, totalPrice})
        return "Compra realizada com sucesso"
    }
    
    
    //PRODUTO função para busca todas as compras feitas baseado no id do usuário
    export function getAllPurchasesFromUserId(userIdToSearch:string):TPurchase[] {
        return purchases.filter((purchase)=> purchase.userId === userIdToSearch)
    }