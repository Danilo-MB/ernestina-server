export interface Category {
    category: string
}

export interface Product {
    id?: number,
    category: string,
    title: string,
    description: string,
    imageUrl: string
}