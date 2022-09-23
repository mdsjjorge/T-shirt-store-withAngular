export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionprice: string;
    stockQuantity: number;
    image: string;
}

export interface IProductCart extends IProduct{
    quantity: number;
}

export const products : IProduct[] = [
    { id: 1, description: "full", price: 439.00, descriptionprice: "PIX", image: "/assets/img/01.jpg", stockQuantity: 8 },
    { id: 2, description: "full", price: 100.50, descriptionprice: "PIX", image: "/assets/img/02.jpg", stockQuantity: 8 },
    { id: 3, description: "full", price: 749.99, descriptionprice: "PIX", image: "/assets/img/03.jpg", stockQuantity: 8 },
    { id: 4, description: "full", price: 599.99, descriptionprice: "PIX", image: "/assets/img/04.jpg", stockQuantity: 8 },
    { id: 5, description: "full", price: 299.99, descriptionprice: "PIX", image: "/assets/img/05.jpg", stockQuantity: 8 },
    { id: 6, description: "full", price: 399.99, descriptionprice: "PIX", image: "/assets/img/06.jpg", stockQuantity: 8 },
    { id: 7, description: "full", price: 499.99, descriptionprice: "PIX", image: "/assets/img/07.jpg", stockQuantity: 8 },
    { id: 8, description: "full", price: 149.99, descriptionprice: "PIX", image: "/assets/img/08.jpg", stockQuantity: 8 },
]
