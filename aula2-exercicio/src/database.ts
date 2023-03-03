import { TCliente, TCompra, TProduto } from "./types";

export const cliente: TCliente[] = [

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

export const produto: TProduto[] = [

    { 
        id: "01",
        name: "notebook",
        price: 3500,
        categoria: "informatica"
    },
 
    { 
        id: "02",
        name: "monitor",
        price: 800,
        categoria: "informatica"
    },
 ]

 export const compra: TCompra[] = [

    { 
        userId: "01",
        productId: "01",
        quantidadde: 1,
        categoria: "informatica",
        totalPreço: 3500
    },
 
    { 
        userId: "02",
        productId: "02",
        quantidadde: 2,
        categoria: "informatica",
        totalPreço: 1600
    },
 ]