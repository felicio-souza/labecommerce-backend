


export enum CHOICE {

    ACCESSOIES = "acessorios",
    CLOTHES_AND_SHOES = "roupas e calçados",
    ELETRONICS = "eletronicos"
}


export type TUser = {

  
id: string
email: string
password: string
}


export type TProduct = {

    id: string
    name: string
    price: number
    category: CHOICE
}

export type TPurchase= {

    userId: string
    productId: string
    quantity: number
    totalPrice: number
}

