import { TProduct, TPurchase, TUser } from "./types";

export const user: TUser[] = [

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

export const product: TProduct[] = [

    { 
        id: "01",
        name: "notebook",
        price: 3500,
        category: "informatica"
    },
 
    { 
        id: "02",
        name: "monitor",
        price: 800,
        category: "informatica"
    },
 ]

 export const purchase: TPurchase[] = [

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