export type TCliente = {

id: string
email: string
password: string
}

export type TProduto = {

    id: string
    name: string
    price: number
    categoria: string
}

export type TCompra = {

    userId: string
    productId: string
    quantidadde: number
    categoria: string
    totalPreço: number
}